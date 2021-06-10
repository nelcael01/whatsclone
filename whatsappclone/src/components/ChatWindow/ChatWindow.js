import React,{useState, useEffect, useRef} from 'react';
import './ChatWindow.css';
import MessageItem from '../MessageItem/MessageItem';
// icones que serão utilizados
import SearchIcon from '@material-ui/icons/Search';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import CloseIcon from '@material-ui/icons/Close';
import SendIcon from '@material-ui/icons/Send';
import MicIcon from '@material-ui/icons/Mic';
// importação do campo de emoji
import EmojiPicker from 'emoji-picker-react'

function ChatWindow({user}) {
    let recognition = null;
    let SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognition !== undefined) {
        recognition = new SpeechRecognition();
    }
    const [emojiOpen, setEmojiOpen] = useState(false)
    const [text,setText] = useState('');
    const [listening,setListening] = useState(false);
    const [list,setList] = useState([
    {author: 123,body:'Primeira mensagem '},
    {author: 123,body:'Segunda mensagem '},
    {author: 1234,body:'Terceira mensagem '},
    {author: 1234,body:'Terceira mensagem '},
    {author: 1234,body:'Terceira mensagem '},
    {author: 1234,body:'Terceira mensagem '},
    {author: 1234,body:'Terceira mensagem '},
    {author: 1234,body:'Terceira mensagem '},
    {author: 1234,body:'Terceira mensagem '},
    {author: 1234,body:'Terceira mensagem '},
    {author: 1234,body:'Terceira mensagem '},
    {author: 1234,body:'Terceira mensagem '},
    {author: 1234,body:'Terceira mensagem '},
    {author: 1234,body:'Terceira mensagem '},
    {author: 1234,body:'Terceira mensagem '},
    {author: 1234,body:'Terceira mensagem '},
    {author: 1234,body:'Terceira mensagem '},
    {author: 1234,body:'Terceira mensagem '},
    {author: 1234,body:'Terceira mensagem '},
    {author: 1234,body:'ultima mensagem'},
    ])


    // uso do useRef que pega os atributos da função que quero e coloca nessa variavel
    const body = useRef();

    
    useEffect(()=>{
        // verificação para ver ser tem barra de rolagem no elemento 
        if (body.current.scrollHeight > body.current.offsetHeight) {
            body.current.scrollTop = body.current.scrollHeight - body.current.offsetHeight;
        }
    },[list])

    // função que vai definir oq acontece se clicar ouver clique nesse emoji
    // esse handleEmojiClick permite acessar o emoji em si, aqui eu uso o setText para contatenar ele ao texto digitado
    function hadleEmojiClick(e,emojiObject) {
        setText(text+emojiObject.emoji)
    }

    function handleOpenEmoji() {
        setEmojiOpen(true);
    }
    function handleCloseEmoji() {
        setEmojiOpen(false)
    }

    function handleMicClick() {
        
        if (recognition!==null) {
            recognition.onstart = () =>{
                setListening(true)
            }
            recognition.onend = () =>{
                setListening(false);
            }
            recognition.onresult = (e) =>{
                setText(e.results[0][0].transcript)
            }
            recognition.start();
        }
    }
    function handleSendClick() {
        
    }
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
                    </div>
                    <div className='chatWindow--btn '>
                        <AttachFileIcon style={{color:'#919191'}}></AttachFileIcon>
                    </div>
                    <div className='chatWindow--btn '>
                        <MoreVertIcon style={{color:'#919191'}}></MoreVertIcon>
                    </div>
                </div>

            </div>
            <div ref={body} className='chatWindow--body'>
                {list.map((item, key)=>(
                    <MessageItem
                        key={key}
                        data={item}
                        user={user}
                    />
                ))}
            </div>
            
            {/* faz a verificação para ver se a useState emojijOpen está ativa ou não, se estiver a altura dos emojis será de 250px, se não será de 0 */}
            <div className="chatWindow--emojiarea" style={{height: emojiOpen? '250px':'0px'}}>
                <EmojiPicker
                    disableSearchBar
                    disableSkinTonePicker
                    onEmojiClick={hadleEmojiClick}
                    // propriedade do proprio componente que seta o estilo, por aqui que se tira o tamanho padrão do componente
                    pickerStyle={{ width: 'auto', backgroundColor: 'none'}}
                ></EmojiPicker>
            </div>

            <div className='chatWindow--footer '>
                <div className="chatWindow--pre">
                    
                    <div 
                     className='chatWindow--btn '
                     onClick={handleCloseEmoji}
                     style={{width: emojiOpen?40:0}}
                     >
                        <CloseIcon style={{color:'#919191'}}></CloseIcon>
                    </div>

                    <div
                     className='chatWindow--btn '
                     onClick={handleOpenEmoji}
                    >
                        <InsertEmoticonIcon style={{color: emojiOpen?'#009688':'#919191'}}></InsertEmoticonIcon>
                    </div>
                </div>
                <div className="chatWindow--inputarea">
                    <input 
                        type="text"
                        className="chatWindow--input"
                        placeholder='Digite uma mensagem'
                        value={text}
                        // permite o valor de text ser alterado comforme é alterado pelo inpunt
                        onChange={e=>setText(e.target.value)}
                    />
                </div>
                <div className="chatWindow--pos">

                    {text == '' &&
                        <div onClick={handleMicClick} className='chatWindow--btn '>
                            <MicIcon style={{color: listening?'#126ece':'#919191'}}></MicIcon>
                        </div>
                    }
                    {text != '' &&
                        <div onClink={handleSendClick} className='chatWindow--btn '>
                            <SendIcon style={{color:'#919191'}}></SendIcon>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default ChatWindow;  