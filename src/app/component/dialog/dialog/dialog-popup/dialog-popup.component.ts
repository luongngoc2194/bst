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

}
