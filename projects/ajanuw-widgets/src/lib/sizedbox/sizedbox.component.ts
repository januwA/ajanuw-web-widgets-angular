import { Component, OnInit, Input, HostBinding } from "@angular/core";

@Component({
  selector: "a-sizedbox",
  templateUrl: "./sizedbox.component.html",
  styleUrls: ["./sizedbox.component.styl"]
})
export class SizedboxComponent implements OnInit {
  @Input()
  @HostBinding("style.width")
  width: string = "0px";

  @Input()
  @HostBinding("style.height")
  height: string = "0px";

  constructor() {}

  ngOnInit() {}
}
