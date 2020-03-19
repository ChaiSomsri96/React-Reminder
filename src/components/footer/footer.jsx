import React from 'react';


class Footer extends React.Component {
  render() {
    return (
      <div className="footer pt-5 pb-4 footer-light" id="footer-main">
        <div className="row text-center text-sm-left align-items-sm-center">
          <div className="col-sm-6">
            <p className="text-sm mb-0">&copy; 2020 <a href="https://webpixels.io" className="h6 text-sm" >Webpixels</a>. All rights reserved.</p>
          </div>
          <div className="col-sm-6 mb-md-0">
            <ul className="nav justify-content-center justify-content-md-end">
              <li className="nav-item dropdown border-right">
                <a className="nav-link" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <img alt="placeholder" src="../../../assets/img/icons/flags/ro.svg" />
                  <span className="h6 text-sm mb-0">RO</span>
                </a>
                <div className="dropdown-menu dropdown-menu-sm dropdown-menu-right">
                  <a className="dropdown-item"><img alt="placeholder" src="../../../assets/img/icons/flags/es.svg" className="mr-2" />Spanish</a>
                  <a className="dropdown-item"><img alt="placeholder" src="../../../assets/img/icons/flags/us.svg" className="mr-2" />English</a>
                  <a className="dropdown-item"><img alt="placeholder" src="../../../assets/img/icons/flags/gr.svg" className="mr-2" />Greek</a>
                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link">Support</a>
              </li>
              <li className="nav-item">
                <a className="nav-link">Terms</a>
              </li>
              <li className="nav-item">
                <a className="nav-link pr-0">Privacy</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
export default Footer;
