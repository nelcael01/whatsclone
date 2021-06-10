import React from 'react';
import Api from '../../Api';
import './Login.css';
import imagem from '../../assets/logo_whats.png'
function Login({onReceive}) {
    async function  handleFacebookLogin() {
        let result = await Api.fbPopup();
        if (result) {
            // se deu certo ele vai mandar os dados do usuario para o onReceive
            onReceive(result.user);
        }else{
            alert('Erro!')
        }
    }
    return(
        <div className="login">
            <div className="login--header">
                WhatsApp Clone 
            </div>
            
            <div className="login--imagem">
                <img src={imagem} alt="" />
            </div>
            <div className="login--btn">
                <button className='btn' onClick={handleFacebookLogin}>Logar com Facebook</button>
            </div>
            <div className="login--footer">
                Feito por Nelcael Alves Ferreira - 2021
            </div>
        </div>
    )
}

export default Login;