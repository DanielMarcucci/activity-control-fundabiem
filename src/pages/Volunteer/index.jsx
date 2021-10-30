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
      					"dpi": "3169012290505",
        			    "firstname": "Bryan",
        				"secondname": "Eduardo",
       				    "firstsurname": "Lucero",
        				"secondsurname": "de Paz",
  				        "address": "de mi Casa",
  		                "birthdate": "2021-10-17",
        				"cityid": null,
       				    "stateid": null,
        				"zipcode": "151552",
     				    "phone": 46398632,
       			    	"status": true,
    				    "published_at": "2021-10-23T08:24:37.000Z",
        				"created_at": "2021-10-23T08:24:34.000Z",
        				"updated_at": "2021-10-23T08:24:38.000Z",
       					 "city_id": {
          			     "id": 1,
         			     "name": "Ciudad de Guatemala ",
           			     "stateid": null,
           				 "status": true,
          			     "published_at": "2021-10-23T08:07:44.000Z",
            			 "created_at": "2021-10-23T08:07:41.000Z",
            			 "updated_at": "2021-10-23T08:07:44.000Z",
            			 "state_id": 1
        					},
        				"state_id": {
            				"id": 1,
            				"name": "Guatemala",
            				"countryid": null,
          				    "status": true,
           				    "published_at": "2021-10-23T08:06:55.000Z",
        				    "created_at": "2021-10-23T08:06:52.000Z",
            				"updated_at": "2021-10-23T08:06:55.000Z",
         					"country_id": 1
        				},
       					 "volunteerposition_id": {
         				     "id": 1,
           					 "name": "Coordinador",
      				         "icon": "coordinador",
            				 "status": true,
                             "published_at": "2021-10-23T08:08:55.000Z",
                             "created_at": "2021-10-23T08:08:53.000Z",
            				 "updated_at": "2021-10-23T08:08:55.000Z"
    					    }
					}
				])
			})
			.catch(err => console.error(err))
			.finally(() => setIsLoading(false))
	}

	useEffect(loadVolunteerPositions, [])

	return (
		<Main title="Voluntarios" showButtonNew={props.showButtonNew}>
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
											DPI
										</th>
										<th
											scope="col"
											className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
										>
											PRIMER NOMBRE
										</th>
										<th
											scope="col"
											className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
										>
											SEGUNDO NOMBRE
										</th>
										<th
											scope="col"
											className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
										>
											PRIMER APELLIDO
										</th>
										<th
											scope="col"
											className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
										>
											SEGUNDO APELLIDO
										</th>
										<th
											scope="col"
											className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
										>
											DIRECCION
										</th>
										<th
											scope="col"
											className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
										>
											FECHA DE CUMPLEAÑOS 
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
										) : volunteerPositions.map((voluntaries) => (
											<tr key={voluntaries.id.toString()}>
												<td className="px-6 py-4 whitespace-nowrap">
													<div className="flex items-center">
														<div className="ml-4">
															<div className="text-sm font-medium text-gray-900">{voluntaries.id}</div>
														</div>
													</div>
												</td>
												<td className="px-6 py-4 whitespace-nowrap">
													<div className="text-sm text-gray-900">{voluntaries.dpi}</div>
												</td>
												<td className="px-6 py-4 whitespace-nowrap">
													<div className="text-sm text-gray-900">{voluntaries.firstname}</div>
												</td>
												<td className="px-6 py-4 whitespace-nowrap">
													<div className="text-sm text-gray-900">{voluntaries.secondname}</div>
												</td>
												<td className="px-6 py-4 whitespace-nowrap">
													<div className="text-sm text-gray-900">{voluntaries.firstsurname}</div>
												</td>
												<td className="px-6 py-4 whitespace-nowrap">
													<div className="text-sm text-gray-900">{voluntaries.secondsurname}</div>
												</td>
												<td className="px-6 py-4 whitespace-nowrap">
													<div className="text-sm text-gray-900">{voluntaries.address}</div>
												</td>
												<td className="px-6 py-4 whitespace-nowrap">
													<div className="text-sm text-gray-900">{voluntaries.birthdate}</div>
												</td>
												<td className="px-6 py-4 whitespace-nowrap">
													<span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${voluntaries.status ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
														{voluntaries.status ? 'Activo' : 'Inactivo'}
													</span>
												</td>
												<td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
													<Link to={`${url}/edit/${voluntaries.id}`} className="text-indigo-600 hover:text-indigo-900">
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
