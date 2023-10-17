import CadastroComponente from '../components/cadastro-cliente'

// const Cadastro = () => {

//   const [displayName, setDisplayName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confimPassword, setConfirmPassword] = useState("");
//   const [error, setError] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     setError("");

//     const user = {
//       displayName,
//       email,
//       password,
//     };

//     if (password !== confirmPassword){
//       setError("As senhas precisam ser iguais.");
//       return;
//     }
//     console.log(user);
//   }
// }


function Cadastro() {

    return (
      <>
        <CadastroComponente/>
      </>
    )
  }
  
  export default Cadastro