import { Routes } from '@angular/router';
import { DataDisplayComponent } from './data-display/data-display/data-display.component';

import { CreateComponent } from './create/create/create.component';
import { UpdateComponent } from './update/update/update.component';

export const routes: Routes = [
    {
        path: '',
        component: DataDisplayComponent
    },
    {
        path: 'create',
        component:CreateComponent
    },
    {
        path: 'update/:id',
        component:UpdateComponent
    }
];
