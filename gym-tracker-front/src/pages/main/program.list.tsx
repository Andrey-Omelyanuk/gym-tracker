
import React from 'react'
import { observer } from 'mobx-react'
import { observable } from 'mobx'
import { add } from 'ionicons/icons';
import { 
    IonFab, IonFabButton, IonIcon, IonProgressBar, IonButtons, IonContent, 
    IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonLabel, IonItem 
} from '@ionic/react';
import { Query } from 'mobx-orm';
import Program from '../../models/program';

import ProgramListItem from '../../components/program-list-item';


@observer
class ProgramList extends React.Component {

    @observable programs: Query<Program>

    constructor(props) {
        super(props);
        this.programs = Program.load() as any
    }

    get is_ready() {
        return !!(this.programs && this.programs.is_ready) 
    }

    render() {
        return (
            <IonPage>
                <IonHeader>
                    <IonToolbar>
                        <IonButtons slot="start">
                            <IonMenuButton />
                        </IonButtons>
                        <IonTitle>Programs</IonTitle>
                    </IonToolbar>
                </IonHeader>

                <IonContent fullscreen>
                    { !this.is_ready && <IonProgressBar type="indeterminate"></IonProgressBar>}
                    {this.programs && this.programs.items.map(function(program: Program){
                        return <ProgramListItem key={program.__id} program={program}></ProgramListItem>
                    })}
                    <IonFab vertical="top" horizontal="end" slot="fixed" edge>
                        <IonFabButton routerLink={`/program/create`}>
                            <IonIcon icon={add} />
                        </IonFabButton>
                    </IonFab>
                </IonContent>
            </IonPage>
        )
    }
}

export default ProgramList
