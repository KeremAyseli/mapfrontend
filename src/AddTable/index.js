import { tab } from "@testing-library/user-event/dist/tab";
import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Alert, InputGroup, FormControl } from 'react-bootstrap';

function AddTable({MatrisX,MatrisY}) {
    const [status, setStatus] = useState(null);
    const addNewTable = () => fetch("https://spiralinteger.azurewebsites.net/spiral/add?MatrisX="+MatrisX+"&Matrisy="+MatrisY).then((response) => setStatus(response.status));

    return (
        <>
            {console.log(status)}
            {status === 200 ? <Alert variant="success">Success</Alert> : null}
            <h1>Tablo</h1>


            <form>
                <InputGroup type="number" placeholder="username" >
                    <FormControl aria-label="Default" aria-describedby="inputGroup-sizing-default" placeholder="User Name" />
                </InputGroup>
                <InputGroup type="number" placeholder="username">
                    <FormControl aria-label="Default" type="number" placeholder="password" />
                </InputGroup>
                <Button onClick={addNewTable}>Add New Table</Button>
            </form>


        </>
    );
}

export default AddTable;