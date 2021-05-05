import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from '../components/nav/Nav';
import ChatPage from '../pages/ChatPage';
import HomePage from '../pages/HomePage';
import ListPage from '../pages/ListPage';
import Login from '../pages/Login';
import SignUpPage from '../pages/SignUpPage';

const Routes = () => {
	return (
		<Router>
			<Nav />
			<div className='container'>
				<Switch>
					<Route exact path='/' component={HomePage} />
					<Route path='/register' component={SignUpPage} />
					<Route path='/login' component={Login} />
					<Route path='/chat' component={ListPage} />
					<Route path='/:room' component={ChatPage} />
				</Switch>
			</div>
		</Router>
	);
};

export default Routes;
