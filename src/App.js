import { createMuiTheme } from '@material-ui/core';
import { deepPurple, grey } from '@material-ui/core/colors';
import { ThemeProvider } from '@material-ui/styles';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Login from './components/Login/Login';

const theme = createMuiTheme({
	typography: {
		fontFamily: [
			'Nunito',
			'Segoe UI',
			'Roboto',
			'Oxygen',
			'Ubuntu',
			'Cantarell',
			'Fira Sans',
			'Droid Sans',
			'Helvetica Neue',
		].join(','),
	},
	palette: {
		primary: deepPurple,
		secondary: grey,
	},
});

function App() {
	return (
		<ThemeProvider theme={theme}>
			<Router>
				<Switch>
					<Route path='/' exact component={Login} />
				</Switch>
			</Router>
		</ThemeProvider>
	);
}

export default App;
