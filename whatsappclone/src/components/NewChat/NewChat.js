import React,{useState} from 'react'
import './NewChat.css'

import ArrowBackIcon from '@material-ui/icons/ArrowBack';

function NewChat({setShow,show,user,chatlist}) {

    const [list, setList] = useState([
        {id:123, avatar:'https://www.w3schools.com/howto/img_avatar2.png',name:'Geraldo contato'},
        {id:123, avatar:'https://www.w3schools.com/howto/img_avatar2.png',name:'Magali Coutinho contato'},
        {id:123, avatar:'https://www.w3schools.com/howto/img_avatar2.png',name:'Ludmila contato'},
        {id:123, avatar:'https://www.w3schools.com/howto/img_avatar2.png',name:'Lais Aparecida contato'},
    ]);

    function handleClose() {
        setShow(false);
    }

    return(
        <div className="newChat" style={{left: show? 0 : -415}}>
            
            <div className="newChat--head">
                <div onClick={handleClose} className="newChat--backbutton">
                    <ArrowBackIcon  style={{color:'white'}} />
                </div>
                <div className="newChat--headtitle">
                   Nova Conversa
                </div>
            </div>
            <div className="newChat--list">
                {list.map((item,key)=>(
                  <div className="newChat--item"  key={key}>
                      <img src={item.avatar} alt="" className="newChat--itemavatar"/>
                      <div className="nerChat--itemname">{item.name}</div>
                  </div>  
                ))}
            </div>
        </div>

    )
}

export default NewChat;