import {Route, Switch, Redirect} from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'
import NotFound from './components/NotFound'
import './App.css'

const App = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/ebank/login" exact component={Login} />
    <Route path="/not-found" exact component={NotFound} />
    <Redirect to="/not-found" />
  </Switch>
)

export default App
