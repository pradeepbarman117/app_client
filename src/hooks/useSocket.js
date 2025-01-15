// src/hooks/useSocket.js
import { useEffect } from 'react';
import { setupSocket, listenToMasterAdded, disconnectSocket } from '../utility/socket';

const useSocket = (onMasterAdded) => {
  useEffect(() => {
    setupSocket();

    // Listen for the event when a new master is added
    listenToMasterAdded(onMasterAdded);

    // Cleanup on unmount
    return () => {
      disconnectSocket();
    };
  }, [onMasterAdded]);
};

export default useSocket;
