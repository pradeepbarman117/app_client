import io from 'socket.io-client';

const socketConfig = {
    io:io('http://localhost:8080'),
}

export default socketConfig