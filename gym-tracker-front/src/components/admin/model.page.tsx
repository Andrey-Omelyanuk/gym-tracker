import React from 'react'
import { RouteComponentProps } from 'react-router'
import { Route } from 'react-router-dom'
import { IonPage, IonRouterOutlet } from '@ionic/react'
import { observer } from 'mobx-react'
import ObjectPage from './object.page'
import ObjectListPage from './object-list.page'

type ModelPageProps = {
    model: any 
}

@observer
class ModelPage extends React.Component<RouteComponentProps & ModelPageProps> {
    render() {
        return (
            <IonPage>
                <IonRouterOutlet>
                    <Route path={`${this.props.match.url}/list`       } render={(props) => <ObjectListPage {...props} model={this.props.model}/>}/>
                    <Route path={`${this.props.match.url}/item/:__id` } render={(props) => <ObjectPage     {...props} model={this.props.model}/>}/>
                    <Route path={`${this.props.match.url}/item/create`} render={(props) => <ObjectPage     {...props} model={this.props.model}/>}/>
                </IonRouterOutlet>
            </IonPage>
        )
    }
}

export default ModelPage
