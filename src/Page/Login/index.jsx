import React from "react";
import { Input, Button } from "../../Property/Form";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <React.Fragment>
      <div className="container-fluid mt-5">
        <div className="row justify-content-center">
          <div className="col-md-4">
            <div className="card">
              <div className="card-header bg-primary text-white">
                <h3 className="font-weight-bold m-0 p-0 float-left">Login</h3>
                <Link to="/">
                  <button className="btn btn-secondary btn-sm float-right">
                    Back
                  </button>
                </Link>
              </div>
              <div className="card-body">
                <Input label="Email Address" className="form-control" />
                <Input label="Password" className="form-control" />
                <p className="font-weight-lighter">
                  Belum punya akun? Daftar <Link to="/register">disini</Link>
                </p>
                <Button className="btn btn-success" label={"Login"} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Login;
