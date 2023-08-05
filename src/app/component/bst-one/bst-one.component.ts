import {Component, ElementRef, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {Imagedata, VideoIMG} from '../../data/video';
import {VideoType} from '../../model/video-type';
import {ShareService} from '../../service/share.service';
import {logger} from 'codelyzer/util/logger';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-bst-one',
  templateUrl: './bst-one.component.html',
  styleUrls: ['./bst-one.component.scss']
})
export class BstOneComponent implements OnInit {
  listImg: any;
  listData: any;
  controlBtn = 0;
  dialogRef: MatDialogRef<any>;

  @ViewChild('dialogTemplate') dialogTemplate: TemplateRef<any>;

  constructor(private share: ShareService, private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.share.getAllComic().subscribe(res => {
      this.listData = res;
      // const duplicateNames = this.listData.filter(obj => this.listData.some(otherObj => obj.link === otherObj.link && obj.id !== otherObj.id));
      // console.log(duplicateNames);
      // duplicateNames.forEach(item => {
      //   this.deleteComic(item.id);
      // });
      this.controlListFunc(this.controlBtn);
    });
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
        imgLink: res.imgLink, imgVideo: res.imgVideo, link: res.link
      };
      if (id) {
        this.share.editComic(id, param).subscribe(res => {
          console.log(res);
        });
      } else {
        this.share.addComic(param).subscribe(res => {
          console.log(res);
        });
      }
    });
  }

  controlListFunc(choose: number) {
    if (choose === 0) {
      this.controlBtn = choose;
      this.listImg = this.listData.filter(item => !item.imgVideo);
    } else if (choose === 1) {
      this.controlBtn = choose;
      this.listImg = this.listData.filter(item => item.imgVideo);
    }
  }

  deleteComic(id: any) {
    this.share.deleteComic(id).subscribe(res => {
      console.log(res);
      alert('yes');
      this.getData();
    });
  }
}
