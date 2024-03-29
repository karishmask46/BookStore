import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Components/login/login.component';
import { SignupComponent } from './Components/signup/signup.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import { HttpClientModule } from '@angular/common/http';
import { MatInputModule } from '@angular/material/input';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { GetbookComponent } from './Components/getbook/getbook.component';
import {MatSelectModule} from '@angular/material/select';
import { HeaderComponent } from './Components/header/header.component';
import { OpenBookComponent } from './Components/open-book/open-book.component';
import { CartComponent } from './Components/cart/cart.component';
import { WishlistComponent } from './Components/wishlist/wishlist.component';
import {MatRadioModule} from '@angular/material/radio';
import { OrderComponent } from './Components/order/order.component';
import { HomeComponent } from './Components/home/home.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { NgxPaginationModule } from 'ngx-pagination';
import { FooterComponent } from './Components/footer/footer.component';
import { MatBadgeModule } from '@angular/material/badge';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FilterPipe } from './filter.pipe';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {MatMenuModule} from '@angular/material/menu';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    DashboardComponent,
    GetbookComponent,
    HeaderComponent,
    OpenBookComponent,
    CartComponent,
    WishlistComponent,
    OrderComponent,
    HomeComponent,
    FooterComponent,
    FilterPipe,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    HttpClientModule,
    MatInputModule,
    MatToolbarModule,
    MatIconModule,
    MatSelectModule,
    MatRadioModule,
    MatPaginatorModule,
    NgxPaginationModule,
    MatBadgeModule,
    MatSnackBarModule,
    Ng2SearchPipeModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
