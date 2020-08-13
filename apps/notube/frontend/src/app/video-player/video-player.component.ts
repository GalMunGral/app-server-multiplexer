import { Component, OnInit } from '@angular/core';
import { initShakaPlayer } from './shaka.js';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.css']
})
export class VideoPlayerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    initShakaPlayer();
  }

}
