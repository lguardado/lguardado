import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { EducationComponent } from './education/education.component';
import { SkillsComponent } from './skills/skills.component';
import { AboutComponent } from './about/about.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { ContactComponent } from './contact/contact.component';
import { PrintComponent } from './print/print.component';
import { FooterComponent } from './footer/footer.component';
import { AboutModalComponent } from './about-modal/about-modal.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router, RouterModule } from '@angular/router';
import { FeedbackModalComponent } from './feedback-modal/feedback-modal.component';
import { MatMenuModule } from '@angular/material/menu';


// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    EducationComponent,
    SkillsComponent,
    AboutComponent,
    FeedbackComponent,
    ContactComponent,
    PrintComponent,
    FooterComponent,
    AboutModalComponent,
    FeedbackModalComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    MatCardModule,
    MatDialogModule,
    MatButtonModule,
    MatMenuModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([])
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent],
  entryComponents: [AboutModalComponent, FeedbackModalComponent]
})
export class AppModule { }
