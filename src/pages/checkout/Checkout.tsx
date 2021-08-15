import { Card, Grid, useMediaQuery } from "@material-ui/core";
import ClientDetails from "./client-details/ClientDetails";
import OrderSummary from "./order-summary/OrderSummary";
import { Background, useStyles, Wrapper, SubTitleStyle } from "./CheckoutStyle";
import { mobile } from "../../helpers/screen-sizes";

export const Checkout = () => {
  const classes = useStyles();
  const isMobile = useMediaQuery(mobile);

  return (
    <Wrapper>
      <Background />
      <SubTitleStyle text="Almost Finish..." />
      <Card className={classes.root}>
        <Grid
          container
          direction={isMobile ? "column-reverse" : "row"}
          justifyContent="space-between"
          style={{ paddingTop: isMobile ? "0" : "3rem" }}
        >
          <Grid item xs={12} sm={5}>
            <ClientDetails />
          </Grid>

          <Grid item xs={12} sm={4} container justifyContent="center">
            <OrderSummary />
          </Grid>
        </Grid>
      </Card>
    </Wrapper>
  );
};

export default Checkout;
