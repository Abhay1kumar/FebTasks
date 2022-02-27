import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import axios from 'axios'


export default function AddUser() {

    let navigate =useNavigate();

    const [user, setUser] = useState(
        {
            name: '',
            desination: '',
            city: '',
            zipcode: '',
        }
    )
    const { name, desination, city, zipcode } = user;

    const onInputChange = (e) => {
        // console.log(e.target.value);
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.post('https://61ea3a487bc0550017bc65f8.mockapi.io/user', user)
        navigate('/crudapp')
    }
    
    return (

        <form onSubmit={e => onSubmit(e)} className="text-center border border-primary mr-5 ml-5 mt-5 pt-3 pb-3">
            <div className="font-weight-bold">
                <h2>Add User Data</h2>
            </div>
            <div className="form-group mr-5 ml-5 font-weight-bold">
                <label htmlFor="exampleInputEmail1">Name</label>
                <input type="text" className="form-control text-center" name="name" value={name}
                    onChange={e => onInputChange(e)} placeholder="Type here....."
                />
            </div>
            <div className="form-group mr-5 ml-5 font-weight-bold">
                <label htmlFor="desination">Desination</label>
                <input type="text" className="form-control text-center" name="desination" value={desination}
                    onChange={e => onInputChange(e)} placeholder="Type here....."
                />
            </div>
            <div className="form-group mr-5 ml-5 font-weight-bold">
                <label htmlFor="city">City</label>
                <input type="text" className="form-control text-center" name="city" value={city}
                    onChange={e => onInputChange(e)} placeholder="Type here....."
                />
            </div>
            <div className="form-group mr-5 ml-5 font-weight-bold">
                <label htmlFor="zipcode">Zip Code</label>
                <input type="text" className="form-control text-center" name="zipcode" value={zipcode}
                    onChange={e => onInputChange(e)} placeholder="Type here....."
                />
            </div>


            <button type="submit" className="btn btn-primary btn-block">Submit</button>
        </form>
    )
}
