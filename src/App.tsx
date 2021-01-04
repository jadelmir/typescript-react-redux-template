import React, { useState } from 'react';
import {useDispatch , useSelector} from 'react-redux'
import './App.css';
import { RootState } from './Reducers/ReducerIndex';
import { changeLanguage, test } from './actions';
import { AppRoutes } from './Routes/Routes';
import { FormattedMessage, IntlProvider } from 'react-intl';
import { messages , StringTypes } from './i18n'


interface lan {
  lan:string
}
function App() {
  const dispatch = useDispatch()
  const id = useSelector((state:RootState) => state.auth.id)
  const lang = useSelector((state:RootState)=>state.auth.language)
  console.log('lang is',lang);
  
  
  
  return (
    <IntlProvider messages={messages[lang]} locale={lang} >
      <div className="App">
        <h1>
          <FormattedMessage id={"simple"}/>
        </h1>
        <button onClick={() => dispatch(test())} />
        <button onClick={() => dispatch(changeLanguage('fr'))}> change language </button>
        <AppRoutes />
      </div>
    </IntlProvider>
     
  );
}

export default App;
