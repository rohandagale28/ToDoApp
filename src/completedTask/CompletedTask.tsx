import { Typography } from '@mui/material'
import { Indicator } from '../components/Indicator'
import { useEffect, useState } from 'react'
import axios from 'axios'
import DeleteIcon from '@mui/icons-material/Delete';

interface Props {
    data: any
    getData: any
}

export const CompletedTask = ({ data, getData }: Props) => {
    const [allchecked, setAllChecked] = useState<any>("");

    let complete = data.filter((item: any) => {
        return item?.check == true
    })

    async function handleChange(e: any) {
        try {
            if (e.target.checked === false) {
                console.log(e.target.checked)
                await axios.put("http://localhost:5000/", {
                    id: e.target.value,
                    check: false
                }).then(() => {
                    setAllChecked("")
                    getData()
                }).catch(err => console.log(err))
            } else {
                console.log(e.target.checked)
            }
        } catch (err) {
            console.log(err)
        }
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

    const deleteAllTask = async (index: any) => {
        console.log("delete button clicked")
        console.log(index)
        await axios.delete(`http://localhost:5000/`).then(
            res => {
                getData()
                console.log(res)
            }
        )
    }

    useEffect(() => {
        console.log("completed component re-rendered")

    }, [])
    return (
        <>
            <div className="item-card3">
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 18, paddingBottom: "2rem" }}>
                    <Typography sx={{ fontSize: '1.4rem', fontWeight: 600, letterSpacing: -0.5 }}>Completed</Typography>
                    <Indicator count={complete?.length} />
                    <div onClick={() => deleteAllTask("asdfasdfasdf")}>
                        <DeleteIcon />
                    </div>
                </div>
                <div style={{ overflowY: 'scroll', height: '100%' }}>
                    {data.map((tasks: any, index: any) => {
                        return (
                            tasks.check == true ? (<>
                                <div key={index} style={{ position: "relative", display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 10, padding: "0.5rem 0rem" }}>
                                    <input key={tasks._id} type="checkbox" value={tasks._id} onChange={handleChange} defaultChecked={tasks.check} style={{ height: '20px', width: '20px', borderRadius: "16px", backgroundColor: "#e5e5e5" }} />
                                    <Typography sx={{ letterSpacing: 0.6 }}><del>{tasks.task}</del></Typography>
                                    <div id={tasks._id}>
                                        <button style={{ border: "none", backgroundColor: 'transparent', cursor: "pointer", fontSize: "1.2rem", position: "absolute", right: 20, top: 8 }} onClick={() => deleteTask(tasks._id)}><DeleteIcon /></button>
                                    </div>
                                </div >
                            </>) : (null)
                        )
                    })}
                </div>
            </div >
        </>
    )
}

