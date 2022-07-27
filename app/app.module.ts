import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';


import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';
import {
  AgmCoreModule
} from '@agm/core';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import {NewsService} from './service/news.service';
import {YoutubeService} from './service/youtube.service';
import {ChatbotService} from './service/chatbot.service';


@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDa57ehULPKorTZwLgy6WkuGVf_PdcKIqQ',
      libraries: ['places']
    })
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent
  ],
  providers: [NewsService, YoutubeService, ChatbotService],
  bootstrap: [AppComponent]
})
export class AppModule { }
