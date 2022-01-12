import { local, model, Model, id, field, foreign, many } from 'mobx-orm'
import Exercise from './exercise'


@local()
@model export default class Set extends Model { 
    @id     id          : number 
    @field  exercise_id : string
    @field  order       : number
    @field  reps        : number
    @field  weight      : number

    @foreign(Exercise) exercise : Exercise 
}
many(Set)(Exercise, 'sets') 
