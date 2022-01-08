import { createStyles, makeStyles } from "@material-ui/core/styles";
import "@fontsource/montserrat";
import "@fontsource/source-sans-pro";

const useStyles = makeStyles((theme) =>
  createStyles({
    teacher: {
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
      "& .form": {
        margin: "0.5rem 6rem",
        textAlign: "left",
        [theme.breakpoints.down("xs")]: {
          margin: "0.5rem 1rem"
        }
      },
      "& .makeStyles-input-2": {
        margin: "1rem 0"
      },
      "& p": {
        fontSize: "14px",
        margin: '0.5rem 5rem 0 0.5rem',
        color: '#747474'
      },
      "& .first-button": {
        backgroundColor: '#6C57A8',
        width: '289px',
        height: '40px',
        textTransform: 'capitalize',
        borderRadius: '40px',
        marginBottom: '0.5rem'
      },
      "& .second-button": {
        backgroundColor: '#FFF',
        width: '289px',
        height: '40px',
        textTransform: 'capitalize',
        borderRadius: '40px',
        border: '2px solid #6C57A8',
        marginBottom: '1.2rem'
      }
    },
  })
);

export default useStyles;
