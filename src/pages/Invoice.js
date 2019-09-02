import React from 'react';

const Invoice = () => {
    return (
        <div className="container">
          
            <div className="row">
            <div className="col-md-6">
              <div className="card">
                <div className="card-header card-h card-header-primary">
                    <div className="card-p">
                        <h4 className="card-title">Add Invoice </h4>
                        <p className="card-category">Take purchasing invoice photo </p>
                    </div>
                    
                  <div className="fab blue">
                            <i className="card-i material-icons">camera_alt</i>
                  </div>
    
                </div>
                <div className="card-body">
                  <form>
                    <div className="row">
                      <div className="col-md-5">
                        <div className="form-group bmd-form-group">
                          <label className="bmd-label-floating">Amount</label>
                          <input type="text" className="form-control" disabled="" />
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="form-group bmd-form-group">
                          <label className="bmd-label-floating">Tax type</label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group bmd-form-group">
                          <label className="bmd-label-floating">Account payed </label>
                          <input type="email" className="form-control" />
                        </div>
                      </div>
                    </div>
                   
                   
                    <div className="row">
                      <div className="col-md-12">
                        <div className="form-group">
                          <label>Note</label>
                          <div className="form-group bmd-form-group">
                            <label className="bmd-label-floating">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.</label>
                            <textarea className="form-control" rows="5"></textarea>
                          </div>
                        </div>
                      </div>
                    </div>
                    <button type="submit" className="btn btn-primary pull-right">Update Profile</button>
                    <div className="clearfix"></div>
                  </form>
                </div>
              </div>
            </div>
        


            <div className="col-md-6">
              <div className="card">
                <div id="card-inc" className="card-header card-header-primary">
                  <h4 className="card-title ">Latest Invoice Table</h4>
                  <p className="card-category"> Here is a last 6 invoice for this month</p>
                </div>
                <div className="card-body">
                  <div className="table-responsive">
                    <table className="table">
                      <thead className=" text-primary">
                        <tr><th>
                          ID
                        </th>
                        <th>
                          Notez
                        </th>
                        <th>
                            Account payed
                        </th>
                        <th>
                        Tax type
                        </th>
                        <th>
                        Amount
                        </th>
                      </tr></thead>
                      <tbody>
                        <tr>
                          <td>
                            1
                          </td>
                          <td>
                            Dakota Rice
                          </td>
                          <td>
                            Cash
                          </td>
                          <td>
                            9 %
                          </td>
                          <td className="text-primary">
                            $36,738
                          </td>
                        </tr>
                        <tr>
                          <td>
                            2
                          </td>
                          <td>
                            Minerva Hooper
                          </td>
                          <td>
                            Cash
                          </td>
                          <td>
                           18 %
                          </td>
                          <td className="text-primary">
                            $23,789
                          </td>
                        </tr>
                        <tr>
                          <td>
                            3
                          </td>
                          <td>
                            Sage Rodriguez
                          </td>
                          <td>
                            Bank card

                          </td>
                          <td>
                            18 %
                          </td>
                          <td className="text-primary">
                            $56,142
                          </td>
                        </tr>
                        <tr>
                          <td>
                            4
                          </td>
                          <td>
                            Philip Chaney
                          </td>
                          <td>
                            Cash
                          </td>
                          <td>
                            9 %
                          </td>
                          <td className="text-primary">
                            $38,735
                          </td>
                        </tr>
                        <tr>
                          <td>
                            5
                          </td>
                          <td>
                            Doris Greene
                          </td>
                          <td>
                          Check
                          </td>
                          <td>
                            9 %
                          </td>
                          <td className="text-primary">
                            $63,542
                          </td>
                        </tr>
                        <tr>
                          <td>
                            6
                          </td>
                          <td>
                            Mason Porter
                          </td>
                          <td>
                            Check
                          </td>
                          <td>
                            9 %
                          </td>
                          <td className="text-primary">
                            $78,615
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              </div>
          </div>
        </div>
    );
}

export default Invoice;
