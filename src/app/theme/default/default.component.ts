import { Component, OnInit, ElementRef, ViewChild, HostListener } from '@angular/core';
import { ElementHelper } from 'protractor';
import { HomeService } from 'src/app/layout/home/home.service';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {

  componentLoad;
  headerHomepage
  constructor(public homeService: HomeService) { }

  ngOnInit(): void {
  }

  onRouterOutletActivate(event) {  
    this.componentLoad = event.constructor.id;
    this.headerHomepage = this.componentLoad == 'HomeComponent';
  }

  @HostListener("window:scroll", ['$event'])
  scrollWindow(event) {
    if (this.headerHomepage) {
      this.homeService.scrollCheck(event.currentTarget.scrollY, event.currentTarget.screen.height);
    }

  }
}
