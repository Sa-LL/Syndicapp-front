import {
	Paper,
	Typography,
	FormControl,
	FormGroup,
	FormControlLabel,
	Checkbox,
} from '@material-ui/core';

import useStyles from './styles';

export default function Evento(props) {
	const estilos = useStyles();

	return (
		<Paper className={estilos.votacionContainer}>
			<div
				style={{
					display: 'flex',
					justifyContent: 'space-between',
				}}
			>
				<Typography className={estilos.reunionNombre}>
					EVENTO ABIERTO
				</Typography>
				<div style={{ margin: 10 }}>
					<Typography className={estilos.reunionDisplay}>
						Reunión
					</Typography>
				</div>
			</div>
			<Typography
				style={{
					fontSize: 17,
					marginLeft: 30,
					marginTop: 10,
				}}
			>
				{props.title}
			</Typography>
			<Typography
				style={{
					fontSize: 17,
					marginLeft: 30,
					marginTop: 20,
				}}
			>
				{props.description}
			</Typography>
			<Typography
				style={{
					fontSize: 17,
					marginLeft: 30,
					marginTop: 20,
				}}
			>
				Fecha de la reunión: {props.date}
			</Typography>
			<Typography
				style={{
					fontSize: 17,
					marginLeft: 30,
					marginTop: 10,
				}}
			>
				Link: https://meet.google.com/qso-kwof-fbq
			</Typography>
			<Typography
				style={{
					fontSize: 17,
					marginLeft: 30,
					marginTop: 10,
				}}
			>
				Organizador: Mi sindicato
			</Typography>
			<FormControl
				style={{ marginLeft: 40, marginTop: 20 }}
				component='fieldset'
			>
				<FormGroup aria-label='position' row>
					<FormControlLabel
						value='asistire'
						control={<Checkbox color='primary' />}
						label='Asistiré'
						labelPlacement='end'
					/>
				</FormGroup>
			</FormControl>
		</Paper>
	);
}
