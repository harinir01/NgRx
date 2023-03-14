import { Component } from '@angular/core';
import { PolicyserviceService } from 'src/app/service/policyservice.service';
import { query } from './type';
import { Store } from '@ngrx/store';
import { AppState } from 'src/store/appstate';
import { getPolicy } from '../state/policy.selector';
import { loadPolicy } from '../state/policy.action';

@Component({
  selector: 'app-searchpolicy',
  templateUrl: './searchpolicy.component.html',
  styleUrls: ['./searchpolicy.component.css']
})
export class SearchpolicyComponent {


  filterValue: any = [];
  filterType: string = '';
  searchValue: string = '';
  searchType: string = '';
  policyType: number = 0;
  startDate!: Date;
  endDate!: Date;
  premium: number = 0;
  queryparams: query[] = [];
  // policy$:ReadonlyArray<Policy> = [];


  constructor(private service: PolicyserviceService,private store:Store<AppState>) {
  }
  ngOnInit(): void {
    this.getPolicyByFilter();
  }
  getPolicyByFilters(filter: any, filterType: string) {
    this.service.getPolicyByFilters(filter,filterType);
    this.getPolicyByFilter();
  }
  getPolicyByFilter() {
    let querystring = "";
    this.queryparams.forEach(element => {
      querystring += `${element.fType}=${element.fValue}&`
    });
    querystring = this.service.getFilterValue();   
    this.store.select(getPolicy).subscribe(policies =>this.filterValue=policies);
    this.store.dispatch(loadPolicy({querystring}));
  }

}
