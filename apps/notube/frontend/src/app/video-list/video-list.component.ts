import { Component, OnInit } from '@angular/core';

const someUrl = 'https://images3.naughtycdn.com/cms/nacmscontent/v1/scenes/mwhf/angelicajohnnysins/scene/image4/400x263c.jpg';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.scss']
})
export class VideoListComponent implements OnInit {

  videos = Array(15).fill(0).map(() => ({
    thumbnailUrl: someUrl,
    title: Math.random() < 0.5 ? 'This Is A Fake Video' : '【直播】此處沒有內容',
    numOfViews: Math.floor(1000000 * Math.random())
  }));

  constructor() { }

  ngOnInit() {
  }

}
