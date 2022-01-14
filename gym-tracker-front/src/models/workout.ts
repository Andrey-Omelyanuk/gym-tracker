import { local, model, Model, id, field } from 'mobx-orm'


@local()
@model export default class Workout extends Model { 
    @id     id 	    : number 
    @field  name	: string
    @field  plan_date : Date 
    @field  fact_date : Date 
}
