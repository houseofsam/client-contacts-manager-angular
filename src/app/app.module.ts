import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClientPageComponent } from './clients/client-page/client-page.component';
import { SearchFormComponent } from './search/search-form/search-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClientFormComponent } from './clients/client-form/client-form.component';
import { AdminModuleModule } from './admin/admin-module/admin-module.module';
import { ClientModule } from './clients/client.module';
import { CompanyModule } from './company/company/company.module';
import { SharedModule } from './shared/shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ClientModule,
    CompanyModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    AdminModuleModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
