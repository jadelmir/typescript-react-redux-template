import React from 'react'
import { Router,  RouteComponentProps, Switch, Route} from 'react-router-dom'
import history from '../history'

export const AppRoutes : React.FC =  ()=>{
    let Home = (props:RouteComponentProps)=><div>home</div>
    let Other = (props: RouteComponentProps) => <div>other</div>

    return(
        <Router history = {history}>
            <div>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/a" component={Other} />
                </Switch>
            </div>
        </Router>
    )
}