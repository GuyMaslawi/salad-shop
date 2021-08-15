import { useState, createContext, ReactNode, useEffect } from "react";

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
  addOneIngredient: (index: number) => void;
  removeOneIngredient: (index: number) => void;
  getLocalStorage: (key: string) => void;
  resetPrice: () => void;
  selectedItems: IngredientsModel[];
}

export const OrderContext = createContext<IngredientsContext | undefined>(undefined);

const max = 10;
const min = 0;

interface OrderProviderProps {
  children: ReactNode;
}

export const OrderProvider = ({ children }: OrderProviderProps) => {
  const [ingredients, setIngredients] = useState<IngredientsModel[]>([]);
  const [finalPrice, setPrice] = useState<number>(0);
  const [selectedItems, setSelectedItems] = useState<IngredientsModel[]>([]);

  const addOneIngredient = (i: number) => {
    if (ingredients[i].amount < max) {
      const tmpArr: IngredientsModel[] = [...ingredients];
      tmpArr[i].amount += 1;

      setIngredients(tmpArr);
      calcFinalPrice();
      setLocalStorage(`amount${i}`, tmpArr[i].amount);
    }
  };

  const removeOneIngredient = (i: number) => {
    if (ingredients[i].amount > min) {
      const tmpArr: IngredientsModel[] = [...ingredients];
      tmpArr[i].amount -= 1;

      setIngredients(tmpArr);
      calcFinalPrice();
      setLocalStorage(`amount${i}`, tmpArr[i].amount);
    }
  };

  const calcFinalPrice = () => {
    let priceTmp: number = 0;

    ingredients.forEach((item: IngredientsModel) => {
      if (item.amount > 0) {
        priceTmp += item.amount * item.price;
      }
    });

    setPrice(parseFloat(priceTmp.toFixed(2)));
  };

  const setLocalStorage = (key: string, value: number) => {
    localStorage.setItem(key, value.toString());
  };

  const getLocalStorage = (key: string) => {
    localStorage.getItem(key);
  };

  const resetPrice = () => {
    setPrice(0);
  };

  useEffect(() => {
    const selectedIngredients = ingredients.filter(
      (ingredient: IngredientsModel) => {
        return ingredient.amount > 0;
      }
    );

    setSelectedItems(selectedIngredients);
  }, [ingredients]);

  return (
    <OrderContext.Provider
      value={{
        ingredients,
        setIngredients,
        finalPrice,
        calcFinalPrice,
        addOneIngredient,
        removeOneIngredient,
        resetPrice,
        selectedItems,
        getLocalStorage,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};

export default OrderProvider;
