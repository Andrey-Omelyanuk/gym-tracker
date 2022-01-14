import React from 'react'
import { observer } from 'mobx-react'
import Program from '../models/program';
import { IonItem, IonLabel } from '@ionic/react';

type ProgramListItemProps = {
    program: Program 
}

@observer
class ProgramListItem extends React.Component<ProgramListItemProps> {

  render() {
    return (
        <IonItem routerLink={`/program/item/${this.props.program.__id}`}>
            <IonLabel>{this.props.program.id} - {this.props.program.name} </IonLabel>
        </IonItem>
    );
  }
}

export default ProgramListItem; 
