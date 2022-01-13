
import { local, model, Model, id, field } from 'mobx-orm'

@local()
@model class ExercisePlan extends Model { 
    @id    id 	: number 
    @field name	: string
}

