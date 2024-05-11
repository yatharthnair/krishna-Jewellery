import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './shared/not-found/not-found.component'
import { LandingPageComponent } from './landing-page/landing-page.component'

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: '/home' },
    { path: 'home', component: LandingPageComponent },
    { path: '404', component: NotFoundComponent },
    //   { path: 'login', component: LoginComponent },
    //   {
    //     path: 'dashboard',
    //     loadChildren: () => import("./dashboard/dashboard.module")
    //       .then(m => m.DashboardModule)
    //   },
    { path: '**', pathMatch: 'full', redirectTo: '/404' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {
        scrollPositionRestoration: 'enabled'
    })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
