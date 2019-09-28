import * as React from "react";
import { HomeCtrl } from "./Home.ctrl";
import { SearchBar } from "../SearchBar";
import { UsersData } from "../UsersData";
import { Paginated } from "../UsersData/Paginated";
import { connect } from "react-redux";
import {
  HomeStateProps,
  HomeDispatchProps,
  HomeMapDispatchToProps
} from "./Home.types";
import { State } from "../../store/State";

export const Home = connect<HomeStateProps, HomeDispatchProps, {}, State>(
  ({ users, loading }) => ({ users, loading }),
  HomeMapDispatchToProps
)(
  class extends HomeCtrl {
    render() {
      const { searchSkill, searchCity, currentPage } = this.state;

      const { users, loading } = this.props;

      return (
        <div>
          <SearchBar
            valueSearchSkill={searchSkill}
            valueCitySkill={searchCity}
            handleSearchItemChanged={this.handleSearchItemChanged}
            handleSearchClicked={this.handleSearchClicked}
          />
          <UsersData users={users} loading={loading} />
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
);
