import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImageComponent } from './components/image/image.component';
import { ProductComponent } from './components/product/product.component';
import { ProducstListComponent } from './components/producst-list/producst-list.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ReversePipe } from './pipes/reverse.pipe';
import { TimeAgoPipe } from './pipes/time-ago.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ImageComponent,
    ProductComponent,
    ProducstListComponent,
    NavbarComponent,
    ReversePipe,
    TimeAgoPipe,
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
