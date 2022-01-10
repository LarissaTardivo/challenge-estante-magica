import { createStyles, makeStyles } from "@material-ui/core/styles";
import "@fontsource/source-sans-pro";

const useStyles = makeStyles((theme) =>
  createStyles({
    input: {
      "& .MuiOutlinedInput-input": {
        marginTop: "0.2rem",
        fontSize: "16px",
        letterSpacing: "0.02em",
        lineHeight: "136%",
        padding: "0.5rem",
        fontFamily: "Source Sans Pro",
      },
      "& .MuiInputBase-root": {
        width: "100%",
        borderRadius: "8px",
        margin: "0.6rem 0",
      },
      "& strong": {
        fontFamily: "Source Sans Pro",
        color: "#505050",
        fontSize: "16px",
      }
    },
  })
);

export default useStyles;
