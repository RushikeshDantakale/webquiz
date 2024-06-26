import React from 'react'


export default function ProfileMain() {
    return (
        <>

            <div className="container rounded bg-white  mb-5">

                <div className="row">
                    <div className="col-md-3 border-right">

                        <div className="d-flex flex-column align-items-center text-center p-3 py-5"><img className="rounded-circle mt-5 h-100 w-100" src="/user-general.webp" /><span className="font-weight-bold">Amelly</span><span className="text-black-50">amelly12@bbb.com</span><span> </span>
                        </div>
                    </div>
                    <div className="col-md-9 border-right">
                        <div className="p-3 py-5">
                            <div className="d-flex justify-content-between align-items-center mb-3"> <h4 className="text-right">Profile Settings</h4>
                            </div>
                            <div className="row mt-2">
                                <div className="col-md-6"><label className="labels">Name</label><input type="text" className="form-control" placeholder="first name"  />

                                </div>
                                <div className="col-md-6"><label className="labels">Surname</label><input type="text" className="form-control"  placeholder="surname" />

                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-md-12"><label className="labels">PhoneNumber</label><input type="text" className="form-control" placeholder="enter phone number"  />

                                </div>
                                <div className="col-md-12"><label className="labels">Address</label><input type="text" className="form-control" placeholder="enter address"  />

                                </div>
                                <div className="col-md-12"><label className="labels">Email ID</label><input type="text" className="form-control" placeholder="enter email id"  />

                                </div>
                                <div className="col-md-12"><label className="labels">Education</label><input type="text" className="form-control" placeholder="education"  />

                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-md-6"><label className="labels">Country</label><input type="text" className="form-control" placeholder="country"  />

                                </div>
                                <div className="col-md-6"><label className="labels">State/Region</label><input type="text" className="form-control"  placeholder="state" />

                                </div>
                            </div>
                            <div className="mt-5 text-center"><button className="btn btn-primary profile-button" type="button">Save Profile</button>
                            </div>
                        </div>
                    </div>
                    
                </div>

            </div>

    </>
    )
}
