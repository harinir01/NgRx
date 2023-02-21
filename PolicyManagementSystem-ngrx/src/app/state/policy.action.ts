import { createAction, props } from '@ngrx/store';
import { Policy } from 'src/app/Models/policy';

//definition for action types
export const Add_Policy='[policy] add policy'
export const Add_Policy_Success='[policy page] add policy success'
export const Edit_Policy='[policy] edit policy'
export const Edit_Policy_Success='[policy page] edit policy success'
export const Delete_Policy='[policy] delete policy'
export const Delete_Policy_Success='[policy page] delete policy success'
export const Load_Policy='[policy page] load all policy'
export const Load_Policy_Success='[policy page] load policy success'

export const addPolicy=createAction('Add_Policy',props<{policy:Policy}>())
export const addPolicySuccess=createAction('Add_Policy_Success',props<{policy:Policy}>())
export const editPolicy=createAction('Edit_Policy',props<{policy:Policy}>())
export const editPolicySuccess=createAction('Edit_Policy_Success',props<{policy:Policy}>())
export const deletePolicy=createAction('Delete_Policy',props<{policyId:number}>())
export const deletePolicySuccess=createAction('Delete_Policy_Success',props<{policyId:number}>())
export const loadPolicy=createAction('Load_Policy',props<{querystring:any}>() )
export const loadPolicySuccess=createAction('Load_Policy_Success', props<{policies:Policy[]}>())

export const DataActions ={addPolicy,addPolicySuccess,editPolicy,editPolicySuccess,deletePolicy,deletePolicySuccess,loadPolicy,loadPolicySuccess}
