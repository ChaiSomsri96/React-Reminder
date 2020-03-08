import React from 'react';


class Omni extends React.Component {
  render() {
    return (
      <div id="omnisearch" className="omnisearch">
          <div className="container">
            <form className="omnisearch-form">
              <div className="form-group">
                <div className="input-group input-group-merge input-group-flush">
                  <div className="input-group-prepend">
                    <span className="input-group-text"><i className="fas fa-search"></i></span>
                  </div>
                  <input type="text" className="form-control" placeholder="Type and hit enter ..." />
                </div>
              </div>
            </form>
            <div className="omnisearch-suggestions">
                <h6 className="heading">Search Suggestions</h6>
                <div className="row">
                  <ul className="list-unstyled mb-0">
                    <li>
                      <a className="list-link" href="home">
                        <i className="fas fa-search"></i>
                        <span>macbook pro</span> in Laptops
                      </a>
                    </li>
                    <li>
                      <a className="list-link" href="home">
                        <i className="fas fa-search"></i>
                        <span>iphone 8</span> in Smartphones
                      </a>
                    </li>
                    <li>
                      <a className="list-link" href="home">
                        <i className="fas fa-search"></i>
                        <span>macbook pro</span> in Laptops
                      </a>
                    </li>
                  </ul>
                </div>
            </div>
          </div>
      </div>
    );
  }
}
export default Omni;
