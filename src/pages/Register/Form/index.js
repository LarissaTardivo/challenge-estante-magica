import React, { memo } from "react";

import Grid from "@material-ui/core/Grid";

import useStyles from "./styles";
import { NavLink } from "react-router-dom";
import InputField from "../../../components/Form/Input";
import CheckboxField from "../../../components/Form/Checkbox";
import SelectField from "../../../components/Form/Select";
import { internationalPrefix } from "../../../helpers/internationalPrefix";

import { FormikProps } from "formik";

interface IProps {
  formik: FormikProps<any>;
}

const Form: React.FC<IProps> = ({ formik, value }) => {
  const classes = useStyles();
  return (
    <div className={classes.form}>
      <div className="form">
        <InputField
          label="Nome"
          placeholder="Nome completo"
          formik={formik}
          onChange={formik.handleChange}
          value={formik.values.label}
        />
        <Grid container className="container">
          <Grid item xs={12} sm={9} md={8} lg={8} xl={8} className="grid">
            <SelectField
              label="Celular"
              placeholder="+55"
              options={internationalPrefix}
              name="location"
              onChange={(value) =>
                formik.setFieldValue("location", value.value)
              }
              value={formik.values.location}
            />
            <div id="phone-input">
              <InputField label="" placeholder="(00) 00000-0000" />
            </div>
          </Grid>
          <Grid item xs={12} sm={3} md={4} lg={4} xl={4}>
            <SelectField label="Tipo da escola" placeholder="Selecione" />
          </Grid>
        </Grid>
        <InputField label="E-mail" placeholder="email@email.com.br" />
        <InputField label="Senha" placeholder="Senha de 6 dígitos" />
        {value === "/teacher" ? (
          <p>Sua senha deve conter pelo menos 6 dígitos. </p>
        ) : null}
        {value === "/manager" ? (
          <p>Sua senha deve conter pelo menos 6 dígitos. </p>
        ) : null}
        {value === "/parents" ? (
          <div style={{ display: "flex", margin: "1.5rem 0 1rem 0" }}>
            <span style={{ color: "#3A3A3A", fontWeight: "normal" }}>
              Sua criança vai participar do projeto este ano?
            </span>
            <div style={{ display: "flex" }}>
              <CheckboxField /> Sim
              <CheckboxField /> Não
            </div>
          </div>
        ) : null}
        <div style={{ display: "flex", margin: "1.5rem 0 1rem 0" }}>
          <CheckboxField />
          <span style={{ color: "#3A3A3A", fontWeight: "normal" }}>
            Li e aceito os
            <NavLink to="#" style={{ color: "#6C57A8", fontWeight: "700" }}>
              {" "}
              Termos de Uso
            </NavLink>{" "}
            e a
            <NavLink to="#" style={{ color: "#6C57A8", fontWeight: "700" }}>
              {" "}
              Política de Privacidade.
            </NavLink>
          </span>
        </div>
      </div>
    </div>
  );
};

export default memo(Form);
