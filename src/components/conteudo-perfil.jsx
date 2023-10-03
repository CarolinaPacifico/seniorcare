import '../css/perfil.css';
import fotoperfil from '../img/fotoperfil.png'

function perfil() {

    return (
      
        <div className="perfil">
        <h1>Perfil</h1>
        <p>Aqui você pode modificar informações do seu perfil.</p>
        <img src={fotoperfil} alt="" width="120" height="120" />
        <label>Nome Completo<input type="text" id="" name="" /></label>
        <label>Email<input type="email" id="" name="" /></label>
        <label>Telefone<input type="number" id="" name="" /></label>
        <label for="story">Experiência</label>
        <textarea id="story" name="story" rows="5" cols="33"></textarea>
        <button className="btnperfil" type="button">Salvar</button>
        </div>
      
    )
  }
  
  export default perfil