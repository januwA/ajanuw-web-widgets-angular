import { Component, OnInit, Input, HostBinding } from "@angular/core";

@Component({
  selector: "a-margin",
  templateUrl: "./margin.component.html",
  styleUrls: ["./margin.component.styl"]
})
export class MarginComponent implements OnInit {
  zero: string = "0px";

  @Input()
  @HostBinding("style.margin")
  all: string = this.zero;

  @Input()
  top: string = this.zero;

  @Input()
  right: string = this.zero;

  @Input()
  bottom: string = this.zero;

  @Input()
  left: string = this.zero;

  constructor() {}
  ngOnInit() {
    // all不能和only同时设置
    if (this.all === this.zero) {
      this.all = `${this.top} ${this.right} ${this.bottom} ${this.left}`;
    }
  }
}
