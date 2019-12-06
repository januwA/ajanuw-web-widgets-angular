import { NgModule } from "@angular/core";
import { CenterComponent } from "./center/center.component";
import { PaddingComponent } from "./padding/padding.component";
import { MarginComponent } from "./margin/margin.component";
import { SizedboxComponent } from "./sizedbox/sizedbox.component";
import { RowComponent } from "./row/row.component";
import { ColumnComponent } from "./column/column.component";
import { ExpandedComponent } from "./expanded/expanded.component";
import { SpacerComponent } from "./spacer/spacer.component";
@NgModule({
  declarations: [
    CenterComponent,
    PaddingComponent,
    MarginComponent,
    SizedboxComponent,
    RowComponent,
    ColumnComponent,
    ExpandedComponent,
    SpacerComponent
  ],
  exports: [
    CenterComponent,
    PaddingComponent,
    MarginComponent,
    SizedboxComponent,
    RowComponent,
    ColumnComponent,
    ExpandedComponent,
    SpacerComponent
  ]
})
export class AjanuwWidgetsModule {}
