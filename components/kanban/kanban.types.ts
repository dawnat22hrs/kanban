export interface ICard {
    id: number,
    text: string,
    status?: STATUS,
    row: number,
    seq_num: number,
}

export enum STATUS {
    ON_HOLD = 'ON-HOLD',
    IN_PROGRESS = 'IN-PROGRESS',
    NEEDS_REVIEW = 'NEEDS-REVIEW',
    APPROVED = 'APPROVED',
}

export interface IColumn {
    id: number,
    name: STATUS,
    items: ICard[],
    colorColumn: string,
}