import React from 'react'
import { Link } from 'react-router-dom'
import { Card, CardActionArea, CardContent } from '@material-ui/core'

export const TariffCalculatorCard = (props) => {
    return (
        <Link to="/tariffcalculator" style={{ textDecoration: "none", textAlign: "center", padding: "3px" }} >
            <Card>
                <CardActionArea>
                    <CardContent>
                        <h1>Tariff Calculator</h1>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Link>
    )
}