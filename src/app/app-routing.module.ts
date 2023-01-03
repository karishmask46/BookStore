import { compileClassMetadata } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationGuard } from './Components/authentication.guard';
import { CartComponent } from './Components/cart/cart.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';
import { OpenBookComponent } from './Components/open-book/open-book.component';
import { OrderComponent } from './Components/order/order.component';
import { SignupComponent } from './Components/signup/signup.component';
import { WishlistComponent } from './Components/wishlist/wishlist.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  {path:'',redirectTo:"/login",pathMatch:'full'},
  { path: 'home', component: HomeComponent,canActivate:[AuthenticationGuard] ,
children:[
  {path:'dashboard',component:DashboardComponent},
  {path: 'Openbook', component: OpenBookComponent},
  {path:'cart',component:CartComponent},
  {path:'order',component:OrderComponent},
  {path:'wishlist',component:WishlistComponent}
]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
