import { useContext, useEffect } from "react";
import { AppBar, Grid } from "@material-ui/core";
import { useHistory } from "react-router";
import { MainButton, OneProduct, SubTitle } from "../../components";
import { IngredientsModel, OrderContext } from "../../context/OrderContext";
import { Wrapper, Price, useStyles } from "./IngredientsStyle";
import AxiosInstance from "../../api/instance/AxiosInstance";
import { getIcon } from "./images";
import { useSmallScreen } from "../../hooks";

export const Ingredients = () => {
  const { ingredients, setIngredients, finalPrice, selectedItems }: any = useContext(OrderContext);
  const classes = useStyles();
  const history = useHistory();
  const isMobile = useSmallScreen();

  const goTo = () => {
    history.push("/checkout");
  };

  useEffect(() => {
    const getData = async () => {
      const arr = await AxiosInstance.get("/salad.json");

      // reset arr with amount = 0 for all ingredients
      const resetArr = arr.data.items.map(({ name, price }: IngredientsModel, amountStorage: {amount: number}) => {
        return {
          name,
          price,
          amount: 0,
        };
      });

      setIngredients(resetArr);
    };

    getData();
  }, [setIngredients]);

  return (
    <Wrapper>
      <SubTitle text="Choose Your Perfect Salad" />
      <Grid container spacing={2} style={{ paddingBottom: '10rem' }}>
        {ingredients.map(({ name, price, amount }: IngredientsModel, index: number) => {
          return (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <OneProduct
                icon={name && getIcon(name)}
                index={index}
                name={name}
                price={price}
                amount={selectedItems.amount > 0 ? selectedItems : amount} />
            </Grid>
          );
        })}
      </Grid>

      <AppBar position="fixed" color="secondary" className={classes.appBar}>
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item>
            <MainButton onClick={() => goTo()}>
              Proceed To Checkout
            </MainButton>
          </Grid>
          <Grid item>
            <Price>
              {!isMobile && <span>Final Price: </span>}
              <span>${finalPrice}</span>
            </Price>
          </Grid>
        </Grid>
      </AppBar>

    </Wrapper>
  );
};

export default Ingredients;


