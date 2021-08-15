import { Grid, useMediaQuery } from "@material-ui/core";
import { useContext } from "react";
import { OrderContext } from "../../../context";
import { mobile } from "../../../helpers/screen-sizes";
import { FinalPrice, Title, OneRow } from "./OrderSummaryStyle";

export const OrderSummary = () => {
  const { selectedItems, finalPrice }: any = useContext(OrderContext);
  const isMobile = useMediaQuery(mobile);

  return (
    <Grid container item xs={10}>
      <Grid item xs>
        <Title>Your Order:</Title>

        {selectedItems.map((item: any, index: number) => {
          return (
            <OneRow key={index}>
              <div>
                {item.name} ({item.amount})
              </div>
              <div>${item.price}</div>
            </OneRow>
          );
        })}

        <FinalPrice>
          <div>Price:</div>
          {!isMobile && <div>${finalPrice}</div>}
        </FinalPrice>
      </Grid>
    </Grid>
  );
};

export default OrderSummary;
