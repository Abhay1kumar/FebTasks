import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import './Crudapp.css'


export default function CrudApp() {

    const [user, setuser] = useState([]);

    useEffect(() => {
        console.log("I am from useEffect");
        loadUser();
    }, []);

    const loadUser = async () => {
        const result = await axios.get('https://61ea3a487bc0550017bc65f8.mockapi.io/user')
        // console.log(result.data);
        setuser(result.data)
    }
    const deleteUser = async (id) => {
        await axios.delete(`https://61ea3a487bc0550017bc65f8.mockapi.io/user/${id}`)
        loadUser();
    }
    return (
        <>
            <div className="tablehead">
                <h1>Table</h1>
                <Link to='/user/add' ><button className="btn btn-primary">Add New User</button></Link>
            </div>
            <table className="table table-dark">
                <thead>
                    <tr>
                        <th scope="col">SR</th>
                        <th scope="col">Name</th>
                        <th scope="col">Desination</th>
                        <th scope="col">City</th>
                        <th scope="col">Zip Code</th>
                        <th scope="col">Action</th>

                    </tr>
                </thead>
                <tbody>

                    {
                        user.map((item, index) => {
                            return <tr key={index}>
                                <th scope="row">{index + 1}</th>
                                <td>{item.name}</td>
                                <td>{item.desination}</td>
                                <td>{item.city}</td>
                                <td>{item.zipcode}</td>
                                <td>
                                    <Link to={`/user/edit/${item.id}`}><button className="btn btn-outline-primary m-2">Edit</button></Link>
                                   <Link to='/crudapp'> <button className="btn btn-danger" onClick={()=>deleteUser(item.id)}>Delete</button></Link>
                                </td>
                            </tr>
                        })
                    }


                </tbody>
            </table>

        </>
    )
}
