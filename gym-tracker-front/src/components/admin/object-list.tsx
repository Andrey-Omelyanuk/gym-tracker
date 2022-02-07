import React from 'react'
import { computed } from 'mobx'
import { observer } from 'mobx-react'
import { Query    } from 'mobx-orm'
import { IonItem, IonLabel, IonReorder, IonReorderGroup} from '@ionic/react'
import { moveTo } from '../../models/utils'
import { RouteComponentProps } from 'react-router'

type ObjectListProps = {
    query: Query<any>
}

@observer
class ObjectList extends React.Component<ObjectListProps & RouteComponentProps> {

    url: string

    constructor(props) {
        super(props);
        this.onDragEnd = this.onDragEnd.bind(this);
        // get base url
        let url_array = this.props.match.url.split('/')
        url_array.pop()
        this.url = url_array.join('/')
    }

    @computed get items() {
        return this.props.query.items.slice().sort((a, b) => a.order - b.order)
    }

    async onDragEnd(event) {
        moveTo(this.props.query, event.detail.from, event.detail.to)
        event.detail.complete()
    }

    render() {
        return (
            <IonReorderGroup disabled={false} onIonItemReorder={this.onDragEnd} >
                {this.items.map((item) => {
                    return  <IonItem routerLink={`${this.url}/item/${item.__id}`} key={item.__id}>
                                <IonLabel>{item.name}</IonLabel>
                                <IonReorder slot="end" />
                            </IonItem>
                })}
            </IonReorderGroup>
        );
    }
}

export default ObjectList
