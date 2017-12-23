/* Libs */
import React from 'react';
import { connect } from 'react-redux';

/* Components */
import EducationList from "./Education/EducationList";
import ProjectList from "./Projects/ProjectList";
import JobList from "./Experiences/JobList";
import Details from './Subject/Details';
import {fetchDataFromAPI} from "../actions/CV";

class CV extends React.Component {

    componentWillMount() {
        this.props.fetchData('http://localhost:3000/getJsonCV');
    }

    render() {
        if (!this.props.CV || this.props.CV === 'undefined') {
            return <p>Loading…</p>;
        }

        return (
            <div>
                <Details
                    name={this.props.CV.name}
                    description={this.props.CV.description}
                    {...this.props.CV.contact}
                />
                <JobList items={this.props.CV.experiences}/>
                <ProjectList items={this.props.CV.projects}/>
                <EducationList items={this.props.CV.education}/>
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        CV: state.CV,
        loading: state.loading
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url) => dispatch(fetchDataFromAPI(url))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CV);
