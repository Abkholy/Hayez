import { HallsService } from './services/halls.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AngularFirestoreModule } from 'angularfire2/firestore/public_api';
import { AngularFireModule } from 'angularfire2';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CustomersComponent } from './components/customers/customers.component';
import { AddcustomerComponent } from './components/addcustomer/addcustomer.component';
import { ItemsComponent } from './components/items/items.component';
import { AddItemComponent } from './components/add-item/add-item.component';
import { ReservComponent } from './components/reserv/reserv.component';
import { AddreservComponent } from './components/addreserv/addreserv.component';
import { HallsComponent } from './components/halls/halls.component';
import { AddHallComponent } from './components/add-hall/add-hall.component';

const appRoute: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'hall', component: HallsComponent },
  { path: 'addHall', component: AddHallComponent },
  { path: 'items', component: ItemsComponent },
  { path: 'additem', component: AddItemComponent },
  { path: 'customer', component: CustomersComponent },
  { path: 'addcustomer', component: AddcustomerComponent },
  { path: 'reserv', component: ReservComponent },
  { path: 'addreserv', component: AddreservComponent } ];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashboardComponent,
    CustomersComponent,
    AddcustomerComponent,
    ItemsComponent,
    AddItemComponent,
    ReservComponent,
    AddreservComponent,
    HallsComponent,
    AddHallComponent
  ],
  imports: [
    RouterModule.forRoot(appRoute),
    BrowserModule,
    AngularFireModule.initializeApp(environment.config, 'hayez'),
    AngularFirestoreModule,
    HttpModule,
    FormsModule,
    FlashMessagesModule.forRoot()
  ],
  providers: [HallsService],
  bootstrap: [AppComponent]
})
export class AppModule {}
