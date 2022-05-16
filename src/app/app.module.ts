import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminModuleModule } from './admin/admin-module/admin-module.module';
import { ClientModule } from './clients/client.module';
import { CompanyModule } from './company/company.module';
import { SharedModule } from './shared/shared/shared.module';
import { CustomMaterialModule } from './custom-material/custom-material.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AboutModule } from './about/about.module';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/in-memory-data.service';
import { ClientService } from './clients/client.service';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule,
    BrowserAnimationsModule,
    ClientModule,
    CompanyModule,
    SharedModule,
    CustomMaterialModule,
    AdminModuleModule,
    AboutModule,
  ],
  providers: [ClientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
