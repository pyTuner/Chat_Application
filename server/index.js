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


// generate random ID 
const generateID = () => Math.random().toString(36).substring(2,10);

let chatRooms = [
    // -----------Here is the data structure of each chatroom----------
    // {
    //     id: generateID(),
    //     name: "Collage Group",
    //     messages: [
    //         {
    //             id:'1',
    //             text:'Hey, whats up',
    //             time:'01:12',
    //             user:'Omkar'
    //         },
    //         {
    //             id:2,
    //             text:'Just breathing in, out',
    //             time:'01:12',
    //             user:'Aditya'
    //         },
    //         {
    //             id:3,
    //             text:'LOL 😂',
    //             time:'01:14',
    //             user:'Makaranda'
    //         }
    //     ],
    // },
]


// ------------------------------<< intial loadings >>------------------------------

// establish socket connection
socketIO.on('connection', (socket) => {
    console.log(`👤: ${socket.id} user just connected!`);

    socket.on('createRoom', (roomName) => {
        socket.join(roomName);
        // add the new group name to the chat room's array
        chatRooms.unshift({
            id:generateID(),
            roomName,
            message:[]
        });
        // returns the updated chat room via anather event
        socket.emit('roomsList', chatRooms);
    });

    socket.on('disconnect', () => {
        socket.disconnect();
        console.log(`👋: ${socket.id} was disconnected!`);
    }); 
});

// api 
app.get('/api', (req, res) => {
    res.json(chatRooms);
});



// listing port
http.listen(PORT, () => {
    console.warn(`Server listing on ${PORT}` )
});