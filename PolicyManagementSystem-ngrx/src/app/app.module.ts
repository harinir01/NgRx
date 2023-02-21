import { HttpClientModule } from '@angular/common/http';
import { EnvironmentInjector, isDevMode, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ToastNotificationsModule } from 'ngx-toast-notifications';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreatepolicyComponent } from './createpolicy/createpolicy.component';
import { SearchpolicyComponent } from './searchpolicy/searchpolicy.component';
import { ViewpolicyComponent } from './viewpolicy/viewpolicy.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { PolicyformComponent } from './shared/policyform/policyform.component';
import { EditpolicyComponent } from './editpolicy/editpolicy.component';
import { ViewpolicyinformComponent } from './viewpolicyinform/viewpolicyinform.component';
import { Routes,RouterModule } from '@angular/router';
import {StoreModule} from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { policyReducer } from './state/policy.reducer'
import { PolicyEffects } from './state/policy.effects';
import { POLICY_STATE_NAME } from './state/policy.selector';
import { CommonModule } from '@angular/common';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';


const routes:Routes=[
  {
    path: '',
    component: SearchpolicyComponent,
  },{
    path: 'createpolicy',
    component:CreatepolicyComponent
  },
  {
    path: 'editpolicy/:policyId',
    component:EditpolicyComponent
  },
  {
    path: "viewpolicyinform/:policyId",
    component:ViewpolicyinformComponent
  }
];
@NgModule({
  declarations: [
    AppComponent,
    CreatepolicyComponent,
    SearchpolicyComponent,
    ViewpolicyComponent,
    PolicyformComponent,
    EditpolicyComponent,
    ViewpolicyinformComponent,
  ],
  imports: [
    RouterModule.forChild(routes),
    StoreModule.forFeature(POLICY_STATE_NAME,policyReducer),
    StoreModule.forRoot({policyReducer}),
    EffectsModule.forRoot([]),
    EffectsModule.forFeature([PolicyEffects]),
    CommonModule,
    BrowserModule,
    NgxPaginationModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ToastNotificationsModule.forRoot({duration: 6000, type: 'primary'}),
    StoreDevtoolsModule.instrument({
      logOnly: !isDevMode(), // Restrict extension to log-only mode
      autoPause: true, // Pauses recording actions and state changes when the extension window is not open
    }),
    
  ],
  providers: [SearchpolicyComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
