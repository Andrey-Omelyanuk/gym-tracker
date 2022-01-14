import React from 'react'
import { observer } from 'mobx-react'
import { IonButton,  IonLabel, IonItem,  IonList, IonInput, IonTextarea, NavContext, IonIcon, IonFabButton } from '@ionic/react';
import Program from '../models/program';
import { trashOutline } from 'ionicons/icons';
import ProgramSet from '../models/program-set';

type ProgramFormProps = {
    program: Program 
}

@observer
class ProgramForm extends React.Component<ProgramFormProps> {
    static contextType = NavContext;

    constructor(props) {
        super(props)
        this.save = this.save.bind(this)
        this.handleNameChange = this.handleNameChange.bind(this)
        this.handleDescChange = this.handleDescChange.bind(this)
    }

    save() {
        this.props.program.save()
        this.context.navigate('', 'back')
    }

    handleNameChange(event) {
        this.props.program.name = event.target.value
    }
    handleDescChange(event) {
        this.props.program.desc = event.target.value
    }

    render() {
        return (
            <React.Fragment>
                <IonList lines='full'>
                    <IonItem>
                        <IonLabel position='stacked'>Title</IonLabel>
                            <IonInput value={this.props.program.name} onIonChange={this.handleNameChange}></IonInput>
                        </IonItem>
                    <IonItem>
                        <IonLabel position='stacked'>Desc</IonLabel>
                        <IonTextarea value={this.props.program.desc} onIonChange={this.handleDescChange}></IonTextarea>
                    </IonItem>
                </IonList>

                <div>Ex count: {this.props.program.sets.length}</div>
                <IonList>
                    {this.props.program.sets && this.props.program.sets.map(function(set: ProgramSet){
                        return <IonItem key={set.__id}>
                                    <IonLabel>test</IonLabel>
                                    <IonButton color='danger'>
                                        <IonIcon icon={trashOutline} />
                                    </IonButton>
                                </IonItem>
                    })}
                    <IonButton expand='block' color='success'> Add Exercise </IonButton>
                </IonList>
                <IonButton expand="block" onClick={this.save}>Save</IonButton>
            </React.Fragment>
        )
    }
}

export default ProgramForm
