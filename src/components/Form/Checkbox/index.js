import React, { memo, ReactNode } from "react";

import Checkbox from "@material-ui/core/Checkbox";

import useStyles from "./styles";

interface IProps {
  icon?: ReactNode;
  label?: string;
}

const CheckboxField: React.FC<IProps> = ({
  formik,
  icon,
  name,
  label,
  ...props
}) => {
  const classes = useStyles();
  return (
    <div className={classes.checkbox}>
      <Checkbox id={name} name={name} />
      <span>{label}</span>
    </div>
  );
};

export default memo(CheckboxField);
