import React from 'react';



function Charts({ name, price, features }) {

    return (
                           <div class="col-lg-4">
                        <div class="card mb-5 mb-lg-0">
                            <div class="card-body">

                                <h5 className="card-title text-muted text-uppercase text-center">
                                    {name}
                                </h5>
                                <h6 className="card-price text-center">${price}<span className="period">/month</span></h6>
                                <hr />

                                <ul className="fa-ul">

                                    {features.map((item, index) => {
                                        return (
                                            <li key={index} className={!item.enabled ? "text-muted" : ""}>
                                                <span className="fa-li">
                                                    <i className={item.enabled ? "fas fa-check" : "fas fa-times"}></i>
                                                </span>
                                                {item.name}
                                            </li>
                                        );
                                    })}

                                </ul>
                                <div className="d-grid">
                                    <button className="btn btn-primary btn-block">Button</button>
                                </div>
                            </div>
                        </div>
                    </div>
             
    )
}

export default Charts;