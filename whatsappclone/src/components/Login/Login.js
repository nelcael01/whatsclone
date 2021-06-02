import React from 'react'

function Login() {
    async function  handleFacebookLogin() {
        let result = await Api.fbPopup();
        if (result) {
            
        }else{
            alert('Erro! confira os dados e tente novamente.')
        }
    }
    return(
        <div onClick={handleFacebookLogin} className="login">
            <button>Logar com Facebook</button>
        </div>
    )
}

export default Login;