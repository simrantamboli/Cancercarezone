import { Component, OnInit } from '@angular/core';
import {YoutubeService} from '../service/youtube.service';
import {Item, Video} from '../models/video';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit {

  private videos: Video;

  constructor(private youtubeService: YoutubeService) { }

  ngOnInit(): void {
    this.youtubeService.getLatestVideos().subscribe(data => {
      this.videos = data;
    });
  }

}
