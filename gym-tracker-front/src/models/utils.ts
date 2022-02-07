import { runInAction } from 'mobx'
import { Query } from 'mobx-orm'


export function moveTo(query: Query<any>, from: number, to: number ) {
    // I have to use runInAction because @action does not work with static method
    runInAction(() => {
        // update "order" field for all items in the Query
        for(let item of query.items) {
            if ((item.order < from && item.order < to) 
            ||  (item.order > from && item.order > to)){
                continue
            }
            if (item.order === from) {
                item.order = to
            }
            else if (item.order > from && item.order <= to) {
                item.order = item.order - 1
            }
            else if (item.order >= to && item.order < from) {
                item.order = item.order + 1
            }
            item.save()
        }
    })
}
