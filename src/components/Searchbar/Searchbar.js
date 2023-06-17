import {Component} from 'react';
import PropTypes from 'prop-types';
import style from 'components/Searchbar/Searchbar.module.css'

class Searchbar extends Component {
    state = {
        searchValue: "",
    }

    handleChange = (e) => {
        const {name, value} = e.target
        this.setState({ [name]: value })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.handleSearch(this.state.searchValue);
    }

    render() {
        return (
            <header className={style.Searchbar}>
                <form onSubmit={this.handleSubmit} className={style.SearchForm}>
                    <input
                        className={style.SearchFormInput}
                        onChange={this.handleChange}
                        value={this.state.searchValue}
                        name="searchValue"
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                    />
                    <button type="submit" className={style.SearchFormButton}>
                        <span className={style.SearchFormButtonLabel}>Search</span>
                    </button>
                </form>
            </header>
        )
    }
}

export default Searchbar;

Searchbar.propTypes = {
    handleSearch: PropTypes.func.isRequired
}