import { local, model, Model, id, field } from 'mobx-orm'

@local()
@model class WorkoutPlan extends Model { 
    @id    id 	: number 
    @field name	: string
}
