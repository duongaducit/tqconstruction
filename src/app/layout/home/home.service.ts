import { Injectable, ElementRef } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  welcome: ElementRef;
  scrollWelcome = false;

  project: ElementRef;
  scrollProject = false;

  employee: ElementRef;
  scrollEmployee = false;

  contact: ElementRef;
  scrollContact = false;
  
  showFixedMenu = false;
  topMenu: ElementRef;

  constructor() { }

  scrollCheck(scrollTop, clientHeight) {
    
    if ((scrollTop + clientHeight) > (this.welcome.nativeElement.offsetTop + clientHeight / 5)) {
      this.scrollWelcome = true;
    }

    if ((scrollTop + clientHeight) > (this.project.nativeElement.offsetTop + clientHeight / 5)) {
      this.scrollProject = true;
    }

    if ((scrollTop + clientHeight) > (this.employee.nativeElement.offsetTop + clientHeight / 5)) {
      this.scrollEmployee = true;
    }

    if ((scrollTop + clientHeight) > (this.contact.nativeElement.offsetTop + clientHeight / 5)) {
      this.scrollContact = true;
    }
    
    this.showFixedMenu = scrollTop > 85;
  }
}
