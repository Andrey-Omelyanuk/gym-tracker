import { action, runInAction } from 'mobx'
import { local, model, Model, id, field, Query } from 'mobx-orm'
import Exercise from './exercise'
import ProgramSet from './program-set'


@local()
@model export default class Program extends Model { 
    @id    id 	: number 
    @field name	: string
    @field desc : string
    @field order: number

    sets   : ProgramSet []

    static moveTo(programs: Query<Program>, from: number, to: number ) {
        // I have to use runInAction because @action does not work with static method
        runInAction(() => {
            // update "order" field for all items in the Query
            for(let program of programs.items) {
                if ((program.order < from && program.order < to) 
                ||  (program.order > from && program.order > to)){
                    continue
                }
                if (program.order === from) {
                    program.order = to
                }
                else if (program.order > from && program.order <= to) {
                    program.order = program.order - 1
                }
                else if (program.order >= to && program.order < from) {
                    program.order = program.order + 1
                }
                program.save()
            }
        })
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
