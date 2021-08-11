import { Button, ButtonProps } from "@material-ui/core";
import { useStyles } from "./MainButtonStyle";

interface MainButtonProps extends ButtonProps {
  children: string;
}

export const MainButton = ({
                              children,
                              className,
                              ...props
                            }: MainButtonProps) => {
  const classes = useStyles();

  return (
    <Button className={classes.root}
            color="secondary" 
            {...props}>
      {children}
    </Button>
  );
};

export default MainButton;
