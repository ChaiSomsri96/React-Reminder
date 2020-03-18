import React from 'react';


class Footer extends React.Component {
  render() {
    return (
      <div className="container-footer-bottom">
      <div className="container py-2">
          <div className="row justify-content-center align-items-center">
              <div className="col-sm-9 align-items-center">
                  <p className="mb-0" style={{fontSize: 14}}>
                      © 2020 Software GmbH - Made with passion in Stuttgart, Germany •
                      <a href="#">Terms &amp; Conditions</a> •
                      <a href="#">Privacy Policy</a> •
                      <a href="#">Imprint</a></p>
              </div>
              <div className="col-sm-3 text-right">
                  <a className="mr-1" href="#">
                      <span className="fab fa-facebook fa-2x"></span>
                  </a>
                  <a href="#">
                      <span className="fab fa-twitter fa-2x"></span>
                  </a>
                  <a href="#">
                      <span className="fab fa-linkedin fa-2x"></span>
                  </a>
                  <a href="#">
                      <span className="fab fa-youtube fa-2x"></span>
                  </a>
              </div>
          </div>
      </div>
  </div>
    );
  }
}
export default Footer;
