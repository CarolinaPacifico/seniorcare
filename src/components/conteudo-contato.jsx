import '../css/contato.css';


function contatopage() {

    return (
      
        <div className="conteudo-contato">
        <h1>Entre em contato conosco</h1>
        <label>Nome Completo<input type="text" id="" name="" /></label>
        <label>Email<input type="email" id="" name="" /></label>
        <label>Telefone<input type="number" id="" name="" /></label>
        <label for="story">Comentário</label>
        <textarea id="story" name="story" rows="5" cols="33"></textarea>
        <button className="btnperfil" type="button">Salvar</button>
        </div>
      
    )
  }
  
  export default contatopage