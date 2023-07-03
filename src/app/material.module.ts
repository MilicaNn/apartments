//kreirali smo material.module.ts
//importovali smo Ng modul kako bi mogli da koristimo i exportovali smo materilaModul za dalje...
//u sustini komponente koje ovde ubacimo, bice koriscene u app.modulu

import { NgModule } from "@angular/core";
import {MatBadgeModule} from '@angular/material/badge';
import {MatButtonModule} from '@angular/material/button';



@NgModule({
    imports:[MatBadgeModule,
            MatButtonModule
    
    
    ],
    exports:[MatBadgeModule,
             MatButtonModule,

             
    ]
})
export class MaterialModule{}