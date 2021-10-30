import { useRouteMatch } from 'react-router';
import { Switch, Route } from "react-router-dom";
import NavBar from '../../components/Layout/navigation/NavBar'
import Home from '../../pages/Home';
import Events from '../../pages/Events';
import EventForm from '../../pages/Events/Form';
import ActivityTypes from '../../pages/ActivityTypes';
import ActivityTypeForm from '../../pages/ActivityTypes/Form';
import Activities from '../../pages/Activities';
import ActivitiesForm from '../../pages/Activities/Form';
import VolunteerPositions from '../../pages/VolunteerPositions'

// import Headding from './Headding';

export default function Layout(props) {
	let { url } = useRouteMatch();

	return (
		<div>
			<NavBar />
			<Switch>
				<Route exact path={`${url}/home`} component={Home} />
				<Route exact path={`${url}/events`} component={Events} />
				<Route exact path={`${url}/events/add`} component={EventForm} />
				<Route exact path={`${url}/events/edit/:id`} component={() => <EventForm showButtonNew={true} />} />
				<Route exact path={`${url}/activity-type`} component={() => <ActivityTypes showButtonNew={true} />} />
				<Route exact path={`${url}/activity-type/add`} component={ActivityTypeForm} />
				<Route exact path={`${url}/activity-type/edit/:id`} component={() => <ActivityTypeForm showButtonNew={true} />} />
				<Route exact path={`${url}/activities`} component={() => <Activities showButtonNew={true} />} />
				<Route exact path={`${url}/activities/add`} component={ActivitiesForm} />
				<Route exact path={`${url}/activities/edit/:id`} component={() => <ActivitiesForm showButtonNew={true} />} />
				<Route exact path={`${url}/volunteer-positions`} component={() => <VolunteerPositions showButtonNew={true} />} />
				<Route exact path={`${url}/volunteer-positions/add`} component={ActivitiesForm} />
				<Route exact path={`${url}/volunteer-positions/edit/:id`} component={() => <ActivitiesForm showButtonNew={true} />} />
			</Switch>
		</div>
	)
}