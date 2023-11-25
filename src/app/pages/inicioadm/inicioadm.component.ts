import { Component, OnInit } from '@angular/core';
import { NavbarService } from 'src/app/services/navbar.service';

@Component({
  selector: 'app-inicioadm',
  templateUrl: './inicioadm.component.html',
  styleUrls: ['./inicioadm.component.css']
})
export class InicioadmComponent implements OnInit {
  constructor(public nav: NavbarService) {}
  ngOnInit(): void {
    this.nav.hide();
  }
}
