import { makeStyles } from '@material-ui/core/styles';

import Image from '../../images/principal_lp.jpg';

export default makeStyles((theme) => ({
	root: {
		height: '100vh',
	},
	nombreApp: {
		// fontFamily: 'Roboto',
		fontSize: 40,
		letterSpacing: 5,
	},
	mensajeBienvenida: {
		fontSize: 25,
		color: '#482880',
		marginTop: 10,
		alignSelf: 'flex-start',
		fontWeight: 'bold',
	},
	image: {
		backgroundImage: `url(${Image})`,
		backgroundRepeat: 'no-repeat',
		backgroundColor:
			theme.palette.type === 'light'
				? theme.palette.grey[50]
				: theme.palette.grey[900],
		backgroundSize: 'cover',
		backgroundPosition: 'center',
	},
	paper: {
		margin: theme.spacing(8, 4),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: theme.palette.secondary.main,
	},
	form: {
		width: '100%', // Fix IE 11 issue.
		marginTop: theme.spacing(1),
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
}));
