import * as React from "react";
import { HomeCtrl } from "./Home.ctrl";
import { Users as IUsers } from "./../../types/users";
import { SearchBar } from "../SearchBar";
import { Users } from "../Users";
import { Paginated } from "../Paginated";
import { connect } from "react-redux";
import {
  HomeStateProps,
  HomeDispatchProps,
  HomeMapDispatchToProps
} from "./Home.types";
import { State } from "../../store/State";

class H extends HomeCtrl {
  render() {
    const {
      searchSkill,
      searchCity,
      currentPage
    }: {
      searchSkill: string;
      searchCity: string;
      currentPage: number;
    } = this.state;

    const {
      users,
      loading
    }: { users: IUsers; loading: boolean | null} = this.props;
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
          <button type="submit" className="btn btn-primary m-2" autoFocus>
            Search
          </button>
        </form>
        <Users users={users} loading={loading} />
        {!loading && users.total_count > 0 && (
          <Paginated
            itemsCount={users.total_count}
            pageSize={5}
            currentPage={currentPage}
            onPageChange={this.handlePageChange}
          />
        )}
      </div>
    );
  }
}

export const Home = connect<HomeStateProps, HomeDispatchProps, {}, State>(
  ({ users, loading }) => ({ users, loading }),
  HomeMapDispatchToProps
)(H);
