import React from 'react'
import { trashOutline } from 'ionicons/icons';

import { observer } from 'mobx-react'
import { observable } from 'mobx'
import { IonButtons, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonBackButton, IonFab, IonFabButton, IonIcon } from '@ionic/react'
import { RouteComponentProps, withRouter } from 'react-router'
import Program from '../../models/program'
import ProgramForm from '../../components/program-form'


@observer
class ProgramItem extends React.Component<RouteComponentProps> {

    @observable program: Program

    constructor(props) {
        super(props);
        this.program = Program.get(this.props.match.params['__id']) as any
    }

    render() {
        return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton />
                    </IonButtons>
                    <IonTitle>Program: {this.program.name} </IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent fullscreen>
                <IonHeader collapse="condense">
                    <IonToolbar>
                    <IonTitle size="large">Program</IonTitle>
                    </IonToolbar>
                </IonHeader>

                <ProgramForm program={this.program}></ProgramForm>

                <IonFab vertical="top" horizontal="end" slot="fixed" edge>
                    <IonFabButton color='danger'>
                        <IonIcon icon={trashOutline} />
                    </IonFabButton>
                </IonFab>
            </IonContent>
        </IonPage>
        )
    }
}

export default withRouter(ProgramItem)
