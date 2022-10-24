import React from 'react';
import EducationInfo from './EducationInfo';
import Courses from './Courses';
import Educationsdata from '../datajson/educations.json';
import Educationskils from '../datajson/extraskils.json';

export default function Education(){

    return(
        <> 
            <div className="container">
                <div className="row">
                    <div className="col-12 mt-5">
                        {Educationsdata.map((sub) =>{
                            return(
                                <EducationInfo
                                    key={sub.id} 
                                    date={sub.date}
                                    qualification={sub.qualification}
                                    training={sub.training} 
                                    location={sub.location}
                                    level={sub.level}
                                />
                            )
                        })}
                        {Educationskils.map((skils) =>{
                            return(
                                <Courses
                                    key={skils.id}
                                    user={skils.skill}
                                />
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}