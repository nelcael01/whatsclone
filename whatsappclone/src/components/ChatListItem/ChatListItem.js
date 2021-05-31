import React from 'react';
import './ChatListItem.css'
function ChatListItem({onClick,active,data}) {
    return(
        <div
        onClick={onClick}
        // essa sentença além de colocar a classe chatListItem ela faz uma verificação da props active para ver se adiciona uma classe com o nome Classactive
        className={`chatListItem ${active?'Classactive':''}`}
        >
            <img className='chatListItem--avatar' src={data.image}></img>
            <div className="chatListItem--lines">
                <div className="chatListItem--line">
                    <div className='chatListItem--name'>{data.title}</div>
                    <div className="chatListItem-date">{data.hours}</div>
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

