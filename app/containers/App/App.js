/* Libs */
import React, { Component } from 'react';
import { connect } from 'react-redux';

/* Components */
import Loading from "../../components/Loading/Loading";
import CV from "../CV/CV";

/* Modules */
import { fetchCVJSONDetails } from "../../actions/CV";

class App extends Component {

    componentDidMount() {
        this.props.fetchCVJSONDetails();
    }

    render() {
        if (this.props.loading) {
            return (
                <Loading />
            )
        }
        else {
            return (
                <CV {...this.props.CV}/>
            );
        }
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
        fetchCVJSONDetails: () => dispatch(fetchCVJSONDetails())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
