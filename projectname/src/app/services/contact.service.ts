import { Injectable } from '@angular/core';

import{HttpClient}from '@angular/common/http'
import { contactIenterface,contactfeedbackInterface } from '../models/contact-form.model';
import { Observable } from 'rxjs';
import { IPost } from 'src/Post.interface';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  api: string = 'https://behshad.free.beeceptor.com/api/contact-form';
  baseurl: string = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) {}

  sendContactForm(data: contactIenterface): Observable<any> {
    return this.http.post(
      this.api,
      data
    ) as Observable<contactfeedbackInterface>;
  }

  getUser() {
    return this.http.get(this.baseurl);
  }

  // postUser(post:any){
  //   return this.http.post(this.baseurl,post)

  // }

  putUser(post:IPost,id:number){
     return this.http.put(this.baseurl+'/'+id ,post)
  }

  deleteUser(id:number){
    return this.http.delete(this.baseurl+'/'+id)
  }
}
