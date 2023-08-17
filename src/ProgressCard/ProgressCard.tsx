import { Typography } from '@mui/material'
import { useEffect } from 'react'
import Header from '../header/Header'


const month: any = ['Jan', "feb", "mar", 'april', "may", "june", "july", "aug", "sept"]
const day = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']

const ProgressCard = (data: any) => {
    const date = new Date()
    const currentDate = date.getDate()
    const currentMonth = month[date.getMonth()]
    const currentDay = day[date.getDay()]

    let incomplete = data.data.filter((item: any) => {
        return item.check == true
    })

    const progress = () => {
        let x = incomplete?.length / data?.data?.length * 100
        return x
    }
    console.log(incomplete)
    useEffect(() => {
        console.log("Progress component re-rendered")

    }, [])
    return (
        <>
            <div className="item-card1">
                <Header />
                <div>
                    <Typography sx={{ textTransform: "capitalize" }}>{currentDate} {currentMonth}, {currentDay}</Typography>
                </div>
                <div>
                    <Typography sx={{ fontSize: '1.8rem', letterSpacing: -0.6 }}> Today's progress</Typography>
                </div>
                <div>
                    <Typography sx={{ fontSize: '3rem' }}>{progress() ? progress().toFixed(0) : 0}%</Typography>
                </div>
                <div>
                    <Typography sx={{ fontSize: '1rem' }}> {incomplete?.length} / {data?.data?.length} Tasks</Typography>
                </div>
            </div>
        </>
    )
}

export default ProgressCard