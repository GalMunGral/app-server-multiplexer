import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatMenuModule } from '@angular/material/menu';
import { MatInputModule } from '@angular/material/input';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SubscriptionsComponent } from './subscriptions/subscriptions.component';
import { VideoPlayerComponent } from './video-player/video-player.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { VideoListComponent } from './video-list/video-list.component';
import { VideoListCellComponent } from './video-list-cell/video-list-cell.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { VideoDescriptionComponent } from './video-description/video-description.component';
import { CommentSectionComponent } from './comment-section/comment-section.component';
import { CommentInputComponent } from './comment-input/comment-input.component';
import { CommentListComponent } from './comment-list/comment-list.component';
import { CommentCellComponent } from './comment-cell/comment-cell.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: ErrorPageComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SubscriptionsComponent,
    VideoPlayerComponent,
    SideMenuComponent,
    ToolbarComponent,
    VideoListComponent,
    VideoListCellComponent,
    ErrorPageComponent,
    VideoDescriptionComponent,
    CommentSectionComponent,
    CommentInputComponent,
    CommentListComponent,
    CommentCellComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    RouterModule.forRoot(
      appRoutes,
      // { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatListModule,
    MatDividerModule,
    MatMenuModule,
    MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
