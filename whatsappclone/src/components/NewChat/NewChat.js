import React,{useState,useEffect} from 'react'
import './NewChat.css'
import Api from '../../Api'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

function NewChat({setShow,show,user,chatlist}) {

    const [list, setList] = useState([
        
    ]);

    useEffect(()=>{
        async function getList() {
            if (user!=null) {
                let result = await Api.getContactList(user.id)
                setList(result);
            }
        }
        // tenho que criar a função e depois chama-lá
        getList();
    },[user])
    
    function handleClose() {
        setShow(false);
    }

    async function addNewChat(user2) {
        await Api.addNewChat(user,user2);
        handleClose();
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
                  <div className="newChat--item" onClick={()=>addNewChat(item)} key={key}>
                      <img src={item.avatar} alt="" className="newChat--itemavatar"/>
                      <div className="nerChat--itemname">{item.name}</div>
                  </div>  
                ))}
            </div>
        </div>

    )
}

export default NewChat;