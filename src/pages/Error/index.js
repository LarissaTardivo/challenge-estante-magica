import React, { memo } from "react";

import Grid from "@material-ui/core/Grid";

import DrawingIcon from "../../assets/Images/drawing-icon.png";

import useStyles from "./styles";
import {Button} from "@material-ui/core";
import {NavLink} from "react-router-dom";

const Error: React.FC = () => {

  const classes = useStyles();
  return (
    <div className={classes.error}>
      <Grid item xs={12} className="content">
        <div className="card">
          <img src={DrawingIcon} alt="" />
          <h3>Já existe uma conta com este e-mail</h3>
          <div className="first-info">
            <span>
              Faça login pelo computador ou acesse o aplicativo da Estante Mágica para começar a aplicar o projeto!
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
          <div className="buttons">
            <NavLink to="/">
              <Button
                  className="first-button"
                  style={{ color: "#6C57A8" }}
                  type="submit"
              >
                Criar nova conta
              </Button>
            </NavLink>
            <Button className="second-button" style={{ color: "#FFF" }}>
              Fazer login
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

export default memo(Error);
