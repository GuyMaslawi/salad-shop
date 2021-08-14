import { useHistory } from "react-router";
import { MainButton, Greeting } from "../../components";
import { Background, Wrapper, Content } from "./WelcomeStyle";

export const Welcome = () => {
  const history = useHistory();

  return (
    <Wrapper>
      <Background />
      <Content>
        <Greeting />
        <MainButton onClick={() => history.push("/ingredients")}>
          Order Salad
        </MainButton>
      </Content>
    </Wrapper>
  );
};

export default Welcome;
