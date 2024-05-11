// ------------------------------<< imports >>------------------------------
// express framework
const express = require('express');
const app = express();
const PORT = 4000;

// to parse incoming request with url-encoded payload
app.use(express.urlencoded({extended: true}))
app.use(express.json());

// http module
const http = require('http').Server(app);
const cors = require('cors');

app.use(cors());

// initialise socket.io
const socketIO = require('socket.io')(http, {
    cors: {
        origin: '<http://localhost:3000>'
    }
})


// ------------------------------<< intial loadings >>------------------------------

// establish socket connection
socketIO.on('connection', (socket) => {
    console.log(`👤: ${socket.id} user just connected!`);

    socket.on('disconnect', () => {
        socket.disconnect();
        console.log(`↪️: ${socket.id} was disconnected!`);
    }); 
});

// api 
app.get('/api', (req, res) => {
    res.json({
        message: 'Hello World!'
    });
});



// listing port
http.listen(PORT, () => {
    console.warn(`Server listing on ${PORT}` )
});