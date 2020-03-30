import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { HomePage } from '../Pages/Home'
import { TariffCalculatorPage } from '../Pages/TariffCalculator';
import { SkillsTablePage } from '../Pages/SkillsTable';

export const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/tariffcalculator" component={TariffCalculatorPage} />
                <Route path="/skillstable" component={SkillsTablePage} />
            </Switch>
        </Router>
    )
}