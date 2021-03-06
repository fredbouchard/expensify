import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../components/Header';
import AddExpense from '../components/AddExpense';
import ExpenseDashboard from '../components/ExpenseDashboard';
import EditExpense from  '../components/EditExpense';
import Help from '../components/Help';
import NotFound from '../components/NotFound';

const AppRouter = () => (
    <BrowserRouter>
        <div className="main">
            <Header />
            <Switch className="container">
                <Route path="/" component={ExpenseDashboard} exact={true} />
                <Route path="/create" component={AddExpense} />
                <Route path="/edit/:id" component={EditExpense} />
                <Route path="/help" component={Help} />
                <Route component={NotFound}/>
            </Switch>
        </div>   
    </BrowserRouter>
);

export default AppRouter;
