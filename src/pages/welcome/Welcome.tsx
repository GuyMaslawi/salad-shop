import { useHistory } from "react-router";
import { MainButton, Greeting } from "../../components";
import { Wrapper } from "./WelcomeStyle";

export const Welcome = () => {
  const history = useHistory();

  return (
    <Wrapper>
      <Greeting />
      <MainButton
        color="primary"
        variant="contained"
        onClick={() => history.push("/ingredients")}
      >
        Order Salad
      </MainButton>
    </Wrapper>
  );
};

export default Welcome;
