import React from 'react';
import { StreamChat } from 'stream-chat';
import { Chat } from 'stream-chat-react';
import Cookies from 'universal-cookie';

import { ChanelListContainer, ChannelContainer } from './components';

import './App.css';

const apiKey = '8ssh3x2ds4x8';

const client = StreamChat.getInstance(apiKey);

function App() {
  return (
    <div className='app__wrapper'>
      <Chat client={client} theme="team Light">
        <ChanelListContainer />
        <ChannelContainer />
      </Chat>
      
    </div>
  )
}

export default App