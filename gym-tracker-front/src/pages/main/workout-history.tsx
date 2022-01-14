import React from 'react'
import { observer } from 'mobx-react'
import { observable } from 'mobx'
import { IonButton, IonProgressBar, IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonLabel, IonItem, IonBackButton } from '@ionic/react';
import { Query } from 'mobx-orm';
import Workout from '../../models/program';
import { RouteComponentProps } from 'react-router';


@observer
class WorkoutHistory extends React.Component {

//   @observable workout: Workout

  constructor(props) {
    super(props);
    // Не вызывайте здесь this.setState()!
    // this.state = { counter: 0 };

    // Эта привязка обязательна для работы `this` в колбэке.
    // this.createWorkout= this.createWorkout.bind(this);
    // this.workout = Workout.get(this.props.match.params['id']) as any
  }

  componentDidMount() {
  }

  render() {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton />
              <IonBackButton />
            </IonButtons>
            <IonTitle>Item</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonContent fullscreen>
          <IonHeader collapse="condense">
            <IonToolbar>
              <IonTitle size="large">test</IonTitle>
            </IonToolbar>
          </IonHeader>
          <div>history</div>
        </IonContent>
      </IonPage>
    );
  }
}

export default WorkoutHistory; 