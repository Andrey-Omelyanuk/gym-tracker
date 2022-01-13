import { local, model, Model, id, field } from 'mobx-orm'
import WorkoutExercise  from './workout-exercise'
import WorkoutPlan      from './workout-plan'


@local()
@model export default class Workout extends Model { 
    @id    id 	: number 
    @field name	: string

    exercises   : WorkoutExercise[]
    plans       : WorkoutPlan[]
}
