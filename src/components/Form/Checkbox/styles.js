import { createStyles, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) =>
  createStyles({
    checkbox: {
        '& .MuiCheckbox-colorSecondary.Mui-checked': {
            color: '#9683CD'
        },
        "& .MuiCheckbox-root": {
            padding: '0',
            verticalAlign: 'initial'
        },
    }
  })
);

export default useStyles;
