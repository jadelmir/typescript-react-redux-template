import React from 'react';
import {useDispatch , useSelector} from 'react-redux'
import './App.css';
import { RootState } from './Reducers/ReducerIndex';
import { test } from './actions';
import { AppRoutes } from './Routes/Routes';
function App() {
  const dispatch = useDispatch()
  const id = useSelector((state:RootState) => state.auth.id)

  console.log("State is",id);
  
  return (
    <div className="App">
      <button onClick={()=>dispatch(test())}/>
      <AppRoutes/>
    </div>  
  );
}

export default App;
