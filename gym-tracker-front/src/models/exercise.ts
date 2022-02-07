import { local, model, Model, id, field, foreign, many } from 'mobx-orm'
import Muscle from './muscle'
import Trainer from './trainer'


@local()
@model export default class Exercise extends Model { 
    @id     id          : number 
    @field  name        : string
    @field  order       : number

    @foreign(Trainer)   trainer : Trainer 
    @foreign(Muscle)    muscle  : Muscle
}
many(Exercise)(Trainer  , 'exercises') 
many(Exercise)(Muscle   , 'exercises') 
