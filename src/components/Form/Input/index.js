import React, { memo, ReactNode } from "react";

import OutlinedInput from "@material-ui/core/OutlinedInput";

import useStyles from "./styles";
interface IProps {
  icon?: ReactNode;
  label?: string;
}

const InputField: React.FC<IProps> = ({
  formik,
  onChange,
  endIcon,
  icon,
  name,
  label,
  placeholder,
  ...props
}) => {
  const classes = useStyles();
  return (
    <div className={classes.input}>
      <strong>{label}</strong>
      <OutlinedInput
        onChange={onChange}
        name={name}
        placeholder={placeholder}
      />
    </div>
  );
};

export default memo(InputField);
