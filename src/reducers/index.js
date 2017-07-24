import { combineReducers } from 'redux';
import CountriesReducer from 'C:\\Users\\Syed\\Documents\\reactProj\\ReduxSimpleStarter\\src\\reducers\\country_reducer';
import CitiesReducer from 'C:\\Users\\Syed\\Documents\\reactProj\\ReduxSimpleStarter\\src\\reducers\\city_reducer';
import ActionsReducer from './actions_reducer';

const rootReducer = combineReducers({
    countries: CountriesReducer,
    cities: CitiesReducer,
    actions: ActionsReducer
});

export default rootReducer;
