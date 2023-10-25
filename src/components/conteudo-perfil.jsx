import '../css/perfil.css';
import fotoperfil from '../img/fotoperfil.png'

function perfil() {

    return (
      
        <div className="perfil">
            <div>
                <h1>Perfil</h1>
                <p>Aqui você pode modificar informações do seu perfil.</p>
            </div>
            <div>
                <img src={fotoperfil} alt="" width="120" height="120" />
            </div>
            <div className="perfil-perfis">
                <div>
                    <label>Nome Completo</label>
                    <input type="text" id="" name="" />
                </div>
                <div>
                    <label>Email</label>
                    <input type="email" id="" name="" />
                </div>
                <div>
                    <label>Telefone</label>
                    <input type="number" id="" name="" />
                </div>
                <div>
                    <label for="story">Experiência</label>
                    <textarea id="story" name="story" rows="5" cols="33"></textarea>
                </div>
                <button className="btnperfil" type="button">Salvar</button>
            </div>
        </div>
      
    )
  }
  
  export default perfil