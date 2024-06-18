import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import {CusercardComponent} from './cusercard/cusercard.component'
import { ProductsComponent } from './products/products.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './auth.service';

const routes: Routes = [
{
  path:"home",
  component:HomeComponent
},
{
  path:"about",
  component:AboutComponent
},
{path:"contact",
component:ContactComponent,
canActivate:[AuthService]

},
{
  path:'login',
  component:LoginComponent
},
{
  path:"userslist",
  component:UsersComponent
},
{
  path:'usercard/:id',component:CusercardComponent
},
{
  path:'products',component:ProductsComponent
}

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
