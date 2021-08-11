import { useState } from "react";
import { useHistory } from "react-router";
import { Card, Dialog, Grid } from "@material-ui/core";
import { MainButton, SubTitle } from "../../components"
import ClientDetails from "./client-details/ClientDetails";
import OrderSummary from "./order-summary/OrderSummary";
import { useStyles } from "./CheckoutStyle";

export const Checkout = () => {
    const [open, setOpen] = useState(false);
    const history = useHistory();
    const classes = useStyles();

    const openDialog = () => {
        setOpen(true);
    };

    return (
        <>
            <SubTitle text="Almost Finish..." />
            <Card className={classes.root}>
                <Grid container justifyContent="space-between" style={{ paddingTop: '3rem' }}>
                    <Grid item xs={12} sm={5}>
                        <ClientDetails />
                    </Grid>

                    <Grid item xs={12} sm={4} container justifyContent="center">
                        <OrderSummary />
                    </Grid>

                    <Grid item xs={12} container justifyContent="center">
                        <MainButton onClick={() => openDialog()}>Order</MainButton>
                    </Grid>

                    <Dialog open={open}>
                        <MainButton onClick={() => history.push("/")}>Close</MainButton>
                    </Dialog>
                </Grid>
            </Card>
        </>
    );
};

export default Checkout;