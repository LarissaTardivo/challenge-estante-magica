import React, { memo } from "react";

import Grid from "@material-ui/core/Grid";

import TeacherIcon from "../../assets/Images/icone_prof2.png";

import useStyles from "./styles";
import { NavLink } from "react-router-dom";
import InputField from "../../components/Form/Input";
import CheckboxField from "../../components/Form/Checkbox";
import { Button } from "@material-ui/core";

const Teacher: React.FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.teacher}>
      <Grid item xs={12} className="content">
        <div className="card">
          <img src={TeacherIcon} alt="teacher-icon" />
          <h3>Criar conta de professor(a)</h3>
          <span style={{ color: "#747474" }}>
            Se você já tiver uma conta,
            <NavLink to="#" style={{ color: "#6C57A8" }}>
              {" "}
              faça seu login.
            </NavLink>
          </span>
          <div className="form">
            <InputField label="Nome" placeholder="Nome completo" />
            <InputField label="E-mail" placeholder="email@email.com.br" />
            <InputField label="Senha" placeholder="Senha de 6 dígitos" />
            <p>Sua senha deve conter pelo menos 6 dígitos. </p>
            <div style={{ display: 'flex', marginRight: '1rem', marginTop: '0.5rem' }}>
              <CheckboxField />
              <span style={{ color: "#3A3A3A", fontWeight: 'normal' }}>
                Li e aceito os
                <NavLink to="#" style={{ color: "#6C57A8", fontWeight: '700' }}>
                  {" "}
                  Termos de Uso
                </NavLink>
                {" "}
                e a
                <NavLink to="#" style={{ color: "#6C57A8", fontWeight: '700' }}>
                  {" "}
                  Política de Privacidade.
                </NavLink>
              </span>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", alignItems: 'center' }}>
            <Button className='first-button' style={{ color: '#FFF' }}>Cadastrar</Button>
            <Button className='second-button' style={{ color: '#6C57A8' }}>Voltar</Button>
          </div>
        </div>
      </Grid>
    </div>
  );
};

export default memo(Teacher);
