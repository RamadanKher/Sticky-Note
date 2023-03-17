import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class NoteService {
  BaseUrl = "https://sticky-note-fe.vercel.app/"

  constructor(private _HttpClient: HttpClient) { }
  addNote(data: any): Observable<any> {
    return this._HttpClient.post(this.BaseUrl + "addNote", data)
  }
  getNote(data: any): Observable<any> {
    return this._HttpClient.post(this.BaseUrl + "getUserNotes", data)
  }

  // 
  deleteNote(data: any): Observable<any> {
    let option = {
      headers: new HttpHeaders({}),
      body: {
        NoteID: data.NoteID,
        token: data.token
      }

    }
    return this._HttpClient.delete(this.BaseUrl + "deleteNote", option)

  }
  // 
  updateNote(data: any): Observable<any> {
    return this._HttpClient.put(this.BaseUrl + "updateNote", data)
  }
}
