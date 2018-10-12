import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {BrowserModule} from '@angular/platform-browser';
import {UserListComponent} from './core/user-list/user-list.component';
import {UserListService} from './core/services/user-list.service';


@NgModule({
  declarations: [
    AppComponent,
    UserListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [UserListService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
