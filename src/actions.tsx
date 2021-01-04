
import { AppThunk, ChangeAction, ReduxActionType } from "./types/testTypes"

 const trythetest = ():ChangeAction=>{
    return{
        type: ReduxActionType.Change,
        payload : { id:123 , language:''}
    }
}

const ChangeLanguage = (lang : string) : ChangeAction=>{
    return {
        type : ReduxActionType.ChangeLanguage,
        payload:{ id:0  , language : lang }
    }
}

export const changeLanguage = (lang : string) : AppThunk => async dispatch =>{
    dispatch(ChangeLanguage(lang))
}

export const test = () : AppThunk => async dispatch =>{
    dispatch(trythetest())
}