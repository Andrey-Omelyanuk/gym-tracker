
import { local, model, Model, id, field } from 'mobx-orm'

@local()
@model export default class WorkoutFact extends Model { 
    @id     id 	    : number 
    @field  name	: string
    @field  started : Date
}


