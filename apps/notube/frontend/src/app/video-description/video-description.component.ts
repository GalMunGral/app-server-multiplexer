import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-video-description',
  templateUrl: './video-description.component.html',
  styleUrls: ['./video-description.component.scss']
})
export class VideoDescriptionComponent implements OnInit {
  viewCount: number;

  constructor() {
    this.viewCount= Math.floor(Math.random() * 100000);
  }

  ngOnInit() {
  }

}
