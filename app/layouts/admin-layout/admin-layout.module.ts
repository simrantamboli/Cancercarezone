import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { DoctorProfileComponent } from '../../doctor-profile/doctor-profile.component';
import { NewsComponent } from '../../news/news.component';
import { MapsComponent } from '../../maps/maps.component';
import { SymptomsComponent } from '../../symptoms/symptoms.component';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatRippleModule} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSelectModule} from '@angular/material/select';
import {MatExpansionModule} from '@angular/material/expansion';
import {VideoListComponent} from '../../video-list/video-list.component';
import { YouTubePlayerModule } from '@angular/youtube-player';
import {AboutusComponent} from '../../components/aboutus/aboutus.component';
import {ChatBotComponent} from '../../chat-bot/chat-bot.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    MatExpansionModule,
    YouTubePlayerModule,

  ],
  declarations: [
    DashboardComponent,
    DoctorProfileComponent,
    NewsComponent,
    VideoListComponent,
    MapsComponent,
    SymptomsComponent ,
    AboutusComponent,
    ChatBotComponent
    ]
})

export class AdminLayoutModule {}
