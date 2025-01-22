import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/components/login/login.component';
import { SignupComponent } from './auth/components/signup/signup.component';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
    { path: '', redirectTo: '/login', pathMatch: 'full' }, // Default route
    {
        path: 'admin',
        loadChildren: () =>
            import('./modules/admin/admin.module').then((m) => m.AdminModule),
    },
    {
        path: 'employee',
        loadChildren: () =>
            import('./modules/employee/employee.module').then((m) => m.EmployeeModule),
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
