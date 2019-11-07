import { Component, OnInit } from '@angular/core';
import { ArticlesService } from 'src/app/shared/services/articles.service';
import { IArticleBuy } from 'src/app/shared/interfaces/article.interface';

@Component({
  selector: 'app-shopping-bag',
  templateUrl: './shopping-bag.component.html',
  styleUrls: ['./shopping-bag.component.scss']
})
export class ShoppingBagComponent implements OnInit {
  public shopArticles: Array<IArticleBuy> = [];
  public all = 0;
  constructor(private articleService: ArticlesService) {
    this.getLocalStorageArticles();
    this.countAll();
  }

  ngOnInit() { }

  public getLocalStorageArticles(): void {
    if (localStorage.getItem('article')) {
      this.shopArticles = JSON.parse(localStorage.getItem('article'));
    }
  }

  // always when input changes
  changeQt() {
    this.articleService.updateLocalStorage(this.shopArticles);
    this.countAll();
  }

  public deleteArticle(i: number) {
    this.shopArticles.splice(i, 1);
    this.articleService.updateLocalStorage(this.shopArticles);
    this.countAll();
  }

  public countAll(): void {
    this.all = 0;
    this.shopArticles.forEach(el => {
      this.all += el.quantity * el.obj.price;
    });
  }
}
