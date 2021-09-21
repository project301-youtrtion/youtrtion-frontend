import React from "react";
import "./News.css";
import ListGroup from 'react-bootstrap/ListGroup'

class NewsPosts extends React.Component {
  render() {
    return (
      <div>
        <div class="w3-card-w3-margin">
          <div class="w3-container-w3-padding"></div>
          <ListGroup>
            <ListGroup.Item className="items">
              <h4>Popular Posts</h4>
              <img src="https://twigscafe.com/wp-content/uploads/2020/08/keto-diet-low-carb-concept-top-view-1160x870.jpg" />
              <p>
                {" "}
                In simple terms, the ketogenic diet refers to a very high fat
                and low-carb diet. The keto diet was introduced by modern
                physicians as a replacement for fasting back in the 1920s to
                treat epilepsy in children. It was successful for around 20
                years. After the invention of newer medication, it was abandoned
                for years.In recent years, the keto diet has become the most
                popular diet in the USA and many other countries around the
                world.
              </p>
            </ListGroup.Item>
            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
            <ListGroup.Item>Morbi leo risus</ListGroup.Item>
            <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
          </ListGroup>

          <span class="w3-large">Lorem</span>
          <br />
          <span>Sed mattis nunc</span>
        </div>
        <div class="w3-card w3-margin">
          <div class="w3-container w3-padding">
            <h4>Tags</h4>
          </div>
          <div class="w3-container w3-white">
            <p />
            <span class="w3-tag w3-black w3-margin-bottom">Travel</span>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsPosts;
