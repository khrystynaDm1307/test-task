import { Component, OnInit } from '@angular/core';
import { ArticlesService } from 'src/app/shared/services/articles.service';
import { IArticle, IArticleBuy } from 'src/app/shared/interfaces/article.interface';
import { ArticleBuy } from 'src/app/shared/classes/article.class';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  articles: Array<IArticle> = []
  articlesToAdd: Array<IArticleBuy> = [];

  constructor(private articleService: ArticlesService) {
    this.articles = this.articleService.getArticles();
  }

  ngOnInit() { }

  public addToBag(article: IArticle): void {
    if (localStorage.getItem('article') !== null) {
      this.articlesToAdd = JSON.parse(localStorage.getItem('article'));
    }
    const obj = new ArticleBuy(article, 1);
    let n = false; // is this object already in the shopping bag?
    if (this.articlesToAdd.length > 0) {
      this.articlesToAdd.forEach((el, index) => {
        if (article.id === el.obj.id) {
          obj.quantity = el.quantity + 1;
          // update obj because quantity has increased
          delete this.articlesToAdd[index];
          this.articlesToAdd[index] = obj;
          n = true;
        }
      });
      if (!n) {
        this.articlesToAdd.unshift(obj);
      }
    }
    else {
      this.articlesToAdd.unshift(obj);
    }
    this.articleService.updateLocalStorage(this.articlesToAdd);
  }
}
