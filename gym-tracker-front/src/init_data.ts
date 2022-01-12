import Workout from "./models/workout";

export function init_data() {

	let w_test = new Workout({name: 'test'}); w_test.save();
}
