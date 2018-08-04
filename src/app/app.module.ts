import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SideNavComponent } from './main/side-nav/side-nav.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MainPanelComponent } from './main/main-panel/main-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    HeaderComponent,
    MainPanelComponent
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
