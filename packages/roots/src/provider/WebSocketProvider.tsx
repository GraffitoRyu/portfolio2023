"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { io, type Socket } from "socket.io-client";

const WebSocketContext = createContext<Socket | null>(null);

export const useWebSocket = (): Socket | null =>
  useContext<Socket | null>(WebSocketContext);

/**
 * @see https://stackoverflow.com/questions/77589442/integrating-socket-io-with-next-js-14-api-routes
 * @see https://stackoverflow.com/questions/77425103/how-to-implement-socketio-in-nextjs-app-router
 */
export default function WebSocketProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [, setConnected] = useState<boolean>(false);
  const [socket, setSocket] = useState<Socket | null>(null);

  useEffect(() => {
    const connection = io("/api/websocket", {
      transports: ["websocket"],
      autoConnect: true,
    });
    setSocket(connection);

    socket?.on("connect", () => {
      setConnected(true);
      console.log("[WebSocketProvider] socket online");
    });

    socket?.on("disconnect", () => {
      setConnected(false);
      console.log("[WebSocketProvider] socket offline");
    });

    socket?.on("error", error => {
      console.error("[WebSocketProvider]socket error:", error);
    });

    return () => {
      if (socket) connection.disconnect();
    };
  }, [socket]);

  return (
    <WebSocketContext.Provider value={socket}>
      {children}
    </WebSocketContext.Provider>
  );
}
