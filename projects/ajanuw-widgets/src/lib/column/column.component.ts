import { Component, OnInit, Input, HostBinding } from "@angular/core";

@Component({
  selector: "a-column",
  templateUrl: "./column.component.html",
  styleUrls: ["./column.component.styl"]
})
export class ColumnComponent implements OnInit {
  /**
   * max|min
   * default: max
   * max: height:100%
   * min: height:auto;
   */
  @Input() mainSize: string = "max";

  /**
   * * 主轴
   * mainAxisAlignment justify-content
   * defualt: justify-content: flex-start;
   */
  @Input() main: string = "flex-start";

  /**
   * * 纵轴
   * crossAxisAlignment align-items
   * default: align-items: center
   */
  @Input() cross: string = "center";

  @HostBinding("style.display")
  display = "flex";

  @HostBinding("style.flexDirection")
  flexDirection = "column";

  @HostBinding("style.height")
  height = "auto";

  @HostBinding("style.justifyContent")
  justifyContent = "flex-start";

  @HostBinding("style.alignItems")
  alignItems = "center";

  constructor() {}

  ngOnInit() {
    switch (this.mainSize) {
      case "max":
        this.height = "100%";
        break;

      case "min":
        this.height = "auto";
        break;

      default:
        this.height = "100%";
        break;
    }
    this.justifyContent = this.main;
    this.alignItems = this.cross;
  }
}
