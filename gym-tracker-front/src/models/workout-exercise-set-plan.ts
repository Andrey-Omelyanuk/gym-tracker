
import { local, model, Model, id, field } from 'mobx-orm'

@local()
@model class SetPlan extends Model { 
    @id    id 	: number 
    @field name	: string
}
