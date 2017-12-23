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
import {fetchDataFromAPI} from "../../actions/CV";

import "./CV.css"

class CV extends Component {

    componentWillMount() {
        this.props.fetchData('https://tasty-tiramisu.herokuapp.com/getJsonCV');
    }

    render() {
        if (this.props.CV.length === 0 && this.props.loading) {
            return (
                <MuiThemeProvider>
                    <div className="window-wrapper">
                        <Loading />
                    </div>
                </MuiThemeProvider>
            )
        }
        const DetailsSection = Section(Details);
        const ProjectSection = Section(ProjectList);
        const EducationSection = Section(EducationList);

        return (
        <MuiThemeProvider>
            <div className="window-wrapper">
                    <NavBar/>

                    <DetailsSection
                        id="about"
                        className="section-wrapper"
                        name={this.props.CV.name}
                        description={this.props.CV.description}
                        {...this.props.CV.contact}
                    />

                    <JobList
                        id="experience"
                        items={this.props.CV.experiences}
                    />

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
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url) => dispatch(fetchDataFromAPI(url))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CV);
