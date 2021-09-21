import React from "react";

class NewsCard extends React.Component {
  render() {
    return (
      <>
        <div class="w3-content" style={{ backgroundColor:'white'}}>
          {this.props.info &&
            this.props.newsData.results.map((el) => {
              return (
                <>
                  <div className="w3-row" >
                    <div className="w3-col l8 s12">
                      <div className="w3-card-4">
                        <div className="w3-container">
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
                                <button
                                  className="newbutton"
                                  style={{
                                    backgroundColor: "transparent",
                                    color: "black",
                                    width: "56%",
                                  }}
                                >
                                  <b>READ MORE »</b>
                                </button>
                              </p>
                            </div>
                            <div className="w3-col m4 w3-hide-small">
                              <p>
                                <span className="w3-padding-large">
                                  <b>Comments  </b>{" "}
                                  <span className="w3-tag">0</span>
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

export default NewsCard;
