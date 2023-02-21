import { Injectable } from "@angular/core";
import { PolicyserviceService } from 'src/app/service/policyservice.service';
import{createEffect,Actions, ofType, act} from '@ngrx/effects'
import { addPolicy, addPolicySuccess,editPolicy,editPolicySuccess,deletePolicy,deletePolicySuccess,loadPolicy, loadPolicySuccess} from './policy.action';
import{exhaustMap, map,mergeMap, switchMap} from 'rxjs/operators'


@Injectable()
export class PolicyEffects{
    constructor(private action$:Actions,private policyservice:PolicyserviceService){

    }

    addPolicy$=createEffect(()=>{
        return this.action$.pipe(ofType(addPolicy),
        mergeMap((action)=>{
            return this.policyservice.createPolicy(action.policy).pipe(map((data)=>
            {
                const policy={...action.policy};
                return addPolicySuccess({policy});
            }))
        }))
    });

    editPolicy$=createEffect(()=>{
        return this.action$.pipe(ofType(editPolicy),
        mergeMap((action)=>{
            return this.policyservice.updatePolicy(action.policy).pipe(map((data)=>
            {
                const policy={...action.policy};
                return editPolicySuccess({policy});
            }))
        }))
    });

    deletePolicy$=createEffect(()=>{
        return this.action$.pipe(ofType(deletePolicy),
        switchMap((action)=>{
            return this.policyservice.deletePolicy(action.policyId).pipe(map((data)=>
            {
                return deletePolicySuccess({policyId:action.policyId});
            }));       
        }))
    });

    loadpolicy$=createEffect(()=>{
        return this.action$.pipe(ofType(loadPolicy),
        mergeMap((action)=>
        {
            return this.policyservice.getPolicy(action.querystring).pipe(map((policies)=>
            {
                return loadPolicySuccess({policies});
            })
            );
        }));
    }
    );

    
}