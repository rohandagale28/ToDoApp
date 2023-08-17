import { Box, Typography } from '@mui/material'
import { Indicator } from '../components/Indicator'
import { useEffect, useState } from 'react'
import axios from 'axios'
import DeleteIcon from '@mui/icons-material/Delete';

interface Props {
    data: any
    getData: any
}

const CurrentTask = ({ data, getData }: Props) => {
    const [input, setInput] = useState<string>("")
    const [allchecked, setAllChecked] = useState<any>("");

    const storeTask = async (e: any) => {
        e.preventDefault()
        axios.post("http://localhost:5000/", {
            check: false,
            task: input
        }).then(() => {
            setInput("")
            getData()
        }
        )
    }

    const deleteTask = async (index: any) => {
        console.log("delete button clicked")
        console.log(index)
        await axios.delete(`http://localhost:5000/${index}`).then(
            res => {
                getData()
                console.log(res)
            }
        )
    }

    async function handleChange(e: any) {
        try {
            if (e.target.checked) {
                await axios.put("http://localhost:5000/", {
                    id: e.target.value,
                    check: true
                }).then(() => {
                    setAllChecked("")
                    getData()
                }).catch(err => console.log(err))
            } else {
                console.log(allchecked)
            }
        } catch (err) {
            console.log(err)
        }
    }

    let complete = data.filter((item: any) => {
        return item?.check == false
    })

    useEffect(() => {
        console.log("current task component re-rendered")
    }, [])
    return (
        <>
            <div className="item-card2" >
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 18 }}>
                    <Typography sx={{ fontSize: '1.4rem', fontWeight: 600, letterSpacing: -0.5 }}>Ongoing</Typography>
                    <Indicator count={complete?.length} />
                </div>
                <div style={{ padding: "1rem 0rem" }}>
                    <div>
                        <button onClick={storeTask} style={{ height: '2.4rem', width: '100%', backgroundColor: "#e5e5e5", borderRadius: ".5rem", padding: "0.5rem 0rem", boxSizing: "border-box", display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: "center", cursor: "pointer", border: '3px #99999934 solid', margin: ".5rem 0rem" }}>
                            <Typography sx={{ fontSize: '0.9rem', color: "#696969" }}>+ Add Task</Typography>
                        </button>
                    </div>
                    <form onSubmit={storeTask} autoComplete='off'>
                        <Box sx={{ height: "2.6rem", display: 'flex', flexDirection: "row", alignItems: 'center', backgroundColor: "#e5e5e5", borderRadius: '.5rem', boxSizing: "border-box", width: '100%', border: '3px #99999934 solid' }}>
                            <input
                                type="text"
                                id='task'
                                name='task'
                                onChange={event => setInput(event.target.value)}
                                value={input}
                                placeholder={`Write here`} style={{ width: '100%', height: "2rem", borderRadius: '.5rem', margin: ".5rem", paddingLeft: "0.8rem", border: "none", outline: "none", backgroundColor: "#e5e5e5", color: "#000" }} />
                        </Box>
                    </form>
                </div>
                <div style={{ overflowY: 'scroll', height: '100%' }}>
                    {data.map((tasks: any, index: any) => {
                        return (
                            tasks.check == false ? (<>
                                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 10, padding: "0.5rem 0rem", width: "100%" }}>
                                    <input key={index} type="checkbox" value={tasks._id} id='check' name='check' onChange={handleChange} style={{ height: '20px', width: '20px', borderRadius: "16px", backgroundColor: "#e5e5e5" }} />
                                    <Typography sx={{ letterSpacing: 0.6 }} >{tasks.task.slice(0, 30)}</Typography>
                                    <div>
                                        <button style={{ border: "none", backgroundColor: 'transparent', cursor: "pointer", fontSize: "1.2rem", justifySelf: "flex-end" }} onClick={() => deleteTask(tasks._id)}><DeleteIcon /></button>
                                    </div>
                                </div>
                            </>) : (null)
                        )
                    })}
                </div>
            </div >
        </>
    )
}

export default CurrentTask