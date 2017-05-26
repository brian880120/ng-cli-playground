import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import { MaterialModule, MdInputModule, MdAutocompleteModule } from '@angular/material';

import { CoreModule } from './core/core.module';
import { LoginModule } from './login/login.module';
import { AdminModule } from './admin/admin.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';
import { OrdersComponent } from './orders/orders.component';
import { CustomerService } from './customer/customer.service';
import { CharacterService } from './characters/shared/character.service';

@NgModule({
    declarations: [
        AppComponent,
        CustomerComponent,
        OrdersComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        NoopAnimationsModule,
        HttpModule,
        AppRoutingModule,
        MaterialModule,
        MdInputModule,
        MdAutocompleteModule,
        CoreModule,
        LoginModule,
        AdminModule
    ],
    providers: [CustomerService, CharacterService],
    bootstrap: [AppComponent]
})
export class AppModule { }
