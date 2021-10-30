import { useEffect, useState } from "react"
import { Link, useRouteMatch } from "react-router-dom"
import Main from "../../components/Layout/Main"
// import VolunteerPositionsService from "../../services/volunteerPositionsService"

export default function Activities(props) {
	const [volunteerPositions, setVolunteerPositions] = useState([])
	const [isLoading, setIsLoading] = useState(false)

	let { url } = useRouteMatch()

	// const volunteerPositionsService = new VolunteerPositionsService()

	const loadVolunteerPositions = () => {
		setIsLoading(true)
		// volunteerPositionsService.getVolunteerPositions()
		fetch('https://jsonplaceholder.typicode.com/todos/1')
			.then(data => {
				setVolunteerPositions([
                    {
                        "id": 1,
                        "name": "Evento1",
                        "description": "evento1",
                        "status": true,
                        "published_at": "2021-10-23T08:14:51.000Z",
                        "created_at": "2021-10-23T08:14:49.000Z",
                        "updated_at": "2021-10-23T08:14:51.000Z"
                    }
				])
			})
			.catch(err => console.error(err))
			.finally(() => setIsLoading(false))
	}

	useEffect(loadVolunteerPositions, [])

	return (
		<Main title="Estado Evento" showButtonNew={props.showButtonNew}>
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
											NOMBRE
										</th>
										<th
											scope="col"
											className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
										>
                                            DESCRIPCION
										</th>
										<th
											scope="col"
											className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
										>
											STATUS
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
												<td colSpan="4">
													<span>Cargando...</span>
												</td>
											</tr>
										) : volunteerPositions.map((EstateEvents) => (
											<tr key={EstateEvents.id.toString()}>
												<td className="px-6 py-4 whitespace-nowrap">
													<div className="flex items-center">
														<div className="ml-4">
															<div className="text-sm font-medium text-gray-900">{EstateEvents.id}</div>
														</div>
													</div>
												</td>
												<td className="px-6 py-4 whitespace-nowrap">
													<div className="text-sm text-gray-900">{EstateEvents.name}</div>
												</td>
												<td className="px-6 py-4 whitespace-nowrap">
													<div className="text-sm text-gray-900">{EstateEvents.description}</div>
												</td>
                                                <td className="px-6 py-4 whitespace-nowrap">
													<span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${EstateEvents.status ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
														{EstateEvents.status ? 'Activo' : 'Inactivo'}
													</span>
												</td>
												<td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
													<Link to={`${url}/edit/${EstateEvents.id}`} className="text-indigo-600 hover:text-indigo-900">
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
