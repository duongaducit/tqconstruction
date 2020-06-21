import { Directive, Input, OnChanges, SimpleChanges, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appCountUp]'
})
export class CountUpDirective implements OnInit, OnChanges {

  @Input('count') count: string;
  @Input('timming') timming: string;
  @Input('start') start: boolean;

  value = 0;
  constructor(private el: ElementRef) { }
  ngOnInit(): void {
    this.el.nativeElement.innerHTML = '0';
    this.value = 0;
  }

  ngOnChanges() {
    if (this.start) {
      this.startTimer();
    }
  }


  startTimer() {
    var counter = setInterval(()=>{
      this.el.nativeElement.innerHTML = this.value;
      this.value++;
      if (this.value > parseInt(this.count)) {
        clearInterval(counter);
      }
    }, parseInt(this.timming));
  }
}
