import { createStyles, makeStyles } from "@material-ui/core/styles";
import "@fontsource/montserrat";
import "@fontsource/source-sans-pro";

const useStyles = makeStyles((theme) =>
  createStyles({
    register: {
      backgroundColor: "#ECE9F5",
      "& h3": {
        fontFamily: "Montserrat",
        color: "#6C57A8",
        fontSize: "32px",
        margin: "0",
      },
      "& .content": {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "3.5rem",
        [theme.breakpoints.down("xs")]: {
          padding: "1rem",
        },
        [theme.breakpoints.down("md")]: {
          padding: "1rem",
        },
      },
      "& .card": {
        padding: "2rem",
        backgroundColor: "#FCFCFD",
        width: "744px",
        height: "346px",
        textAlign: "center",
        margin: "2rem",
        border: "2px solid #747474",
        borderRadius: "24px",
        [theme.breakpoints.down("xs")]: {
          height: "100%",
          width: "100%",
          padding: "2rem",
          margin: "2rem",
        },
        [theme.breakpoints.down("md")]: {
          height: "100%",
          width: "100%",
        },
      },
      "& .items": {
        alignItems: "center",
        justifyContent: "center",
        flexWrap: "wrap",
        display: "flex",
        padding: "0.5rem 2rem",
        cursor: "pointer",
        [theme.breakpoints.down("md")]: {
          flexDirection: "column",
        },
      },
      "& .only-item": {
        display: "flex",
        flexDirection: "column",
        padding: "1rem 2.5rem",
        border: "2px solid #C7C7C7",
        height: "7rem",
        borderRadius: "16px",
        margin: "1rem",
      },
      "& .only-item > span, span": {
        fontFamily: "Source Sans Pro",
        color: "#5E4F9C",
        fontWeight: "700",
        fontSize: "16px",
        marginTop: "0.3rem",
      },
      "& a": {
        textDecoration: "none",
      },
    },
  })
);

export default useStyles;
