import React from 'react'
import { RouteComponentProps } from 'react-router'
import { trashOutline } from 'ionicons/icons'
import { 
    IonFab, IonFabButton, IonIcon, IonButtons, IonContent,
    IonHeader, IonPage, IonTitle, IonToolbar, IonBackButton
} from '@ionic/react';
import { observable } from 'mobx'
import { observer } from 'mobx-react'
import ObjectDetails from './object-details'

type ObjectPageProps = {
    model: any
}

@observer
class ObjectPage extends React.Component<ObjectPageProps & RouteComponentProps> {

    @observable item: any

    constructor(props) {
        super(props);
        this.item = this.props.model.get(this.props.match.params['__id']) as any
    }

    render() {
        return (
            <IonPage>
                <IonHeader>
                    <IonToolbar>
                        <IonButtons slot="start">
                            <IonBackButton/>
                        </IonButtons>
                        <IonTitle> {this.item.name} </IonTitle>
                    </IonToolbar>
                </IonHeader>

                <IonContent fullscreen>
                    <ObjectDetails model={this.props.model} item={this.item}></ObjectDetails>
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

export default ObjectPage
