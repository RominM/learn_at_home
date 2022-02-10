import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Formular from "../../components/formular/Formular";
import "./signup.scss";

const SignUp = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = (e) => {
    navigate("/");
  };

  return (
    <Formular>
      <form
        action="#"
        className="signup-form"
        onSubmit={handleSubmit(onSubmit)}
      >
        <label>
          Identifiant
          <span className="inform"> *</span>
          <input
            type="text"
            name="identification"
            required="require"
            {...register("Identifiant")}
          />
        </label>

        <label>
          Email
          <span className="inform"> *</span>
          <input
            type="email"
            name="email"
            required="require"
            {...register("email")}
          />
        </label>

        <label>
          Mot de passe
          <span className="inform"> *</span>
          <input
            type="password"
            name="password"
            required="require"
            {...register("mot de passe")}
          />
        </label>

        <label>
          Confirmer mot de passe
          <span className="inform"> *</span>
          <input
            type="password"
            name="identification"
            required="require"
            {...register("mot de passe")}
          />
        </label>

        <div className="addForm-signup">
          <label className="checkbox-signup">
            <input type="checkbox" name="helper" />
            Je m'inscrit en temps que <span>tuteur</span>
          </label>

          <label className="checkbox-signup">
            <input
              type="checkbox"
              name="tuteur"
              required="require"
              {...register("cgu")}
            />
            j'accpete les <Link to="#">condition générales</Link>
            <span className="inform"> *</span>
          </label>
        </div>
        <input type="submit" value="Créer un compte"></input>
      </form>
      <p className="inform">* Champs obligatoire</p>
    </Formular>
  );
};

export default SignUp;
