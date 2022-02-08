import React from "react";
import { Link } from "react-router-dom";
import Formular from "../../components/formular/Formular";
import "./signup.scss";

const SignUp = () => {
  return (
    <Formular>
      <form action="#" className="signup-form">
        <label>
          Identifiant
          <input type="text" name="identification" />
        </label>
        <label>
          Mot de passe
          <input type="password" name="password" />
        </label>
        <label>
          Confirmer mot de passe
          <input type="password" name="identification" />
        </label>
        <label>
          Email
          <input type="email" name="password" />
        </label>

        <div className="addForm-signup">
          <label className="checkbox-signup">
            <input type="checkbox" name="helper" />
            Je m'inscrit en temps que <span>tuteur</span>
          </label>

          <label className="checkbox-signup">
            <input type="checkbox" name="tuteur" />
            j'accpete les <a href="#">condition générales</a>
          </label>
        </div>
        <button type="button" className="button">
          <a href="#" className="btn-signup">
            Créer un compte
          </a>
        </button>
      </form>
    </Formular>
  );
};

export default SignUp;
