import { Component, OnInit } from '@angular/core';
import { Toaster } from 'ngx-toast-notifications';
import { Policy } from 'src/app/Models/policy';
import { PolicyserviceService } from 'src/app/service/policyservice.service';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/store/appstate';
import { editPolicy } from '../state/policy.action';
import { getPolicyById } from '../state/policy.selector';


@Component({
  selector: 'app-editpolicy',
  templateUrl: './editpolicy.component.html',
  styleUrls: ['./editpolicy.component.css']
})
export class EditpolicyComponent implements OnInit{

  error: string = ""
  response: string="";
  typeOfFunction:string="edit";
  policyId:number=0;
  readOnly!:boolean;
  policyData: Policy = {
    policyId: 0,
    title: '',
    description: '',
    startDate: '',
    endDate: '',
    insuredAmount: 0,
    insuredName: '',
    insuredHolderAge: 0,
    policyTypeId: 0,
    vehicleModel: '',
    vehicleNumber: '',
    houseAddress: '',
    assetValue: 0,
    coverageId: 0,
  }
  constructor(private service: PolicyserviceService, private toaster: Toaster,private route: ActivatedRoute,private store: Store<AppState>){

  }
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['policyId'])
        this.policyId = params['policyId']
    });
    if(this.policyId==0){
      this.readOnly=false;
    }
    else{
      this.readOnly=true;
    }
    this.GetPolicyDetails();
   
    
    // this.route.paramMap.subscribe((params:any)=>
    //   {
    //     const policyId=Number(params.get('policyId'));
    //   this.store.select(getPolicyById,{policyId}).subscribe((data:any)=>
    //   {
    //     this.policyData=data
    //     console.log(this.policyData)
    //   });
    // });
  }

   GetPolicyDetails() {
    // this.store.select(getPolicyById,this.policyId)
    // const policyID=this.policyId;
    // this.store.select(getPolicyById,{ policyID}).subscribe((data:any)=>{
    //   console.log(data);
    //   this.policyData=data;
    //   console.warn(this.policyData);
    // });
 

    // return this.store.select(state => state.policies.find(policy => policy.id === id));
    this.service.getPolicyById(this.policyId).subscribe({
      next: (data) => {
        this.policyData = data;
        console.log(this.policyData)
      },
    });
  }
  editPolicy(policy : Policy) {
    this.store.dispatch(editPolicy({policy}));
    this.toaster.open({ text: 'Policy updated successfully', position: 'top-center', type: 'success' });
  }
  

}
