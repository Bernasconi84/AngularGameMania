import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-jogos',
  templateUrl: './jogos.component.html',
  styleUrls: ['./jogos.component.css']
})
export class JogosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 600,
    navText: ['&#8249', '&#8250;'],
    responsive: {
      0: {
        items: 1 
      },
      600: {
        items: 3
      },
      760: {
        items: 4
      },
      1000: {
        items: 5
      }
    },
    nav: true
  }
}
