
import { FETCH_WEATHER} from '../actions';


export default function(state = {}, action){

  switch(action.type){
    case FETCH_WEATHER:{
      //console.log("CASE FETCH_WEATHER");
      //mapDispatchToProps will put these things into props
      //console.log(action.payload.data);
      //console.log("xml")
      //console.log(xml.toString());


            //console.log("obj data");
          //console.log(obj.data);
      return action.payload;
    }

}

return state;

}
