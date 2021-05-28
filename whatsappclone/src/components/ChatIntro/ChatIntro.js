import React from 'react';
import './ChatIntro.css';
import imagem from '../../assets/imagem_conexao.jpg'
function chatIntro() {
    return(
        <div className="chatIntro">
            <img src={imagem} alt=""></img>
            <h1>Mantenha seu celular conectado</h1>
            <h2>O WhatsApp conecta ao seu telefone para sincronizar suas mensagens. Para reduzir o uso de dados, conecte seu telefone a uma rede Wi-fi</h2>
        </div>
    )
}

export default chatIntro;


