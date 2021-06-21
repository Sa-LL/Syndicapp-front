import { createMuiTheme } from '@material-ui/core';
import { deepPurple, grey } from '@material-ui/core/colors';
import { ThemeProvider } from '@material-ui/styles';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Login from './components/Login/Login';
import AdminCRUD from './components/Administrador/AdminCRUD';
import Sindicato from './components/Trabajador/Sindicato';
import Navegacion from './components/Customs/Navegacion/Navegacion';
import NavegacionGestor from './components/Customs/Navegacion/NavegacionGestor';
import GestorCRUD from './components/Gestor/CRUD/GestorCRUD';
import GestorEventos from './components/Gestor/Eventos/GestorEventos';
import GestorServicios from './components/Gestor/Servicios/GestorServicios';
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
					<Route path='/admin' exact component={AdminCRUD} />
					{/* <Route path='/gestor' exact component={gestorCRUD} /> */}
					<Route path='/afiliado/eventos' exact>
						<Sindicato eventos />
						<Navegacion current='/eventos' />
					</Route>
					<Route path='/afiliado/servicios' exact>
						<Sindicato servicios />
						<Navegacion current='/servicios' />
					</Route>
					<Route path='/gestor/gestionar' exact>
						<GestorCRUD />
						<NavegacionGestor current='/gestionar' />
					</Route>
					<Route path='/gestor/eventos' exact>
						<GestorEventos />
						<NavegacionGestor current='/eventos' />
					</Route>
					<Route path='/gestor/servicios' exact>
						<GestorServicios />
						<NavegacionGestor current='/servicios' />
					</Route>
				</Switch>
			</Router>
		</ThemeProvider>
	);
}

export default App;
