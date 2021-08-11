import { Grid } from "@material-ui/core";
import { useContext, useEffect, useState } from "react";
import { IngredientsModel, OrderContext } from "../../../context";
import { FinalPrice, Title, OneRow } from "./OrderSummaryStyle";

export const OrderSummary = () => {
    const { ingredients, finalPrice }: any = useContext(OrderContext);
    const [selectedItems, setSelectedItems] = useState<IngredientsModel[]>([]);

    useEffect(() => {
        const selectedIngredients = ingredients.filter((ingredient: IngredientsModel) => {
            return ingredient.amount > 0;
        });

        setSelectedItems(selectedIngredients);
    }, []);

    return (
        <Grid container xs={10}>
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