import { Component, OnInit, Input, HostBinding } from "@angular/core";

@Component({
  selector: "a-row",
  templateUrl: "./row.component.html",
  styleUrls: ["./row.component.styl"]
})
export class RowComponent implements OnInit {
  /**
   * max|min
   * default: max
   * max: flex
   * min: inline-flex;
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
  display: string = "flex";

  @HostBinding("style.justifyContent")
  justifyContent: string = "flex-start";

  @HostBinding("style.alignItems")
  alignItems: string = "center";

  constructor() {}

  ngOnInit() {
    switch (this.mainSize) {
      case "max":
        this.display = "flex";
        break;

      case "min":
        this.display = "inline-flex";
        break;

      default:
        this.display = "flex";
        break;
    }
    this.justifyContent = this.main;
    this.alignItems = this.cross;
  }
}
