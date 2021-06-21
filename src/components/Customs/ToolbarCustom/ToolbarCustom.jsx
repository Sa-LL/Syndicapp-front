import React from 'react';
import {
	CssBaseline,
	AppBar,
	Toolbar,
	IconButton,
	Typography,
	InputBase,
} from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import SearchIcon from '@material-ui/icons/Search';
import useStyles from './stylesToolbar';
import { useHistory } from 'react-router-dom';

export default function ToolbarCustom(props) {
	const estilos = useStyles();
	let history = useHistory();
	const { result } = JSON.parse(localStorage.getItem('profile'));
	return (
		<div className={estilos.root}>
			<CssBaseline />
			<AppBar position='static'>
				<Toolbar>
					<div
						edge='start'
						className={estilos.menuButton}
						color='inherit'
						aria-label='current user'
					>
						<AccountCircleIcon fontSize='large' />
					</div>
					<Typography className={estilos.title} variant='h6' noWrap>
						{result.name} -{' '}
						{result.role.charAt(0).toUpperCase() +
							result.role.slice(1)}
					</Typography>
					{props.searchBar ? (
						<div className={estilos.search}>
							<div className={estilos.searchIcon}>
								<SearchIcon />
							</div>
							<InputBase
								placeholder='Buscar...'
								classes={{
									root: estilos.inputRoot,
									input: estilos.inputInput,
								}}
								inputProps={{ 'aria-label': 'search' }}
							/>
						</div>
					) : null}
					<IconButton
						onClick={() => history.push('/')}
						aria-label='close session'
						color='inherit'
					>
						<PowerSettingsNewIcon />
					</IconButton>
				</Toolbar>
			</AppBar>
		</div>
	);
}
