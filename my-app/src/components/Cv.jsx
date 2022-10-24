import React from 'react';
import Personal from './PersonInfo';
import Experience from './Experience';
import Records from '../datajson/jsondata.json'

export default function Cv(){


    return(
        <div className="container">
        <div className="row">
            <div className="col-4 mt-3">
                <Personal img='/images/pic.jpg' title='Personal Details' name = "Sasho Yankov Ivanov" phone="0898529786" email="sashoqnkovivanov@gmail.com" />
            </div>
            <div className="col-8 mt-5 d-flex flex-column">
                        {Records.map((record) =>{
                            return(
                                <Experience
                                    key={record.id}
                                    title={record.title} 
                                    date={record.date} 
                                    position={record.position} 
                                    employer={record.employer} 
                                    location={record.location} 
                                    sector={record.sector} 
                                />
                            )
                        })}
                        
            </div>
        </div>
       </div>
    )
}