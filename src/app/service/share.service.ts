import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ShareService {

  constructor(private http: HttpClient) { }

  getAllVideo(){
    return this.http.get(`${environment.apiUrl}videos`);
  }
  addVideo(param){
    return this.http.post(`${environment.apiUrl}videos`, param);
  }
  editVideo(id, param){
    return this.http.put(`${environment.apiUrl}videos/${id}`, param);
  }
  deleteVideo(id){
    return this.http.delete(`${environment.apiUrl}videos/${id}`);
  }

  getAllComic(){
    return this.http.get(`${environment.apiUrl}comic`);
  }
  addComic(param){
    return this.http.post(`${environment.apiUrl}comic`, param);
  }
  editComic(id, param){
    return this.http.put(`${environment.apiUrl}comic/${id}`, param);
  }
  deleteComic(id){
    return this.http.delete(`${environment.apiUrl}comic/${id}`);
  }
}
