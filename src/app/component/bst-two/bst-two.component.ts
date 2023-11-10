import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {VideoService} from '../../service/video.service';
import {VideoType} from '../../model/video-type';
import {VideoIframeOne, VideoIframeThree, VideoIframeTwo, VideoIframeFour} from '../../data/video';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {ShareService} from '../../service/share.service';

@Component({
  selector: 'app-bst-two',
  templateUrl: './bst-two.component.html',
  styleUrls: ['./bst-two.component.scss']
})
export class BstTwoComponent implements OnInit {

  controlBtn = 0;
  listV = VideoIframeOne;
  hover: boolean;
  count = 10;
  dialogRef: MatDialogRef<any>;

  @ViewChild('dialogTemplate') dialogTemplate: TemplateRef<any>;
  private listData: any;


  constructor(public vService: VideoService, private share: ShareService, private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.addMouseControl(this.listV, false);
    this.getData();
  }

  getData() {
    this.share.getAllVideo().subscribe(res => {
      this.listData = res;
      this.pagination(this.controlBtn, this.count);
      console.log(this.listV);
    });
  }

  pagination(a, sum) {
    this.listV = this.listData.filter((item, index) => index >= a && index < (a + sum));
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
      this.controlBtn = this.controlBtn < this.listData.length ? (this.controlBtn + this.count) : 0;
    } else {
      this.controlBtn = this.controlBtn <= 0 ? this.listData.length : (this.controlBtn - this.count);
    }
    this.pagination(this.controlBtn, this.count);
    this.addMouseControl(this.listV, false);
  }

  ShowImage() {
    this.addMouseControl(this.listV, true);
    console.log(this.listV);
  }

  show(item?) {
    //   how to pass the item to this.dialogTemplate ?
    if (!item) {
      item = new VideoType();
    }
    this.dialogRef = this.dialog.open(this.dialogTemplate, {
      data: item,
    });

    this.dialogRef.afterClosed().subscribe(res => {
      if (!res) {
        return;
      }
      const id = res.id;
      const param = {
        imgLink: res.imgLink, iframeHTML: res.iframeHTML, link: res.link
      };
      if (id) {
        this.share.editVideo(id, param).subscribe(res => {
          console.log(res);
        });
      } else {
        this.share.addVideo(param).subscribe(res => {
          console.log(res);
        });
      }
    });
  }

  deleteVideo(id: any) {
    this.share.deleteVideo(id).subscribe(res => {
      console.log(res);
      alert('yes');
      this.getData();
    });
  }

}
