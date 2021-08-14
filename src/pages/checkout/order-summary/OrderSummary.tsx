import { Grid } from "@material-ui/core";
import { useContext } from "react";
import { OrderContext } from "../../../context";
import { FinalPrice, Title, OneRow } from "./OrderSummaryStyle";

export const OrderSummary = () => {
    const { selectedItems, finalPrice }: any = useContext(OrderContext);

    return (
        <Grid container item xs={10}>
            <Grid item xs>
                <Title>Your Order:</Title>

                {selectedItems.map((item: any, index: number) => {
                    return (
                        <OneRow key={index}>
                            <div>{item.name} ({item.amount})</div>
                            <div>${item.price}</div>
                        </OneRow>
                    )
                })}

                <FinalPrice>
                    <div>Price:</div>
                    <div>${finalPrice}</div>
                </FinalPrice>
            </Grid>
        </Grid>
    );
};

export default OrderSummary;