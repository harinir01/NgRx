import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Toaster } from 'ngx-toast-notifications';
import { Location } from '@angular/common';
import { PolicyserviceService } from 'src/app/service/policyservice.service';
import { SearchpolicyComponent } from '../searchpolicy/searchpolicy.component';
import { Store } from '@ngrx/store';
import { AppState } from 'src/store/appstate';
import { deletePolicy } from '../state/policy.action';
import { getPolicy } from '../state/policy.selector';
@Component({
  selector: 'app-viewpolicy',
  templateUrl: './viewpolicy.component.html',
  styleUrls: ['./viewpolicy.component.css']
})
export class ViewpolicyComponent implements OnInit{

  @Input()
  public policyList: any=[];
  totalLength:any;
  policyId!: number;
  policyDetails: any;
  error: string = "";
  response: string = '';
  page:number=1;
  // policy$ = this.store.select(getPolicy);
  constructor(private service: PolicyserviceService, private http: HttpClient,private SearchService: SearchpolicyComponent, private route: Router, private location: Location,private store: Store<AppState>, private toaster: Toaster) {

  }

  ngOnInit(): void {
    console.log(this.policyList)
  }

  data: any = [{
    PolicyId: 0,
    Title: "",
    Description: "",
    StartDate: "",
    EndDate: "",
    InsuredAmount: 0,
    Premium:0,
    InsuredName: "",
    InsuredHolderAge: 0,
    PolicyType: 0,
    CoverageType: 0,
    VehicleNumber: "",
    VehicleModel: "",
    HouseAddress: "",
    AssetValue: 0
  }]

  deletePolicy(policyId: number) {
    if(confirm('Are you sure you want to delete the Policy?')){
      this.store.dispatch(deletePolicy({policyId}))
      this.route.navigate(['']);
      this.toaster.open({ text: 'Policy has been deleted successfully', position: 'top-center', type: 'success' })
  }
}

}
