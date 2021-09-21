import React from "react";
import axios from "axios";
import "./News.css";
import NewsPosts from "./NewsPosts";
import NewsForm from "./NewsForm";
import NewsCard from "./NewsCard";

class News extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newsData: {},
      searchData: "",
      info: false,
    };
  }

  handleSearch = async (e) => {
    e.preventDefault();
    console.log("hi");
    await this.setState({ searchData: e.target.search.value });
    console.log(this.state.searchData);
    const serverUrl = `${process.env.REACT_APP_SERVER_URL}/news?q=${this.state.searchData}`;
    const getNews = await axios.get(serverUrl);
    await this.setState({ newsData: getNews.data, info: true });
    console.log(this.state.newsData.results);
  };
  render() {
    return (
      <div>
        <NewsForm handleSearch={this.handleSearch}/>

      <NewsCard 
      info={this.state.info}
      newsData={this.state.newsData}
      />

        {/* <NewsPosts 
        
        info={this.state.info}
        newsData={this.state.newsData}/> */}
      </div>
    );
  }
}

export default News;
