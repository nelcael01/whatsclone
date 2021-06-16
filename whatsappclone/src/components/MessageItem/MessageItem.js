import React,{useEffect,useState} from 'react'
import './MessageItem.css'
function MessageItem({data,user}) {
    
    const [time, setTime] = useState('');
    useEffect(()=>{
        if (data.data > 0) {
            console.log('Nelcael alves ferreira')
            let d = new Date(data.data.seconds*1000);
            let hours = d.getHours();
            let minutes = d.getMinutes();
            hours = hours<10?'0'+hours : hours;
            minutes = minutes<10?'0'+ minutes :minutes;
            setTime(`${hours}:${minutes}`);
        }
    },[data])
    
    return(
        <div
            className='messageLine'
            style={{
                // verificação se a mensagem é minha ou do outro usuario
                // comparo o user que é o usuario logado com o author que é quem fez a mensagem se for igual ele coloca o flex-end, ou seja, no fim do elemento pai
                // se for negativo ele coloca no inicio do elemento pai
                justifyContent: user.id == data.author? 'flex-end':'flex-start'}}
        >
            <div 
                className="messageItem"
                style={{
                    backgroundColor: user.id== data.author? '#dcf8c6' : 'white'
                }}
            >
                    <div className="messageText">{data.body}</div>
                    <div className="messageDate">{time}</div>
            </div>
        </div>
    )
}
export default MessageItem;
    