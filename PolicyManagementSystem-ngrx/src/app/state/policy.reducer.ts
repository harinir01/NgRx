import { createReducer, on,Action } from "@ngrx/store";
import { initialPolicyState } from './policy.state';
import { addPolicySuccess,editPolicySuccess,deletePolicySuccess,loadPolicySuccess } from './policy.action';

const _policyReducer= createReducer(initialPolicyState,
    on(addPolicySuccess,(state,action)=>
    {
        let policy={...action.policy};
        return{
            ...state,
            policies:[...state.policies,policy], 
        };
    }),
    on(editPolicySuccess,(state,action)=>
    {
        const editedData=state.policies.map((policy)=>
        {
           
            return action.policy.policyId == policy.policyId?action.policy:policy;
        });
        return{
            ...state,
            policies:editedData,
        }
    }),
    on(deletePolicySuccess,(state,{policyId})=>
    {
        const updatedData=state.policies.filter((policy)=>
        {
            return policy.policyId!=policyId
        });
        return{
            ...state,
            policies:updatedData,
        }

    }),
    on(loadPolicySuccess,(state,action)=>
    {

        return{
            
            ...state,
            policies:action.policies,
            

        };
        debugger;

    })

    
)
export function policyReducer(state:any, action:any) {
    return _policyReducer(state, action);
  }