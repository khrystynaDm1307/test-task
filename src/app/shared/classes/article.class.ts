import { IArticle, IArticleBuy } from '../interfaces/article.interface';

export class Article implements IArticle {
    constructor(
        public id: number,
        public name: string,
        public label: string,
        public price: number
    ) { }
}

export class ArticleBuy implements IArticleBuy {
    constructor(
        public obj: IArticle,
        public quantity: number
    ) { }
}
