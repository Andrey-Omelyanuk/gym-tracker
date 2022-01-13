
import React from 'react'
import { observer } from 'mobx-react'
import { observable } from 'mobx'
import { IonButton, IonProgressBar, IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonLabel, IonItem } from '@ionic/react';
import { Query } from 'mobx-orm';
import Workout from '../../models/workout';

// TODO: it is a bad place for it
import { init_data } from '../../init_data';
init_data();

@observer
class WorkoutList extends React.Component {

  @observable workouts: Query<Workout>

  constructor(props) {
    super(props);
    // Эта привязка обязательна для работы `this` в колбэке.
    // this.createWorkout= this.createWorkout.bind(this);
    this.workouts = Workout.load() as any
  }

  get is_ready() {
    return !!(this.workouts && this.workouts.is_ready) 
  }

  componentDidMount() {
  }

  createWorkout() {

    let workout = new Workout({name: 'testX'})
    workout.save()
  }

  render() {
    if (!this.is_ready) {
      return (
          <IonProgressBar type="indeterminate"></IonProgressBar>
      )
    }
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton />
            </IonButtons>
            <IonTitle>Workouts</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonContent fullscreen>
          { !this.is_ready && <IonProgressBar type="indeterminate"></IonProgressBar>}
          <div>test</div>
          {this.workouts && <div>Workouts {this.workouts.items.length}</div>}
          {this.workouts && this.workouts.items.map(function(workout: Workout){
          return  <IonItem key={workout.id} routerLink={`/workout/item/${workout.id}`}>
                    <IonLabel>{workout.name} {workout.id}</IonLabel>
                  </IonItem>
          })}
          <IonButton expand="block" onClick={this.createWorkout}>Default</IonButton>
        </IonContent>
      </IonPage>
    );
  }
}

export default WorkoutList;
