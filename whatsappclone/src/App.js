import React, {useState,useEffect} from 'react';
import './App.css';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';
import ChatListItem from './components/ChatListItem/ChatListItem';

function App() {

  const [chatlist, setChatList] = useState([{},{},{},{}])

  return(
    <div className='app-window'>
      <div className="sidebar">
          <header>
            <img className='header--avatar' src='https://www.w3schools.com/howto/img_avatar2.png' alt=""></img>
            <div className="header-buttons">
                <div className="header-btn">
                  <DonutLargeIcon style={{color:'#919191'}}></DonutLargeIcon>
                </div>
                <div className="header-btn">
                  <ChatIcon style={{color:'#919191'}}></ChatIcon>
                </div>
                <div className="header-btn">
                  <MoreVertIcon style={{color:'#919191'}}></MoreVertIcon>
                </div>
            </div>
          </header>

          <div className='search'>
            <div className="search--input">
              <SearchIcon font-size='small' style={{color:'#919191'}}></SearchIcon>
              <input type='search' placeholder='Procurar ou começar uma nova conversa'></input>
            </div>    
          </div>

          <div className='chatlist'>
            {chatlist.map((item,key)=>(
              <ChatListItem key={key}></ChatListItem>
            ))}
          </div>

      </div>
      <div className="contentarea">
            segunda divisão


            
      </div>
    </div>      
  )
}

export default App;