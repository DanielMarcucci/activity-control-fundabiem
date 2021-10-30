import { Fragment, useRef } from 'react'
import { Disclosure, Menu, Transition, Popover } from '@headlessui/react'
import {
  BellIcon, MenuIcon, XIcon, BookmarkAltIcon,
  CalendarIcon,
  ChartBarIcon,
  CursorClickIcon,
  RefreshIcon,
  ShieldCheckIcon,
  SupportIcon,
  ViewGridIcon
} from '@heroicons/react/outline'
import { ChevronDownIcon } from '@heroicons/react/solid'
import { useHistory, useRouteMatch } from 'react-router'
import { Link } from 'react-router-dom'
import { useAuth } from '../Auth'

const user = {
  name: 'Tom Cook',
  email: 'tom@example.com',
  imageUrl:
    'https://i.pinimg.com/280x280_RS/2e/45/66/2e4566fd829bcf9eb11ccdb5f252b02f.jpg',
}
const navigation = [
  { name: 'Inicio', href: '#', current: true },
  { name: 'Actividades', href: '#', current: false },
  { name: 'Mantenimientos', href: '#', current: false },
  { name: 'Calendar', href: '#', current: false },
  { name: 'Rerportes', href: '#', current: false },
]
// const callsToAction = [
//   { name: 'Watch Demo', href: '#', icon: PlayIcon },
//   { name: 'Contact Sales', href: '#', icon: PhoneIcon },
// ]
const resources = [
  {
    name: 'Listado de Eventos',
    description: 'Aquí podrás descargar un de eventos según rango de fecha.',
    href: '#',
    icon: SupportIcon,
  },
  {
    name: 'Listado de Detallado de Eventos',
    description: 'Aquí podrás descargar un reporte detallado de los eventos según rango de fecha.',
    href: '#',
    icon: BookmarkAltIcon,
  },
  {
    name: 'Listado de Voluntarios',
    description: 'Descarga el reporte de voluntarios.',
    href: '#',
    icon: CalendarIcon,
  },
  { name: 'Listado', description: 'De algo.', href: '#', icon: ShieldCheckIcon },
]
// const recentPosts = [
//   { id: 1, name: 'Boost your conversion rate', href: '#' },
//   { id: 2, name: 'How to use search engine optimization to drive traffic to your site', href: '#' },
//   { id: 3, name: 'Improve your customer experience', href: '#' },
// ]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function SignOutButton() {
  let history = useHistory();
  let auth = useAuth();

  return (
    <button
      onClick={() => {
        auth.signout(() => history.push("/"));
      }}
      className='block w-full px-4 py-2 text-sm text-left text-gray-700 hover:bg-gray-100'
    >
      Cerrar Sesión
    </button>
  );
}

export default function NavBar() {
  const buttonCatalogRef = useRef();
  // const buttonReportRef = useRef();

  let { url } = useRouteMatch();

  const userNavigation = [
    { name: 'Tu Perfil', path: `${url}/perfil` },
    // { name: 'Configuración', href: '#' },
    // { name: 'Cerrar Sesión', path: '/' },
  ]
  const solutions = [
    {
      name: 'Tipos de Actividades',
      description: 'Gestiona múltiples tipos de actividades que se verán reflejados en actividades de los futuros eventos.',
      to: `${url}/activity-type`,
      icon: ChartBarIcon,
    },
    {
      name: 'Actividades',
      description: 'Gestiona las actividades que realizarán los voluntarios, se reglejará al crear un evento',
      to: `${url}/activities`,
      icon: CursorClickIcon,
    },
    {
      name: 'Posiciones de Voluntariado',
      description: "Al tener diferentes jerarquías de voluntarios necesitas llevar este control desde este mantenimiento.",
      to: `${url}/volunteer-positions`,
      icon: ViewGridIcon,
    },
    {
      name: 'Voluntarios',
      description: "Tus voluntarios serán gestionados desde aquí.",
      to: `${url}/voluntaries`,
      icon: ShieldCheckIcon
    },
    {
      name: 'Estatus de Eventos',
      description: 'Gestiona los estados en los que pueden estar tus eventos.',
      to: `${url}/event-statuses`,
      icon: RefreshIcon,
    },
  ]

  return (
    <Disclosure as="nav" className="bg-gray-800 fixed w-full top-0">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  {/* <img
                      className="h-8 w-8"
                      src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                      alt="Workflow"
                    /> */}
                  <span className="px-3 py-2 rounded-md text-sm font-medium group inline-flex items-center text-gray-300 hover:bg-gray-700 hover:text-white">Fundabiem</span>
                </div>
                {/* <div className="hidden md:block">
                    <div className="ml-10 flex items-baseline space-x-4">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            item.current
                              ? 'bg-gray-900 text-white'
                              : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                            'px-3 py-2 rounded-md text-sm font-medium'
                          )}
                          aria-current={item.current ? 'page' : undefined}
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div> */}
              </div>
              <Popover className="relative">
                <div className="-mr-2 -my-2 md:hidden">
                  {/* <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                        <span className="sr-only">Open menu</span>
                        <MenuIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button> */}
                </div>
                <Popover.Group as="nav" className="hidden md:flex space-x-4 ml-10 flex items-baseline">

                  <Link
                    to={`${url}/events`}
                    className="px-3 py-2 rounded-md text-sm group inline-flex items-center font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                  >
                    Eventos
                  </Link>

                  <Popover className="relative">
                    {({ open }) => (
                      <>
                        <Popover.Button
                          ref={buttonCatalogRef}
                          className={classNames(
                            open
                              ? 'bg-gray-900 text-white'
                              : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                            'px-3 py-2 rounded-md text-sm font-medium group inline-flex items-center'
                            // open ? 'text-gray-900' : 'text-gray-500',
                            // 'group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                          )}
                        >
                          <span>Catálogos</span>
                          <ChevronDownIcon
                            className={classNames(
                              open ? 'text-gray-600' : 'text-gray-400',
                              'ml- h-5 w-5 group-hover:text-gray-500'
                            )}
                            aria-hidden="true"
                          />
                        </Popover.Button>

                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-200"
                          enterFrom="opacity-0 translate-y-1"
                          enterTo="opacity-100 translate-y-0"
                          leave="transition ease-in duration-150"
                          leaveFrom="opacity-100 translate-y-0"
                          leaveTo="opacity-0 translate-y-1"
                        >
                          {/* <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                        {userNavigation.map((item) => (
                          <Menu.Item key={item.name}>
                            {({ active }) => (
                              <Link
                                to={item.path}
                                className={classNames(
                                  active ? 'bg-gray-100' : '',
                                  'block px-4 py-2 text-sm text-gray-700'
                                )}
                              >
                                {item.name}
                              </Link>
                            )}
                          </Menu.Item>
                        ))}
                        <Menu.Item key="signout">
                          {({ active }) => (
                            <SignOutButton active={active} />
                          )}
                        </Menu.Item>
                      </Menu.Items> */}
                          {/* absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2 */}
                          <Popover.Panel className="absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-md sm:px-0">
                            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                              <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                                {solutions.map((item) => (
                                  <Link
                                    key={item.name}
                                    to={item.to}
                                    className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                                    onClick={() => buttonCatalogRef.current?.click()}
                                  >
                                    <item.icon className="flex-shrink-0 h-6 w-6 text-indigo-600" aria-hidden="true" />
                                    <div className="ml-4">
                                      <p className="text-base font-medium text-gray-900">{item.name}</p>
                                      <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                                    </div>
                                  </Link>
                                ))}
                              </div>
                              {/* <div className="px-5 py-5 bg-gray-50 space-y-6 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
                                  {callsToAction.map((item) => (
                                    <div key={item.name} className="flow-root">
                                      <a
                                        href={item.href}
                                        className="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-100"
                                      >
                                        <item.icon className="flex-shrink-0 h-6 w-6 text-gray-400" aria-hidden="true" />
                                        <span className="ml-3">{item.name}</span>
                                      </a>
                                    </div>
                                  ))}
                                </div> */}
                            </div>
                          </Popover.Panel>
                        </Transition>
                      </>
                    )}
                  </Popover>

                  <Popover className="relative">
                    {({ open }) => (
                      <>
                        <Popover.Button
                          className={classNames(
                            open
                              ? 'bg-gray-900 text-white'
                              : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                            'px-3 py-2 rounded-md text-sm font-medium group inline-flex items-center'
                          )}
                        >
                          <span>Reportes</span>
                          <ChevronDownIcon
                            className={classNames(
                              open ? 'text-gray-600' : 'text-gray-400',
                              'ml-2 h-5 w-5 group-hover:text-gray-500'
                            )}
                            aria-hidden="true"
                          />
                        </Popover.Button>

                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-200"
                          enterFrom="opacity-0 translate-y-1"
                          enterTo="opacity-100 translate-y-0"
                          leave="transition ease-in duration-150"
                          leaveFrom="opacity-100 translate-y-0"
                          leaveTo="opacity-0 translate-y-1"
                        >
                          <Popover.Panel className="absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-md sm:px-0">
                            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                              <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                                {resources.map((item) => (
                                  <a
                                    key={item.name}
                                    href={item.href}
                                    className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                                  >
                                    <item.icon className="flex-shrink-0 h-6 w-6 text-indigo-600" aria-hidden="true" />
                                    <div className="ml-4">
                                      <p className="text-base font-medium text-gray-900">{item.name}</p>
                                      <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                                    </div>
                                  </a>
                                ))}
                              </div>
                              {/* <div className="px-5 py-5 bg-gray-50 sm:px-8 sm:py-8">
                                  <div>
                                    <h3 className="text-sm tracking-wide font-medium text-gray-500 uppercase">Recent Posts</h3>
                                    <ul role="list" className="mt-4 space-y-4">
                                      {recentPosts.map((post) => (
                                        <li key={post.id} className="text-base truncate">
                                          <a href={post.href} className="font-medium text-gray-900 hover:text-gray-700">
                                            {post.name}
                                          </a>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                  <div className="mt-5 text-sm">
                                    <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                                      {' '}
                                      View all posts <span aria-hidden="true">&rarr;</span>
                                    </a>
                                  </div>
                                </div> */}
                            </div>
                          </Popover.Panel>
                        </Transition>
                      </>
                    )}
                  </Popover>
                </Popover.Group>
              </Popover>
              <div className="hidden md:block">
                <div className="ml-4 flex items-center md:ml-6">
                  <button
                    type="button"
                    className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                  >
                    <span className="sr-only">View notifications</span>
                    <BellIcon className="h-6 w-6" aria-hidden="true" />
                  </button>

                  {/* Profile dropdown */}
                  <Menu as="div" className="ml-3 relative">
                    <div>
                      <Menu.Button className="max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                        <span className="sr-only">Open user menu</span>
                        <img className="h-8 w-8 rounded-full" src={user.imageUrl} alt="" />
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                        {userNavigation.map((item) => (
                          <Menu.Item key={item.name}>
                            {({ active }) => (
                              <Link
                                to={item.path}
                                className={classNames(
                                  active ? 'bg-gray-100' : '',
                                  'block px-4 py-2 text-sm text-gray-700'
                                )}
                              >
                                {item.name}
                              </Link>
                            )}
                          </Menu.Item>
                        ))}
                        <Menu.Item key="signout">
                          {({ active }) => (
                            <SignOutButton active={active} />
                          )}
                        </Menu.Item>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
              </div>
              <div className="-mr-2 flex md:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block px-3 py-2 rounded-md text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </a>
              ))}
            </div>
            <div className="pt-4 pb-3 border-t border-gray-700">
              <div className="flex items-center px-5">
                <div className="flex-shrink-0">
                  <img className="h-10 w-10 rounded-full" src={user.imageUrl} alt="" />
                </div>
                <div className="ml-3">
                  <div className="text-base font-medium leading-none text-white">{user.name}</div>
                  <div className="text-sm font-medium leading-none text-gray-400">{user.email}</div>
                </div>
                <button
                  type="button"
                  className="ml-auto bg-gray-800 flex-shrink-0 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                >
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-3 px-2 space-y-1">
                {userNavigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}