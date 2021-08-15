import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
  root: {
    borderRadius: "3rem",
    border: 0,
    height: "4.8rem",
    padding: "0 3rem",
    fontSize: "1.8rem",
    textDecoration: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "fit-content",

    "@media (max-width: 959px)": {
      fontSize: "1.5rem",
      width: "22rem",
      padding: "0 1rem",
    },
  },
});
