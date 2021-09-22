import React from "react";
import "./News.css";
import ListGroup from 'react-bootstrap/ListGroup'

class NewsPosts extends React.Component {
  render() {
    return (
      <>
      <div class="w3-content2" style={{ backgroundColor: "white" }}>
        {this.props.info &&
          this.props.newsData.results.map((el) => {
            return (
              <>
                <div className="w3-row2">
                  <div className="w3-col l8 s12">
                    <div className="w3-card-4">
                      <img src={el.image_url}/>

                      <div className="w3-container2">
                        <h3>
                          <b>{el.title}</b>
                        </h3>
                        <h5>
                          {el.creator}
                          <span className="w3-opacity">{el.pubDate}</span>
                        </h5>
                      </div>

                      <div className="w3-container">
                        <p className="parag">{el.description}</p>
                        <div className="w3-row">
                          <div className="w3-col m8 s12">
                            <p className="news-button">
                              {/* <button
                                className="newbutton"
                                style={{
                                  backgroundColor: "transparent",
                                  color: "black",
                                  width: "56%",
                                }}
                              > */}
                              <b>
                                {" "}
                                <a id="newsLink" href={el.link}>
                                  READ MORE »
                                </a>
                              </b>
                              {/* </button> */}
                            </p>
                          </div>
                          <div className="w3-col m4 w3-hide-small">
                            <p>
                              <span className="w3-padding-large">
                                <b>Comments  </b>{" "}
                                <span className="w3-tag">
                                  {this.props.random()}
                                </span>
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <hr />
                  </div>
                </div>
              </>
            );
          })}
      </div>
    </>
    );
  }
}

export default NewsPosts;
