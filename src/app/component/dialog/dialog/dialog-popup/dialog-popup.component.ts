import {AfterViewInit, Component, ElementRef, Inject, OnInit, ViewChild} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

class DialogData {
}

@Component({
  selector: 'app-dialog-popup',
  templateUrl: './dialog-popup.component.html',
  styleUrls: ['./dialog-popup.component.scss']
})
export class DialogPopupComponent implements OnInit, AfterViewInit {
  @ViewChild('divElement') div: ElementRef;
  // @ViewChild('videoPlayer', {static: false}) videoplayer: ElementRef;
  // isPlay: boolean = false;
  cdata: string;

  constructor(
    public dialogRef: MatDialogRef<DialogPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {
  }

  ngOnInit(): void {
    console.log(typeof this.data);
    this.cdata = this.data.toString();
  }

  ngAfterViewInit(): void {
    const height = this.div.nativeElement.children[0].getAttribute('height');
    const width = this.div.nativeElement.children[0].getAttribute('width');
    // console.log(this.div.nativeElement.children[0].getAttribute('height'));
    this.div.nativeElement.children[0].setAttribute('height', height * 2);
    this.div.nativeElement.children[0].setAttribute('width', width * 2);
  }

  // toggleVideo() {
  //   this.videoplayer.nativeElement.play();
  // }
  //
  // playPause() {
  //   const myVideo: any = document.getElementById('my_video_1');
  //   if (myVideo.paused) {
  //     myVideo.play();
  //   } else {
  //     myVideo.pause();
  //   }
  // }
  //
  // makeBig() {
  //   const myVideo: any = document.getElementById('my_video_1');
  //   myVideo.width = 560;
  // }
  //
  // makeSmall() {
  //   const myVideo: any = document.getElementById('my_video_1');
  //   myVideo.width = 320;
  // }
  //
  // makeNormal() {
  //   const myVideo: any = document.getElementById('my_video_1');
  //   myVideo.width = 420;
  // }
  //
  // skip(value) {
  //   const video: any = document.getElementById('my_video_1');
  //   video.currentTime += value;
  // }
  //
  // restart() {
  //   const video: any = document.getElementById('my_video_1');
  //   video.currentTime = 0;
  // }
}
