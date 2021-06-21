import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';

import { useHistory } from 'react-router-dom';

import HomeIcon from '@material-ui/icons/Home';
import AccessibilityIcon from '@material-ui/icons/Accessibility';

export default function NavegacionGestor({ current }) {
	let history = useHistory();

	const handleChange = (event, newValue) => {
		history.push(`/gestor${newValue}`);
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
					label='Gestionar'
					value='/gestionar'
					icon={<HomeIcon />}
				/>
				<BottomNavigationAction
					label='Eventos'
					value='/eventos'
					icon={<AccessibilityIcon />}
				/>
				<BottomNavigationAction
					label='Servicios'
					value='/servicios'
					icon={<AccessibilityIcon />}
				/>
				{/* <BottomNavigationAction label="Folder" value="folder" icon={<FolderIcon />} /> */}
			</BottomNavigation>
		</div>
	);
}
