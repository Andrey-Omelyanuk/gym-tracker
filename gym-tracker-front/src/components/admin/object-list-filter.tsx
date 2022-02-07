import React from 'react'
import { IonButton, IonButtons, IonItem, IonLabel, IonToolbar } from '@ionic/react'
import { observer } from 'mobx-react'
import { Query    } from 'mobx-orm'

type ExerciseListProps = {
    query: Query<any>
}

@observer
class ObjectListFilter extends React.Component<ExerciseListProps> {

    render() {
        return (
            <IonToolbar>
                <IonButtons slot="start">
                </IonButtons>
                <IonLabel>filter</IonLabel>
                <IonButtons slot="end">
                </IonButtons>
            </IonToolbar>
        );
    }
}

export default ObjectListFilter
