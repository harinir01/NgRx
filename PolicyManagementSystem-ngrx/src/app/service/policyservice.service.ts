import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Policy } from 'src/app/Models/policy';
import { query } from '../searchpolicy/type';

@Injectable({
  providedIn: 'root'
})
export class PolicyserviceService {
  queryparams: query[] = [];
  filterValue: string = ''
  
  constructor(private http: HttpClient) { }
  
  assignFilterValue(FValue: string) {
    this.filterValue = FValue;
  }
  getFilterValue(){
    return this.filterValue;
  }
  
  createPolicy(policyData: any) {
    console.warn(policyData);
    return this.http.post<Policy>('https://localhost:7024/Policy/CreatePolicy', policyData);
  }
  getPolicy(filter: string) {
    return this.http.get<any>(`https://localhost:7024/Policy/GetAllPolicies?${filter}`);
  }
  getPolicyById(policyId: number) {
    return this.http.get<any>(`https://localhost:7024/Policy/GetPolicyById?PolicyId=${policyId}`);
  }
  deletePolicy(policyId: number) {
    console.warn(policyId);
    return this.http.delete<any>(`https://localhost:7024/Policy/DeletePolicy?PolicyId=${policyId}`)
  }
  updatePolicy(policy: any) {
    console.log(policy);
    return this.http.put<any>(`https://localhost:7024/Policy/UpdatePolicy`, policy);
  }


  getPolicyByFilters(filter: any, filterType: string) {
    let q = "";
    let a: query = {
      fType: filterType,
      fValue: filter
    };
    this.queryparams.forEach(element=> {
      if (element.fType == filterType) {
        let index = this.queryparams.indexOf(element);
        this.queryparams.splice(index, 1);
      }
    });
    this.queryparams.push(a);
    this.queryparams.forEach(element => {
      q += `${element.fType}=${element.fValue}&`
    });
    this.assignFilterValue(q);
  }
}
