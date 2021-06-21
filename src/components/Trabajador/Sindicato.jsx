import { useEffect } from 'react';
import { Grid } from '@material-ui/core';

import useStyles from './stylesSindicatos';
import ToolbarCustom from '../Customs/ToolbarCustom/ToolbarCustom';

import Eventos from './Features/Eventos/Eventos';
import Servicios from './Features/Servicios/Servicios';
import { useDispatch } from 'react-redux';
import { getServices } from '../../actions/services';
import { getEvents } from '../../actions/eventos';

export default function Sindicato({ eventos, servicios }) {
	const estilos = useStyles();

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getServices('Mi_sindicato'));
		dispatch(getEvents('Mi_sindicato'));
	}, [dispatch]);

	return (
		<div>
			<ToolbarCustom />
			<div className={estilos.container}>
				<Grid
					container
					spacing={2}
					direction='column'
					alignItems='center'
				>
					{eventos && <Eventos />}
					{servicios && (
						<div>
							<Servicios />
						</div>
					)}
				</Grid>
			</div>
		</div>
	);
}
