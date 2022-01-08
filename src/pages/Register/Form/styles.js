import { createStyles, makeStyles } from "@material-ui/core/styles";
import "@fontsource/montserrat";
import "@fontsource/source-sans-pro";

const useStyles = makeStyles((theme) =>
  createStyles({
    form: {
      "& .container, .grid": {
        marginBottom: "-10px",
        [theme.breakpoints.down("xs")]: {
          marginBottom: "10px",
        },
      },
      "& .grid": {
        display: "flex",
        marginBottom: "0.5rem",
        [theme.breakpoints.down("xs")]: {
          display: "inline-flex",
        }
      },
      "& #phone-input": {
        margin: "1rem 0 0 0.5rem"
      },
      "& .form": {
        margin: "0.5rem 6rem",
        textAlign: "left",
        [theme.breakpoints.down("xs")]: {
          margin: "0.5rem 1rem",
        },
      },
      "& p": {
        fontSize: "14px",
        margin: "0.5rem 5rem 0 0.5rem",
        color: "#747474",
      },
    },
  })
);

export default useStyles;
