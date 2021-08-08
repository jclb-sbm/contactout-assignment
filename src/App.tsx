import './App.scss';
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import BaseNavbar from './components/BaseNavbar';
import {
  BaseTable,
  Lists,
  Search,
} from "./pages"

function App() {
  const links = [
    { url: '/search', label: 'Search', icon: 'bi-search' },
    { url: '/lists', label: 'Lists', icon: 'bi-card-list' },
  ]
  return (
    <div>
      <BrowserRouter>
        <BaseNavbar links={links}/>
        <Switch>
          <Route path="/search">
            <Search />
          </Route>
          <Route path="/lists">
            <Lists />
          </Route>
          <Route path="/">
            <BaseTable />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
