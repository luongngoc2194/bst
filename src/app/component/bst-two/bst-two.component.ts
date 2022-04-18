import {Component, OnInit} from '@angular/core';
import {VideoService} from '../../service/video.service';
import {VideoType} from '../../model/video-type';
import {VideoIframeOne, VideoIframeThree, VideoIframeTwo} from '../../data/video';

@Component({
  selector: 'app-bst-two',
  templateUrl: './bst-two.component.html',
  styleUrls: ['./bst-two.component.scss']
})
export class BstTwoComponent implements OnInit {

  controlBtn = 1;
  listV = VideoIframeOne;

  constructor(public vService: VideoService) {
  }

  ngOnInit(): void {
    // this.vService.getList().subscribe(data => {
    //   this.listV = data;
    //   console.log(this.listV)
    // });
  }

  controlListFunc(number: number) {
    if (number === 1) {
      this.controlBtn = number;
      this.listV = [...VideoIframeOne];
    } else if (number === 2) {
      this.controlBtn = number;

      this.listV = [...VideoIframeTwo];
    } else if (number === 3) {
      this.controlBtn = number;

      this.listV = [...VideoIframeThree];
    } else if (number === 0) {
      this.controlBtn = number;

      this.listV = [...VideoIframeOne, ...VideoIframeTwo, ...VideoIframeThree];
    }
  }
}
