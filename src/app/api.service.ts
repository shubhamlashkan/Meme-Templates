import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class APIService {

  constructor(private http:HttpClient) { }
  fetchAllTemplates():Observable<any>
  {
    return this.http.get('https://api.imgflip.com/get_memes');
  }
}
