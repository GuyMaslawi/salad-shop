import { Button, ButtonProps } from "@material-ui/core";
import { useStyles } from "./MainButtonStyle";

interface MainButtonProps extends ButtonProps {
  children: string;
}

export const MainButton = ({
                              children,
                              ...props
                            }: MainButtonProps) => {
  const classes = useStyles();

  return (
    <Button {...props}
            className={classes.root}>
            {children}
    </Button>
  );
};

export default MainButton;
