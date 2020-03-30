import React from 'react'
import { Nav } from '../../Components/Navigation'
import { TariffCalculatorCard } from './TariffCalculatorCard/index.js';
import { SkillsTableCard } from './SkillsTableCard';
import { JudgingCard } from './JudgingCard';
import { CodeOfPointsCard } from './CodeOfPointsCard';
import { CoachingCard } from './CoachingCard';
import './index.css'

export const HomePage = () => {
    return (
        <div>
            <Nav />
            <div className="container">
                <div className="grid">
                    <TariffCalculatorCard />
                </div>
                <div className="grid">
                    <SkillsTableCard />
                </div>
                <div className="grid">
                    <JudgingCard />
                </div>
                <div className="grid">
                    <CoachingCard />
                </div>
                <div className="grid">
                    <CodeOfPointsCard />
                </div>
            </div>
        </div>
    )
}


/*
 <div style={{ marginTop: "80px", flexGrow: 1 }}>
                <Grid container spacing={3}>
                    <Grid item xs={4}>
                        <TariffCalculatorCard />
                    </Grid>
                    <Grid item xs={4}>
                        <SkillsTableCard />
                    </Grid>
                    <Grid item xs={4}>
                        <JudgingCard />
                    </Grid>
                    <Grid item xs={4}>
                        <CodeOfPointsCard />
                    </Grid>
                    <Grid item xs={4}>
                        <CoachingCard />
                    </Grid>
                </Grid>
            </div>

*/