import React, { Suspense } from 'react';

// global styles
import { GlobalStyles } from 'utilities/styles/global.styles';

// routers
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// lazy loading for pages
const SignUpPage = React.lazy(() => import('pages/sign-up/sign-up.component'));

const App = () => {
	return (
		<Router>
			<GlobalStyles />
			{/* TODO create a component for loading screen */}
			<Suspense fallback={<div>Loading...</div>}>
				<Route exact path='/register' component={SignUpPage} />
        
			</Suspense>
		</Router>
	);
};

export default App;
