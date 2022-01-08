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
        margin: "0 0 0.5rem 0",
        [theme.breakpoints.down("xs")]: {
          fontSize: "24px",
          margin: "1rem 3rem",
        },
      },
      "& .parents-info": {
        fontFamily: "Source Sans Pro",
        padding: '0 8rem',
        [theme.breakpoints.down("xs")]: {
          padding: "0rem 2rem",
        },
      },
      "& .sub-info": {
        fontFamily: "Source Sans Pro",
        padding: '0 2rem',
        color: '#747474',
        [theme.breakpoints.down("xs")]: {
          padding: "0rem 6rem",
        },
      },
      "& span": {
        fontFamily: "Source Sans Pro",
        fontWeight: "700",
        fontSize: "16px",
      },
      "& a": {
        textDecoration: "none",
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
        marginTop: "-37px",
        [theme.breakpoints.down("md")]: {
          marginTop: "-34px",
        },
      },
    },
  })
);

export default useStyles;
