/* Libs */
import { Component } from 'react';
import { connect } from 'react-redux';

/* Components */
import EducationList from "../Education/EducationList";
import ProjectList from "../Portfolio/ProjectList";
import JobList from "../Experiences/JobList";
import Details from '../About/About';
import Section from '../Section/Section';
import {fetchDataFromAPI} from "../../actions/CV";


import "./CV.css"
import NavBar from "../NavBar/NavBar";
import Loading from "../Loading/Loading";

class CV extends React.Component {

    componentWillMount() {
        this.props.fetchData('https://tasty-tiramisu.herokuapp.com/getJsonCV');
    }

    render() {
        if (!this.props.CV || this.props.CV === 'undefined') {
            return <Loading/>;
        }
        const DetailsSection = Section(Details);
        const ProjectSection = Section(ProjectList);
        const EducationSection = Section(EducationList);

        return (
            <div id="cv-wrapper">
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