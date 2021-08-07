import './App.scss';
import BaseNavbar from './components/BaseNavbar';

function App() {
  const links = [
    { url: '/search', label: 'Search', icon: 'bi-search' },
    { url: '/list', label: 'Lists', icon: 'bi-card-list' },
  ]
  return (
    <BaseNavbar links={links}/>
  );
}

export default App;
