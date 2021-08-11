import { useState, createContext, ReactNode } from "react";

export interface IngredientsModel {
    name: string;
    price: number;
    amount: number;
}

export interface IngredientsContext {
    ingredients: IngredientsModel[];
    setIngredients: (ingredients: IngredientsModel[]) => void;
    finalPrice: number;
    calcFinalPrice: () => void;
    increment: (index: number) => void;
    decrement: (index: number) => void;
}

export const OrderContext = createContext<IngredientsContext | undefined>(undefined);

interface RootProviderProps {
    children: ReactNode;
}

const max_count = 10;
const min_count = 0;

export const OrderProvider = ({ children }: RootProviderProps) => {
    const [ingredients, setIngredients] = useState<IngredientsModel[]>([]);
    const [finalPrice, setPrice] = useState<number>(0);

    const increment = (idx: number) => {
        if (ingredients[idx].amount < max_count) {
            const tmpArr: IngredientsModel[] = [...ingredients];
            tmpArr[idx].amount += 1;

            setIngredients(tmpArr);
            calcFinalPrice();
        }
    };

    const decrement = (idx: number) => {
        if (ingredients[idx].amount > min_count) {
            const tmpArr: IngredientsModel[] = [...ingredients];
            tmpArr[idx].amount -= 1;

            setIngredients(tmpArr);
            calcFinalPrice();
        }
    };

    const calcFinalPrice = () => {
        let priceTmp: number = 0;

        ingredients.forEach((item: IngredientsModel) => {
            if (item.amount > 0) {
                priceTmp += item.amount * item.price;
            }
        })

        setPrice(parseFloat(priceTmp.toFixed(2)));
    };

    const resetPrice = () => {
        setPrice(0);
    };

    return (
        <OrderContext.Provider
            value={{
                ingredients,
                setIngredients,
                finalPrice,
                calcFinalPrice,
                increment,
                decrement,
            }}>
            {children}
        </OrderContext.Provider>
    );
};

export default OrderProvider;