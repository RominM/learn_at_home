import { Link } from 'react-router-dom'
import Formular from "../../components/formular/Formular";
import "./login.scss";

const Login = () => {
  /*
  const state = {
    remember: false,
  };
*/
  const handleToggle = () => {};

  return (
    <Formular>
      <form action="#" className="login-form">
        <label>Identifiant</label>
        <input type="text" name="identification" />

        <label>Mot de passe</label>
        <input type="password" name="password" />

        <div className="addForm">
          <div className="remember">
            <input type="checkbox" name="remember" />
            <label className="remember">Se souvenir de moi</label>
          </div>
          <Link to="#" className="forgotPW">
            Mot de passe oublié ?
          </Link>
        </div>

        <div className="buttons">
          <button type="submit">
            <Link to={"dashboard/"} className="btn-login">
              Se connecter
            </Link>
          </button>
          <button type="button">
            <Link to={"signUp/"} className="btn-signup">
              Créer un compte
            </Link>
          </button>
        </div>
      </form>
    </Formular>
  );
};

export default Login
