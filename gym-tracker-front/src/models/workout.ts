import { local, model, Model, id, field, many } from 'mobx-orm'
import Exercise from './exercise'


@local()
@model export default class Workout extends Model { 
    @id    id 	: number 
    @field name	: string

    exercises   : Exercise[]
}
// TODO: sould I declare it near by Exercise instead of Workout (like I have done now)?
many(Exercise)(Workout, 'exercises') 