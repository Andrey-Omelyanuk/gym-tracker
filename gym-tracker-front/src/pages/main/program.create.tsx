import React from 'react'
import { observable } from 'mobx'
import { observer   } from 'mobx-react'
import { IonButtons, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonBackButton } from '@ionic/react'
import Program     from '../../models/program'
import ProgramForm from '../../components/program-form'


@observer
class ProgramCreate extends React.Component {

    @observable new_program: Program 

    constructor(props) {
        super(props)
        this.new_program = new Program()
    }

    render() {
        return (
            <IonPage>
                <IonHeader>
                    <IonToolbar>
                        <IonButtons slot="start"> <IonBackButton /> </IonButtons>
                        <IonTitle>Create a new workout</IonTitle>
                    </IonToolbar>
                </IonHeader>

                <IonContent fullscreen>
                    <IonHeader collapse="condense">
                        <IonToolbar>
                            <IonTitle size="large">Create a new workout</IonTitle>
                        </IonToolbar>
                    </IonHeader>
                    <ProgramForm program={this.new_program}></ProgramForm>
                </IonContent>
            </IonPage>
        )
    }
}

export default ProgramCreate
