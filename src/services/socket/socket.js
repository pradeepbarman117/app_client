<<<<<<< HEAD
import io from 'socket.io-client';

const socketConfig = {
    io:io('http://localhost:8080'),
}

export default socketConfig
=======

// socket.js
import Cookies from 'js-cookie';
import io from 'socket.io-client';

class SocketManager {
  constructor() {
    this.io = null;
    this.listeners = new Map();
  }

  connect(url = 'http://localhost:8080') {
    // Prevent multiple connections
    if (this.io) {
      return this.io;
    }

    try {
      // Get token from localStorage or however you manage authentication
      const token = Cookies.get('token');

      this.io = io(url, {
        auth: { token },
        reconnection: true,
        reconnectionAttempts: 5,
        reconnectionDelay: 1000
      });

      // Optional: Add connection event listeners
      this.io.on('connect', () => {
        console.log('Socket connected');
      });

      this.io.on('disconnect', (reason) => {
        console.log('Socket disconnected:', reason);
      });

      return this.io;
    } catch (error) {
      console.error('Socket connection error:', error);
      return null;
    }
  }

  // Custom method to handle event listeners
  on(event, handler) {
    if (!this.io) {
      console.warn('Socket not initialized');
      return () => {};
    }

    // Store the handler to enable proper removal
    this.listeners.set(handler, (...args) => handler(...args));
    
    this.io.on(event, this.listeners.get(handler));

    // Return an unsubscribe function
    return () => this.off(event, handler);
  }

  // Method to remove specific event listeners
  off(event, handler) {
    if (!this.io) return;

    const storedHandler = this.listeners.get(handler);
    if (storedHandler) {
      this.io.off(event, storedHandler);
      this.listeners.delete(handler);
    }
  }

  // Method to disconnect
  disconnect() {
    if (this.io) {
      this.io.disconnect();
      this.io = null;
      this.listeners.clear();
    }
  }
}

const socketManager = new SocketManager();
export default socketManager;
>>>>>>> fe76fd557da426803569ab39d8a9e9e2d64d0c80
