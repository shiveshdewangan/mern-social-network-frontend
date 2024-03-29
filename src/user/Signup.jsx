import React, { Component } from 'react';

class Signup extends Component {
    state = {
        name: "",
        email: "",
        password: "",
        error: ""
    }

    render() {
        return (
            <div className="container">
                <h2 className="mt-5 mb-5">Sign Up</h2>

                <form>
                    <div className="form-group">
                        <label className="text-muted">Name</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label className="text-muted">Email</label>
                        <input type="email" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label className="text-muted">Password</label>
                        <input type="password" className="form-control" />
                    </div>
                    <button className="btn btn-raised btn-primary">Submit</button>
                </form>
            </div>
        );
    }
}

export default Signup;