import { Component, ElementRef, Output, ViewChild } from '@angular/core';
import { IPost } from 'src/Post.interface';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-contant',
  templateUrl: './contant.component.html',
  styleUrls: ['./contant.component.scss'],
})
export class ContantComponent {
  isCallingAPI: boolean = false;
  isSubmitted: boolean = false;

  name: string = '';
  Email: string = '';
  desc: string = '';

  @ViewChild('textID') textID?: ElementRef;
  @ViewChild('textName') textName?: ElementRef;
  @ViewChild('textEmail') textEmail?: ElementRef;
  @ViewChild('texDescription') texDescription?: ElementRef;

  constructor(public service: ContactService) {}

  sendForm() {
    this.isCallingAPI = true;
    this.service
      .sendContactForm({
        name: this.textName!.nativeElement.value,
        email: this.textEmail?.nativeElement.value,
        desc: this.texDescription?.nativeElement.value,
      })
      .subscribe(
        (Output) => {
          this.isCallingAPI = false;
          if (Output.status) {
            this.name = this.textName!.nativeElement.value;
            this.Email = this.textEmail!.nativeElement.value;
            this.desc = this.texDescription!.nativeElement.value;

            this.isSubmitted = true;
          }
        },
        (error) => {
          console.log('server output', error);
          this.isCallingAPI = false;
        }
      );
  }

  putForm() {
    let id = +this.textID?.nativeElement.value;

    let post: IPost = { UserId: 0, Title: '', body: '' };
    post.UserId = 10;
    post.Title = this.textName?.nativeElement.value;
    post.body = this.texDescription?.nativeElement.value;

    this.service
      .putUser(post, id)
      .subscribe((response) => console.log(response));
  }

  // DeleteForm() {}

  DeleteForm() {
   let id = +this.textID?.nativeElement.value;
    this.service.deleteUser(id)
    .subscribe((response) => { console.log(response);});
  }
}
