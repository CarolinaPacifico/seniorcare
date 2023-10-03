import '../css/prestadores.css'
import '../css/global.css'
import julia from '../img/pessoa1.svg'
import nilson from '../img/nilson.png'
import marcos from '../img/marcos.png'
import suzana from '../img/suzana.png'
import rafael from '../img/rafael.png'
import nicole from '../img/nicole.png'
import claudia from '../img/claudia.png'
import barbara from '../img/barbara.png'
import marta from '../img/marta.png'


function CardPrestadores() {

    return (
        <div>
            <h1>Prestadores de serviço disponíveis</h1>
            <ul>
                <li className="card-tudo">
                    <img src={julia} alt="" />
                    <h2>Julia Baltar</h2>
                    <ul className='card-dentro'>
                        <li>Enfermeira</li>
                        <li>34 anos</li>
                        <li>6 anos de experiência</li>
                    </ul>
                    <p>Salário Minimo: R$ 1.200 e negociável</p>
                </li>
                <li className="card-tudo">
                    <img src={nilson} alt="" />
                    <h2>Nilson Muradas</h2>
                    <ul className='card-dentro'>
                        <li>Cuidador</li>
                        <li>45 anos</li>
                        <li>21 anos de experiência</li>
                    </ul>
                    <p>Salário Minimo: R$ 1.450</p>
                </li>
                <li className="card-tudo">
                    <img src={marcos} alt="" />
                    <h2>Marcos Fontes</h2>
                    <ul className='card-dentro'>
                        <li>Auxiliar de enfermagem </li>
                        <li>35 anos</li>
                        <li>8 anos de experiência</li>
                    </ul>
                    <p>Salário Minimo: R$ 1.450</p>
                </li>
                <li className="card-tudo">
                    <img src={suzana} alt="" />
                    <h2>Suzana Martins</h2>
                    <ul className='card-dentro'>
                        <li>Cuidadora e auxiliar em asilos</li>
                        <li>29 anos</li>
                        <li>7 anos de experiência</li>
                    </ul>
                    <p>Salário Minimo: R$ 1.450</p>
                </li>
                <li className="card-tudo">
                    <img src={rafael} alt="" />
                    <h2>Rafael Silveira</h2>
                    <ul className='card-dentro'>
                        <li>Cuidador de asilos e auxiliar doméstico</li>
                        <li>28 anos</li>
                        <li>4 anos de experiência</li>
                    </ul>
                    <p>Salário Minimo: R$ 900 e negociável</p>
                </li>
                <li className="card-tudo">
                    <img src={nicole} alt="" />
                    <h2>Nicole Gonçalves</h2>
                    <ul className='card-dentro'>
                        <li>Cuidadora em asilos</li>
                        <li>25 anos</li>
                        <li>3 anos de experiência</li>
                    </ul>
                    <p>Salário Minimo: R$ 995</p>
                </li>
                <li className="card-tudo">
                    <img src={claudia} alt="" />
                    <h2>Claúdia dos Santos</h2>
                    <ul className='card-dentro'>
                        <li>Cuidadora e auxiliar em asilos</li>
                        <li>29 anos</li>
                        <li>7 anos de experiência</li>
                    </ul>
                    <p>Salário Minimo: R$ 1.200 e negociável</p>
                </li>
                <li className="card-tudo">
                    <img src={barbara} alt="" />
                    <h2>Barbara Sales</h2>
                    <ul className='card-dentro'>
                        <li>Cuidador de asilos e auxiliar doméstico</li>
                        <li>28 anos</li>
                        <li>4 anos de experiência</li>
                    </ul>
                    <p>Salário Minimo: R$ 900 e negociável</p>
                </li>
                <li className="card-tudo">
                    <img src={marta} alt="" />
                    <h2>Marta Alameda </h2>
                    <ul className='card-dentro'>
                        <li>Cuidadora em asilos</li>
                        <li>25 anos</li>
                        <li>3 anos de experiência</li>
                    </ul>
                    <p>Salário Minimo: R$ 900 e negociável</p>
                </li>
            </ul>


        </div>
    )
  }
  
  export default CardPrestadores