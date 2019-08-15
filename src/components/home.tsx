import * as React from "react";
import { Component } from "react";
import SearchBar from "./searchBar";
import { fetchUsers } from './../actions';
import { AppState } from "../store/configureStore";
import { connect } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import { AppActions } from "../types/action";
import { bindActionCreators } from "redux";
import Users from "./users";
import {User} from './../types/users';
import Paginated from "./pagination";

export interface HomeState {
  searchSkill: string;
  searchCity: string;
  currentPage: number;
  [key: string]: any;
}

type Props = LinkDispatchProps & LinkStateProps;

class Home extends Component<Props, HomeState> {
  state = {
    searchCity: "",
    searchSkill: "",
    currentPage: 1
  };

  componentDidMount() {
    const searchCity = localStorage.getItem("searchCity");
    const searchSkill = localStorage.getItem("searchSkill");
    const currentPage = localStorage.getItem("currentPage");

    if (searchCity && searchSkill && currentPage) {
      this.props.fetchUsers(searchCity, searchSkill, +currentPage);
      this.setState({searchCity, searchSkill, currentPage: +currentPage})
    }
  }

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value }: { id: string; value: string } = e.currentTarget;
    this.setState({ [id]: value });
  };

  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const { searchCity, searchSkill } = this.state;     
      this.props.fetchUsers(searchCity, searchSkill, 1);
      this.setState({currentPage: 1})
  }

  handlePageChange = (page: number) => {
    const { searchCity, searchSkill } = this.state;
    this.props.fetchUsers(searchCity, searchSkill, page);
    this.setState({ currentPage: page });
  };

  render() {
    const {
      searchSkill,
      searchCity,
      currentPage
    } : { searchSkill: string; searchCity: string, currentPage: number } = this.state;
  
    const { items, total_count, loading }: {items: User[], total_count: number, loading: boolean } = this.props;

    return (
      <div>
        <form className="mt-2" onSubmit={this.handleSubmit}>
          <SearchBar
            value={searchSkill}
            onChange={this.handleChange}
            id="searchSkill"
            placeholder="Skill, for instance, JavaScript"
          />
          <SearchBar
            value={searchCity}
            onChange={this.handleChange}
            id="searchCity"
            placeholder="City, for instance, Almaty"
          />
          <button type="submit" className="btn btn-primary m-2" autoFocus>Search</button>
        </form>      
         <Users users={items} loading={loading} />
         {(!loading && total_count > 0) && <Paginated itemsCount={total_count} pageSize={5} currentPage={currentPage} onPageChange={this.handlePageChange} />}
      </div>
    );
  }
}

interface LinkStateProps {
  items: User[]
  loading: boolean,
  total_count: number,
}

interface LinkDispatchProps {
  fetchUsers: (searchSkill: string, searchCity: string, currentPage: number) => void,
}

const mapStateToProps = (state: AppState): LinkStateProps => {
  return {
    items: state.users.items,
    loading: state.loading,
    total_count: state.users.total_count,
  }
}

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AppActions>): LinkDispatchProps => {
  return {
    fetchUsers: bindActionCreators(fetchUsers, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
