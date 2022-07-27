import { Component, OnInit } from '@angular/core';
import {NewsService} from '../service/news.service';
import {News} from '../models/news';

@Component({
  selector: 'app-typography',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  private news: News[];

  constructor(private newsService: NewsService) { }

  ngOnInit() {
    this.newsService.initArticles().subscribe(data => {
      this.news = data;
    });
  }

}
