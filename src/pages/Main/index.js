import React, { memo } from "react";

import { IoClose } from "react-icons/io5";
import Grid from "@material-ui/core/Grid";

import TeacherIcon from "../../assets/Images/icone_prof2.png";
import ManagerIcon from "../../assets/Images/icone_gestor3.png";
import ParentsIcon from "../../assets/Images/icone_familia2.png";

import { NavLink } from "react-router-dom";

import useStyles from "./styles";

const Main: React.FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.main}>
      <Grid item xs={12} className="content">
        <div className="card">
          <div style={{ textAlign: "right", cursor: "pointer" }}>
            <IoClose color="#BBB4B4" size="35px" />
          </div>
          <h3>Cadastre-se como:</h3>
          <div className="items">
            <NavLink to="teacher" className="only-item">
              <div style={{ height: "100%" }}>
                <img src={TeacherIcon} alt="teacher-icon" />
              </div>
              <span>Professor(a)</span>
            </NavLink>
            <NavLink to="manager" className="only-item">
              <div style={{ height: "100%" }}>
                <img src={ManagerIcon} alt="manager-icon" />
              </div>
              <span>Gestor(a)</span>
            </NavLink>
            <NavLink to="parents" className="only-item">
              <div style={{ height: "100%" }}>
                <img src={ParentsIcon} alt="parents-icon" />
              </div>
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

export default memo(Main);
