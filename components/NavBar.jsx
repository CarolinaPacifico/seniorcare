import { Link } from 'react-router-dom';
import LOGO from '../img/LOGO.svg';
import '../App.css'


function NavBar() {

    return (
      <>

      <nav>
          <div className="links">
          <Link href="/">
                    <img
                    src={LOGO}
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                    />
            </Link>
                <Link href="/">Home</Link>
                <Link href="/">Quem Somos</Link>
                <Link href="/">Serviços</Link>
                <Link href="/">Diferencial</Link>
                <Link href="/">Contato</Link>
        </div>

        <div className="loginbtn">
                <Link href="/perfil">Perfil</Link>
                 
        </div>
        </nav>

      </>
    )
  }
  
  export default NavBar