import React from 'react'
import { observer } from 'mobx-react'
import { IonCheckbox, IonInput, IonItem, IonLabel, IonList, IonListHeader, IonRadio, IonRadioGroup, IonSelect, IonSelectOption } from '@ionic/react'

type ProgramFormProps = {
    model: any
    item: any 
}

@observer
class ObjectDetails extends React.Component<ProgramFormProps> {


    textInput() {
        return  <IonItem>
                    <IonLabel position='stacked'>Title</IonLabel>
                    <IonInput></IonInput>
                    {/* <IonInput value={this.props.program.name} onIonChange={this.handleNameChange}></IonInput> */}
                </IonItem>
    }

    checkboxInput() {
        return  <IonItem>
                    <IonLabel>Boolean</IonLabel>
                    <IonCheckbox slot='start'></IonCheckbox>
                </IonItem>
    }

    radioInput() {
        return  <IonRadioGroup allow-empty-selection>
                    <IonListHeader>
                        <IonLabel>Radio</IonLabel>
                    </IonListHeader>
                    <IonItem>
                        <IonLabel>First</IonLabel>
                        <IonRadio slot='end' value="first"></IonRadio>
                    </IonItem>
                    <IonItem>
                        <IonLabel>Second</IonLabel>
                        <IonRadio slot='end' value="second"></IonRadio>
                    </IonItem>
                </IonRadioGroup>
    }

    selectInput() {
        return  <IonItem>
                    <IonLabel>Year</IonLabel>
                    <IonSelect value="1996" multiple>
                        <IonSelectOption value="1991">1991 test  test  test  test </IonSelectOption>
                        <IonSelectOption value="1992">1992 test  test  test </IonSelectOption>
                        <IonSelectOption value="1993">1993 test  test </IonSelectOption>
                        <IonSelectOption value="1994">1994 test </IonSelectOption>
                        <IonSelectOption value="1995">1995</IonSelectOption>
                        <IonSelectOption value="1996">1996</IonSelectOption>
                        <IonSelectOption value="1997">1997</IonSelectOption>
                        <IonSelectOption value="1998">1998</IonSelectOption>
                        <IonSelectOption value="1999">1999</IonSelectOption>
                    </IonSelect>
                </IonItem>
    }

    render() {
        return  <IonList lines='full'>
                    {this.textInput()}
                    {this.checkboxInput()}
                    {this.radioInput()}
                    {this.textInput()}
                    {this.selectInput()}
                    {this.checkboxInput()}
                </IonList>
    }
}

export default ObjectDetails 
