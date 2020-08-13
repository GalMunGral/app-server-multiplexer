import { Component, OnInit, Input } from '@angular/core';
import { VideoInfo } from '../types';

@Component({
  selector: 'app-video-list-cell',
  templateUrl: './video-list-cell.component.html',
  styleUrls: ['./video-list-cell.component.scss']
})
export class VideoListCellComponent implements OnInit {
  @Input() video: VideoInfo;
  @Input() index: number;

  constructor() { }

  ngOnInit() {
  }

}
