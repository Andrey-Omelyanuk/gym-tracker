import { local, model, Model, id, field, foreign, many } from 'mobx-orm'
import Set from './set'
import Workout from './workout'


@local()
@model export default class Exercise extends Model { 
    @id    id           : number 
    @field workout_id   : string
    @field order        : number

    @foreign(Workout) workout: Workout


    sets: Set[]
}
many(Set)(Exercise, 'sets') 
