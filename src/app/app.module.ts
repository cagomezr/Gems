import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import	{HttpModule} from '@angular/http';
import { AppRoutingModule } from './app-routing/app-routing.module';

import { AppComponent } from './app.component';
import { GemsComponent } from './gems/gems.component';
import { GemComponent } from './gem/gem.component';

import { GemsService } from './gems.service';


@NgModule({
  declarations: [
    AppComponent,
    GemsComponent,
    GemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule  
  ],
  providers: [ GemsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
