import React, { Suspense } from 'react';

// global styles
import { GlobalStyles } from 'utilities/styles/global.styles';

// routers
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// lazy loading for pages
const SignUpPage = React.lazy(() => import('pages/admin/sign-up/sign-up.component'));
const SignInPage = React.lazy(() => import('pages/admin/sign-in/sign-in.component'));
const DashboardPage = React.lazy(() => import('pages/admin/dashboard/dashboard.component'));

const App = () => {
	return (
		<Router>
			<GlobalStyles />
			{/* TODO create a component for loading screen */}
			<Suspense fallback={<div>Loading...</div>}>
				<Switch>
					<Route exact path='/' component={SignInPage} />
					<Route exact path='/dashboard' component={DashboardPage} />
					<Route exact path='/register' component={SignUpPage} />
				</Switch>
			</Suspense>
		</Router>
	);
};

export default App;
