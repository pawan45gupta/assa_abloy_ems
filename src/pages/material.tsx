import * as React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import { CardActionArea } from '@mui/material'
export default function Test() {
    return (
        <Card>
            <CardActionArea>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        test
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        description
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}
