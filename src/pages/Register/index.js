import React, { memo } from "react";
import { NavLink } from "react-router-dom";

import { IoClose } from "react-icons/io5";
import Grid from "@material-ui/core/Grid";

import TeacherIcon from "../../assets/Images/icone_prof2.png";
import ManagerIcon from "../../assets/Images/icone_gestor3.png";
import ResponsibleIcon from "../../assets/Images/icone_familia2.png";

import useStyles from "./styles";

const Register: React.FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.register}>
      <Grid item xs={12} className="content">
        <div className="card">
          <div style={{ textAlign: "right", cursor: "pointer" }}>
            <IoClose color="#BBB4B4" size="35px" />
          </div>
          <h3>Cadastre-se como:</h3>
          <div className="items">
            <NavLink to="teacher" className="only-item">
              <img src={TeacherIcon} alt="teacher-icon" />
              <span>Professor(a)</span>
            </NavLink>
            <NavLink to="manager" className="only-item">
              <img
                src={ManagerIcon}
                alt="manager-icon"
                width={69}
                height={78}
              />
              <span>Gestor(a)</span>
            </NavLink>
            <NavLink to="responsible" className="only-item">
              <img src={ResponsibleIcon} alt="responsible-icon" />
              <span>Responsável</span>
            </NavLink>
            <span style={{ color: "#747474" }}>
              Já tem uma conta?
              <NavLink to="#" style={{ color: "#6C57A8" }}>
                {" "}
                Faça seu login.
              </NavLink>
            </span>
          </div>
        </div>
      </Grid>
    </div>
  );
};

export default memo(Register);
