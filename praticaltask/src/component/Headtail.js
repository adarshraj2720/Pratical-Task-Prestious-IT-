import { useState } from "react"

export default function Headtail() {

    let [Data, setdata] = useState([])
    let [alldata, setalldata] = useState([""])

    function handlesubmit(e) {
        setalldata(alldata.concat(Data))
       
    }
    function handlechange(e) {
        e.preventDefault()
        if (e.target.value !== "Select Option") {
            setdata(e.target.value)

        } else {
            alert("Please select value from drop Down")
        }
    }

    return (
        <>
            <h1>Head And Tail Component</h1>
            <h2>{Data}</h2>
            <select onChange={handlechange} >
                <option selected>Select Option </option>
                <option value="H" >H</option>
                <option value='T' >T</option>
            </select>

            <button onClick={handlesubmit} >submit</button>

            {
                alldata.map((e, i = 0) => {
                    return (
                        <>

                            {
                                e === "H" && e - 1 === "T" ?
                                    <table>
                                        <tr>
                                            <th></th>
                                        </tr>
                                        <tr key={i + 1}>
                                            <td>
                                                {e}
                                            </td>
                                        </tr>
                                    </table>
                                    : <table>
                                        <tr key={i + 1}>
                                            <td>
                                                {e}
                                            </td>
                                        </tr>
                                    </table>
                            }
                        </>
                    )
                })
            } 
            
            
       

        </>
    )
}