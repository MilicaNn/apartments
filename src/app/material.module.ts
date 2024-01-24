//kreirali smo material.module.ts
//importovali smo Ng modul kako bi mogli da koristimo i exportovali smo materilaModul za dalje...
//u sustini komponente koje ovde ubacimo, bice koriscene u app.modulu

import { NgModule } from "@angular/core";
import {MatBadgeModule} from '@angular/material/badge';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatListModule} from '@angular/material/list';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';

import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatDialogModule} from '@angular/material/dialog';

import {MatMenuModule} from '@angular/material/menu';

import {MatGridListModule} from '@angular/material/grid-list';
import {MatExpansionModule} from '@angular/material/expansion';






@NgModule({
    imports:[MatBadgeModule,
            MatButtonModule,
            MatToolbarModule,
            MatIconModule,
            MatSidenavModule,
            MatListModule,
            MatButtonToggleModule,
            MatTabsModule,
            MatCardModule,

            MatInputModule,
            MatSelectModule,
            MatRadioModule,
            MatCheckboxModule,
            MatTableModule,
            MatPaginatorModule,
            MatSortModule,
            MatDialogModule,
            MatMenuModule,
            MatGridListModule,
            MatExpansionModule,
          
            
           
    
    
    ],
    exports:[MatBadgeModule,
             MatButtonModule,
             MatToolbarModule,
             MatIconModule,
             MatSidenavModule,
             MatListModule,
             MatButtonToggleModule,
             MatTabsModule,
             MatCardModule,

             MatInputModule,
             MatSelectModule,
             MatRadioModule,
             MatCheckboxModule,
             MatTableModule,
             MatPaginatorModule,
             MatSortModule,
             MatDialogModule,
             MatMenuModule,
             MatGridListModule,
             MatExpansionModule,




             
    ]
})
export class MaterialModule{}