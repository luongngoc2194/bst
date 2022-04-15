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
  hover: boolean;
  count = 0;

  constructor(public vService: VideoService) {
  }

  ngOnInit(): void {
    this.addMouseControl(this.listV, false);
    // this.vService.getList().subscribe(data => {
    //   this.listV = data;
    //   console.log(this.listV)
    // });
  }

  addMouseControl(arr, bl) {
    arr.forEach(item => {
      if (item.imgLink && item.imgLink !== '') {
        item.hover = bl;
      }
    });
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
    this.addMouseControl(this.listV, false);
  }

  ShowImage() {
    this.addMouseControl(this.listV, true);
    console.log(this.listV);
  }
}
