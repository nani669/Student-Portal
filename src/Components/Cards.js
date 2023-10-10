import React from 'react';
export default function Cards({name, names, email, ava}) {
    return (
        <div className=''>
            <div className=" text-bg-light mb-3" style={{ width: '440px', margin: "10px", }}>
                <div className="nabe row g-0">
                    <div className=" col-md-4">
                        <img src={ava} className="img-fluid rounded-start" style={{ padding: '10px', }} />
                    </div>
                    <div className=" names col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">FirstName:- {name}</h5>
                            <h5 className="card-title" style={{ paddingTop:'5px'}}>LastName:- {names}</h5>
                            <p className="card-text"style={{ paddingTop:'5px', fontWeight:'400'}}> Email:- {email}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
