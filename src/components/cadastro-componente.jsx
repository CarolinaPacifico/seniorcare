import '../css/Cadastro.css'
import '../css/global.css'

function CadastroComponente() {

    return (
      
        <main className='conteudo-cadastro'>
            <div className="cadastro-tela">
                <h1>Bem vindo ao <span>Sign Up</span></h1>
                <p>Preencha os dados para criar uma conta</p>
                <form action="" className='formulario'>
                    <label htmlFor="email">Usuário</label>
                    <input type="email" name="email" id="email" placeholder='Insira seu e-mail aqui'/>
                    <label htmlFor="senha">Senha</label>
                    <input type="password" name="senha" id="senha" placeholder='Insira sua senha aqui'/>
                    <button>Entrar</button>
                </form>
                <p className=''>Já possui uma conta?<a href="">Login</a></p>
                <span className='span-ou'>- OU -</span>
            </div>
        </main>
      
    )
  }
  
  export default CadastroComponente