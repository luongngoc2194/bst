import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import { VideoIframeOne} from '../data/video';
import {VideoType} from '../model/video-type';

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  constructor() {
  }

  getList(): Observable<VideoType[]> {
    return of<VideoType[]>(VideoIframeOne);


  }
}
