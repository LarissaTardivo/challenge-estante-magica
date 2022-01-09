import React, { memo } from "react";

import Grid from "@material-ui/core/Grid";

import Drawingicon from "../../assets/Images/drawing-icon.png";

import useStyles from "./styles";
import {IoClose} from "react-icons/io5";
import {Button} from "@material-ui/core";
import {NavLink} from "react-router-dom";

const Welcome: React.FC = () => {

  const classes = useStyles();
  return (
    <div className={classes.welcome}>
      <Grid item xs={12} className="content">
        <div className="card">
          <div style={{ textAlign: "right", cursor: "pointer", margin: '1rem 2rem 0 0' }}>
            <IoClose color="#BBB4B4" size="35px" />
          </div>
          <img src={Drawingicon} alt="" />
          <div className="box"/>
          <h3>Parabéns</h3>
          <div className="first-info">
            <span>
              Você faz parte do maior projeto de leitura e escrita da América Latina! Seu próximo passo é <br/> <strong>criar sua primeira turma</strong>
            </span>
          </div>
          <br/>
          <div className="second-info">
            <span>
              Se quiser criar uma nova conta, utilize um e-mail diferente.
            </span>
          </div>
          <div className="mobile-buttons">
            <Button className="mob-btn" style={{ color: "#FFF" }}>
              Baixar app pela PlayStore
            </Button>
            <Button className="mob-btn" style={{ color: "#FFF" }}>
              Baixar app pela AppStore
            </Button>
          </div>
        </div>
      </Grid>
      <NavLink to="">
        <p>Retornar para o site</p>
      </NavLink>
    </div>
  );
};

export default memo(Welcome);
