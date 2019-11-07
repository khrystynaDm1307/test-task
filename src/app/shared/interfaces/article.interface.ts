export interface IArticle {
    id: number;
    name: string;
    label: string;
    price: number;
}

export interface IArticleBuy {
    obj: IArticle;
    quantity: number;
}
