import React, { memo } from "react";

import { IoClose } from "react-icons/io5";
import Grid from "@material-ui/core/Grid";
import { Button } from "@material-ui/core";
import DrawingIcon from "../../assets/Images/drawing-icon.png";

import { NavLink } from "react-router-dom";

import useStyles from "./styles";

const previousPath = document.referrer
  .replace(/^[^:]+:\/\/[^/]+/, "")
  .replace(/#.*/, "");

const Welcome: React.FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.welcome}>
      <Grid item xs={12} className="content">
        <div className="card">
          <div id="close-icon">
            <IoClose color="#BBB4B4" size="35px" />
          </div>
          {previousPath === "/parents" ? (
            <div>
              <img className="for-parents" src={DrawingIcon} alt=""/>
              <h3>Cadastro confirmado!</h3>
              <div className="parents-info">
                  <span className="parents-text">
                      Obrigada por incentivar e fazer parte do maior projeto de {" "}
                      <strong>leitura e escrita da América Latina.</strong> Fique de
                      olho em seu e-mail para não perder nossos conteúdos!
                  </span>
                <Button className="back-btn">Voltar para o site</Button>
              </div>
            </div>
          ) : (
            <div>
                <img className="image" src={DrawingIcon} alt=""/>
                <h3>Parabéns</h3>
                <div className="box" />
                <div className="first-info">
                    <span>
                      Você faz parte do maior projeto de leitura e escrita da
                      América Latina! Seu próximo passo é <br />{" "}
                      <strong>criar sua primeira turma</strong>
                    </span>
                </div>
            </div>
          )}
          <div className="second-info">
            <span>
              Baixe o aplicativo da Estante Mágica ou faça login pelo
              computador.
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
      <NavLink to="#">
        <p>Retornar para o site</p>
      </NavLink>
    </div>
  );
};

export default memo(Welcome);
