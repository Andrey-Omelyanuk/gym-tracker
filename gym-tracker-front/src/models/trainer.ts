import { local, model, Model, id, field } from 'mobx-orm'
import Exercise from './exercise'


@local()
@model export default class Trainer extends Model { 
    @id    id 	: number 
    @field name	: string

    exercises   : Exercise[]
}
