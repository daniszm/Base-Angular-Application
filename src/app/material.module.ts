import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule
} from '@angular/material';

@NgModule({
    imports: [
        MatButtonModule,
        MatIconModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatCheckboxModule,
        MatSidenavModule,
        MatToolbarModule,
        MatListModule
    ],
    exports: [
        MatButtonModule,
        MatIconModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatCheckboxModule,
        MatSidenavModule,
        MatToolbarModule,
        MatListModule
    ],
    providers: []
})
export class MaterialModule {

}