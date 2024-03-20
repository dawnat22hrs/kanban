import { STATUS } from "./kanban.types"
import { type IColumn } from "./kanban.types"

export const columnData: IColumn[] = [
    {
        id: 0,
        name: STATUS.ON_HOLD,
        colorColumn: '#F08F44',
        items: [],
    },
    {
        id: 1,
        name: STATUS.IN_PROGRESS,
        colorColumn: '#44BEF0',
        items: [],
    },
    {
        id: 2,
        name: STATUS.NEEDS_REVIEW,
        colorColumn: '#F0DD44',
        items: [],
    },
    {
        id: 3,
        name: STATUS.APPROVED,
        colorColumn: '#75F044 ',
        items: [],
    },
]