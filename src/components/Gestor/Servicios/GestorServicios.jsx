import { useState, useEffect } from 'react';

import { useDispatch } from 'react-redux';
import { getServices } from '../../../actions/services';
import Tabla from './Servicios/Tabla';

import useStyles from '../stylesTabla';
import { CssBaseline, Container, Paper } from '@material-ui/core';
import ToolbarCustom from '../../Customs/ToolbarCustom/ToolbarCustom';

export default function GestorCRUD() {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getServices('Mi_sindicato'));
	}, [dispatch]);
	const estilos = useStyles();
	return (
		<div>
			<CssBaseline />
			<ToolbarCustom />
			<div className={estilos.root}>
				<main className={estilos.content}>
					<div className={estilos.appBarSpacer}>
						<Container maxWidth='lg' className={estilos.container}>
							<Paper className={estilos.paper}>
								<Tabla />
							</Paper>
						</Container>
					</div>
				</main>
			</div>
		</div>
	);
}
