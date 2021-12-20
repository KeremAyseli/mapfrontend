import { tab } from "@testing-library/user-event/dist/tab";
import { useEffect, useState } from "react";

function Matris({tabloId}) {
    console.log(tabloId+"matris");
    const [matris, setMatris] = useState([]);
    useEffect(() => {
        fetch("https://localhost:7100/spiral/GetTable?tabloId="+tabloId).then((response) => response.json()).then((data) => {
            setMatris(data);
            console.log(data);
        },);
    },[]);
    
return (
    <div>
        <h1>Matris</h1>
        
            <table>
                <tbody>
            {matris.map((row, key) =>
             <tr key={key}>
                 {row.map((col, i) =>
                     <td style={{margin:'100px',padding:'10px'}} key={i}>{col}</td>)}
                 </tr>   
            )
            }
            </tbody>
            </table>
        
    </div>
);
}

export default Matris;
