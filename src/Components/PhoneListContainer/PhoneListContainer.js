import React, { useEffect, useState } from 'react';
import Phone from '../Phone/Phone';

const PhoneListContainer = () => {
    const [phones, setPhones] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/phones')
            .then(res => res.json())
            .then(data => setPhones(data))
    }, [])
    return (
        <div className=" mx-auto mt-5">
            <h1 className=" fw-bolder text-uppercase w-100 mt-5 text-center underline mt-2" >Phone Catalog </h1>
            {
                phones.length === 0 ?
                    <div className="d-flex justify-content-center">
                        <div className="spinner-border text-dark text-center" role="status" >
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>



                    :
                    <div className="row row-cols-1 row-cols-md-3 g-4 " >

                        {
                            phones.map(phone => <Phone key={phone.id} phone={phone}></Phone>)
                        }


                    </div>

            }

        </div>
    );
};

export default PhoneListContainer;