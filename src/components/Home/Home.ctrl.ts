import * as React from 'react';
import { HomeProps } from "./Home.types";
import { Users } from './../../types/users';
import githubAPI from '../../apis/githubAPI';

export class HomeCtrl extends React.Component<HomeProps>{
    state = {
        searchCity: "",
        searchSkill: "",
        currentPage: 1
      };
    
      async componentDidMount() {
        const searchCity = localStorage.getItem("searchCity");
        const searchSkill = localStorage.getItem("searchSkill");
        const currentPage = localStorage.getItem("currentPage");

        const { data }: { data: Users } = await githubAPI.get(
            `/search/users?&q=location:${searchCity}+language:${searchSkill}&page=${currentPage}`
        );
    
        if (searchCity && searchSkill && currentPage) {
          this.props.fetchUsers(data);
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
        const { data }: { data: Users } = await githubAPI.get(
            `/search/users?&q=location:${searchCity}+language:${searchSkill}&page=${1}`
        );
        this.props.fetchUsers(data);
        this.setState({ currentPage: 1 });
      };
    
      handlePageChange = async (page: number) => {
        const { searchCity, searchSkill } = this.state;
        const { data }: { data: Users } = await githubAPI.get(
            `/search/users?&q=location:${searchCity}+language:${searchSkill}&page=${page}`
          );
        this.props.fetchUsers(data);
        this.setState({ currentPage: page });
      };
}