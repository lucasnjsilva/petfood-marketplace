import { BrowserRouter, Route } from 'react-router-dom';
import './styles/global.css';
import Sidebar from './components/sidebar';

import Home from './pages/home';
import Cadastro from './pages/cadastro';
import Checkout from './pages/checkout';
import Petshop from './pages/petshop';

const Routes = () => {
  return (
    <>
      <BrowserRouter>
        <Route exact path='/' component={Home} />
        <Route exact path='/petshop/:id' component={Petshop} />
        <Route exact path='/checkout' component={Checkout} />
        <Route exact path='/cadastro' component={Cadastro} />
      </BrowserRouter>
      <Sidebar />
    </>
  );
}

export default Routes;