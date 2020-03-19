import React , {Component} from 'react';

class Home extends Component{
    componentDidMount(){
		var $svg = document.querySelectorAll('img.svg-inject');
        window.SVGInjector($svg);
	}
    render(){
        return (
            <React.Fragment>

                <link rel="stylesheet" href="./assets/css/custom_dashboard.css" id="stylesheet" />
                <video autoPlay muted loop id="myVideo">
                    <source src="../assets/video/24me_main_video.mp4" type="video/mp4" />
                    Your browser does not support HTML5 video.
                </video>
                <div className="video-overlay">
                    <div id="video-overlay-container">
                        <div className="video-24me-logo"><h1 className="video-header">Smart Personal Assistant
                        </h1></div>
                        <div className="video-appstore-logo">
                            <a href="#" target="_blank">
                                <img alt=""  src="../assets/img/appleBtn.png" style={{marginRight:17}} /></a>
                            <a href="#" target="_blank">
                                <img alt=""  src="../assets/img/googleBtn.png" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="row px-10 mt-5">
                    <div className="col-md-4 mb-7">
                        <div className="text-center px-lg-3">
                            <span className="btn btn-icon btn-lg btn-soft-danger rounded-circle mb-5">
                            <span className="fab fa-yelp fa-2x btn-icon__inner btn-icon__inner-bottom-minus"></span>
                            </span>
                            <h3 className="h5">Professional Design</h3>
                            <p className="mb-md-0">Achieve virtually any design and layout from within the one template.</p>
                        </div>
                    </div>

                    <div className="col-md-4 mb-7">
                        <div className="text-center px-lg-3">
                            <span className="btn btn-icon btn-lg btn-soft-primary rounded-circle mb-5">
                            <span className="fas fa-fire fa-2x btn-icon__inner btn-icon__inner-bottom-minus"></span>
                            </span>
                            <h3 className="h5">Front Strategy</h3>
                            <p className="mb-md-0">We strive to figure out ways to help your business grow through all
                                platforms.</p>
                        </div>
                    </div>

                    <div className="col-md-4 mb-7">
                        <div className="text-center px-lg-3">
                            <span className="btn btn-icon btn-lg btn-soft-success rounded-circle mb-5">
                            <span className="fab fa-whmcs fa-2x btn-icon__inner btn-icon__inner-bottom-minus"></span>
                            </span>
                            <h3 className="h5">Unlimited Power</h3>
                            <p className="mb-md-0">Find what you need in one template and combine features at will.</p>
                        </div>
                    </div>
                    <img  className="img-fluid d-none d-md-block w-75 mx-auto mb-7" src="../assets/img/pointer-1.svg"
                        alt="SVG Arrow" />
                    <div className="w-md-60 w-lg-50 text-center mx-auto">
                        <h4 className="h5">
                            It is fast and easy. <span className="font-weight-normal">Create your first and ongoing website with Front.</span>
                        </h4>
                    </div>
                </div>
                <div className="row px-10 mt-5">
                <div style={{maxWidth: 870}} className="mx-auto row">
                    <div style={{paddingBottom: 30, width: '48%'}}>
                        <span className="h2 font-weight-bold focus-title">Life is in Your Hands</span>
                        <p className="info-focus">
                            24me is an award-winning Personal Assistant that helps millions of people all over the world
                            to boost their productivity. It’s an easy-to-use and yet super powerful app that puts
                            everything related to your schedule in one place: your
                            <span className="black">
                              CALENDAR, TO-DO LIST, NOTES
                            </span>
                            and Personal Accounts. 24me saves you time for the things that matter most in your life.
                        </p>
                    </div>
                    <div style={{width: "48%", clear: 'right'}}>
                        <div className="thumb feature phones-stand">
                            <img  src="../assets/img/2phonesstand.png" alt="" style={{height: 280, width: 'auto', marginTop: 50}} />
                        </div>
                    </div>
                </div>
                <div style={{maxWidth: 870}} className="mx-auto row">
                    <div style={{width: "48%", float: 'left'}}>
                        <div className="thumb feature">
                            <a href="https://www.youtube.com/watch?v=26PGvL52ytI" className="media">
                                <img  src="../assets/img/phonemovie.png" alt="" />
                            </a>
                        </div>
                    </div>
                    <div style={{width: "48%"}}>
                        <p style={{paddingTop:20}} className="info-focus">Put your Life in Order. Let 24me work for you.
                            You deserve it.
                        </p>
                    </div>
                </div>
            </div>
            <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="row text-center">
                                <div className="col-lg-4">
                                    <noscript>
                                    <img alt=""  className="any-icon"  src="../assets/img/home/online-collaboration-81991a.svg" /></noscript><img alt=""  className="any-icon" src="../assets/img/home/online-collaboration-81991a.svg" data-src="../assets/img/home/online-collaboration-81991a.svg" /><h3 className="mt-1">Online collaboration</h3>
                                    <p className="sub-heading mb-3">Collaborate and communicate with ease, whether you’re holding online meetings and presentations or working on the same document from the other side of the world.</p>
                                </div>
                                <div className="col-lg-4">
                                    <noscript><img alt=""  className="any-icon"  src="../assets/img/home/file-transfer-062e27.svg" /></noscript><img alt=""  className="any-icon" src="../assets/img/home/file-transfer-062e27.svg" data-src="../assets/img/home/file-transfer-062e27.svg" /><h3 className="mt-1">Built-in file transfer</h3>
                                    <p className="sub-heading mb-3">Simply copy and paste or use the new transfer tab to transfer files between computers.</p>
                                </div>
                                <div className="col-lg-4">
                                    <noscript><img alt=""  className="any-icon"  src="../assets/img/home/springs-d5de49.svg" /></noscript><img alt=""  className="any-icon" src="../assets/img/home/springs-d5de49.svg" data-src="../assets/img/home/springs-d5de49.svg" /><h3 className="mt-1">Lightweight</h3>
                                    <p className="sub-heading mb-3">No administrative privileges or installation needed. Simply download the 3MB file and you’re off. Require unattended access to your computer when you’re on the road? No problem, you’ll just need to install and set a password.</p>
                                </div>
                            </div>
                            <div className="row text-center">
                                <div className="col-lg-4">
                                    <noscript><img alt=""  className="any-icon"  src="../assets/img/home/bucket-brush-monitor-b8366a.svg" /></noscript><img alt=""  className="any-icon" src="../assets/img/home/bucket-brush-monitor-b8366a.svg" data-src="../assets/img/home/bucket-brush-monitor-b8366a.svg" /><h3 className="mt-1">Make it yours</h3>
                                    <p className="sub-heading mb-3">Customize the AnyDesk user interface to give customers a remote desktop experience consistent with your brand.</p>
                                </div>
                                <div className="col-lg-4">
                                    <noscript><img alt=""  className="any-icon"  src="../assets/img/home/camera-laptop-f59101.svg" /></noscript><img alt=""  className="any-icon" src="../assets/img/home/camera-laptop-f59101.svg" data-src="../assets/img/home/camera-laptop-f59101.svg"  /><h3 className="mt-1">Record sessions</h3>
                                    <p className="sub-heading mb-3">Both the IT professional and the user whose computer they access can get a recording of each session. This adds an extra level of security and is handy for training purposes too.</p>
                                </div>
                                <div className="col-lg-4">
                                    <noscript><img alt=""  className="any-icon"  src="../assets/img/home/anydesk-network-68bd61.svg" /></noscript><img alt=""  className="any-icon" src="../assets/img/home/anydesk-network-68bd61.svg" data-src="../assets/img/home/anydesk-network-68bd61.svg" /><h3 className="mt-1">Own network</h3>
                                    <p className="sub-heading mb-3">No cloud, no problem. If you need full control of your data, setting up your own Enterprise Network is easy. Unencrypted data will never leave your DMZ.</p>
                                </div>
                            </div>
                            <div className="row text-center mt-md-3">
                                <div className="col-12">
                                    <p className="mb-0"><a href="/en/features">See all features&nbsp;<span className="link-icon">›</span></a></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <span className="h3 font-weight-bold">The 24me Experience</span>
                            <p>
                                Speak to 24me and your task wil automatically be to your list. No need to wate time typing in tasks.
                            </p>
                            <div style={{textAlign:' center'}}>
                                <img alt=""  src="../assets/img/home/menu.png" />
                            </div>
                        </div>
                    </div>
                </div>
            <div className="container mt-5 plans">
                <div className="row">
                    <div className="col-lg-4 mb-7 mb-lg-0">
                        <div className="pr-lg-4 mb-7">
                            <span className="btn btn-xs btn-soft-success btn-pill mb-2">Pricing plans</span>
                            <h2>No additional costs.<br />Pay for what you use.</h2>
                            <p>Choose the most suitable service for your needs with reasonable price.</p>
                        </div>
                        <div className="btn-group btn-group-toggle">
                            <a className="js-animation-link btn btn-outline-secondary btn-custom-toggle-primary btn-sm-wide active"
                               href="javascript:;" data-target="#pricingMonthly" data-link-group="idPricing"
                               data-animation-in="slideInUp">Monthly</a>
                            <a className="js-animation-link btn btn-outline-secondary btn-custom-toggle-primary btn-sm-wide"
                               href="javascript:;" data-target="#pricingYearly" data-link-group="idPricing"
                               data-animation-in="slideInUp">
                                Yearly
                                <span className="badge badge-success badge-pill badge-bigger badge-pos">10% OFF</span>
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div id="pricingMonthly" className="row align-items-center mb-3" data-target-group="idPricing">
                        <div className="col-sm-4 mb-7 mb-sm-0">
                                {/* <!-- Pricing --> */}
                                <div className="card border-0 shadow-sm">
                                    <header id="SVGwave1BottomShapeID1"
                                            className="card-header border-0 position-relative bg-primary text-white p-5 pb-11">
                                        <h3 className="h4 mb-1 text-white">Free Plan</h3>
                                        <span className="d-block">
                                            <span className="align-top">£</span>
                                            <span className="display-4 font-weight-semi-bold">0</span>
                                            <span>/month</span>
                                        </span>

                                        <div className="position-absolute right-0 bottom-0 left-0">
                                            <figure className="ie-wave-1-bottom">
                    							<img alt="placeholder" src="../../assets/img/home/wave.svg" className="svg-inject img-fluid" />
                                            </figure>
                                        </div>
                                    </header>

                                    {/* <!-- Content --> */}
                                    <div className="card-body pt-0 px-2 pb-5">
                                        <ul className="list-group list-group-flush list-group-borderless mb-4">
                                            <li className="list-group-item">
                                                <div className="d-flex align-items-center">
                                                    <span className="btn btn-xs btn-icon btn-soft-primary rounded-circle mr-3">
                                                      <span className="fas fa-check btn-icon__inner"></span>
                                                    </span>
                                                    Community support
                                                </div>
                                            </li>
                                            <li className="list-group-item">
                                                <div className="d-flex align-items-center">
                        <span className="btn btn-xs btn-icon btn-soft-primary rounded-circle mr-3">
                          <span className="fas fa-check btn-icon__inner"></span>
                        </span>
                                                    400+ pages
                                                </div>
                                            </li>
                                            <li className="list-group-item">
                                                <div className="d-flex align-items-center">
                        <span className="btn btn-xs btn-icon btn-soft-primary rounded-circle mr-3">
                          <span className="fas fa-check btn-icon__inner"></span>
                        </span>
                                                    100+ header variations
                                                </div>
                                            </li>
                                        </ul>

                                        <button type="button"
                                                className="btn btn-sm btn-block btn-soft-primary transition-3d-hover">Get
                                            Started
                                        </button>
                                    </div>
                                    {/* <!-- End Content --> */}
                                </div>
                                {/* <!-- End Pricing --> */}
                            </div>
                            <div className="col-sm-4 mb-7 mb-sm-0">
                                {/* <!-- Pricing --> */}
                                <div className="card border-0 shadow-sm">
                                    <header id="SVGwave1BottomShapeID2"
                                            className="card-header border-0 position-relative bg-primary text-white p-5 pb-11">
                                        <h3 className="h4 mb-1 text-white">Individual Plan</h3>
                                        <span className="d-block">
                                            <span className="align-top">£</span>
                                            <span className="display-4 font-weight-semi-bold">22</span>
                                            <span>/month</span>
                                          </span>

                                        <div className="position-absolute right-0 bottom-0 left-0">
                    							<img alt="placeholder" src="../../assets/img/home/wave.svg" className="svg-inject img-fluid" />

                                        </div>
                                    </header>

                                    {/* <!-- Content --> */}
                                    <div className="card-body pt-0 px-2 pb-5">
                                        <ul className="list-group list-group-flush list-group-borderless mb-4">
                                            <li className="list-group-item">
                                                <div className="d-flex align-items-center">
                                                    <span className="btn btn-xs btn-icon btn-soft-primary rounded-circle mr-3">
                                                      <span className="fas fa-check btn-icon__inner"></span>
                                                    </span>
                                                    Community support
                                                </div>
                                            </li>
                                            <li className="list-group-item">
                                                <div className="d-flex align-items-center">
                        <span className="btn btn-xs btn-icon btn-soft-primary rounded-circle mr-3">
                          <span className="fas fa-check btn-icon__inner"></span>
                        </span>
                                                    400+ pages
                                                </div>
                                            </li>
                                            <li className="list-group-item">
                                                <div className="d-flex align-items-center">
                        <span className="btn btn-xs btn-icon btn-soft-primary rounded-circle mr-3">
                          <span className="fas fa-check btn-icon__inner"></span>
                        </span>
                                                    100+ header variations
                                                </div>
                                            </li>
                                            <li className="list-group-item disabled py-2">
                                                <div className="d-flex align-items-center">
                        <span className="btn btn-xs btn-icon btn-soft-primary rounded-circle mr-3">
                          <span className="fas fa-check btn-icon__inner"></span>
                        </span>
                                                    20+ home page options
                                                </div>
                                            </li>
                                        </ul>

                                        <button type="button"
                                                className="btn btn-sm btn-block btn-soft-primary transition-3d-hover">Get
                                            Started
                                        </button>
                                    </div>
                                    {/* <!-- End Content --> */}
                                </div>
                                {/* <!-- End Pricing --> */}
                            </div>
                            <div className="col-sm-4">
                                {/* <!-- Pricing --> */}
                                <div className="card border-0 shadow-sm">
                                    <header id="SVGwave1BottomShapeID2"
                                            className="card-header border-0 position-relative bg-primary text-white p-5 pb-11">
                                        <h3 className="h4 mb-1 text-white">Enterprise Plan</h3>
                                        <span className="d-block">
                    <span className="align-top">£</span>
                    <span className="display-4 font-weight-semi-bold">99</span>
                    <span>/month</span>
                  </span>

                                        <div className="position-absolute right-0 bottom-0 left-0">
                                            <img alt=""  alt="placeholder" src="../../assets/img/home/wave.svg" className="svg-inject img-fluid" />

                                        </div>
                                    </header>

                                    {/* <!-- Content --> */}
                                    <div className="card-body pt-0 px-2 pb-5">
                                        <ul className="list-group list-group-flush list-group-borderless mb-4">
                                            <li className="list-group-item">
                                                <div className="d-flex align-items-center">
                                                    <span className="btn btn-xs btn-icon btn-soft-primary rounded-circle mr-3">
                                                      <span className="fas fa-check btn-icon__inner"></span>
                                                    </span>
                                                    24/7 support
                                                </div>
                                            </li>
                                            <li className="list-group-item">
                                                <div className="d-flex align-items-center">
                                                    <span className="btn btn-xs btn-icon btn-soft-primary rounded-circle mr-3">
                                                      <span className="fas fa-check btn-icon__inner"></span>
                                                    </span>
                                                    400+ pages
                                                </div>
                                            </li>
                                            <li className="list-group-item">
                                                <div className="d-flex align-items-center">
                                                    <span className="btn btn-xs btn-icon btn-soft-primary rounded-circle mr-3">
                                                      <span className="fas fa-check btn-icon__inner"></span>
                                                    </span>
                                                    200+ header variations
                                                </div>
                                            </li>
                                            <li className="list-group-item">
                                                <div className="d-flex align-items-center">
                                                    <span className="btn btn-xs btn-icon btn-soft-primary rounded-circle mr-3">
                                                      <span className="fas fa-check btn-icon__inner"></span>
                                                    </span>
                                                    40+ home page options
                                                </div>
                                            </li>
                                            <li className="list-group-item">
                                                <div className="d-flex align-items-center">
                                                    <span className="btn btn-xs btn-icon btn-soft-primary rounded-circle mr-3">
                                                      <span className="fas fa-check btn-icon__inner"></span>
                                                    </span>
                                                    E-commerce
                                                </div>
                                            </li>
                                        </ul>

                                        <button type="button"
                                                className="btn btn-sm btn-block btn-soft-primary transition-3d-hover">Get
                                            Started
                                        </button>
                                    </div>
                                    {/* <!-- End Content --> */}
                                </div>
                                {/* <!-- End Pricing --> */}
                            </div>
                        </div>
                        <p className="small text-muted text-center">
                            * <a className="link-muted" href="../pages/terms.html">Terms</a> are subject to change.
                        </p>
                    </div>
                </div>
            </div>
            <div className="container-secondary-sm mt-3">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-12 mb-lg-0 mb-4">
                            <div className="card card-testimonial">
                                <div className="any-imageHoverText-bottom">
                                    <a href="/en/case-studies/spidercam">
                                        <noscript><img alt=""  className="img-fluid card-testimonial-img"  src="../assets/img/home/cards/spidercam-stadium-29ae3d.png" alt="Spidercam stadium"/></noscript><img alt=""  className="img-fluid card-testimonial-img" src="../assets/img/home/cards/spidercam-stadium-29ae3d.png" data-src="../assets/img/home/cards/spidercam-stadium-29ae3d.png" alt="Spidercam stadium" /></a>
                                    <div className="any-imageHoverText-bottom-bg">
                                        <p className="font-size-lg">Spidercam</p>
                                    </div>
                                </div>
                                <div className="card-body sameHeight" style={{height: 278.594}}>
                                    <noscript><img   className="rounded-circle float-left mr-1 card-testimonial-img-profile"  src="../assets/img/home/cards/jan-peters-7d72ce.png" alt="Jan Peters"/></noscript><img className="rounded-circle float-left mr-1 card-testimonial-img-profile" src="../assets/img/home/cards/jan-peters-7d72ce.png" data-src="../assets/img/home/cards/jan-peters-7d72ce.png" alt="Jan Peters" /><span className="h4 mb-0 d-block">Jan Peters</span>
                                    <p className="font-size-xs">CEO, Spidercam</p>
                                    <hr/>
                                    <p className="mb-3 material-icons-noFloat"><noscript><img alt=""  className="any-icon-xs mr-1"  src="/_static/img/icons/speech-bubble-47f6ba.svg" /></noscript><img alt=""  className="any-icon-xs mr-1" src="../assets/img/home/cards/speech-bubble-47f6ba.svg" data-src="../assets/img/home/cards/speech-bubble-47f6ba.svg" />spidercam® Producer uses AnyDesk Remote Desktop Tool for Worldwide Equipment Support.</p>
                                    <p className="any-gotoBoxLink mb-0"><a href="/en/case-studies/spidercam">Read the case study&nbsp;<span className="link-icon">›</span></a></p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-12 mb-lg-0 mb-4">
                            <div className="card card-testimonial">
                                <div className="any-imageHoverText-bottom">
                                    <a href="/en/case-studies/fmo">
                                        <noscript><img  className="img-fluid card-testimonial-img"  src="../assets/img/home/cards/airport-muenster-5ded7b.png" alt="Airport Münster"/></noscript><img  className="img-fluid card-testimonial-img" src="../assets/img/home/cards/airport-muenster-5ded7b.png" data-src="../assets/img/home/cards/airport-muenster-5ded7b.png" alt="Airport Münster" /></a>
                                    <div className="any-imageHoverText-bottom-bg">
                                        <p className="font-size-lg">Airport Münster</p>
                                    </div>
                                </div>
                                <div className="card-body sameHeight" style={{height: 278.594}}>
                                    <noscript><img  className="rounded-circle float-left mr-1 card-testimonial-img-profile"  src="../assets/img/home/cards/francisco-rodriguez-dd1bb8.png" alt="Francisco Rodríguez"/></noscript><img className="rounded-circle float-left mr-1 card-testimonial-img-profile" src="../assets/img/home/cards/francisco-rodriguez-dd1bb8.png" data-src="../assets/img/home/cards/francisco-rodriguez-dd1bb8.png" alt="Francisco Rodríguez" /><span className="h4 mb-0 d-block">Francisco Rodríguez</span>
                                    <p className="font-size-xs">CIO, Airport Münster/Osnabrück</p>
                                    <hr/>
                                    <p className="mb-3 material-icons-noFloat"><noscript><img alt=""  className="any-icon-xs mr-1"  src="../assets/img/home/cards/speech-bubble-47f6ba.svg" /></noscript><img alt=""  className="any-icon-xs mr-1" src="../assets/img/home/cards/speech-bubble-47f6ba.svg" data-src="../assets/img/home/cards/speech-bubble-47f6ba.svg" />It wasn't until we tried AnyDesk that we were able to solve the data security problem.</p>
                                    <p className="any-gotoBoxLink mb-0"><a href="/en/case-studies/fmo">Read the case study&nbsp;<span className="link-icon">›</span></a></p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-12 mb-lg-0 mb-4">
                            <div className="card card-testimonial">
                                <div className="any-imageHoverText-bottom">
                                    <a href="/en/case-studies/leibniz-institute">
                                        <noscript><img  className="img-fluid card-testimonial-img"  src="../assets/img/home/cards/aip-institute-c254e2.png" alt="AIP Institute"/></noscript><img className="img-fluid card-testimonial-img" src="../assets/img/home/cards/aip-institute-c254e2.png" data-src="../assets/img/home/cards/aip-institute-c254e2.png" alt="AIP Institute" /></a>
                                    <div className="any-imageHoverText-bottom-bg">
                                        <p className="font-size-lg">Leibniz Institute</p>
                                    </div>
                                </div>
                                <div className="card-body sameHeight" style={{height: 278.594}}>
                                    <noscript><img alt=""  className="rounded-circle float-left mr-1 card-testimonial-img-profile"  src="../assets/img/home/cards/placeholder-cd0bcd.png" alt="Mario Dionies"/></noscript><img  className="rounded-circle float-left mr-1 card-testimonial-img-profile" src="../assets/img/home/cards/placeholder-cd0bcd.png" data-src="../assets/img/home/cards/placeholder-cd0bcd.png" alt="Mario Dionies" /><span className="h4 mb-0 d-block">Mario Dionies</span>
                                    <p className="font-size-xs">IT-Security Officer, AIP</p>
                                    <hr />
                                    <p className="mb-3 material-icons-noFloat"><noscript><img alt=""  className="any-icon-xs mr-1"  src="../assets/img/home/cards/speech-bubble-47f6ba.svg" /></noscript><img  className="any-icon-xs mr-1" src="../assets/img/home/cards/speech-bubble-47f6ba.svg" data-src="../assets/img/home/cards/speech-bubble-47f6ba.svg" />After searching for a bit, we found AnyDesk with its in-house-solution, offering exactly what we were looking for.</p>
                                    <p className="any-gotoBoxLink mb-0"><a href="/en/case-studies/leibniz-institute">Read the case study&nbsp;<span className="link-icon">›</span></a></p>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="row text-center mt-0 mt-lg-4">
                        <div className="col-sm-12">
                            <p className="mb-0"><a href="/en/case-studies">All case studies&nbsp;<span className="link-icon">›</span></a></p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-secondary mt-3 py-5" style={{backgroundColor: 'lightgrey'}}>
                <div className="container">
                    <div className="row text-center justify-content-center">
                        <div className="col-md-8">
                            <noscript><img alt=""  className="any-icon"  src="../assets/img/home/cards/letter-with-wings-a56b51.svg" /></noscript><img alt=""  className="any-icon" src="../assets/img/home/cards/letter-with-wings-a56b51.svg" data-src="/_static/img/icons/letter-with-wings-a56b51.svg" /><h2 className="mt-1">Subscribe to our Newsletter</h2>
                            <p>Enter your email address to get updates on AnyDesk special offers, products and events.</p>
                        </div>
                        <div className="col-12">
                            <form id="newsletter-form" className="form-jointFieldButton" accept-charset="utf-8" action="#" method="post">
                                <div className="form-group mb-0">
                                    <input name="language" type="hidden" value="en" />
                                    <input name="list" type="hidden" value="5mX8KR4K763HTGILWBM4wrfQ" />
                                    <label for="email" className="sr-only">Enter your email address</label>
                                    <input type="email" name="email" className="form-control" id="inputEmail" pattern="^[a-zA-Z0-9.!#$%&amp;'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$" placeholder="Enter your email address" required="" value="" /></div>
                                <div className="form-group mb-0">
                                    <button type="submit" className="btn text-white" style={{backgroundColor:'#30a171'}} id="signupButton">Sign up</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-primary-border-sm container-footer-desktop d-none d-md-block">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-3">
                            <p className="font-weight-bold">About</p>
                            <p className="mb-1"><a href="/en/features">About</a></p>
                            <p className="mb-1"><a href="/en/order">Services</a></p>
                            <p className="mb-0"><a href="/en/case-studies">Careers</a></p>
                        </div>
                        <div className="col-sm-3">
                            <p className="font-weight-bold">Account</p>
                            <p className="mb-1"><a href="/en/downloads/windows">Account</a></p>
                            <p className="mb-1"><a href="/en/downloads/mac-os">My tasks</a></p>
                            <p className="mb-1"><a href="/en/downloads/ios">Projects</a></p>
                        </div>
                        <div className="col-sm-3">
                            <p className="font-weight-bold">Resources</p>
                            <p className="mb-1"><a href="/en/company">Help</a></p>
                            <p className="mb-1"><a href="/en/jobs">Terms</a></p>
                            <p className="mb-1"><a href="/en/press">Privacy</a></p>
                        </div>
                        <div className="col-sm-3">
                            <p className="font-weight-bold">We are driven to deliver results for all your businesses.</p>
                            <div className="row">
                                <div className="col-6">
                                    <a href="#" target="_blank">
                                        <img alt=""  src="../assets/img/appleBtn.png" style={{marginRight:17}} />
                                    </a>
                                </div>
                                <div className="col-6">
                                    <a href="#" target="_blank">
                                        <img alt=""  src="../assets/img/googleBtn.png" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </React.Fragment>
        );
    }
}
export default Home;
