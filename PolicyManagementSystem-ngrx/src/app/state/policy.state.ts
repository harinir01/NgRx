import { Policy } from 'src/app/Models/policy';

export interface PolicyState{
   policies:Policy[];
}



export const initialPolicyState:PolicyState=
{
  policies:[]
};