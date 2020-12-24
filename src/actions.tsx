
import { AppThunk, ChangeAction, ReduxActionType } from "./types/testTypes"

 const trythetest = ():ChangeAction=>{
    return{
        type: ReduxActionType.Change,
        payload : { id:123 , test:5 }
    }
}



export const test = () : AppThunk => async dispatch =>{
    dispatch(trythetest())
}