import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminModuleModule } from './admin/admin-module/admin-module.module';
import { ClientModule } from './clients/client.module';
import { CompanyModule } from './company/company/company.module';
import { SharedModule } from './shared/shared/shared.module';
import { CustomMaterialModule } from './custom-material/custom-material.module';

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
    CustomMaterialModule,
    AdminModuleModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
