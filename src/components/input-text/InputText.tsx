import { TextField, TextFieldProps } from "@material-ui/core";
import { useStyles } from "./InputTextStyle";

interface InputTextProps{
    ref?: any;
}

export const InputText = ({
                            ref,
                            ...props
                          }: InputTextProps & TextFieldProps) => {
    const classes = useStyles();

    return (
        <TextField {...props}
                   ref={ref}
                   variant="outlined"
                   className={classes.root} 
        />
    );
};

export default InputText;