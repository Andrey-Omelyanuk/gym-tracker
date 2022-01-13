import { local, model, Model, id, field } from 'mobx-orm'

@local()
@model export default class WorkoutExerciseFact extends Model { 
    @id    id 	: number 
    @field name	: string
}
