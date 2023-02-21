import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from 'src/store/appstate';
import { PolicyState } from './policy.state';
// import { Policy } from 'src/app/Models/policy';



export const POLICY_STATE_NAME = 'policies';
const getPolicysState = createFeatureSelector<PolicyState>(POLICY_STATE_NAME); //create selector that selects the slice of the store state which corresponds to a feature
                                                          // POLICY_STATE_NAME --> name of state slice

export const getPolicy=createSelector(getPolicysState,state=>{
    return state.policies;});
export const getPolicyById=createSelector(getPolicysState,(state:any,props:any) =>{
    return state.policies.find((policy:any)=>policy.policyId=== props.policyId)})
    // export const getPolicybyType=createSelector(getPolicysState,(state:any,props:any) =>{
    //     return state.policys.find((policy:any)=>policy.policyTypeId == props.policyTypeId)
    // })
    export const Selector = {
        getPolicysState,getPolicy, getPolicyById
      }
  