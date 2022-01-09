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
      "& .error": {
        color: 'red',
        fontFamily: "Source Sans Pro",
        marginTop: '0'
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
      "& .first-button": {
        backgroundColor: "#6C57A8",
        width: "240px",
        height: "40px",
        textTransform: "capitalize",
        borderRadius: "40px",
        marginBottom: "0.5rem",
        [theme.breakpoints.down("lg")]: {
          marginBottom: "0",
          marginLeft: "0.5rem",
        },
        [theme.breakpoints.down("xl")]: {
          marginBottom: "0",
        },
        [theme.breakpoints.down("xs")]: {
          marginLeft: "0",
        }
      },
      "& .first-button:hover": {
        backgroundColor: '#4C3A82'
      },
      "& .second-button": {
        backgroundColor: "#FFF",
        width: "240px",
        height: "40px",
        textTransform: "capitalize",
        borderRadius: "40px",
        border: "2px solid #6C57A8",
        marginBottom: "1.2rem",
        [theme.breakpoints.down("lg")]: {
          marginBottom: "0",
          marginRight: "0.5rem",
        },
        [theme.breakpoints.down("xl")]: {
          marginBottom: "0",
        },
        [theme.breakpoints.down("xs")]: {
          marginLeft: "0",
          marginRight: "0",
          marginTop: '0.5rem'
        },
      },
      "& .buttons": {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        [theme.breakpoints.down("xl")]: {
          flexDirection: "row-reverse",
          display: "inline-flex",
          margin: "1rem 0 2rem 0",
        },
        [theme.breakpoints.down("lg")]: {
          flexDirection: "row-reverse",
          display: "inline-flex",
          margin: "1rem 0 2rem 0",
        },
        [theme.breakpoints.down("sm")]: {
          flexDirection: "row-reverse",
          display: "inline-flex",
          margin: "1rem 0 2rem 0",
        },
        [theme.breakpoints.down("xs")]: {
          flexDirection: "column",
          display: "flex",
        },
      },
    },
  })
);

export default useStyles;
