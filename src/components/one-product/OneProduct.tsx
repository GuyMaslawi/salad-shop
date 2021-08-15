import { Button } from "@material-ui/core";
import { useContext } from "react";
import { OrderContext } from "../../context/OrderContext";
import { 
    Details, 
    Wrapper,
    Input, 
    useStyles, 
    inputStyles, 
    Name, 
    Price, 
    Img
} from "./OneProductStyle";

interface OneProductProps {
    name?: string;
    price?: number;
    amount?: number;
    index: number;
    icon?: string;
}

export const OneProduct = ({
                                name,
                                price,
                                amount,
                                index,
                                icon
                            }: OneProductProps) => {

    const { addOneIngredient, removeOneIngredient }: any = useContext(OrderContext);
    const classes = useStyles();
    const inputClasses = inputStyles();

    return (
        <Wrapper>
            <Img src={icon} alt={name}/>
            <Details>
                <Name>{name}</Name>
                <Price>${price}</Price>
            </Details>

            <div>
                <Button className={classes.root}
                    type="button"
                    onClick={() => addOneIngredient(index)}> + </Button>

                <Input name={name} value={amount} className={inputClasses.root} />

                <Button className={classes.root}
                    type="button"
                    onClick={() => removeOneIngredient(index)}> - </Button>
            </div>
        </Wrapper>
    );
};

export default OneProduct;