import React from 'react'
import { observer } from 'mobx-react'
import { IonButton,  IonLabel, IonItem,  IonList, IonInput, IonTextarea, NavContext, IonIcon, IonFabButton, IonReorderGroup, IonReorder, IonListHeader } from '@ionic/react';
import Program from '../models/program';
import { duplicateOutline, trashOutline } from 'ionicons/icons';
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
                    {this.props.program.getOrderedSets().map(function(pair) {
                        return <React.Fragment key={pair[0].__id}>
                                <IonListHeader>{pair[0].name}</IonListHeader>
                                {pair[1].map(function(set) { 
                                    return <IonItem key={set.__id}>
                                        <IonLabel>{set.exercise.name} {set.reps}reps {set.weight}kg</IonLabel>
                                        <IonButton slot="start">
                                            <IonIcon icon={duplicateOutline} />
                                        </IonButton>
                                        <IonButton color='danger'>
                                            <IonIcon icon={trashOutline} />
                                        </IonButton>
                                    </IonItem>
                                })}
                            </React.Fragment>
                    })}
                    <IonButton expand='block' color='success'> Add Set </IonButton>
                </IonList>
                <IonButton expand="block" onClick={this.save}>Save</IonButton>
            </React.Fragment>
        )
    }
}

export default ProgramForm
