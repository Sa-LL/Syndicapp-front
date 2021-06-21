import { useState } from 'react';
import {
	BottomNavigation,
	BottomNavigationAction,
	Dialog,
	DialogTitle,
	DialogContent,
	DialogContentText,
	TextField,
	DialogActions,
	Button,
} from '@material-ui/core';

import { useHistory } from 'react-router-dom';

import HomeIcon from '@material-ui/icons/Home';
import AccessibilityIcon from '@material-ui/icons/Accessibility';
import PriorityHighIcon from '@material-ui/icons/PriorityHigh';

export default function Navegacion({ current }) {
	const [open, setOpen] = useState(false);
	let history = useHistory();

	const handleOpen = () => {
		setOpen(!open);
	};

	const handleChange = (event, newValue) => {
		if (newValue === '/ayuda') {
			setOpen(true);
		} else {
			history.push(`/afiliado${newValue}`);
		}
	};

	return (
		<div style={{ width: 500 }}>
			<BottomNavigation
				value={current}
				onChange={handleChange}
				showLabels
				style={{ width: '100%', position: 'fixed', bottom: 0, left: 0 }}
			>
				<BottomNavigationAction
					label='Eventos'
					value='/eventos'
					icon={<HomeIcon />}
				/>
				<BottomNavigationAction
					label='Servicios'
					value='/servicios'
					icon={<AccessibilityIcon />}
				/>
				<BottomNavigationAction
					label='Botón de pánico'
					value='/ayuda'
					icon={<PriorityHighIcon />}
				/>
				{/* <BottomNavigationAction label="Folder" value="folder" icon={<FolderIcon />} /> */}
			</BottomNavigation>
			<Dialog open={open} onClose={handleOpen}>
				<DialogTitle>Botón de pánico</DialogTitle>
				<DialogContent>
					<DialogContentText>
						El botón de pánico se usa cuando sufres una situación
						que debe solucionarse de manera inmediata, por lo que
						solo debe ser usado en casos extremos, esta petición
						llegará de manera inmediata a los directivos del
						sindicato y darán respuesta lo más rápido posible
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
					<Button onClick={() => setOpen(false)} color='primary'>
						Cancelar
					</Button>
					<Button onClick={() => setOpen(false)} color='primary'>
						Enviar
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
}
