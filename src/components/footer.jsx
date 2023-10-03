import { Link } from 'react-router-dom';
import LOGO from '../img/LOGO.svg';
import whatsapp from '../img/whatsapp.svg'
import instagram from '../img/instagram.svg'
import facebook from '../img/facebook.svg'
import linhaFooter from '../img/linhaFooter.svg'

import '../App.css'

function Footer() {

    return (
        <nav className='footer'>
            
            <div className="links-footer">
                <Link href="/">
                        <img
                        src={LOGO}
                        width="200"
                        height="200"
                        className="d-inline-block align-top"
                        />
                </Link>
                <div className='navs-footer'>

                    <div className='sobre-footer'>
                        <h1>Sobre</h1>
                        <p>Ajuda</p>
                        <p>Contratação</p>
                        <p>Sobre Nós</p>
                    </div>
                    <div className='info-footer'>
                        <h1>Info</h1>
                        <p>Fale Conosco</p>
                        <p>Política de Privacidade</p>
                        <p>Termos e Condições</p>
                    </div>
                    <div className='siga-footer'>
                        <h1>Siga-nos</h1>
                        <div>
                            <Link href="/">
                                    <img
                                    src={whatsapp}
                                    width="45"
                                    height="45"
                                    className="d-inline-block align-top"
                                    />
                            </Link>

                            <Link href="/">
                                    <img
                                    src={instagram}
                                    width="42"
                                    height="42"
                                    className="d-inline-block align-top"
                                    />
                            </Link>

                            <Link href="/">
                                    <img
                                    src={facebook}
                                    width="40"
                                    height="40"
                                    className="d-inline-block align-top"
                                    />
                            </Link>
                        </div>
                    </div>
                    <div className='paginas-footer'>
                        <h1>Páginas</h1>
                            <div className="loginbtn-footer">
                                <a href="/Login">Login</a>
                            </div>
                            <div className="cadastrobtn-footer">
                                <a href="/Login">Cadastre-se</a> 
                            </div>
                        <p>Contato</p>
                    </div>
                </div>
            </div>
        </nav>
    )
  }
  
  export default Footer
