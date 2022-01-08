import React, { memo } from "react";
import Select from "react-select";
import useStyles from "./styles";

interface IProps {
  value: string;
  options: any[];
  onChange: any;
  label: string;
  name: string;
  placeholder: string;
}

const SelectField: React.FC<IProps> = ({
  onChange,
  value,
  options,
  name,
  label,
  placeholder,
}) => {
  const defaultValue = (opcoes: any[], valor: string) =>
    opcoes ? opcoes.find((opcao) => opcao.valor === valor) : "";
  const classes = useStyles();
  return (
    <div className={classes.select}>
      <strong>{label}</strong>
      <Select
        value={defaultValue(options, value)}
        onChange={(valor) => onChange(valor)}
        options={options}
        placeholder={placeholder}
      />
    </div>
  );
};

export default memo(SelectField);
