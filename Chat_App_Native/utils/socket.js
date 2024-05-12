import { io } from "socket.io-client";

// sinse Android does not support 'localhost' we need to put IP address
const socket = io.connect('http://192.168.0.166:4000');
export default socket;