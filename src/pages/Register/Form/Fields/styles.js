import { createStyles, makeStyles } from "@material-ui/core/styles";
import "@fontsource/montserrat";
import "@fontsource/source-sans-pro";

const useStyles = makeStyles((theme) =>
  createStyles({
    fields: {
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
        },
      },
      "& #phone-input": {
        margin: "1rem 0 0 0.5rem",
      },
      "& .error": {
        color: "red",
        fontFamily: "Source Sans Pro",
        marginTop: "0",
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
      "& .box": {
        position: "relative",
        zIndex: "1",
      },
      "& .icon": {
        padding: "2px 5px",
        width: "fit-content",
        marginLeft: "50px",
        marginBottom: "-26px",
        cursor: "pointer",
      },
      "& .box:hover .popup": {
        opacity: 1,
        display: "block",
      },
      "& .popup": {
        padding: "1rem",
        fontSize: "14px",
        color: "#747474",
        textAlign: "center",
        width: "341px",
        height: "82px",
        backgroundColor: "#FFF",
        position: "absolute",
        top: "0",
        left: "5rem",
        transaction: "all 0.25s ease",
        opacity: "0",
        display: "none",
        border: "2px solid #E6DCFF",
        borderRadius: "10px",
        marginTop: "-3rem",
        [theme.breakpoints.down("xs")]: {
          width: "180px",
          height: "150px",
          marginTop: "-5rem",
        },
      },
      "& .css-qc6sy-singleValue, .css-26l3qy-menu": {
        color: "#747474",
        fontFamily: "Source Sans Pro"
      },
    },
  })
);

export default useStyles;
