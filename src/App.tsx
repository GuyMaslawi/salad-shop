import { Header } from "./components";
import OrderProvider from "./context/OrderContext";
import Routes from "./router/Routes";

export const App = () => {
  return (
    <OrderProvider>
      <Header title="Store" />
      <Routes />
    </OrderProvider>
  );
};

export default App;
