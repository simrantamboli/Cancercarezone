import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { DoctorProfileComponent } from '../../doctor-profile/doctor-profile.component';
import { NewsComponent } from '../../news/news.component';
import { MapsComponent } from '../../maps/maps.component';
import {SymptomsComponent } from '../../symptoms/symptoms.component';
import {VideoListComponent} from '../../video-list/video-list.component';
import {AboutusComponent} from '../../components/aboutus/aboutus.component';
import {ChatBotComponent} from '../../chat-bot/chat-bot.component';


export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'doctor-profile',   component: DoctorProfileComponent },
    { path: 'video-list',     component: VideoListComponent },
    { path: 'news',     component: NewsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'symptoms',  component: SymptomsComponent },
    { path: 'aboutus',  component: AboutusComponent },
    { path: 'chatbot',  component: ChatBotComponent },
];
