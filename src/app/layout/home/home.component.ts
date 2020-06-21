import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  static id = "HomeComponent";
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    stagePadding: 2,
    autoplay: true,
    dots: false,
    center: true,
    margin: 10,
    navSpeed: 300,
    startPosition: 0,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      },
      1024: {
        items: 1
      },
      1366: {
        items: 1
      }
    },
    nav: false
  };
  slides = [
    {
      image: '../../../assets/img/static/bg_1.jpg'
    },
    {
      image: '../../../assets/img/static/bg_1.jpg'
    },
    {
      image: '../../../assets/img/static/bg_1.jpg'
    }
  ];
  projects = [
    {
      img: '../../../assets/img/project/project-1.jpg',
      name: 'Dự án 1',
      step: 'Thiết kế bản vẽ'
    },
    {
      img: '../../../assets/img/project/project-2.jpg',
      name: 'Dự án 2',
      step: 'Thiết kế bản vẽ'
    },
    {
      img: '../../../assets/img/project/project-3.jpg',
      name: 'Dự án 3',
      step: 'Thiết kế nội thất'
    },
    {
      img: '../../../assets/img/project/project-4.jpg',
      name: 'Dự án 4',
      step: 'Thiết kế bản vẽ'
    },
    {
      img: '../../../assets/img/project/project-5.jpg',
      name: 'Dự án 5',
      step: 'Thiết kế nội thất'
    }
  ]

  customOptionsProject: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    stagePadding: 2,
    autoplay: true,
    dots: true,
    center: false,
    margin: 20,
    navSpeed: 300,
    startPosition: 0,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      },
      1024: {
        items: 4
      },
      1366: {
        items: 4
      }
    },
    nav: false
  };

  employees = [{
    img: '../../../assets/img/employee/staff-1.jpg',
    name: 'Nhân viên 1',
    level: 'Chức vụ',
    des: 'Giới thiệu sơ qua'
  },
  {
    img: '../../../assets/img/employee/staff-2.jpg',
    name: 'Nhân viên 2',
    level: 'Chức vụ',
    des: 'Giới thiệu sơ qua'
  },
  {
    img: '../../../assets/img/employee/staff-3.jpg',
    name: 'Nhân viên 3',
    level: 'Chức vụ',
    des: 'Giới thiệu sơ qua'
  },
  {
    img: '../../../assets/img/employee/staff-4.jpg',
    name: 'Nhân viên 4',
    level: 'Chức vụ',
    des: 'Giới thiệu sơ qua'
  }]

  @ViewChild('welcome') welcome: ElementRef;
  @ViewChild('project') project: ElementRef;
  @ViewChild('employee') employee: ElementRef;
  @ViewChild('contact') contact: ElementRef;
  constructor(public homeService: HomeService) { }

  ngOnInit(): void {

    setTimeout(() => {
      this.homeService.welcome = this.welcome;
      this.homeService.project = this.project;
      this.homeService.employee = this.employee;
      this.homeService.contact = this.contact;
    })
  }

}
