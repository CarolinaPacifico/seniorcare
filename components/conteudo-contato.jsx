import '../css/contato.css';


function contatopage() {

    return (
        <section className='conteudo-contato-bg'>
            <div className="conteudo-contato">
                <h1>Entre em contato conosco</h1>
                <form action="">
                    <label>Nome Completo</label>
                    <input type="text" id="" name="" />
                    <label>Telefone</label>
                    <input type="number" id="" name="" />
                    <label>Email</label>
                    <input type="email" id="" name="" />
                    <label for="story">Comentário</label>
                    <textarea id="story" name="story" rows="5" cols="33"></textarea>
                    <button className="btnperfil" type="button">Salvar</button>
                </form>
            </div>
        </section>
      
    )
  }
  
  export default contatopage