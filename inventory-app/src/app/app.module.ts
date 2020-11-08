import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {NavigationComponent} from './navigation/navigation.component';
import {ProductsListComponent} from './products-list/products-list.component';
import {BreadcrumbsComponent} from './breadcrumbs/breadcrumbs.component';
import {ProductRowComponent} from './product-row/product-row.component';
import {ProductImageComponent} from './product-image/product-image.component';
import {ProductDisplayComponent} from './product-display/product-display.component';
import {ProductDepartmentComponent} from './product-department/product-department.component';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ProductsListComponent,
    BreadcrumbsComponent,
    ProductRowComponent,
    ProductImageComponent,
    ProductDisplayComponent,
    ProductDepartmentComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
