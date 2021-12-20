import { tab } from "@testing-library/user-event/dist/tab";
import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Alert, InputGroup, FormControl } from 'react-bootstrap';

function AddTable() {
    const [status, setStatus] = useState(null);
    const addNewTable = () => fetch("https://spiralinteger.azurewebsites.net/spiral/add?MatrisX="+MatrisX+"&Matrisy="+MatrisY).then((response) => setStatus(response.status));
     const [MatrisX, setMatrisX] = useState(0);
        const [MatrisY, setMatrisY] = useState(0);
       const handleChangeX = (e) => {
            setMatrisX(e.target.value);
            console.log(MatrisX);
        }
        const handleChangeY = (e) => {
            setMatrisY(e.target.value);
            console.log(MatrisY);
        }

    return (
        <>
            {status === 200 ? <Alert variant="success">Yeni Tablo eklendi</Alert> : null}
            <h1>Tablo</h1>


            <form>
                <InputGroup onChange={handleChangeX} name="X" type="number" placeholder="X" >
                    <FormControl onChange={handleChangeX} name="X" aria-label="Default" aria-describedby="inputGroup-sizing-default" placeholder="X" />
                </InputGroup>
                <InputGroup onChange={handleChangeY} name="Y"  type="number" placeholder="Y">
                    <FormControl onChange={handleChangeY} name="Y" aria-label="Default" type="number" placeholder="Y" />
                </InputGroup>
                <Button onClick={addNewTable}>Add New Table</Button>
            </form>


        </>
    );
}

export default AddTable;