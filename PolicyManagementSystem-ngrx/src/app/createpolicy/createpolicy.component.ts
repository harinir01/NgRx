import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PolicyserviceService } from 'src/app/service/policyservice.service';
import { Toaster } from 'ngx-toast-notifications';
import { HttpClient } from '@angular/common/http';
import {  Router } from '@angular/router';
import { Location } from '@angular/common';
import { SearchpolicyComponent } from '../searchpolicy/searchpolicy.component';
import { Policy } from 'src/app/Models/policy';
import { Store } from '@ngrx/store';
import { AppState } from 'src/store/appstate';
import { addPolicy } from '../state/policy.action';

@Component({
  selector: 'app-createpolicy',
  templateUrl: './createpolicy.component.html',
  styleUrls: ['./createpolicy.component.css']
})
export class CreatepolicyComponent implements OnInit {
  error: string = ""
  typeOfFunction:string="create";
  constructor(private service: PolicyserviceService,  private route: Router, private toaster: Toaster,  private store: Store<AppState>) {

  }
  ngOnInit(): void {
  }

  createPolicy(policy : Policy) {
    this.store.dispatch(addPolicy({ policy}));
    this.route.navigate(['']);
    this.toaster.open({ text: 'Policy has been created successfully', position: 'top-center', type: 'success' })
  }

  

}



