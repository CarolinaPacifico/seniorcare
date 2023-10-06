import '../css/Home.css'
import '../css/global.css'
import Logo from '../img/LOGO.svg';


function HeaderLogado() {

    return (
      <header>
        <div >
          <img src={Logo} alt="/homelog" />
          <nav>
            <ul className='navbar'>
              <li><a href="/homelog">Home</a></li>
              {/* <li><a href="/homelog">Quem Somos</a></li>
              <li><a href="/homelog">Serviços</a></li>
              <li><a href="/homelog">Profissionais</a></li> */}
              <li><a href="/contato">Contato</a></li>
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