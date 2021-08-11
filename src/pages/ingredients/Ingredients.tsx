import { useContext, useEffect } from "react";
import { AppBar, Grid } from "@material-ui/core";
import { useHistory } from "react-router";
import { MainButton, OneProduct, SubTitle } from "../../components";
import { IngredientsModel, OrderContext } from "../../context/OrderContext";
import { Price, useStyles } from "./IngredientsStyle";
import AxiosInstance from "../../api/instance/AxiosInstance";
import { getIcon } from "./images";

export const Ingredients = () => {
  const { ingredients, setIngredients, finalPrice }: any = useContext(OrderContext);
  const classes = useStyles();
  const history = useHistory();

  useEffect(() => {
    const getData = async () => {
      const arr = await AxiosInstance.get("/salad.json");

      // reset arr with amount for all ingredients
      const resetArr = arr.data.items.map(({ name, price }: IngredientsModel) => {
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
    <>
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
                amount={amount} />
            </Grid>
          );
        })}
      </Grid>

      <AppBar position="fixed" color="primary" className={classes.appBar}>
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item>
            <MainButton onClick={() => history.push("/checkout")}>
              Proceed To Checkout
            </MainButton>
          </Grid>
          <Grid item>
            <Price>
              <span>Final Price: </span>
              <span>${finalPrice}</span>
            </Price>
          </Grid>
        </Grid>
      </AppBar>

    </>
  );
};

export default Ingredients;


