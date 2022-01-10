import { Controller } from "react-hook-form";

import Grid from "@material-ui/core/Grid";

import useStyles from "./styles";
import { NavLink } from "react-router-dom";
import InputField from "../../../../components/Form/Input";
import CheckboxField from "../../../../components/Form/Checkbox";
import SelectField from "../../../../components/Form/Select";
import { internationalPrefix } from "../../../../helpers/internationalPrefix";

import InterrogationIcon from "../../../../assets/Images/interrogation-icon.png";

import { schoolType } from "../../../../helpers/schoolType";
import React from "react";

const Fields = ({ value, control, errors }) => {
    const classes = useStyles();
    return (
        <div className={classes.fields}>
            <div className="form">
                <Controller
                    name="name"
                    control={control}
                    render={({ field: { onChange, value } }) => (
                        <InputField
                            label="Nome"
                            placeholder="Nome completo"
                            value={(e) => e.target.value}
                            onChange={onChange}
                        />
                    )}
                />
                <p className="error">{errors.name?.message}</p>
                <div className="box">
                    <p className="icon">
                        <img src={InterrogationIcon} alt="" />
                    </p>
                    <div className="popup">
                        <strong style={{ color: "#6C57A8" }}>
                            Por que precisamos do seu número de celular?
                        </strong>
                        <div>
                            Nós fazemos um acompanhamento do seu projeto pelo WhatsApp. Vamos
                            enviar as orientações de cada etapa e tirar suas dúvidas por lá!
                        </div>
                    </div>
                </div>
                <Grid container className="container">
                    <Grid item xs={12} sm={9} md={7} lg={7} xl={7} className="grid">
                        <Controller
                            name="prefix"
                            control={control}
                            render={({ field: { onChange, value } }) => (
                                <SelectField
                                    className="select"
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
                            type="password"
                        />
                    )}
                />
                <p className="error">{errors.password?.message}</p>
            </div>
        </div>
    );
};

export default Fields;
