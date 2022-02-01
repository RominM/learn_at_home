import { Link } from 'react-router-dom'
import LogoHead from '../../components/logoHead/LogoHead'
import './login.scss'

function Login() {
  return (
    <div className="login">
      <LogoHead />
      <div className="bground">
        <form>
          <div className="divForm">
            <label>Identifiant</label>
            <input></input>
            <label>Mot de passe</label>
            <input></input>
          </div>
          <div className="addForm">
            <div className="remeber">
              <label>Se souvenir de moi</label>
              <input type="checkbox"></input>
            </div>
            <div className="forgotPW">
              <Link to="#">Mot de passe oublié ?</Link>
            </div>
          </div>
          <div className="buttons">
            <Link to={'dashboard/'}>Se connecter</Link>
            <Link to={'signUp/'}>Créer un compte</Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
