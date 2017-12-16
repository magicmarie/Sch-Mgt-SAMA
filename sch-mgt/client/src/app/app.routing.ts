import { RouterModule, Routes } from '@angular/router';
import { SchoolComponent } from './components/school/school.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SchoolListComponent } from './components/school-list/school-list.component';

const appRoutes: Routes = [
    { path: '', component: DashboardComponent },
    { path: 'addSchool', component: SchoolComponent },
    { path: 'schoolList', component: SchoolListComponent }
];

export const Routing = RouterModule.forRoot(appRoutes);