import React from 'react';

const Home = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-3 col-md-6 col-sm-6">
                    <div className="card card-stats">
                        <div className="card-header card-header-warning card-header-icon">
                        <div className="card-icon">
                            <i className="material-icons">swap_vert</i>
                        </div>
                        <p className="card-category">recorder</p>
                        <h3 className="card-title">20/
                            <small>50</small>
                        </h3>
                        </div>
                        <div className="card-footer">
                        <div className="stats">
                            <i className="material-icons text-danger">warning</i>
                            <a href="">Get More Space...</a>
                        </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-3 col-md-6 col-sm-6">
                    <div className="card card-stats">
                        <div className="card-header card-header-success card-header-icon">
                        <div className="card-icon">
                            <i className="material-icons">trending_up</i>
                        </div>
                        <p className="card-category">Latest  Invoice</p>
                        <h3 className="card-title">$300,00</h3>
                        </div>
                        <div className="card-footer">
                        <div className="stats">
                            <i className="material-icons">date_range</i> Last 24 Hours
                        </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="card card-stats">
                <div className="card-header card-header-danger card-header-icon">
                  <div className="card-icon">
                    <i className="material-icons">trending_down</i>
                  </div>
                  <p className="card-category">Latest expensives</p>
                  <h3 className="card-title">$400,00</h3>
                </div>
                <div className="card-footer">
                  <div className="stats">
                     <i className="material-icons">date_range</i> Last 3 Hours
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="card card-stats">
                <div className="card-header card-header-info card-header-icon">
                  <div className="card-icon">
                     <i className="material-icons">sync_alt</i>
                  </div>
                  <p className="card-category">Balance</p>
                  <h3 className="card-title">$-100,00</h3>
                </div>
                <div className="card-footer">
                  <div className="stats">
                    <i className="material-icons">update</i> Just Updated
                  </div>
                </div>
              </div>
            </div>
            </div>

            <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="card">
                <div className="card-header card-header-tabs card-header-primary">
                  <div className="nav-tabs-navigation">
                    <div className="nav-tabs-wrapper">
                      <span className="nav-tabs-title">Latest Reports:</span>
                      <ul className="nav nav-tabs" data-tabs="tabs">
                        <li className="nav-item">
                          <a className="nav-link active" href="" data-toggle="tab">
                            <i className="material-icons">keyboard_arrow_up</i> Invoice
                            <div className="ripple-container"></div>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="" data-toggle="tab">
                            <i className="material-icons">keyboard_arrow_down</i>  Expenses
                            <div className="ripple-container"></div>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="" data-toggle="tab">
                            <i className="material-icons">file_copy</i> Bill
                            <div className="ripple-container"></div>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <div className="tab-content">
                    <div className="tab-pane active" id="profile">
                      <table className="table">
                        <tbody>
                          <tr>
                            <td>
                              <div className="form-check">
                                <label className="form-check-label">
                                  <input className="form-check-input" type="checkbox" value="" checked="" />
                                  <span className="form-check-sign">
                                    <span className="check"></span>
                                  </span>
                                </label>
                              </div>
                            </td>
                            <td>Sign contract for "What are conference organizers afraid of?"</td>
                            <td className="td-actions text-right">
                              <button type="button" rel="tooltip" title="" className="btn btn-primary btn-link btn-sm" data-original-title="Edit Task">
                                <i className="material-icons">edit</i>
                              </button>
                              <button type="button" rel="tooltip" title="" className="btn btn-danger btn-link btn-sm" data-original-title="Remove">
                                <i className="material-icons">close</i>
                              </button>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="form-check">
                                <label className="form-check-label">
                                  <input className="form-check-input" type="checkbox" value="" />
                                  <span className="form-check-sign">
                                    <span className="check"></span>
                                  </span>
                                </label>
                              </div>
                            </td>
                            <td>Lines From Great Russian Literature? Or E-mails From My Boss?</td>
                            <td className="td-actions text-right">
                              <button type="button" rel="tooltip" title="" className="btn btn-primary btn-link btn-sm" data-original-title="Edit Task">
                                <i className="material-icons">edit</i>
                              </button>
                              <button type="button" rel="tooltip" title="" className="btn btn-danger btn-link btn-sm" data-original-title="Remove">
                                <i className="material-icons">close</i>
                              </button>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="form-check">
                                <label className="form-check-label">
                                  <input className="form-check-input" type="checkbox" value="" />
                                  <span className="form-check-sign">
                                    <span className="check"></span>
                                  </span>
                                </label>
                              </div>
                            </td>
                            <td>Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit
                            </td>
                            <td className="td-actions text-right">
                              <button type="button" rel="tooltip" title="" className="btn btn-primary btn-link btn-sm" data-original-title="Edit Task">
                                <i className="material-icons">edit</i>
                              </button>
                              <button type="button" rel="tooltip" title="" className="btn btn-danger btn-link btn-sm" data-original-title="Remove">
                                <i className="material-icons">close</i>
                              </button>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="form-check">
                                <label className="form-check-label">
                                  <input className="form-check-input" type="checkbox" value="" checked="" />
                                  <span className="form-check-sign">
                                    <span className="check"></span>
                                  </span>
                                </label>
                              </div>
                            </td>
                            <td>Create 4 Invisible User Experiences you Never Knew About</td>
                            <td className="td-actions text-right">
                              <button type="button" rel="tooltip" title="" className="btn btn-primary btn-link btn-sm" data-original-title="Edit Task">
                                <i className="material-icons">edit</i>
                              </button>
                              <button type="button" rel="tooltip" title="" className="btn btn-danger btn-link btn-sm" data-original-title="Remove">
                                <i className="material-icons">close</i>
                              </button>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="tab-pane" id="messages">
                      <table className="table">
                        <tbody>
                          <tr>
                            <td>
                              <div className="form-check">
                                <label className="form-check-label">
                                  <input className="form-check-input" type="checkbox" value="" checked="" />
                                  <span className="form-check-sign">
                                    <span className="check"></span>
                                  </span>
                                </label>
                              </div>
                            </td>
                            <td>Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit
                            </td>
                            <td className="td-actions text-right">
                              <button type="button" rel="tooltip" title="" className="btn btn-primary btn-link btn-sm" data-original-title="Edit Task">
                                <i className="material-icons">edit</i>
                              </button>
                              <button type="button" rel="tooltip" title="" className="btn btn-danger btn-link btn-sm" data-original-title="Remove">
                                <i className="material-icons">close</i>
                              </button>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="form-check">
                                <label className="form-check-label">
                                  <input className="form-check-input" type="checkbox" value="" />
                                  <span className="form-check-sign">
                                    <span className="check"></span>
                                  </span>
                                </label>
                              </div>
                            </td>
                            <td>Sign contract for "What are conference organizers afraid of?"</td>
                            <td className="td-actions text-right">
                              <button type="button" rel="tooltip" title="" className="btn btn-primary btn-link btn-sm" data-original-title="Edit Task">
                                <i className="material-icons">edit</i>
                              </button>
                              <button type="button" rel="tooltip" title="" className="btn btn-danger btn-link btn-sm" data-original-title="Remove">
                                <i className="material-icons">close</i>
                              </button>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="tab-pane" id="settings">
                      <table className="table">
                        <tbody>
                          <tr>
                            <td>
                              <div className="form-check">
                                <label className="form-check-label">
                                  <input className="form-check-input" type="checkbox" value="" />
                                  <span className="form-check-sign">
                                    <span className="check"></span>
                                  </span>
                                </label>
                              </div>
                            </td>
                            <td>Lines From Great Russian Literature? Or E-mails From My Boss?</td>
                            <td className="td-actions text-right">
                              <button type="button" rel="tooltip" title="" className="btn btn-primary btn-link btn-sm" data-original-title="Edit Task">
                                <i className="material-icons">edit</i>
                              </button>
                              <button type="button" rel="tooltip" title="" className="btn btn-danger btn-link btn-sm" data-original-title="Remove">
                                <i className="material-icons">close</i>
                              </button>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="form-check">
                                <label className="form-check-label">
                                  <input className="form-check-input" type="checkbox" value="" checked="" />
                                  <span className="form-check-sign">
                                    <span className="check"></span>
                                  </span>
                                </label>
                              </div>
                            </td>
                            <td>Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit
                            </td>
                            <td className="td-actions text-right">
                              <button type="button" rel="tooltip" title="" className="btn btn-primary btn-link btn-sm" data-original-title="Edit Task">
                                <i className="material-icons">edit</i>
                              </button>
                              <button type="button" rel="tooltip" title="" className="btn btn-danger btn-link btn-sm" data-original-title="Remove">
                                <i className="material-icons">close</i>
                              </button>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="form-check">
                                <label className="form-check-label">
                                  <input className="form-check-input" type="checkbox" value="" checked="" />
                                  <span className="form-check-sign">
                                    <span className="check"></span>
                                  </span>
                                </label>
                              </div>
                            </td>
                            <td>Sign contract for "What are conference organizers afraid of?"</td>
                            <td className="td-actions text-right">
                              <button type="button" rel="tooltip" title="" className="btn btn-primary btn-link btn-sm" data-original-title="Edit Task">
                                <i className="material-icons">edit</i>
                              </button>
                              <button type="button" rel="tooltip" title="" className="btn btn-danger btn-link btn-sm" data-original-title="Remove">
                                <i className="material-icons">close</i>
                              </button>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="card">
                <div className="card-header card-header-warning">
                  <h4 className="card-title">Bill Stats</h4>
                  <p className="card-category">Last Bill </p>
                </div>
                <div className="card-body table-responsive">
                  <table className="table table-hover">
                    <thead className="text-warning">
                      <tr><th>ID</th>
                      <th>Name</th>
                      <th>Salary</th>
                      <th>Country</th>
                    </tr></thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>Dakota Rice</td>
                        <td>$36,738</td>
                        <td>Niger</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>Minerva Hooper</td>
                        <td>$23,789</td>
                        <td>Curaçao</td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>Sage Rodriguez</td>
                        <td>$56,142</td>
                        <td>Netherlands</td>
                      </tr>
                      <tr>
                        <td>4</td>
                        <td>Philip Chaney</td>
                        <td>$38,735</td>
                        <td>Korea, South</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            </div>
        </div>
    );
}

export default Home;
