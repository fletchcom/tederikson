import { Component, OnInit } from '@angular/core';  
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';  

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})

export class CarouselComponent implements OnInit {  
  
  constructor(config: NgbCarouselConfig) {  
    config.interval = 4000;  
    config.wrap = true;  
    config.keyboard = true;  
    config.pauseOnHover = false;  
    config.wrap = true;
    config.showNavigationArrows = true;
    config.showNavigationIndicators = true;
  }  
  ngOnInit() {  
  }  
  
}  