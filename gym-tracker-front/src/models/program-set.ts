import { local, model, Model, id, field, foreign, many } from 'mobx-orm'
import Exercise from './exercise'
import Program from './program'


@local()
@model export default class ProgramSet extends Model { 
    @id     id          : number 
    @field  order       : number
    @field  reps        : number
    @field  weight      : number

    @field  program_id  : number 
    @field  exercise_id	: number

    @foreign(Exercise) exercise: Exercise
    @foreign(Program ) program : Program 
}
many(ProgramSet)(Program, 'sets') 
