import React,{useState,useEffect} from 'react';
import './ChatListItem.css'
function ChatListItem({onClick,active,data}) {

    const [time, setTime] = useState('');
    useEffect(()=>{
        if (data.lastMessageDate > 0) {
            let d = new Date(data.lastMessageDate.seconds*1000);
            let hours = d.getHours();
            let minutes = d.getMinutes();
            // verificação para colocar o 0 se for menor que 10
            hours = hours<10?'0'+hours : hours;
            minutes = minutes<10?'0'+ minutes :minutes;
            setTime(`${hours}:${minutes}`);
        }
    },[data])

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
                    <div className="chatListItem-date">{time}</div>
                </div>
                <div className="chatListItem--line">
                    <div className="chatListItem--lastMsg">
                        <p>{data.lastMessage}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ChatListItem;

