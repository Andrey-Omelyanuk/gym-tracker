import { local, model, Model, id, field } from 'mobx-orm'
import Exercise from './exercise'
import ProgramSet from './program-set'


@local()
@model export default class Program extends Model { 
    @id    id 	: number 
    @field name	: string
    @field desc : string

    sets   : ProgramSet []

    reorder(index_to: number) {

    }

    getOrderedSets() {
        let result = [] 
        let ordered_set: ProgramSet[] = this.sets.slice().sort((a, b) => a.order - b.order)
        let exercise: Exercise
        let sets: ProgramSet[] = []
        for(let set of ordered_set) {
            if (exercise === undefined) exercise = set.exercise 
            if (set.exercise !== exercise) {
                result.push([exercise, sets])
                exercise = set.exercise
                sets = []
            }
            else {
                sets.push(set)
            }
        }
        return result 
    }
}
