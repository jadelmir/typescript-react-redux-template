import React from 'react'
import { Router,  RouteComponentProps, Switch, Route} from 'react-router-dom'
import history from '../history'

export const AppRoutes : React.FC =  ()=>{
    let Home = (props:RouteComponentProps)=><div>home</div>
    let Other = (props: RouteComponentProps) => <div>other</div>
    let EventDetail = (props: RouteComponentProps) => <div>event detail</div>
    let Support = (props: RouteComponentProps) => <div> support</div>
    let BecomeAHost = (props: RouteComponentProps) => <div>BecomeAHost</div>

    return(
        <Router history = {history}>
            
                <Switch>
                    <Route path="/eventDetail" component={EventDetail} />
                    <Route path="/support" component={Support} />
                    <Route path="/BecomeAHost" component={BecomeAHost} />
                    <Route exact path="/" component={Home} />
                    <Route component={Other} />

                </Switch>
          
        </Router>
    )
}