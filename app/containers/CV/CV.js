/* Libs */
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import React, { Component } from 'react';
import { connect } from 'react-redux';

/* Components */
import EducationList from "../../components/Education/EducationList";
import ProjectList from "../../components/Portfolio/ProjectList";
import JobList from "../../components/Experiences/JobList";
import Loading from "../../components/Loading/Loading";
import Section from '../../components/Section/Section';
import NavBar from "../../components/NavBar/NavBar";
import Details from '../../components/About/About';
import { fetchCVJSONDetails } from "../../actions/CV";

import "./CV.css"

class CV extends Component {

    componentDidMount() {
        this.props.fetchCVJSONDetails();
    }

    render() {

        const DetailsSection = Section(Details);
        const ProjectSection = Section(ProjectList);
        const EducationSection = Section(EducationList);

        return (
            <MuiThemeProvider>
                <div className="window-wrapper">
                    <NavBar/>

                    <DetailsSection
                        id="about"
                        name={this.props.CV.name}
                        description={this.props.CV.description}
                        {...this.props.CV.contact}
                    />

                    <div id="job-list-wrapper">
                        <JobList
                            items={this.props.CV.experiences}
                        />
                    </div>

                    <ProjectSection
                        id="projects"
                        items={this.props.CV.projects}
                    />

                    <EducationSection
                        id="education"
                        items={this.props.CV.education}
                    />
                </div>
            </MuiThemeProvider>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        CV: state.CV,
        loading: state.loading
    };Y
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchCVJSONDetails: () => dispatch(fetchCVJSONDetails())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CV);
