import React from "react";
import { Link } from "react-router-dom";
import Formular from "../../components/formular/Formular";
import "./signup.scss";

const SignUp = () => {
  return (
    <Formular>
      <form action="#" className="signup-form">
        <label>Identifiant</label>
        <input type="text" name="identification" />

        <label>Mot de passe</label>
        <input type="password" name="password" />

        <label>Confirmer mot de passe</label>
        <input type="password" name="identification" />

        <label>Email</label>
        <input type="email" name="password" />

        <div className="addForm-signup">
          <label className="checkbox-signup">
            <input type="checkbox" name="helper" />
            Je m'inscrit en temps que <span>tuteur</span>
          </label>

          <label className="checkbox-signup">
            <input type="checkbox" name="tuteur" />
            j'accpete les <Link to="#">condition générales</Link>
          </label>
        </div>
        <button type="button">
          <Link to="/" className="btn-signup">
            Créer un compte
          </Link>
        </button>
      </form>
    </Formular>
  );
};

export default SignUp;
