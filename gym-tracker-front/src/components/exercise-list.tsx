import React from 'react'
import { computed } from 'mobx'
import { observer } from 'mobx-react'
import { Query    } from 'mobx-orm'
import { moveTo   } from '../models/utils'
import Exercise from '../models/exercise'

import { IonReorderGroup } from '@ionic/react'
import ExerciseListItem from './exercise-list-item'

type ExerciseListProps = {
    exercises: Query<Exercise>
}

@observer
class ExerciseList extends React.Component<ExerciseListProps> {

    constructor(props) {
        super(props);
        this.onDragEnd = this.onDragEnd.bind(this);
    }

    @computed get programs() {
        return this.props.exercises.items.slice().sort((a, b) => a.order - b.order)
    }

    async onDragEnd(event) {
        moveTo(this.props.exercises, event.detail.from, event.detail.to)
        event.detail.complete()
    }

    render() {
        console.log('render')
        return (
            <IonReorderGroup disabled={false} onIonItemReorder={this.onDragEnd} >
                {this.programs.map(function(exercise: Exercise) {
                    return <ExerciseListItem exercise={exercise} key={exercise.__id}></ExerciseListItem>
                })}
            </IonReorderGroup>
        );
    }
}

export default ExerciseList
