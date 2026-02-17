import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PostEdit from './pages/PostEdit';
function App() {
  return (
    <BrowserRouter>
        <Switch>
			<Route path="/" component={PostEdit} />
			<Route path="/PostEdit" component={PostEdit} />
        </Switch>
    </BrowserRouter>
  );
}
export default App;