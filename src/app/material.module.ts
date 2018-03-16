import { NgModule } from "@angular/core";
import {MatButtonModule, MatIconModule, MatFormFieldModule, MatInputModule,
MatDatepickerModule, MatNativeDateModule,MatCheckboxModule, MatSidenavModule
,MatToolbarModule } from '@angular/material';


@NgModule({
    imports:[MatButtonModule, MatIconModule, MatFormFieldModule, MatInputModule,MatDatepickerModule,
        MatCheckboxModule, MatNativeDateModule,MatSidenavModule, MatToolbarModule],
    exports :[MatButtonModule, MatIconModule, MatFormFieldModule, MatInputModule,MatDatepickerModule,
        MatCheckboxModule, MatNativeDateModule, MatSidenavModule, MatToolbarModule],
})
export class MaterialModule{

}