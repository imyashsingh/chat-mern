import React, { useEffect, useState } from "react";
import axios from "axios";
import { HOST } from "../Host";

const ChatPage = () => {
  const [chats, setChats] = useState([]);

  useEffect(() => {
    fetchChats();
  }, []);
  const fetchChats = async () => {
    const { data } = await axios.get(`${HOST}/api/chats`);
    setChats(data);
  };

  return (
    <div>
      {chats.map((chat) => (
        <div key={chat._id}>{chat.chatName}</div>
      ))}
    </div>
  );
};

export default ChatPage;
