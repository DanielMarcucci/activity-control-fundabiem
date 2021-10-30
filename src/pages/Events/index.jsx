import { useRouteMatch } from 'react-router';
import { Link } from "react-router-dom"
import Main from "../../components/Layout/Main"

/* This example requires Tailwind CSS v2.0+ */
const events = [
  {
    eventId: 1,
    address: 'Mac Donal\'s la Sexta',
    startDate: '17/10/2021 12:00 PM',
    endDate: '17/10/2021 06:00 PM',
    eventStatusId: 'Activo',
  },
  {
    eventId: 2,
    address: 'Burguer King Pacific San Miguel Petapa',
    startDate: '10/10/2021 04:00 PM',
    endDate: '10/10/2021 05:00 PM',
    eventStatusId: 'Finalizado',
  },
]

export default function Events() {
  const {url} = useRouteMatch()

  return (
    <Main title="Eventos" showButtonNew={true}>
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
                    Lugar
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Inicia
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Finaliza
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
                {events.map((event) => (
                  <tr key={event.eventId}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">{event.address}</div>
                          {/* <div className="text-sm text-gray-500">{event.email}</div> */}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{event.startDate}</div>
                      {/* <div className="text-sm text-gray-500">{event.department}</div> */}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{event.endDate}</div>
                      {/* <div className="text-sm text-gray-500">{event.department}</div> */}
                    </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${event.eventStatusId === 'Activo' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                        {event.eventStatusId}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{event.role}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <Link to={`${url}/edit/${event.eventId}`} className="text-indigo-600 hover:text-indigo-900">
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
