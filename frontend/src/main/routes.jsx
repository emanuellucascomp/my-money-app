import React from 'react';
import { Router, Route, Redirect, hashHistory } from 'react-router';
import Dashboard from '../dashboard/dashboard';
import BillingCycle from '../billingCycle/billingCycle';
import AuthOrApp from './authOrApp';

export default props => (
    <Router history={hashHistory}>
        <Route path='/' component={AuthOrApp} />
        <Route path='/billingCycles' component={BillingCycle} />
        <Redirect from='*' to='/' />
    </Router>
)

