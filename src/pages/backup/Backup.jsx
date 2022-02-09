import React from "react";
import Formular from "../../components/formular/Formular";
import "./backup.scss";

const Backup = () => {
  return (
    <Formular>
      <form className="backup-form">
        <label htmlFor="">
          <input type="email" />
        </label>
        <button type="submit" className="btn-backup">
          Récupérer mon mot de passe
        </button>
      </form>
      ;
    </Formular>
  );
};

export default Backup;
