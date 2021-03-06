import React from 'react'
import { computed } from 'mobx'
import { observer } from 'mobx-react'
import { Query    } from 'mobx-orm'
import { moveTo } from '../models/utils'
import Program    from '../models/program'

import { IonReorderGroup } from '@ionic/react'
import ProgramListItem from './program-list-item'

type ProgramListProps = {
    programs: Query<Program>
}

@observer
class ProgramList extends React.Component<ProgramListProps> {

    constructor(props) {
        super(props);
        this.onDragEnd = this.onDragEnd.bind(this);
    }

    @computed get programs() {
        return this.props.programs.items.slice().sort((a, b) => a.order - b.order)
    }

    async onDragEnd(event) {
        moveTo(this.props.programs, event.detail.from, event.detail.to)
        event.detail.complete()
    }

    render() {
        console.log('render')
        return (
            <IonReorderGroup disabled={false} onIonItemReorder={this.onDragEnd} >
                {this.programs.map(function(program: Program) {
                    return <ProgramListItem program={program} key={program.__id}></ProgramListItem>
                })}
            </IonReorderGroup>
        );
    }
}

export default ProgramList
