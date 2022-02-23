import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PhoneDetailComponent = () => {
    let { id } = useParams();
    const [phoneDetailComponent, setPhoneDetailComponent] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/phones')
            .then(res => res.json())
            .then((data) => {
                console.log(data);
                const foundService = data.filter(detail => detail._id === id)
                setPhoneDetailComponent(foundService);
            })
    }, [id])
    const { title, description, image, color, price, Camera, Ram } = phoneDetailComponent[0] || {}
    return (
        <div className="container mt-4  text-center">
            <div className="row justify-content-center align-items-center ">
                <div className=" col-md-4">
                    <div className="card h-100 shadow-lg">
                        <img src={image} className="card-img-top " alt="..." />
                        <div className="card-body">

                            <p className="text-nowrap"><strong >{title} </strong></p>
                            <p className="card-text">{description} </p>

                            <p className="text-nowrap"><strong >Price:$</strong>{price}</p>

                            <p className="text-nowrap"><strong >color:</strong>{color}  </p>

                            <p className="text-nowrap"><strong >Camera:</strong>{Camera} </p>

                            <p className="text-nowrap"><strong >Ram:</strong>{Ram}  </p>

                        </div>

                    </div>
                </div>

            </div>

        </div>

    );
};

export default PhoneDetailComponent;