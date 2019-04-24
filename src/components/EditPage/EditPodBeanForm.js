import React, { Component } from 'react';
import { connect } from 'react-redux';


class EditPodBeanForm extends Component {

    state = {
        titleOfPodbean: this.props.reduxState.podbean.title,
    }

    handleChange = (key) => (event) => {
        console.log('event happened')
        this.setState({
            ...this.state,
            [key]: event.target.value,
        });
    }

    addNewPodcast = (event) => {
        event.preventDefault();
        this.props.dispatch({ type: 'UPDATE_PODBEAN', payload: this.state.titleOfPodbean })
        console.log(this.state);
    }

    componentDidMount = () => {
        this.props.dispatch({ type: 'GET_PODBEAN'})
    }


    render() {
        return (
            <>
                <div>
                    (insert fancy PodBean logo)
                    <h4>Edit Required Information for PodBean Podcast</h4>
                    <form onSubmit={this.addNewPodcast}>
                        <label>
                            Title of Podcast
                            <input placeholder="title"
                                value={this.state.titleOfPodbean}
                                onChange={this.handleChange('titleOfPodbean')} />
                        </label> 
                        <button onClick={this.handleChange}>Add PodBean Podcast</button>
                    </form>
                </div>
            </>
        )
    }
}

const mapReduxStateToProps = reduxState => ({
    reduxState: reduxState
});

export default connect(mapReduxStateToProps)(EditPodBeanForm);