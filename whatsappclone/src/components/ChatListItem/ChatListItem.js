import React from 'react';
import './ChatListItem.css'
function ChatListItem({onClick}) {
    return(
        <div
        onClick={onClick}
        className="chatListItem"
        >
            <img className='chatListItem--avatar' src='https://www.w3schools.com/howto/img_avatar2.png'></img>
            <div className="chatListItem--lines">
                <div className="chatListItem--line">
                    <div className='chatListItem--name'>Nelcael Alves Ferreira</div>
                    <div className="chatListItem-date">19:00</div>
                </div>
                <div className="chatListItem--line">
                    <div className="chatListItem--lastMsg">
                        <p>Mensagem de teste para ver se fica os 3 pontinhos fazendo pelo css</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ChatListItem;

