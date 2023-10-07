import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductsComponent } from './components/products/products.component';
import { CatiegoriesComponent } from './components/catiegories/catiegories.component';
import { BrandsComponent } from './components/brands/brands.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { registerLocaleData } from '@angular/common';
import { RegistierComponent } from './components/registier/registier.component';
import { AuthNavbarComponent } from './components/auth-navbar/auth-navbar.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { BlankLayoutComponent } from './layouts/blank-layout/blank-layout.component';
import { authGuardsGuard } from './guards/auth-guards.guard';
import { DetailsComponent } from './details/details.component';
import { PaymentComponent } from './components/payment/payment.component';
import { VerifyComponent } from './components/verify/verify.component';

const routes: Routes = [

{path:"" , component:AuthLayoutComponent , children:[
  {path:"" ,redirectTo:"login" , pathMatch:"full" },
  {path:"login" ,component:LogInComponent , title:"Log In" },
  {path:"registire" ,component:RegistierComponent , title:"Register" },
  {path:"verify" ,component:VerifyComponent , title:"Verify" }
]},

{path:"" , component:BlankLayoutComponent , children:[

  {path:"" ,redirectTo:"home" , pathMatch:"full" },
  {path:"home" ,component:HomeComponent , title:"home" , canActivate:[authGuardsGuard]},
  {path:"cart" ,component:CartComponent , title:"cart",canActivate:[authGuardsGuard] },
  {path:"products" ,component:ProductsComponent , title:"products",canActivate:[authGuardsGuard] },
  {path:"catiegories" ,component:CatiegoriesComponent , title:"catiegories",canActivate:[authGuardsGuard] },
  {path:"brands" ,component:BrandsComponent , title:"brands" ,canActivate:[authGuardsGuard]},
  {path:"wishList" ,component:WishlistComponent , title:"wish list",canActivate:[authGuardsGuard] },
  {path:"details/:id" ,component:DetailsComponent , title:"Details",canActivate:[authGuardsGuard] },
  {path:"payment/:id" ,component:PaymentComponent , title:"Payment",canActivate:[authGuardsGuard] },


]},
  {path:"**" ,component:NotFoundComponent , title:"not Found" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
