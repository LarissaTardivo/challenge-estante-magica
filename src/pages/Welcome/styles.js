import { createStyles, makeStyles } from "@material-ui/core/styles";
import "@fontsource/montserrat";
import "@fontsource/source-sans-pro";

const useStyles = makeStyles((theme) =>
  createStyles({
    welcome: {
      "& *": {
        fontFamily: "Source Sans Pro",
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
        width: "552px",
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
      "& #close-icon": {
        textAlign: "right",
        cursor: "pointer",
        margin: "1rem 2rem 0 0",
      },
      "& h3": {
        fontFamily: "Montserrat",
        color: "#6C57A8",
        fontSize: "24px",
        margin: "1rem 0 0.5rem 0",
        [theme.breakpoints.down("xs")]: {
          fontSize: "24px",
          margin: "0.5rem 3rem",
        },
        [theme.breakpoints.down("md")]: {
          margin: "0.2rem 3rem",
        },
      },
      "& .image": {
        [theme.breakpoints.down("xl")]: {
          display: "none",
        },
        [theme.breakpoints.down("sm")]: {
          display: "initial",
        },
        [theme.breakpoints.down("md")]: {
          marginTop: "-103px",
        },
      },
      "& .box": {
        width: "408px",
        height: "200px",
        display: "inline-flex",
        marginTop: "0.5rem",
        backgroundColor: "#E4E4E4",
        [theme.breakpoints.down("sm")]: {
          display: "none",
        },
      },
      "& .for-parents": {
        marginTop: "-103px",
      },
      "& .parents-info": {
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
        alignItems: "center",
        color: "#747474",
      },
      "& .parents-text": {
        margin: "0 1.5rem 1rem 1.5rem",
      },
      "& .back-btn": {
        color: "#FFF",
        backgroundColor: "#6C57A8",
        borderRadius: "40px",
        width: "240px",
        marginBottom: "1.5rem",
        fontWeight: "700",
        textTransform: "capitalize",
        [theme.breakpoints.down("xs")]: {
          marginBottom: "0",
        },
        [theme.breakpoints.down("sm")]: {
          marginBottom: "0.5rem",
        },
      },
      "& .first-info": {
        margin: "0 7rem 2rem 7rem",
        [theme.breakpoints.down("xs")]: {
          margin: "0 2rem",
        },
        [theme.breakpoints.down("sm")]: {
          display: "inline-flex",
          marginBottom: "0.5rem",
        },
      },
      "& .first-info, .second-info": {
        color: "#505050",
        fontSize: "16px",
      },
      "& .second-info": {
        margin: "0 10rem",
        [theme.breakpoints.down("xl")]: {
          display: "none",
        },
        [theme.breakpoints.down("xs")]: {
          margin: "0 2rem",
        },
      },
      "& .mobile-buttons": {
        marginBottom: "1rem",
        [theme.breakpoints.down("xs")]: {
          marginTop: "1rem",
        },
        [theme.breakpoints.down("sm")]: {
          display: "inline-grid",
          marginTop: "0",
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
        [theme.breakpoints.down("xl")]: {
          display: "none",
        },
        [theme.breakpoints.down("xs")]: {
          display: "inline-flex",
        },
        [theme.breakpoints.down("sm")]: {
          display: "inline-flex",
          margin: "0.5rem",
        },
      },
      "& .mob-btn:hover": {
        backgroundColor: "#4C3A82",
      },
      "& p": {
        color: "#6C57A8",
        textAlign: "center",
        marginTop: "0",
        [theme.breakpoints.up("xl")]: {
          display: "none",
        },
        [theme.breakpoints.up("xs")]: {
          display: "revert",
        },
        [theme.breakpoints.up("sm")]: {
          display: "revert",
        },
        [theme.breakpoints.up("md")]: {
          display: "revert",
          marginTop: "0",
        },
      },
      "& a": {
        textDecoration: "none",
      },
    },
  })
);

export default useStyles;
