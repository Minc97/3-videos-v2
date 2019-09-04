import React from 'react';

class SearchBar extends React.Component<any, any> {
    state = { term: ''};
    onInputChange = (event: any) => {
        this.setState({term: event.target.value})
    };
    onFormSubmit = (event: any) => {
        event.preventDefault(); // aby zapobiec automatycznemu odświeżaniu
        this.props.onFormSubmit(this.state.term)
    };
    render(): any {
        return (
            <div className="search-bar ui segment">
                <form onSubmit={(event) => this.onFormSubmit(event)} className="ui form">
                    <div className="field">
                        <label>Video Search</label>
                        <input
                            type="text"
                            value={this.state.term}
                            onChange={(event) => this.onInputChange(event)}
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar