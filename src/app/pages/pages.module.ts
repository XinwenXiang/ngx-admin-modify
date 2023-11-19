import { NgModule } from "@angular/core";
import { NbMenuModule } from "@nebular/theme";

import { ThemeModule } from "../@theme/theme.module";
import { PagesComponent } from "./pages.component";
import { PagesRoutingModule } from "./pages-routing.module";
import { MiscellaneousModule } from "./miscellaneous/miscellaneous.module";
import { TestmaterialComponent } from "./testmaterial/testmaterial.component";
import { MatChipsModule } from "@angular/material/chips";

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    MiscellaneousModule,
    MatChipsModule,
  ],
  declarations: [PagesComponent, TestmaterialComponent],
})
export class PagesModule {}
