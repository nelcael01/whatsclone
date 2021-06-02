import React, {useState,useEffect} from 'react';
import './App.css';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';
import ChatListItem from './components/ChatListItem/ChatListItem';
import ChatIntro from './components/ChatIntro/ChatIntro';
import ChatWindow from './components/ChatWindow/ChatWindow';
function App() {

  const [chatlist, setChatList] = useState([
    {chatId:1,title:'Nelcael ', image:'https://www.w3schools.com/howto/img_avatar2.png',hours:'19:00'},
    {chatId:2,title:'Ludmila ', image:'https://www.w3schools.com/howto/img_avatar2.png',hours:'10:00'},
    {chatId:3,title:'Magali ', image:'https://www.w3schools.com/howto/img_avatar2.png',hours:'15:00'},
    {chatId:4,title:'Geraldo', image:'https://www.w3schools.com/howto/img_avatar2.png',hours:'13:00'},
  ])

  const [activeChat,setActiveChat] = useState({})
  const [user,setUser] = useState({
    id:1234,
    avatar: 'https://www.w3schools.com/howto/img_avatar2.png',
    name:'Nelcael'
  });

  return(
    <div className='app-window'>
      <div className="sidebar">
          <header>
            <img className='header--avatar' src={user.avatar} alt=""></img>
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
            {/* item são os elementos do array e key é a chave que está sendo percorrida como se fosse o indice */}
            {chatlist.map((item,key)=>(
              <ChatListItem
                key={key}
                // Nessa codificação abaixo atráves do onclick com o setActiveChat é adicionado no activeChat qual é o chat que está ativo e seus elementos como chatid
                active={activeChat.chatId === chatlist[key].chatId}
                // item é os elementos do array que está sendo percorrido
                data={item}
                onClick={()=>setActiveChat(chatlist[key])}>
              </ChatListItem>
            ))}
          </div>
      </div>  
      <div className="contentarea">
            {activeChat.chatId != undefined &&
              <ChatWindow
                user={user}
              ></ChatWindow>
            }
            {activeChat.chatId === undefined &&
              <ChatIntro></ChatIntro>
            }
      </div>
    </div>      
  )
}

export default App;