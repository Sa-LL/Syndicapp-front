import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Title from './Title';
import MaterialTable from 'material-table';
import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';
import { forwardRef } from 'react';
import { createServices } from '../../../../actions/services';

function createData(title, description) {
	return { title, description };
}

const rows = [
	createData(
		'Asesoría jurídica',
		'Asesoría con un abogado de tu red sindical en el contexto del derecho del trabajo'
	),
	createData(
		'Consulta convencional',
		'Consulta al alto mando de tu sindicato sobre información o situaciones específicas sobre el sindicato y/o su historia'
	),
	createData(
		'Consulta de acoso laboral',
		'Consulta o infórmate sobre si tú o alguien más sufre de acoso laboral o denuncia hechos relacionados al acoso laboral en tu institución'
	),
];

const tableIcons = {
	Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
	Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
	Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
	Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
	DetailPanel: forwardRef((props, ref) => (
		<ChevronRight {...props} ref={ref} />
	)),
	Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
	Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
	Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
	FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
	LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
	NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
	PreviousPage: forwardRef((props, ref) => (
		<ChevronLeft {...props} ref={ref} />
	)),
	ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
	Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
	SortArrow: forwardRef((props, ref) => (
		<ArrowDownward {...props} ref={ref} />
	)),
	ThirdStateCheck: forwardRef((props, ref) => (
		<Remove {...props} ref={ref} />
	)),
	ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />),
};

export default function Tabla() {
	let datos = useSelector((state) => state.services);
	const dispatch = useDispatch();
	const [state, setState] = useState({
		columns: [
			{
				title: 'Nombre del servicio',
				field: 'title',
			},
			{
				title: 'Descripción',
				field: 'description',
			},
		],
	});

	const getUsers = (res) => {
		setState((prevState) => {
			const { data: removedState, ...currentState } = prevState;
			currentState.data = [];
			return currentState;
		});
		res.map((obj) =>
			setState((prevState) => {
				const data = [...prevState.data];
				data.push({ ...obj, pass: 'Cifrada' });
				return { ...prevState, data };
			})
		);
		rows.map((a) =>
			setState((prevState) => {
				const data = [...prevState.data];
				data.push(a);
				return { ...prevState, data };
			})
		);
	};
	useEffect(() => {
		getUsers(datos);
	}, [datos]);

	return (
		<div>
			<MaterialTable
				icons={tableIcons}
				localization={{
					header: {
						actions: 'Acciones',
					},
					toolbar: {
						searchPlaceholder: 'Búsqueda',
						searchTooltip: 'Búsqueda',
					},
					pagination: {
						labelRowsSelect: 'filas',
					},
					body: {
						emptyDataSourceMessage:
							'No hay información para mostrar',
						addTooltip: 'Añadir',
						deleteTooltip: 'Eliminar',
						editTooltip: 'Editar',
					},
				}}
				title={<Title>Servicios de Mi sindicato</Title>}
				columns={state.columns}
				data={state.data}
				options={{ actionsColumnIndex: -1 }}
				editable={{
					onRowAdd: (sendData) => {
						return dispatch(
							createServices({
								...sendData,
								sindicato: 'Mi_sindicato',
							})
						);
					},
				}}
			/>
		</div>
	);
}
