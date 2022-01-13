import { local, model, Model, id, field, foreign, many } from 'mobx-orm'
import WorkoutExercise from './workout-exercise'


@local()
@model export default class WorkoutExerciseSet extends Model { 
    @id     id          : number 
    @field  order       : number
    @field  reps        : number
    @field  weight      : number

    @field  workout_exercise_id : number 

    @foreign(WorkoutExercise) exercise : WorkoutExercise 
}
many(WorkoutExerciseSet)(WorkoutExercise, 'sets') 
