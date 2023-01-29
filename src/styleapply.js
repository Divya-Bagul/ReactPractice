import { useState } from "react";
import './style.css';
import { Button, Badge, ListGroupItem } from 'react-bootstrap';
function Data(props) {

    const [name, setName] = useState("divya");
    const students = ['abc', 'xyz', 'pqr', 'opu'];
    const studentsAss = [
        {
            name: {
                nestedname: "abcd"
            }, newname: "abcsd", std: 1
        },
        {
            name: {
                nestedname: "abcdweg"
            }, newname: "pqrs", std: 2
        }
    ]

    
    return (

        <>

            <h1>sdsd</h1>
            <button className="nameclass"  >{name}</button>
            <Button variant="secondary m-4"  onClick={()=>props.callname('abcd')}>send data child to parent </Button>
            <button style={{ backgroundColor: 'red', color: '#fff', padding: '10px', marginRight: '3px', marginLeft: '3px' }} >{name}</button>
            <Button as="a" variant="success">{name}</Button>
            <h1>
                Example heading
                <Badge bg="secondary" as="Button">
                    New
                </Badge>
            </h1>
            {
                students.map((data) =>
                    <ListGroupItem key={data}>
                        <p >the name is :{data}</p>
                    </ListGroupItem>
                )
            }
            {

                studentsAss.map((data) =>

                    <p key={data.name} >the name is :{data.name.nestedname} and {data.std} and {data.newname}</p>


                )
            }

        </>
    )
}

export default Data;