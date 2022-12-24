import { Component, OnInit } from '@angular/core';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {


  listUsers: any;
  constructor(private ContactService: ContactService) {}

  ngOnInit() {
    this.ContactService.getUser().subscribe(
      // Response=>this.getArry=Response
      // response=>console.log(response)
      (response) => (this.listUsers = response)
    );
  }
}
