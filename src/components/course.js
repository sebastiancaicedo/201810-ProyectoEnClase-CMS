import React from 'react';

import {getCourseById} from './../API/api.js';

class Course extends React.Component{
    constructor(){
        super();
        this.state = {
            course: null
        }
    }


    componentWillMount(){
        
        const courseId= this.props.match.params.courseId;
        getCourseById(courseId)
        .then(_course =>{
            console.log(_course);
            
            this.setState({
                course: _course
            })
        })

        .catch(error =>{
            console.log(error);
            
        })
        
    }

    render(){
        return(
            <div className='course-info'>
            {
                this.state.course !== null?
                <div>
                    <h1>{`Informacion del curso ${this.state.course.id}`}</h1>
                    <p>{this.state.course.name}</p>
                    <p>{this.state.course.participants}</p>
                    <p>{this.state.course.description}</p>
                </div>
                :
                null
            }
            </div>
        );
    }
}

export default Course;