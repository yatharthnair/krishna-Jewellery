import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
  ],

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
  ],

  providers: [
//     {
//       provide: HTTP_INTERCEPTORS,
//       useClass: Interceptor,
//       multi: true,
//     },
//     {
//       provide: HTTP_INTERCEPTORS,
//       useClass: ErrorInterceptor,
//       multi: true,
//     },
  ],
   bootstrap: [AppComponent]
})
export class AppModule { }
