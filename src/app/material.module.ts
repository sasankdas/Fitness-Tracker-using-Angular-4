import { NgModule } from "@angular/core";
import {MatButtonModule, MatIconModule, MatFormFieldModule, MatInputModule,
MatDatepickerModule, MatNativeDateModule,MatCheckboxModule } from '@angular/material';


@NgModule({
    imports:[MatButtonModule, MatIconModule, MatFormFieldModule, MatInputModule,MatDatepickerModule,
        MatCheckboxModule, MatNativeDateModule],
    exports :[MatButtonModule, MatIconModule, MatFormFieldModule, MatInputModule,MatDatepickerModule,
        MatCheckboxModule, MatNativeDateModule],
})
export class MaterialModule{

}