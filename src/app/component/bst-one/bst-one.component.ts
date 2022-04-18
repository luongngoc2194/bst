import {Component, OnInit} from '@angular/core';
import {Imagedata, VideoIMG} from '../../data/video';
import {VideoType} from '../../model/video-type';

@Component({
  selector: 'app-bst-one',
  templateUrl: './bst-one.component.html',
  styleUrls: ['./bst-one.component.scss']
})
export class BstOneComponent implements OnInit {
  listImg: VideoType[] = Imagedata;
  controlBtn = 0;

  constructor() {
  }

  ngOnInit(): void {
  }

  controlListFunc(choose: number) {
    if (choose === 0) {
      this.controlBtn = choose;
      this.listImg = [...Imagedata];
    } else if (choose === 1) {
      this.controlBtn = choose;
      this.listImg = [...VideoIMG];
      console.log(this.listImg)
    }
  }
}
