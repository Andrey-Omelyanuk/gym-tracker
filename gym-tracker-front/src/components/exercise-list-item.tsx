import React from 'react'
import { observer } from 'mobx-react'
import Exercise from '../models/exercise'
import { IonItem, IonLabel, IonReorder } from '@ionic/react'

type ExerciseListItemProps = {
    exercise: Exercise 
}

@observer
class ExerciseListItem extends React.Component<ExerciseListItemProps> {
  render() {
    return (
        <IonItem routerLink={`/program/item/${this.props.exercise.__id}`}>
            <IonLabel>{this.props.exercise.id} - {this.props.exercise.name} - {this.props.exercise.order} </IonLabel>
            <IonReorder slot="end" />
        </IonItem>
    );
  }
}

export default ExerciseListItem
