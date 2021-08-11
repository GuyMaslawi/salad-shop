import { Text } from "./GreetingStyle";

export const Greeting = () => {
  const date = new Date();
  const hour = date.getHours();

  const currentText = hour < 12 ? 'Good Morning' : 'Good evening';

  return (
    <Text>
      <div>{currentText} Customer</div>
      <div>What We Order Today?</div>
    </Text>
  );
};

export default Greeting;
