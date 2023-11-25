import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lineamientos',
  templateUrl: './lineamientos.component.html',
  styleUrls: ['./lineamientos.component.css']
})
export class LineamientosComponent implements OnInit {
  constructor( public router: Router ) { }
  ngOnInit(): void {
    window.open("assets/Lineamientos.pdf");
    this.router.navigate(['/inicio']);
  }

}
