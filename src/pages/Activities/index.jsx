import { useEffect, useState } from "react"
import { Link, useRouteMatch } from "react-router-dom"
import Main from "../../components/Layout/Main"
import ActivityTypesService from "../../services/activityTypesService"

export default function Activities(props) {
	const [activityTypes, setActivityTypes] = useState([])
	const [isLoading, setIsLoading] = useState(false)

	let { url } = useRouteMatch()

	const activityTypesService = new ActivityTypesService()

	const loadActivityTypes = () => {
		setIsLoading(true)
		// activityTypesService.getActivityTypes()
		fetch('https://jsonplaceholder.typicode.com/todos/1')
			.then(data => {
				setActivityTypes([
					{
						"id": 1,
						"name": "Prueba1",
						"description": "Esto es una prueba",
						"status": true,
						"published_at": "2021-10-23T07:55:16.000Z",
						"created_at": "2021-10-23T07:55:01.000Z",
						"updated_at": "2021-10-23T07:55:16.000Z",
						"activity_type_id": {
							"id": 1,
							"NAME": "Prueba",
							"STATUS": true,
							"published_at": "2021-10-23T06:20:33.000Z",
							"created_at": "2021-10-23T06:20:24.000Z",
							"updated_at": "2021-10-23T06:20:33.000Z"
						}
					},
					{
						"id": 2,
						"name": "Prueba 2",
						"description": null,
						"status": false,
						"published_at": "2021-10-23T07:55:22.000Z",
						"created_at": "2021-10-23T07:55:22.000Z",
						"updated_at": "2021-10-23T07:55:22.000Z",
						"activity_type_id": {
							"id": 3,
							"NAME": "PruebaTA2",
							"STATUS": true,
							"published_at": "2021-10-23T06:20:33.000Z",
							"created_at": "2021-10-23T06:20:24.000Z",
							"updated_at": "2021-10-23T06:20:33.000Z"
						}
					}
				])
			})
			.catch(err => console.error(err))
			.finally(() => setIsLoading(false))
	}

	useEffect(loadActivityTypes, [])

	return (
		<Main title="Actividades" showButtonNew={props.showButtonNew}>
			<div className="flex flex-col">
				<div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
					<div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
						<div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
							<table className="min-w-full divide-y divide-gray-200">
								<thead className="bg-gray-50">
									<tr>
										<th
											scope="col"
											className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
										>
											Id
										</th>
										<th
											scope="col"
											className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
										>
											Nombre
										</th>
										<th
											scope="col"
											className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
										>
											Tipo de Actividad
										</th>
										<th
											scope="col"
											className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
										>
											Status
										</th>
										<th scope="col" className="relative px-6 py-3">
											<span className="sr-only">Edit</span>
										</th>
									</tr>
								</thead>
								<tbody className="bg-white divide-y divide-gray-200">
									{isLoading
										? (
											<tr className="text-center">
												<td colSpan="5">
													<span>Cargando...</span>
												</td>
											</tr>
										) : activityTypes.map((activityType) => (
											<tr key={activityType.id.toString()}>
												<td className="px-6 py-4 whitespace-nowrap">
													<div className="flex items-center">
														<div className="ml-4">
															<div className="text-sm font-medium text-gray-900">{activityType.id}</div>
														</div>
													</div>
												</td>
												<td className="px-6 py-4 whitespace-nowrap">
													<div className="text-sm text-gray-900">{activityType.name}</div>
												</td>
												<td className="px-6 py-4 whitespace-nowrap">
													<div className="text-sm text-gray-900">{activityType.activity_type_id.id}</div>
													<div className="text-sm text-gray-500">{activityType.activity_type_id.NAME}</div>
												</td>
												<td className="px-6 py-4 whitespace-nowrap">
													<span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${activityType.status ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
														{activityType.status ? 'Activo' : 'Inactivo'}
													</span>
												</td>
												<td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
													<Link to={`${url}/edit/${activityType.id}`} className="text-indigo-600 hover:text-indigo-900">
														Editar
													</Link>
												</td>
											</tr>
										))}
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		</Main>
	)
}
