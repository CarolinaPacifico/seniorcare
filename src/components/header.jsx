import '../css/Home.css'
import '../css/global.css'
import Logo from '../img/LOGO.svg';


function Header() {

    return (
      <header>
        <div >
          <img src={Logo} alt="" />
          <nav>
            <ul className='navbar'>
              <li><a href="/">Home</a></li>
              <li><a href="">Serviços</a></li>
              <li><a href="">Quem Somos</a></li>
              <li><a href="">Diferencial</a></li>
              <li><a href="">Contato</a></li>
            </ul>
          </nav>
        </div>
        <div className='login'>
           <a href="/Login">Login</a>
           <div className='cadastro'>
            <a href="/Cadastro">Cadastre-se</a>
           </div>
        </div>
      </header>
    )
  }
  
  export default Header