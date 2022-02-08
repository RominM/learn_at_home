import { Link } from 'react-router-dom'
import LogoHead from '../../components/logoHead/LogoHead'
import './login.scss'

const Login = () => {
  return (
    <div className="bloc-page">
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
              <Link to={'signUp/'} className="btn-signup">
                Créer un compte
              </Link>
              <Link to={'dashboard/'} className="btn-login">
                Se connecter
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
