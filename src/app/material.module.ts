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
    
    
    ],
    exports:[MatBadgeModule,
             MatButtonModule,
             MatToolbarModule,
             MatIconModule,
             MatSidenavModule,
             MatListModule,
             MatButtonToggleModule,
             MatTabsModule,
             MatCardModule


             
    ]
})
export class MaterialModule{}