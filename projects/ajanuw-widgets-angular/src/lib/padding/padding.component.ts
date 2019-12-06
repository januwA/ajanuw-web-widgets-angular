import { Component, OnInit, Input, HostBinding } from "@angular/core";

@Component({
  selector: "a-padding",
  templateUrl: "./padding.component.html",
  styleUrls: ["./padding.component.styl"]
})
export class PaddingComponent implements OnInit {
  zero: string = "0px";

  @Input()
  @HostBinding("style.padding")
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
