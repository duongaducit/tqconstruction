import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './theme/header/header.component';
import { FooterComponent } from './theme/footer/footer.component';
import { DefaultComponent } from './theme/default/default.component';
import { HomeComponent } from './layout/home/home.component';
import { GoogleMapsModule } from '@angular/google-maps'
import { CarouselModule } from 'ngx-owl-carousel-o';
import { CountUpDirective } from './common/count-up.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DefaultComponent,
    HomeComponent,
    CountUpDirective
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    BrowserAnimationsModule,
    CarouselModule,
    GoogleMapsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
