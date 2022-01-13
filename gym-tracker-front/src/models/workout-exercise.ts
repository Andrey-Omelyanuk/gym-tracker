import { local, model, Model, id, field, foreign, many } from 'mobx-orm'
import Workout from './workout'
import Exercise from './exercise'
import WorkoutExerciseSet from './workout-exercise-set'


@local()
@model export default class WorkoutExercise extends Model { 
    @id    id           : number 
    @field workout_id   : number 
    @field exercise_id	: number
    @field order        : number

    @foreign(Workout) workout: Workout
    @foreign(Exercise) exercise: Exercise

    sets: WorkoutExerciseSet[]
}
many(WorkoutExercise)(Workout, 'exercises') 
many(WorkoutExercise)(Exercise, 'exercises') 
