import React, { memo } from "react";

import useStyles from "./styles";

import { Button } from "@material-ui/core";
import { NavLink } from "react-router-dom";

const RegisterButtons: React.FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.registerButtons}>
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
  );
};

export default memo(RegisterButtons);
