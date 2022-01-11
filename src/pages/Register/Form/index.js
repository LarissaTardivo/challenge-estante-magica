import React, { memo } from "react";

import { Button } from "@material-ui/core";

import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";

import schema from "./schema";
import Fields from "./Fields";

import useStyles from "./styles";

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
        <Fields control={control} errors={errors} value={value} />
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
