import Exercise from "./models/exercise";
import Muscle from "./models/muscle";
import Trainer from "./models/trainer";
import Workout from "./models/workout";
import WorkoutExercise from "./models/workout-exercise";
import WorkoutExerciseSet from "./models/workout-exercise-set";


export function init_data() {

    let m_1 = new Muscle({name: 'm1'}); m_1.save();
    let m_2 = new Muscle({name: 'm2'}); m_2.save();
    let m_3 = new Muscle({name: 'm3'}); m_3.save();
    let m_4 = new Muscle({name: 'm4'}); m_4.save();

    let t_1 = new Trainer({name: 't1'}); t_1.save();
    let t_2 = new Trainer({name: 't2'}); t_2.save();
    let t_3 = new Trainer({name: 't3'}); t_3.save();
    let t_4 = new Trainer({name: 't4'}); t_4.save();

    let e_1 = new Exercise({name: 'e1', trainer_id: t_1.id, muscle_id: m_1.id}); e_1.save();
    let e_2 = new Exercise({name: 'e2', trainer_id: t_1.id, muscle_id: m_2.id}); e_2.save();
    let e_3 = new Exercise({name: 'e3', trainer_id: t_2.id, muscle_id: m_4.id}); e_3.save();
    let e_4 = new Exercise({name: 'e4', trainer_id: t_2.id, muscle_id: m_4.id}); e_4.save();

    let w_1 = new Workout({name: 'w1'}); w_1.save();
    let w_2 = new Workout({name: 'w2'}); w_2.save();
    let w_3 = new Workout({name: 'w3'}); w_3.save();

    let we_1 = new WorkoutExercise({workout_id: w_1.id, exercise_id: e_1.id, order: 1}); we_1.save();
    let we_2 = new WorkoutExercise({workout_id: w_1.id, exercise_id: e_2.id, order: 2}); we_2.save();
    let we_3 = new WorkoutExercise({workout_id: w_1.id, exercise_id: e_3.id, order: 3}); we_3.save();
    let we_4 = new WorkoutExercise({workout_id: w_1.id, exercise_id: e_4.id, order: 4}); we_4.save();

    let wes_1 = new WorkoutExerciseSet({workout_exercise_id: we_1.id, order: 1, reps: 10, weight: 10}); wes_1.save();
    let wes_2 = new WorkoutExerciseSet({workout_exercise_id: we_1.id, order: 2, reps: 10, weight: 10}); wes_2.save();
    let wes_3 = new WorkoutExerciseSet({workout_exercise_id: we_1.id, order: 3, reps: 10, weight: 10}); wes_3.save();
    let wes_4 = new WorkoutExerciseSet({workout_exercise_id: we_1.id, order: 4, reps: 10, weight: 10}); wes_4.save();
}
