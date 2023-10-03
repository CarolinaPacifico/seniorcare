import '../css/Home.css'
import '../css/global.css'
import Logo from '../img/LOGO.svg';


function HeaderLogado() {

    return (
      <header>
        <div >
          <img src={Logo} alt="" />
          <nav>
            <ul className='navbar'>
              <li><a href="">Home</a></li>
              <li><a href="">Quem Somos</a></li>
              <li><a href="">Serviços</a></li>
              <li><a href="">Diferencial</a></li>
              <li><a href="">Contato</a></li>
            </ul>
          </nav>
        </div>
        <div className='perfil-btn'>
           <a href="/perfil">Perfil</a>
           </div>
      </header>
    )
  }
  
  export default HeaderLogado