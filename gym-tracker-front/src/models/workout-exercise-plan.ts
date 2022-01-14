import { local, model, Model, id, field } from 'mobx-orm'

@local()
@model export default class WorkoutExercisePlan extends Model { 
    @id     id 	    : number 
    @field  order   : number 
}