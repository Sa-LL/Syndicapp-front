import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
	votacionContainer: {
		marginTop: 20,
		marginBottom: 40,
		paddingBottom: 20,
		borderRadius: 15,
	},
	reunionNombre: {
		fontWeight: 'bold',
		fontSize: 20,
		display: 'flex',
		alignItems: 'center',
		marginLeft: 30,
		marginTop: 20,
		marginBottom: 20,
	},
	reunionDisplay: {
		width: 100,
		backgroundColor: '#8561C5',
		borderRadius: 15,
		color: '#fff',
		fontSize: 15,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		height: 30,
	},
}));
