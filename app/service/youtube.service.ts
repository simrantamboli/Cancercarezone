import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {News} from '../models/news';
import {Video} from '../models/video';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  api_key = 'AIzaSyAPGLbHgLY6Q-7-bIVF6LIyuCUHaHBDIQk';

  constructor(private http: HttpClient) {
  }

  getLatestVideos(): Observable<Video> {
    return this.http.get<Video>('https://youtube.googleapis.com/youtube/v3/search?part=snippet&' +
        'chart=mostPopular&regionCode=IN&maxResults=10&q=cancer%20survivor%20story&key=' + this.api_key);
  }
}
