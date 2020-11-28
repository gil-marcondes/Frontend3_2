import React, { useState, useEffect } from 'react';

function Logar() {

	  const [logado, setLogado] = useState(false);
	  let botao;
	  if (logado) {
      botao=<button onClick={()=> setLogado(false)}>
      Logout
    </button>
    }else{
     botao=<button onClick={()=> setLogado(true)}>
      Login
		  </button>};
	  return(
		  <div>
		  <Mensagem logado={logado} />
			  {botao}
	  </div>);
  }
  function Mensagem(props) {
  const logado = props.logado;
  if (logado) {
     return (<div>
  <table>
  <tr>
  <h1>Seja Bem-vindo!</h1>
  < img src="logado.jpg" />
  </tr>
  </table>
  </div>);
  }
  return (<div>
  <table>
  <tr><h1>Por favor faça o Login</h1>
  < img src="logout.jpg"/>
  </tr>
  </table>
  </div>);
}


  export default Logar;