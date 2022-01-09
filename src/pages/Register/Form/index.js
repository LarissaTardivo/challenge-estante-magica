import React, {memo} from "react";
import { useForm, Controller } from 'react-hook-form';

import Grid from "@material-ui/core/Grid";

import useStyles from "./styles";
import { NavLink } from "react-router-dom";
import InputField from "../../../components/Form/Input";
import CheckboxField from "../../../components/Form/Checkbox";
import SelectField from "../../../components/Form/Select";
import { internationalPrefix } from "../../../helpers/internationalPrefix";
import {Button} from "@material-ui/core";

import { yupResolver } from "@hookform/resolvers/yup";
import schema from "./schema";
import {schoolType} from "../../../helpers/schoolType";

const Form = ({  value }) => {
    const classes = useStyles();

    const { handleSubmit, control, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = data => {
        console.log(data);
    };

    return (
        <div className={classes.form}>
            <form onSubmit={handleSubmit(onSubmit)} className="form">
                <Controller
                    name="name"
                    control={control}
                    render={({ field: { onChange, value } }) => (
                        <InputField
                            label="Nome"
                            placeholder="Nome completo"
                            value={value}
                            onChange={onChange}
                        />
                    )}
                />
                <p className="error">{errors.name?.message}</p>
                <Grid container className="container">
                    <Grid item xs={12} sm={9} md={7} lg={7} xl={7} className="grid">
                        <Controller
                            name="prefix"
                            control={control}
                            render={({ field: { onChange, value } }) => (
                                <SelectField
                                    label="Celular"
                                    placeholder="+55"
                                    options={internationalPrefix}
                                />
                            )}
                        />
                        <div id="phone-input">
                            <Controller
                                name="phone"
                                control={control}
                                render={({ field: { onChange, value } }) => (
                                    <InputField
                                        placeholder="(00) 00000-0000"
                                        value={value}
                                        onChange={onChange}
                                    />
                                )}
                            />
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={3} md={5} lg={5} xl={5}>
                        <Controller
                            name="school_type"
                            control={control}
                            defaultValue=""
                            render={({ field: { onChange, value } }) => (
                                <SelectField
                                    label="Tipo da escola"
                                    placeholder="Selecione"
                                    value={value}
                                    onChange={onChange}
                                    options={schoolType}
                                />
                            )}
                        />
                        <p className="error">{errors.school_type?.message}</p>
                    </Grid>
                </Grid>
                <Controller
                    name="email"
                    control={control}
                    defaultValue=""
                    render={({ field: { onChange, value } }) => (
                        <InputField
                            label="E-mail"
                            placeholder="email@email.com.br"
                            value={value}
                            onChange={onChange}
                        />
                    )}
                />
                <p className="error">{errors.email?.message}</p>
                <Controller
                    name="password"
                    control={control}
                    defaultValue=""
                    render={({ field: { onChange, value } }) => (
                        <InputField
                            label="Senha"
                            placeholder="Senha de 6 dígitos"
                            value={value}
                            onChange={onChange}
                        />
                    )}
                />
                <p className="error">{errors.name?.message}</p>
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
            </form>
        </div>
    );
};

export default memo(Form);
