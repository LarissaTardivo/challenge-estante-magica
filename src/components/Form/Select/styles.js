import { createStyles, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() =>
  createStyles({
    select: {
      "& strong": {
        fontFamily: "Source Sans Pro",
        color: "#505050",
        fontSize: "16px",
        marginBottom: "1rem",
      },
      "& .css-1s2u09g-control:active, .css-1s2u09g-control:hover, .css-1s2u09g-control:focus, .css-1pahdxg-control, .css-1pahdxg-control:focus, .css-1pahdxg-control:active, .css-1pahdxg-control:hover":
        {
          borderRadius: "8px",
          borderColor: "#747474",
          boxShadow: "0 0 0 1px #747474",
        },
      "& .css-1s2u09g-control:focus, .css-1s2u09g-control:active, react-select-17-live-region:active, .css-1s2u09g-control":
        {
          boxShadow: "#747474",
          borderRadius: "8px",
        },
      "& .css-b62m3t-container": {
        margin: "0.3rem 0 0 0",
      },
    },
  })
);

export default useStyles;
