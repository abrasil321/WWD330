import { getJSON, getLocation} from './utilities.js';
import QuakesController from './QuakesController.js';
const baseUrl ='https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2019-01-01&endtime=2019-02-02';
const controlClass = new QuakesController();


let location = getLocation().then((data)=>{
    return getJSON((baseUrl + ("&latitude=" + data.coords.latitude + "&longitude=" + data.coords.longitude) + "&maxradiuskm=100"))});

console.log(location);
window.onload = controlClass.init();