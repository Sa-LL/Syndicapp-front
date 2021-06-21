import { useEffect } from 'react';

import { useDispatch } from 'react-redux';
import { getUsers } from '../../../actions/gestor';
import Tabla from './CRUD/Tabla';

import useStyles from '../stylesTabla';
import { CssBaseline, Container, Paper } from '@material-ui/core';
import ToolbarCustom from '../../Customs/ToolbarCustom/ToolbarCustom';

export default function GestorCRUD() {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getUsers('Mi_sindicato'));
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
