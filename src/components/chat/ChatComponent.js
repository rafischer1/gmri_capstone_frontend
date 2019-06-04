import React from "react";
import faker from "faker";
import {
  Chat,
  Channel,
  ChannelHeader,
  Thread,
  Window,
  MessageInputFlat
} from "stream-chat-react";
import { MessageList, MessageInput } from "stream-chat-react";
import { StreamChat } from "stream-chat";
import "stream-chat-react/dist/css/index.css";
const Spinner = require("react-spinkit");

const chatClient = new StreamChat(
  process.env.REACT_APP_STREAM_KEY,
  process.env.REACT_APP_STREAM_SECRET
);

/**
 *
 * ChatComponent initializes the Stream Chat and utilizes the stream component
 * styling. Receives channel information token and username as props from AWS server endpoints
 *
 */
const ChatComponent = ({ username, token, water_level }) => {
  if (username === "") {
    return (
      <Spinner className="spinner chatSpinner" name="pulse" color="white" />
    );
  } else {
    chatClient.disconnect();
    chatClient.setUser(
      {
        id: username,
        name: username,
        image: faker.image.avatar()
      },
      token
    );

    const channel = chatClient.channel(
      "messaging",
      process.env.REACT_APP_STREAM_CHAT_ID,
      {
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9hFRSTVcQmuEDRtaMh_VDbDE2y6T9hT-hmhfV_3hPz_kiDhMc",
        name: `SLR Maine Chat - - - `
      }
    );

    console.log("token, client and channel:", token, chatClient, channel);

    return (
      <div className="chat">
        <Chat client={chatClient} theme={"messaging light"}>
          <Channel channel={channel}>
            <Window>
              <ChannelHeader />
              <MessageList />
              <MessageInput input={MessageInputFlat} focus />
            </Window>
            <Thread />
          </Channel>
        </Chat>
      </div>
    );
  }
};

export default ChatComponent;
