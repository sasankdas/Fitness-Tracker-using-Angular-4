import { NgModule } from "@angular/core";
import {MatButtonModule, MatIconModule, MatFormFieldModule, MatInputModule,
MatDatepickerModule, MatNativeDateModule,MatCheckboxModule, MatSidenavModule } from '@angular/material';


@NgModule({
    imports:[MatButtonModule, MatIconModule, MatFormFieldModule, MatInputModule,MatDatepickerModule,
        MatCheckboxModule, MatNativeDateModule,MatSidenavModule],
    exports :[MatButtonModule, MatIconModule, MatFormFieldModule, MatInputModule,MatDatepickerModule,
        MatCheckboxModule, MatNativeDateModule, MatSidenavModule],
})
export class MaterialModule{

}