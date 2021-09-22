import React from "react";
import axios from "axios";
import "./News.css";
import NewsForm from "./NewsForm";
import NewsCard from "./NewsCard";
import NewsPosts from "./NewsPosts";

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
    const serverUrl = `${process.env.REACT_APP_SERVER_URL}/news?qintitle=${this.state.searchData}`;
    const getNews = await axios.get(serverUrl);
    await this.setState({ newsData: getNews.data, info: true });
    console.log(this.state.newsData.results);
  };
  random=()=>{
    return Math.floor(Math.random() * 1000);

  }
  render() {
    return (
      <div className='newsPage'>
        <img
          src={window.location.origin + '/nutritionnews.png'}
          alt="nutritionnews"
          style={{ width: '50%', height: '250px', marginLeft: '23%' , marginTop:'15%' }}
        />
        <NewsForm handleSearch={this.handleSearch} />
        <NewsCard info={this.state.info} newsData={this.state.newsData} random={this.random}/>

        {/* <NewsPosts info={this.state.info} newsData={this.state.newsData} random={this.random}/> */}

      </div>
    );
  }
}

export default News;
