import React from "react";
import axios from "axios";
import { Card, Form, Row, Col, Button } from "react-bootstrap";

class News extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newsData: {},
      searchData: "",
      info:false
    };
  }

  handleSearch = async (e) => {
    e.preventDefault();
    console.log("hi");
    await this.setState({ searchData: e.target.value });
    console.log(this.state.searchData);
    const serverUrl = `${process.env.REACT_APP_SERVER_URL}/news?q=${this.state.searchData}`;
    const getNews = await axios.get(serverUrl);
    // this.state.newsData.push(getNews.data);

    await this.setState({ newsData: getNews.data ,
    info:true});
    console.log(this.state.newsData.results);
  };
  render() {
    return (
      <div>
        <Form
          style={{
            width: "60%",
            marginLeft: "20%",
            marginTop: "5%",
            paddingLeft: "4%",
          }}
          className="formTracker"
        >
          <Row>
            <Col xs={7}>
              <Form.Control
                onChange={this.handleSearch}
                type="text"
                placeholder="Search for Heath and new Type of diets"
                name="search"
              />
            </Col>
          </Row>
        </Form>
        {this.state.info &&
          this.state.newsData.results.map((el) => {
            return (
              <div>
                <Card style={{ width: "18rem" }}>
                  <Card.Img variant="top" src={el.image_url} alt="" />
                  <Card.Body>
                    <Card.Title>{el.title}</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
              </div>
            );
          })
        }
      </div>
    );
  }
}

export default News;
