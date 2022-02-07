import React from 'react'
import { add, filterOutline } from 'ionicons/icons'
import { 
    IonFab, IonFabButton, IonIcon, IonButtons, IonContent, IonProgressBar,
    IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonSearchbar, IonButton
} from '@ionic/react'
import { observable } from 'mobx'
import { observer } from 'mobx-react'
import { Query } from 'mobx-orm'
import ObjectList from './object-list'
import { RouteComponentProps } from 'react-router'

type ModelPageProps = {
    model: any 
}

@observer
class ObjectListPage extends React.Component<ModelPageProps & RouteComponentProps> {

    @observable query: Query<any>

    constructor(props) {
        super(props);
        this.query = this.props.model.load() as any
    }

    get is_ready() {
        return !!(this.query && this.query.is_ready) 
    }
    
    render() {
        return (
            <IonPage>
                <IonHeader>
                    <IonToolbar>
                        <IonButtons slot="start">
                            <IonMenuButton />
                        </IonButtons>
                        <IonTitle>{this.props.model.__proto__.name}</IonTitle>
                        <IonButtons slot="end">
                            <IonButton>
                                <IonIcon slot="icon-only" icon={filterOutline}></IonIcon>
                            </IonButton>
                        </IonButtons>
                    </IonToolbar>
                    <IonToolbar>
                        {/* <IonButtons slot="start">
                            <IonButton>
                            </IonButton>
                        </IonButtons> */}
                        <IonSearchbar></IonSearchbar>
                    </IonToolbar>
                    {/* <ObjectListFilter query={this.query}></ObjectListFilter> */}
                </IonHeader>
                <IonContent fullscreen>
                    { !this.is_ready && <IonProgressBar type="indeterminate"></IonProgressBar>}

                    <ObjectList {...this.props} query={this.query}></ObjectList>

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

export default ObjectListPage
