//import '../Home.css'
import Footer from '../components/footer'
import Header from '../components/header'
import IntroBg from '../components/intro-home'
import Profissionais from '../components/profissionais'
import Quemsomos from '../components/quemsomos'
import Servicos from '../components/servicos'

function Home() {

    return (
      <>
        <Header/>
        <IntroBg/>
        <Quemsomos/>
        <Servicos/>
        <Profissionais/>
        <Footer/>
      </>
    )
  }
  
  export default Home