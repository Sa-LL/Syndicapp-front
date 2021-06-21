import { useState } from 'react';
import {
	Button,
	CssBaseline,
	TextField,
	FormControlLabel,
	Checkbox,
	Link,
	Paper,
	Grid,
	Typography,
} from '@material-ui/core';
import Icono from '../../images/icono.png';
import useStyles from './styles';
import { useDispatch } from 'react-redux';
import { signin } from '../../actions/auth';
import { useHistory } from 'react-router-dom';

export default function Login() {
	const estilos = useStyles();
	const dispatch = useDispatch();

	const history = useHistory();

	// States

	const [login, setLogin] = useState({
		email: '',
		password: '',
	});

	const { email, password } = login;

	// Handlers

	const handleEmail = (email) => {
		setLogin((prevStates) => ({ ...prevStates, email: email }));
	};

	const handlePassword = (password) => {
		setLogin((prevStates) => ({ ...prevStates, password: password }));
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		dispatch(signin(login, history));
	};

	return (
		<Grid container component='main' className={estilos.root}>
			<CssBaseline />
			<Grid item xs={false} sm={4} md={7} className={estilos.image} />
			<Grid
				item
				xs={12}
				sm={8}
				md={5}
				component={Paper}
				elevation={6}
				square
			>
				<div className={estilos.paper}>
					<img src={Icono} alt='logo_syndicapp' width='150' />

					<Typography className={estilos.nombreApp}>
						Syndicapp
					</Typography>

					<Typography className={estilos.mensajeBienvenida}>
						Bienvenido!
					</Typography>

					<form
						className={estilos.form}
						noValidate
						onSubmit={handleSubmit}
					>
						<TextField
							variant='outlined'
							margin='normal'
							required
							fullWidth
							id='email'
							label='Correo electrónico'
							name='email'
							autoFocus
							value={email}
							onChange={(e) => handleEmail(e.target.value)}
						/>
						<TextField
							variant='outlined'
							margin='normal'
							required
							fullWidth
							name='password'
							label='Contraseña'
							type='password'
							id='password'
							autoComplete='current-password'
							value={password}
							onChange={(e) => handlePassword(e.target.value)}
						/>
						<FormControlLabel
							control={
								<Checkbox value='remember' color='primary' />
							}
							label='Recordarme'
						/>
						<Button
							type='submit'
							fullWidth
							variant='contained'
							color='primary'
							className={estilos.submit}
						>
							Iniciar sesión
						</Button>
						<Grid container>
							<Grid item xs>
								<Link href='#' variant='body2'>
									Olvidé la contraseña
								</Link>
							</Grid>
						</Grid>
					</form>
				</div>
			</Grid>
		</Grid>
	);
}
