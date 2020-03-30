import React from 'react'
import { Link } from 'react-router-dom'
import { Card, CardActionArea, CardContent } from '@material-ui/core'

export const CodeOfPointsCard = () => {
    return (
        <Link to="/" style={{ textDecoration: "none", textAlign: "center", padding: "3px" }} >
            <Card>
                <CardActionArea>
                    <CardContent>
                        <h1>Code of Points</h1>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Link>
    )
}