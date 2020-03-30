import React from 'react'
import { Link } from 'react-router-dom'
import { Card, CardActionArea, CardContent } from '@material-ui/core'

export const SkillsTableCard = (props) => {
    return (
        <Link to="/skillstable" style={{ textDecoration: "none", textAlign: "center", padding: "3px" }} >
            <Card>
                <CardActionArea>
                    <CardContent>
                        <h1>Skills Table</h1>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Link>
    )
}