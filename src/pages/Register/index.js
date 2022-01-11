import React, { memo } from "react";

import Grid from "@material-ui/core/Grid";

import TeacherIcon from "../../assets/Images/icone_prof2.png";
import ManagerIcon from "../../assets/Images/icone_gestor3.png";
import ParentsIcon from "../../assets/Images/icone_familia2.png";

import useStyles from "./styles";
import { NavLink } from "react-router-dom";

import Form from "./Form";
import { useLocation } from "react-router-dom";

const Register: React.FC = () => {

  const classes = useStyles();
  const location = useLocation();
  const value = location.pathname;
  return (
    <div className={classes.register}>
      <Grid item xs={12} className="content">
        <div className="card">
          <div>
            {value === "/teacher" ? <img src={TeacherIcon} alt="" /> : null}
            {value === "/manager" ? <img src={ManagerIcon} alt="" /> : null}
            {value === "/parents" ? <img src={ParentsIcon} alt="" /> : null}
          </div>
          <div>
            {value === "/teacher" ? <h3>Criar conta de professor(a)</h3> : null}
            {value === "/manager" ? <h3>Criar conta de gestor(a)</h3> : null}
            {value === "/parents" ? <h3>Olá, Responsável!</h3> : null}
          </div>
          {value === "/parents" ? (
            <div className="parents-info">
              <span style={{ fontWeight: "400", color: "#747474" }}>
                Só é possível aplicar o projeto por uma escola. Mas você pode
                acompanhar tudo de perto, recebendo nossos conteúdos!
              </span>
            </div>
          ) : (
            <div className="sub-info">
              <span>
                Se você já tiver uma conta,
                <NavLink to="#" style={{ color: "#6C57A8" }}>
                  {" "}
                  faça seu login.
                </NavLink>
              </span>
            </div>
          )}
          <Form value={value} />
        </div>
      </Grid>
    </div>
  );
};

export default memo(Register);
