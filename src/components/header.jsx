import '../css/Home.css'
import '../css/global.css'
import Logo from '../img/LOGO.svg';


function Header() {

    return (
      <header>
        <div >
          <a href="/"><img src={Logo} alt="" /></a>
          <nav>
            <ul className='navbar'>
              <li><a href="">Quem Somos</a></li>
              <li><a href="">Serviços</a></li>
              <li><a href="">Profissionais</a></li>
              <li><a href="">Contato</a></li>
            </ul>
          </nav>
        </div>
        <div className='login'>
           <a href="/login">Login</a>
           <div className='cadastro'>
            <a href="/cadastro">Cadastre-se</a>
           </div>
        </div>
      </header>
    )
  }
  
  export default Header