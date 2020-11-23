import React from "react";
import "./imessage.css";
import Sidebar from "./Sidebar";
import Chat from "./Chat";

const imessage = () => {
  return (
    <div className="imessage">
      {/* Sidebar */}
      <Sidebar />
      {/* Chat */}
      <Chat />
    </div>
  );
};

export default imessage;
