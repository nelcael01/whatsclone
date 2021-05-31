import React from 'react';
import './ChatWindow.css';
import SearchIcon from '@material-ui/icons/Search';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MoreVertIcon from '@material-ui/icons/MoreVert';
function ChatWindow() {
    return(
        <div className='chatWindow'>
            <div className='chatWindow--header'>
                <div className='chatWindow--headerinfo'>
                    <img className='chatWindow--avatar' src='https://www.w3schools.com/howto/img_avatar2.png' alt=''></img>
                    <div className='chatWindow--name'>Nelcael Alves Ferreira</div>
                </div>
                <div className='chatWindow--headerbuttons'>
                    <div className='chatWindow--btn '>
                        <SearchIcon style={{color:'#919191'}}></SearchIcon>
                        <AttachFileIcon></AttachFileIcon>
                        <AttachFileIcon></AttachFileIcon>
                    </div>
                    <div className='chatWindow--btn '>
                        <AttachFileIcon style={{color:'#919191'}}></AttachFileIcon>
                    </div>
                    <div className='chatWindow--btn '>
                        <MoreVertIcon style={{color:'#919191'}}></MoreVertIcon>
                        
                    </div>
                </div>

            </div>
            <div className='chatWindow--body'>

            </div>
            <div className='chatWindow--footer '>

            </div>
        </div>
    )
}

export default ChatWindow;  