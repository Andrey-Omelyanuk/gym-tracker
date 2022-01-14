import { local, model, Model, id, field } from 'mobx-orm'
import ProgramSet from './program-set'


@local()
@model export default class Program extends Model { 
    @id    id 	: number 
    @field name	: string
    @field desc : string

    sets   : ProgramSet []
}
