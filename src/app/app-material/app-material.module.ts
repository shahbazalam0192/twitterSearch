import { NgModule } from '@angular/core';
import {
    MatAutocompleteModule,
    MatButtonModule,
    MatSliderModule,
    MatInputModule,
    MatCardModule,
    MatSelectModule,
    MatDatepickerModule, MatButtonToggleModule,
    MatNativeDateModule, MatTooltipModule, MatChipsModule, MatSlideToggleModule, MatProgressSpinnerModule,
    MatSidenavModule, MatIconModule, MatListModule, MatToolbarModule, MatTabsModule, MatCheckboxModule, MatExpansionModule
} from '@angular/material';

import { MatRadioModule } from '@angular/material/radio';

// import { MatFileUploadModule } from 'angular-material-fileupload';
// import { MatFileUploadModule } from '@webacad/ng-mat-file-upload';

import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatBadgeModule } from '@angular/material/badge';
import {MatTreeModule} from '@angular/material/tree';

@NgModule({
    imports: [
        MatAutocompleteModule,
        MatButtonModule,
        MatBadgeModule,
        MatInputModule,
        MatCardModule,
        MatSelectModule,
        MatDialogModule,
        MatDatepickerModule,
        MatNativeDateModule, MatTooltipModule,
        MatExpansionModule, MatButtonToggleModule,
        MatSliderModule, MatTabsModule, MatChipsModule, MatSlideToggleModule, MatProgressSpinnerModule,
        MatSidenavModule, MatIconModule, MatListModule, MatToolbarModule, MatRadioModule, 
        // MatFileUploadModule,
        MatMenuModule, MatTableModule, MatPaginatorModule, MatSortModule, MatCheckboxModule, MatSnackBarModule,MatTreeModule
    ],
    exports: [
        MatAutocompleteModule,
        MatButtonModule,
        MatBadgeModule,
        MatInputModule,
        MatCardModule,
        MatSelectModule,
        MatDatepickerModule, MatButtonToggleModule,
        MatNativeDateModule, MatTooltipModule, MatProgressSpinnerModule,
        MatSliderModule, MatTabsModule, MatChipsModule, MatSlideToggleModule,
        // MatFileUploadModule,
        MatSidenavModule, MatIconModule, MatListModule, MatToolbarModule, MatRadioModule, MatMenuModule,
        MatTableModule, MatPaginatorModule, MatSortModule, MatCheckboxModule, MatSnackBarModule, MatExpansionModule,MatTreeModule
    ]
})

export class AppMaterialModule {

}
