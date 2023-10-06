import '../css/Login.css'
import '../css/global.css'
import elipse from '../img/elipse-login.svg';
import triangulo1 from '../img/triagulo-menor.svg';
import triangulo2 from '../img/triangulo-maior.svg';
//import perfil from '../img/perfil.svg';

function LoginComponente() {

    return (
      
        <main className='conteudo-login'>
            <div className="login-tela">
                <h1>Bem vindo ao <span> Login</span></h1>
                <p>Preencha os dados de login para acessar</p>
                <form action="" className='formulario'>
                    <label htmlFor="email">Usuário</label>
                    <input type="email" name="email" id="email" placeholder='Insira seu e-mail aqui'/>
                    <label htmlFor="senha">Senha</label>
                    <input type="password" name="senha" id="senha" placeholder='Insira sua senha aqui'/>
                    <button><a href='/homelog'>Entrar</a></button>
                    <br/>
                </form>
                <p className=''>Ainda não possui uma conta?<a href="/cadastro">Sign Up</a></p>
                <br/>
                
                <span className='span-ou'>- OU -</span>
            </div>
        </main>
      
    )
  }
  
  export default LoginComponente