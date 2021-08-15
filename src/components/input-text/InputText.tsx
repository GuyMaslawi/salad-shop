import { TextField, TextFieldProps } from "@material-ui/core";
import { useStyles } from "./InputTextStyle";

export const InputText = ({...props}: TextFieldProps) => {
  const classes = useStyles();

  return (
    <TextField
      {...props}
      variant="outlined"
      className={classes.root}
    />
  );
};

export default InputText;
