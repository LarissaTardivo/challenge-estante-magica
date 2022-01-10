import { createStyles, makeStyles } from "@material-ui/core/styles";
import "@fontsource/montserrat";
import "@fontsource/source-sans-pro";

const useStyles = makeStyles((theme) =>
  createStyles({
    error: {
      "& *": {
        fontFamily: "Source Sans Pro",
      },
      "& h3": {
        fontFamily: "Montserrat",
        color: "#6C57A8",
        fontSize: "32px",
        margin: "0 0 0.5rem 0",
        [theme.breakpoints.down("xs")]: {
          fontSize: "24px",
          margin: "1rem 2rem",
        },
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
        backgroundColor: "#FCFCFD",
        width: "744px",
        height: "100%",
        textAlign: "center",
        margin: "2rem",
        borderRadius: "24px",
        [theme.breakpoints.down("xs")]: {
          height: "100%",
          width: "100%",
          margin: "8rem 0 0 0",
        },
        [theme.breakpoints.down("md")]: {
          height: "100%",
          width: "100%",
          marginTop: "3rem",
        },
      },
      "& img": {
        marginTop: "-74px",
        [theme.breakpoints.down("md")]: {
          marginTop: "-60px",
        },
      },
      "& .first-info, .second-info": {
        color: "#505050",
        fontSize: "16px",
      },
      "& .first-info": {
        margin: "0 12rem",
        [theme.breakpoints.down("xs")]: {
          margin: "0 2rem",
        },
      },
      "& .second-info": {
        margin: "0 10rem",
        [theme.breakpoints.down("xs")]: {
          margin: "0 2rem",
        },
      },
      "& .first-button": {
        fontSize: "16px",
        fontWeight: "700",
        backgroundColor: "#FFF",
        width: "240px",
        height: "40px",
        textTransform: "capitalize",
        borderRadius: "40px",
        border: "2px solid #6C57A8",
        margin: "0 0.5rem",
      },
      "& .second-button": {
        fontSize: "16px",
        fontWeight: "700",
        backgroundColor: "#6C57A8",
        width: "240px",
        height: "40px",
        textTransform: "capitalize",
        borderRadius: "40px",
        margin: "0 0.5rem",
        [theme.breakpoints.down("xs")]: {
          display: "none",
        },
      },
      "& .second-button:hover, .mob-btn:hover": {
        backgroundColor: "#4C3A82",
      },
      "& .buttons": {
        alignItems: "center",
        margin: "1rem 0",
        [theme.breakpoints.down("xs")]: {
          margin: "0 0 1rem 0",
        },
      },
      "& .mob-btn": {
        fontSize: "16px",
        fontWeight: "700",
        backgroundColor: "#6C57A8",
        width: "240px",
        height: "40px",
        textTransform: "capitalize",
        borderRadius: "40px",
        marginBottom: "1rem",
        [theme.breakpoints.down("xl")]: {
          display: "none",
        },
        [theme.breakpoints.down("xs")]: {
          display: "inline-flex",
        },
      },
      "& .mobile-buttons": {
        [theme.breakpoints.down("xs")]: {
          marginTop: "1rem",
        },
      },
      "& p": {
        color: "#6C57A8",
        textAlign: "center",
        marginTop: "0",
        [theme.breakpoints.up("xl")]: {
          display: "none",
        },
        [theme.breakpoints.up("lg")]: {
          display: "none",
        },
        [theme.breakpoints.up("xs")]: {
          display: "revert",
        },
        [theme.breakpoints.up("sm")]: {
          display: "revert",
        },
        [theme.breakpoints.up("md")]: {
          display: "none",
        },
      },
      "& a": {
        textDecoration: "none",
      },
    },
  })
);

export default useStyles;
