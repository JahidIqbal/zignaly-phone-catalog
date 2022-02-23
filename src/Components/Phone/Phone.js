import React from 'react';
import { Link } from 'react-router-dom';

const Phone = (props) => {
    const { title, image, price, _id } = props.phone;
    return (
        <div >
            <div className="col">
                <div className="card h-100 shadow-lg" >
                    <img src={image} className="card-img-top" width="500" height="500" alt="..." />
                    <div className="card-body text-center">
                        <h5 className="card-title text-uppercase ">{title} </h5>
                        <p className="text-nowrap"><strong >Price:</strong>$ {price}</p>


                        <Link to={`/buynow/${_id}`} >
                            <button className="btn btn-info text-white border-0 "  >
                                Buy now</button>
                        </Link>



                    </div>

                </div>
            </div>
        </div>
    );
};

export default Phone;