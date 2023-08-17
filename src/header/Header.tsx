import { Typography } from '@mui/material'

const Header = () => {
    const date = new Date
    const time = date.getHours()

    return (
        <>
            <div className="item">
                <div>
                    <Typography sx={{ fontSize: '2rem', margin: 0, padding: 0, lineHeight: 1, fontWeight: 600, letterSpacing: -1, }}>Good</Typography>
                </div>
                <div>
                    <Typography sx={{ color: '#E5E5E5BB', fontSize: '1.8rem', fontWeight: 600, letterSpacing: -1 }}>{time < 12 ? <>Morning</> : (time < 17 ? <>Afternoon</> : <>Evening</>)}</Typography>
                </div>
            </div >
        </>
    )
}

export default Header