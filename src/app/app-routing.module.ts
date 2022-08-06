import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from "src/app/login/login.component";
import { HomeComponent } from "src/app/home/home.component";
import { AdminComponent } from "src/app/admin/admin.component";
import { AboutComponent } from "src/app/about/about.component";
import { AuthGuard } from "src/app/auth.guard";

const routes: Routes = [
  { path:'',component: HomeComponent, canActivate: [ AuthGuard]},
  { path:'admin',component: AdminComponent  },
  { path:'login',component: LoginComponent },
  { path:'about',component: AboutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
