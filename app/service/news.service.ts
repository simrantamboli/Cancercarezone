import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {News} from '../models/news';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  api_key = '88ff676da88a49de9c226a83503a9f35';

  constructor(private http: HttpClient) { }

  initSources() {
    return this.http.get('https://newsapi.org/v2/sources?language=en&apiKey=' + this.api_key);
  }

  initArticles(): Observable<News[]> {
    return this.http.get<News[]>('https://newsapi.org/v2/top-headlines?category=health&q=cancer&' +
        'language=en&pageSize=10&page=1&apiKey=' + this.api_key);
  }

  getArticlesByID(source: String) {
    return this.http.get('https://newsapi.org/v2/top-headlines?sources=' + source + '&apiKey=' + this.api_key);
  }
}
