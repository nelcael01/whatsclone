import React from 'react'
import './MessageItem.css'
function MessageItem({data,user}) {
    return(
        <div
            className='messageLine'
            style={{
                // verificação se a mensagem é minha ou do outro usuario
                // comparo o user que é o usuario logado com o author que é quem fez a mensagem se for igual ele coloca o flex-end, ou seja, no fim do elemento pai
                // se for negativo ele coloca no inicio do elemento pai
                justifyContent: user.id == data.author?'flex-end':'flex-start'}}
        >
            <div 
                className="messageItem"
                style={{
                    backgroundColor: user.id== data.author? '#dcf8c6' : 'white'
                }}
            >
                    <div className="messageText">{data.body}</div>
                    <div className="messageDate">19:00</div>
            </div>
        </div>
    )
}
export default MessageItem;
