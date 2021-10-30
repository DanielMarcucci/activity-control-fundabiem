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
import VolunteerPositionsForm from '../../pages/VolunteerPositions/Form'
import Volunteer from '../../pages/Volunteer'
import VolunteerForm from '../../pages/Volunteer/Form'
import EstateEvents from  '../../pages/EstateEvents'
import EstateEventsForm from  '../../pages/EstateEvents/Form'


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
				<Route exact path={`${url}/volunteer-positions/add`} component={VolunteerPositionsForm} />
				<Route exact path={`${url}/volunteer-positions/edit/:id`} component={() => <ActivitiesForm showButtonNew={true} />} />
				<Route exact path={`${url}/voluntaries`} component={() => <Volunteer showButtonNew={true} />} />
				<Route exact path={`${url}/voluntaries/add`} component={VolunteerForm} />
				<Route exact path={`${url}/voluntaries/edit/:id`} component={() => <ActivitiesForm showButtonNew={true} />} />
				<Route exact path={`${url}/event-statuses`} component={() => <EstateEvents showButtonNew={true} />} />
				<Route exact path={`${url}/event-statuses/add`} component={EstateEventsForm} />
				<Route exact path={`${url}/event-statuses/edit/:id`} component={() => <ActivitiesForm showButtonNew={true} />} />
			</Switch>
		</div>
	)
}