// app-routing.module.ts

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartpageComponent } from './startpage/startpage.component';
import { RechtsvormComponent } from './rechtsvorm/rechtsvorm.component';
import { InschrijvendelenComponent } from './inschrijvendelen/inschrijvendelen.component';

const routes: Routes = [
    { path: '', redirectTo: '/startpage', pathMatch: 'full' },
    { path: 'startpage', component: StartpageComponent },
    { path: 'rechtsvorm', component: RechtsvormComponent },
    { path: 'inschrijvendelen', component: InschrijvendelenComponent },

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }
