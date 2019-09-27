import * as React from "react";
import { HomeProps } from "./Home.types";

export class HomeCtrl extends React.Component<HomeProps> {
  state = {
    searchCity: "",
    searchSkill: "",
    currentPage: 1
  };

  async componentDidMount() {
    const searchCity = localStorage.getItem("searchCity");
    const searchSkill = localStorage.getItem("searchSkill");
    const currentPage = localStorage.getItem("currentPage");

    if (searchCity && searchSkill && currentPage) {
      this.props.fetchUsers(searchCity, searchSkill, +currentPage);
      this.setState({ searchCity, searchSkill, currentPage: +currentPage });
    }
  }

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value }: { id: string; value: string } = e.currentTarget;
    this.setState({ [id]: value });
  };

  handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { searchCity, searchSkill } = this.state;
    this.props.fetchUsers(searchCity, searchSkill, 1);
    this.setState({ currentPage: 1 });
  };

  handlePageChange = async (page: number) => {
    const { searchCity, searchSkill } = this.state;
    this.props.fetchUsers(searchCity, searchSkill, page);
    this.setState({ currentPage: page });
  };
}
