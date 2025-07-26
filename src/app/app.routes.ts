import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DemoniComponent } from './pages/demoni/demoni.component';
import { CasiComponent } from './pages/casi/casi.component';
import { ContattiComponent } from './pages/contatti/contatti.component';

export const routes: Routes = [
    {path: '', redirectTo:"home", pathMatch:'full'},
    {path:'home', component:HomeComponent},
    {path:'demoni', component:DemoniComponent},
    {path:'casi', component:CasiComponent},
    {path:'contatti', component:ContattiComponent},




];
