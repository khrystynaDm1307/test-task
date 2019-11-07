import { Injectable } from '@angular/core';
import { IArticle, IArticleBuy } from '../interfaces/article.interface';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {
  public articles: Array<IArticle> = [
    {
      id: 1,
      name: 'Article 1',
      // tslint:disable-next-line: max-line-length
      label: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae quaerat magni minima,esse ullam similique non optio quos maxime consectetur',
      price: 25
    },
    {
      id: 2,
      name: 'Article 2',
      // tslint:disable-next-line: max-line-length
      label: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae quaerat magni minima,esse ullam similique non optio quos maxime consectetur',
      price: 35
    },
    {
      id: 3,
      name: 'Article 3',
      // tslint:disable-next-line: max-line-length
      label: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae quaerat magni minima,esse ullam similique non optio quos maxime consectetur',
      price: 45
    },
  ]
  constructor() { }

  public getArticles(): Array<IArticle> {
    return this.articles;
  }

  public updateLocalStorage(articles: Array<IArticleBuy>): void {
    localStorage.removeItem('article');
    localStorage.setItem(`article`, JSON.stringify(articles));
  }
}
