import { Content } from './AppStyle';
import { Header } from './components';
import OrderProvider from './context/OrderContext';
import Routes from './router/Routes';

export const App = () => {
  return (
    <OrderProvider>
      <Header title="Store" />
      <Content>
        <Routes />
      </Content>
    </OrderProvider>
  );
}

export default App;
