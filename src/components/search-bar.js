import React from 'react';

export default class SearchBar extends React.Component {
    state = { term: '' };

    onInputChange = (event) => {
        this.setState({
            term: event.target.value
        });
    }

    onFormSubmit = event => {
        event.preventDefault();
        this.props.onFormSubmit(this.state.term);
        this.setState({
            term: ""
        });
    }
    render() {
        return (
            <div className='search-bar ui segment'>
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label htmlFor="search-bar">Search Bar</label>
                        <input 
                            type="text" 
                            id="search-bar" 
                            value={this.state.term} 
                            onChange={this.onInputChange} 
                        />
                    </div>
                </form>
            </div>
        );
    }
}