import { combineReducers } from 'redux';
import CountriesReducer from './country_reducer';
import CitiesReducer from './city_reducer';
import ActionsReducer from './actions_reducer';

const rootReducer = combineReducers({
    countries: CountriesReducer,
    cities: CitiesReducer,
    actions: ActionsReducer
});

export default rootReducer;
