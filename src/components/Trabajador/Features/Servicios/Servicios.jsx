import { useState, useEffect } from 'react';
import {
	Dialog,
	DialogTitle,
	DialogContent,
	DialogContentText,
	TextField,
	DialogActions,
	Button,
	ButtonBase,
	Grid,
	Typography,
	Icon,
} from '@material-ui/core';

import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import GavelIcon from '@material-ui/icons/Gavel';
import WeekendIcon from '@material-ui/icons/Weekend';
import ErrorIcon from '@material-ui/icons/Error';
import { useSelector } from 'react-redux';

let serviciosData = [
	{
		title: 'Asesoría jurídica',
		description:
			'Asesoría con un abogado de tu red sindical en el contexto del derecho del trabajo.',
		imgSrc: <GavelIcon style={{ height: 60, width: 60 }} />,
	},
	{
		title: 'Consulta convencional',
		description:
			'Consulta al alto mando de tu sindicato sobre información o situaciones específicas sobre el sindicato y/o su historia.',
		imgSrc: <WeekendIcon style={{ height: 60, width: 60, marginTop: 5 }} />,
	},
	{
		title: 'Consulta de acoso laboral',
		description:
			'Consulta o infórmate sobre si tú o alguien más sufre de acoso laboral o denuncia hechos relacionados al acoso laboral en tu institución.',
		imgSrc: <ErrorIcon style={{ height: 60, width: 60, marginTop: 20 }} />,
	},
];

export default function Servicios() {
	const services = useSelector((state) => state.services);
	console.log(services);
	// States
	serviciosData = serviciosData.concat(services);
	const [open, setOpen] = useState(false);
	const [openConsulta, setOpenConsulta] = useState(false);
	const [openConsulta2, setOpenConsulta2] = useState(false);

	// Handlers
	const handleOpen = () => {
		setOpen(!open);
	};
	const handleOpenConsulta = () => {
		setOpenConsulta(!openConsulta);
	};

	const handleOpenConsulta2 = () => {
		setOpenConsulta2(!openConsulta2);
	};

	const getServicios = () => {
		return serviciosData.map(({ title, description, imgSrc }, index) => (
			<ButtonBase
				style={{
					marginLeft: 70,
					width: 370,
					height: 120,
					marginTop: 40,
					// backgroundColor: '#8561C5',
					// color: '#fff',
					border: '3px solid #8561C5',
					borderRadius: 15,
					padding: 10,
					backgroundColor: '#fff',
				}}
				onClick={() => {
					if (title === 'Asesoría jurídica') {
						handleOpen();
					} else if (title === 'Consulta convencional') {
						handleOpenConsulta();
					} else if (title === 'Consulta de acoso laboral') {
						handleOpenConsulta2();
					}
				}}
				key={index}
			>
				<Grid container spacing={2}>
					<Grid item>
						<Icon style={{ marginLeft: 10 }}>{imgSrc}</Icon>
					</Grid>
					<Grid item xs={6} sm container>
						<Grid item xs container direction='column' spacing={2}>
							<Grid
								style={{
									display: 'flex',
									flexDirection: 'column',
									alignItems: 'flex-start',
									textAlign: 'left',
								}}
								item
								xs
							>
								<Typography
									style={{
										fontSize: 18,
										color: '#482880',
										fontWeight: 'bold',
									}}
									gutterBottom
									variant='subtitle1'
								>
									{title}
								</Typography>
								<Typography
									style={{
										fontSize: 14,
										color: '#482880',
									}}
									variant='body2'
									gutterBottom
								>
									{description}
								</Typography>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</ButtonBase>
		));
	};

	return (
		<div style={{ marginBottom: 100 }}>
			{getServicios()}
			<Dialog open={open} onClose={handleOpen}>
				<DialogTitle>Elegir fecha</DialogTitle>
				<DialogContent>
					<MuiPickersUtilsProvider
						utils={DateFnsUtils}
						// locale={esLocale}
					>
						<DatePicker
							label='Elegir fecha'
							inputVariant='outlined'
							format='dd/MM/yyyy'
							onChange={() => null}
						/>
					</MuiPickersUtilsProvider>
				</DialogContent>
			</Dialog>
			<Dialog open={openConsulta} onClose={handleOpenConsulta}>
				<DialogTitle>Consulta convencional</DialogTitle>
				<DialogContent>
					<DialogContentText>
						Describe tu situación problema con relación a consultas
						convencionales
					</DialogContentText>
					<TextField
						autoFocus
						margin='dense'
						label='Asunto'
						fullWidth
					/>
					<TextField margin='dense' label='Descripción' fullWidth />
				</DialogContent>
				<DialogActions>
					<Button
						onClick={() => setOpenConsulta(false)}
						color='primary'
					>
						Cancelar
					</Button>
					<Button
						onClick={() => setOpenConsulta(false)}
						color='primary'
					>
						Enviar
					</Button>
				</DialogActions>
			</Dialog>
			<Dialog open={openConsulta2} onClose={handleOpenConsulta2}>
				<DialogTitle>Consulta de acoso laboral</DialogTitle>
				<DialogContent>
					<DialogContentText>
						Describe tu situación problema con relación a consultas
						de acoso laboral
					</DialogContentText>
					<TextField
						autoFocus
						margin='dense'
						label='Asunto'
						fullWidth
					/>
					<TextField margin='dense' label='Descripción' fullWidth />
				</DialogContent>
				<DialogActions>
					<Button
						onClick={() => setOpenConsulta2(false)}
						color='primary'
					>
						Cancelar
					</Button>
					<Button
						onClick={() => setOpenConsulta2(false)}
						color='primary'
					>
						Enviar
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
}
