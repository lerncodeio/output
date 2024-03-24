import { Routes } from '@angular/router';
import { DashboardPageComponent } from './page/dashboard-page/dashboard-page.component';

export const routes: Routes = [
    {
        path: 'dashboard/:userId',
        component: DashboardPageComponent,
    },
    {
        path: '',
        redirectTo: '/dashboard/1',
        pathMatch: 'full',
    },
];
