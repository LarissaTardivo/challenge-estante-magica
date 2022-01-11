import React, { memo } from "react";
import { useForm } from "react-hook-form";

import useStyles from "./styles";
import { NavLink } from "react-router-dom";
import CheckboxField from "../../../components/Form/Checkbox";
import {Button, FormControlLabel, Radio, RadioGroup} from "@material-ui/core";

import { yupResolver } from "@hookform/resolvers/yup";
import schema from "./schema";
import Fields from "./Fields";

const Form = ({ value }) => {
  const { handleSubmit, control, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    const userEmail = localStorage.getItem("User");

    if (userEmail === null) {
      localStorage.setItem("User", data.email);
      return (window.location.href = "/welcome");
    } else {
      return (window.location.href = "/error");
    }
  };
  const classes = useStyles();
  return (
    <div className={classes.form}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Fields control={control} errors={errors} />
        <div className="check">
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
        {value === "/parents" ? (
          <div className="radio">
            <span style={{ color: "#3A3A3A", fontWeight: "700" }}>
              Sua criança vai participar do projeto este ano?
            </span>
            <RadioGroup
                style={{ display: "initial", marginLeft: "1rem" }}
            >
              <FormControlLabel value="yes" control={<Radio />} label="Sim" />
              <FormControlLabel value="no" control={<Radio />} label="Não" />
            </RadioGroup>
          </div>
        ) : null}
        <div style={{ textAlign: "center" }}>
          <div className="buttons">
            <Button
              className="first-button"
              style={{ color: "#FFF" }}
              type="submit"
            >
              Cadastrar
            </Button>
            <NavLink to="/">
              <Button className="second-button" style={{ color: "#6C57A8" }}>
                Voltar
              </Button>
            </NavLink>
          </div>
        </div>
      </form>
    </div>
  );
};

export default memo(Form);
