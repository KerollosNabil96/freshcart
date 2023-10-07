import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CartComponent } from './components/cart/cart.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { BrandsComponent } from './components/brands/brands.component';
import { ProductsComponent } from './components/products/products.component';
import { CatiegoriesComponent } from './components/catiegories/catiegories.component';
import { AuthNavbarComponent } from './components/auth-navbar/auth-navbar.component';
import { BlankNavbarComponent } from './components/blank-navbar/blank-navbar.component';
import { RegistierComponent } from './components/registier/registier.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { FooterComponent } from './components/footer/footer.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { BlankLayoutComponent } from './layouts/blank-layout/blank-layout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TextCuttingPipe } from './pipes/text-cutting.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { DetailsComponent } from './details/details.component';
import { PaymentComponent } from './components/payment/payment.component';
import { ToastrModule } from 'ngx-toastr';
import { VerifyComponent } from './components/verify/verify.component';
import { SearchingPipe } from './searching.pipe';







@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CartComponent,
    WishlistComponent,
    BrandsComponent,
    ProductsComponent,
    CatiegoriesComponent,
    AuthNavbarComponent,
    BlankNavbarComponent,
    RegistierComponent,
    NotFoundComponent,
    FooterComponent,
    LogInComponent,
    AuthLayoutComponent,
    BlankLayoutComponent,
    TextCuttingPipe,
    DetailsComponent,
    PaymentComponent,
    VerifyComponent,
    SearchingPipe,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CarouselModule,
    ToastrModule.forRoot(),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
