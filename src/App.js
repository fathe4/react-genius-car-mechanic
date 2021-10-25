import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AddService from './addService/AddService';
import './App.css';
import AuthProvider from './Context/AuthProvider';
import Header from './Pages/Header/Header';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login';
import PrivateRoute from './Pages/Login/PrivateRoute';
import ManageServices from './Pages/ManageServices/ManageServices';
import NotFound from './Pages/NotFound/NotFound';
import SingleService from './Pages/SingleService/SingleService';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <PrivateRoute path='/service/:serviceId'>
              <SingleService></SingleService>
            </PrivateRoute>
            <Route path='/addService'>
              <AddService></AddService>
            </Route>
            <Route path='/manageServices'>
              <ManageServices></ManageServices>
            </Route>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <Route exact path='*'>
              <NotFound></NotFound>
            </Route>
          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
