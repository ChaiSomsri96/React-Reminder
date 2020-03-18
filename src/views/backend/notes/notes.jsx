import React from 'react';


class Notes extends React.Component {
  render() {
    return (
<div className="row">
          <div className="col-lg-12">
                <div className="card">
                    <div className="card-header">
                        <h5 className=" h6 mb-0">Notes</h5>
                    </div>
                    <div className="card-body p-md-5">
                        <h2 className="mb-2">Getting started with Purpose</h2>
                        <p className="lead mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        <div className="media align-items-center mt-4">
                        <a href="#!" className="avatar avatar-sm rounded-circle mr-3">
                            <img alt="placeholder" src="../../assets/img/theme/light/team-7-800x800.jpg" />
                        </a>
                        <div className="media-body">
                            <span className="h6 mb-0">John Sullivan</span>
                            <span className="text-sm text-muted">25th October 2018</span>
                        </div>
                        </div>
                        <div className="d-flex align-items-center mt-4">
                        <ul className="list-inline">
                            <li className="list-inline-item pr-3">
                            <span className="badge badge-pill badge-soft-info"><i className="fas fa-code mr-1"></i>Web Design</span>
                            </li>
                            <li className="list-inline-item pr-3">
                            <span className="badge badge-pill badge-soft-success">Solved</span>
                            </li>
                            <li className="list-inline-item text-sm pr-3"><i className="fas fa-thumbs-up mr-2"></i>100</li>
                            <li className="list-inline-item text-sm pr-3"><i className="fas fa-comment mr-2"></i>20</li>
                        </ul>
                        </div>
                        <article className="mt-5">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit</p>
                        <h5>First thing you need to do</h5>
                        <figure className="figure">
                            <img alt="placeholder" src="../../assets/img/theme/light/code-1.jpg" className="img-fluid rounded" />
                            <figcaption className="mt-3 text-muted">Figure one: Type here your description</figcaption>
                        </figure>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <h5>Second thing you need to do</h5>
                        <figure className="figure">
                            <img alt="placeholder" src="../../assets/img/theme/light/code-2.jpg" className="img-fluid rounded" />
                            <figcaption className="mt-3 text-muted">Figure two: Type here your description</figcaption>
                        </figure>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </article>
                    </div>
                    <div className="card-footer px-md-5 py-4 bg-lighter border-0 delimiter-top">
                        <h5 className="h6 mb-4">Did you find this article helpful?</h5>
                        <form className="d-flex justify-content-between">
                        <div>
                            <button className="btn btn-xs btn-secondary" type="submit"><i className="fas fa-thumbs-up"></i>
                            </button>
                            <button className="btn btn-xs btn-secondary" type="submit"><i className="fas fa-thumbs-down"></i>
                            </button>
                        </div>
                        <div>
                            <a  className="btn btn-xs btn-secondary rounded-pill">Contact Support</a>
                        </div>
                        </form>
                    </div>
                    </div>
                </div>
            </div>    
        );
  }
}
export default Notes;
