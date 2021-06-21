import { Grid } from '@material-ui/core';

import useStyles from './styles';
import { useSelector } from 'react-redux';
import Evento from './Evento/Evento';
export default function Eventos() {
	const events = useSelector((state) => state.events);

	const getEventos = () => {
		return events.map(({ name, description, date, participantes }, i) => {
			if (events.length === i + 1)
				return (
					<Grid item xs={12} sm={12} md={events.length % 2 ? 12 : 5}>
						<Evento
							title={name}
							description={description}
							date={date}
							participantes={participantes}
						/>
					</Grid>
				);
			return (
				<Grid item xs={12} sm={12} md={5}>
					<Evento
						title={name}
						description={description}
						date={date}
						participantes={participantes}
					/>
				</Grid>
			);
		});
	};
	const estilos = useStyles();
	return (
		<Grid container className={estilos.containerEventos}>
			{/* Usar map agregando propiedades */}
			{getEventos()}
		</Grid>
	);
}
