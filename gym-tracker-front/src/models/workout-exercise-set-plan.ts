import { local, model, Model, id, field } from 'mobx-orm'

@local()
@model export default class WorkoutExerciseSetPlan extends Model { 
    @id     id 	    : number 
    @field  order   : number 
}