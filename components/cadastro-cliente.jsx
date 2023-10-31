import '../css/Cadastro.css'
import '../css/global.css'

import React, { useState } from 'react';
import { db, auth } from './firebase/config'
import 'firebase/auth'
import { async } from '@firebase/util';
import { createUserWithEmailAndPassword } from 'firebase/auth';


function CadastroComponente() {

    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();

    const [msg, setmsg] = useState();

    async function cadastrar(){
        await createUserWithEmailAndPassword(auth, email, senha)
            .then(resposta => {
                setmsg('sucesso')
            })
            .then(() =>{
                setEmail('');
                setSenha('');
            })
            .catch(erro => {
                setmsg('erro')
                console.log(erro);
            })
    }
    
    return (
      
        <main className='conteudo-cadastro'>
            <div className="cadastro-tela">
                <h1>Bem vindo ao <span>Sign Up</span></h1>
                <p>Preencha os dados para criar uma conta</p>
                <form action="" className='formulario'>
                    <label htmlFor="email">Usuário</label>
                    <input 
                    onChangeCapture={(e) => setEmail(e.target.value)}
                    value={email}
                    type="email" 
                    name="email" 
                    id="email" 
                    placeholder='Insira seu e-mail aqui'
                    />
                    <label htmlFor="senha">Senha</label>
                    <input
                    onChange={(e) => setSenha(e.target.value)} 
                    value={senha}
                    type="password" 
                    name="senha" 
                    id="senha" 
                    placeholder='Insira sua senha aqui'
                    />
                    
                    {msg == 'sucesso' && <span>Cadastro realizado com sucesso!</span>}
                    {msg == 'erro' && <span>Não foi possível realizar o cadastro.</span>}


                    <button onClick={cadastrar} className="btn-cadastro"><a href="/login">Entrar</a></button>
                    
                    <br/>

                </form>
                <p className=''>Já possui uma conta?<a href="/login">Login</a></p>
                <br/>
                <span className='span-ou'>- OU -</span>
            </div>
        </main>
      
    )
  }
  
  export default CadastroComponente