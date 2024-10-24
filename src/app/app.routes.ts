import { Routes } from '@angular/router';
import { StudentListComponent } from './components/student-list/student-list.component';
import { StudentAddComponent } from './components/student-add/student-add.component';
import { StudentEditComponent } from './components/student-edit/student-edit.component';

export const routes: Routes = [
    {path: 'all', component: StudentListComponent},
    {path: 'create',component: StudentAddComponent},
    {path: 'edit/:id',component:StudentEditComponent},
    {path: '',redirectTo: 'all',pathMatch:'full'},
    {path: '**',component: StudentListComponent}
];
