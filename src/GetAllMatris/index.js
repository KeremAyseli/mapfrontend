import { tab } from "@testing-library/user-event/dist/tab";
import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import { Button, Alert, InputGroup, FormControl } from 'react-bootstrap';

function GetAllMatris({tabloId,setTabloId}) {
    const [matris, setMatris] = useState([]);

    const getId=(id)=> {
        setTabloId(id.target.id);
        console.log(tabloId);
    }

    useEffect(() => {
        fetch("https://localhost:7100/spiral/GetAll").then((response) => response.json()).then((data) => {
            setMatris(data);
            console.log(data);
        });
    }, []);
    return (
        <div>
            <div style={{ maxHeight: '300px', width: '150px', overflowY: 'scroll' }}>
                {matris.map((matris, key) =>
                    <div onClick={getId} id={matris.tabloId} key={key} >{matris.tabloId}</div>
                )}
            </div>
        </div>
       
    );
}

export default GetAllMatris;