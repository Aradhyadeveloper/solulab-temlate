import React from 'react'
import './App.css'

const Concept = () => {
    return (
        <div>
            <div className='container bg-light'>
                <div className="row">
                    <div className="col-md-2">
                    <div className="firstword"> 
                    <p>M</p>
                    </div><br/>
                        <span className="fontaw"><i class="fa-solid fa-plus"></i></span>
                        <p>NEW</p><br /><br/>

                        <span className="fontaw"> <i class="fa-solid fa-hospital-user"></i></span>
                        <p>PATIENT</p><br /><br/>


                        <span className="fontaw"><i class="fa-solid fa-folder-open"></i></span>
                        <p>FOLDER</p><br /><br/>

                        <span className="fontaw"> <i class="fa-solid fa-file-arrow-up"></i></span>
                        <p>UPLOAD</p><br /><br />

                        <span className="fontaw"><i class="fa-solid fa-gear"></i></span>
                        <p>SETTING</p><br /><br />

                    

                    </div>

                    {/* SECOND DIV=================================================================== */}

                    <div className="col-md-2">

                        <img src="https://th.bing.com/th?id=OIP.OLcY7AaYFNs8-8u0mHarBgAAAA&w=129&h=173&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" class="rounded-circle" alt="Cinque Terre" width="80" height="80" />
                        <h4>Diane Cooper</h4>
                        <p>dianecooper@example.com</p>
                        <div className="row">
                            <div className="col-md-4">
                                <h5>15</h5>
                                <p>past</p>
                            </div>

                            <div className="col-md-4">
                                <h4>|</h4>

                            </div>

                            <div className="col-md-4">
                                <h5>02</h5>
                                <p>Upcoming</p>
                            </div>
                        </div><br />

                        <input type="text" value="send message" /><br /><br/>

                        <h5>Files/Document</h5><br/><br/>

                        <h5 className="fontcheck"><i class="fa-solid fa-file-lines"></i>&nbsp;&nbsp;<span className="insidesty" >Check up Results.pdf</span></h5><br/>
                        <h5 className="fontcheck"><i class="fa-solid fa-file-lines"></i>&nbsp;&nbsp;<span>Check up Results.pdf</span></h5><br />
                        <h5 className="fontcheck"><i class="fa-solid fa-file-lines"></i>&nbsp;&nbsp;<span>Medical Prescription.pdf</span></h5><br />
                        <h5 className="fontcheck"><i class="fa-solid fa-file-lines"></i>&nbsp;&nbsp;<span>Dental X-Ray Result.pdf</span></h5><br />
                        

                    </div>



                    {/* THIS IS MAIN THIRD DIV=============================================================== */}

                    <div className="col-md-8">

                    <div className="row">

                        <div className="col-md-3">
                            <p>Gender</p>
                                <h5>Femail</h5><hr/>   
                        </div>

                            <div className="col-md-3">
                                <p>Birthday</p>
                                <h5>Feb 24th,1997</h5><hr />   
                            </div>

                            <div className="col-md-3">
                                <p>Phone No.</p>
                                <h5>(239)555-0108</h5><hr />   
                            </div>

                            <div className="col-md-3">
                                <p>Registered Date</p> 
                                <h5>Feb 24th,1997</h5> <hr />     
                              
                            </div>

                        </div><br /><br />
        {/* SECOND ROW================================================================== */}

                        <div className="row">

                            <div className="col-md-3">
                                <p>Gender</p>
                                <h5>Femail</h5><hr />
                            </div>

                            <div className="col-md-3">
                                <p>Birthday</p>
                                <h5>Feb 24th,1997</h5><hr />
                            </div>

                            <div className="col-md-3">
                                <p>Phone No.</p>
                                <h5>(239)555-0108</h5><hr />
                            </div>

                            <div className="col-md-3">
                                <p>Registered Date</p>
                                <h5>Feb 24th,1997</h5> <hr />

                            </div>

                        </div><br /><br />
            {/* AFTER SECOND ROW============================================================= */}

                      <div className="row backcard">
                        <div className='col-md-4'>
                          <h5>Upcoming Appointment</h5>  
                        </div>

                            <div className='col-md-4'>
                                <h5>Past Appointment</h5>
                            </div>

                            <div className='col-md-4'>
                                <h5>Medical Record</h5>
                            </div>
                        </div><br /><br /><br />

                {/* AFTER MEDICAL RECORD=====================================================        */}

               
                
                <div className='row bgcolor'>
                            <p>Root canal Treatement</p><hr /><br />
                    <div className="col-md-2">
                        <h3>26 Nov'19</h3>
                        <p>09-10.00</p>
                    </div>

                            <div className="col-md-2">
                                <h3>|</h3>
                                
                            </div>

                            <div className="col-md-2">
                                <p>Treatment</p>
                                <h5>Open Access</h5>
                            </div>

                            <div className="col-md-2">
                                <h3>|</h3>                              
                            </div>

                            <div className="col-md-2">
                             <p>Dentist</p>
                             <h5>Drg.Adam H.</h5>
                            </div>

                            <div className="col-md-1">
                                <p>Nurse</p>
                                <h5>Jessimila</h5>
                            </div>

                            <div className="col-md-1">
                                <h5><i class="fa-solid fa-file-arrow-up"></i><span>&nbsp;Note</span></h5>
                              
                            </div>

                            </div><br /><br />
                      
            {/* AFTER 26NOVEMBER==================================================================== */}

                        <div className='row'>
                            <div className="col-md-2">
                                <h3>12 Nov'19</h3>
                                <p>09-10.00</p>
                            </div>

                            <div className="col-md-2">
                                <h3>|</h3>

                            </div>

                            <div className="col-md-2">
                                <p>Treatment</p>
                                <h5>Root Canal</h5>
                            </div>

                            <div className="col-md-2">
                                <h3>|</h3>
                            </div>

                            <div className="col-md-2">
                                <p>Dentist</p>
                                <h5>Drg Adam H.</h5>
                            </div>

                            <div className="col-md-1">
                                <p>Nurse</p>
                                <h3>Jessimila</h3>
                            </div>

                            <div className="col-md-1">
                                <h5><i class="fa-solid fa-file-arrow-up"></i><span>&nbsp;Note</span></h5>

                            </div>

                        </div>
                       



                    </div>

                </div>
            </div>

        </div>
    )
}

export default Concept