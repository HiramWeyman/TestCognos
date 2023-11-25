import { Component } from '@angular/core';
import { NavbarService } from 'src/app/services/navbar.service';
@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.css']
})
export class FaqsComponent {

  constructor(public nav: NavbarService) { }
  
  ngOnInit() {
    this.nav.show();
  }
  
}
