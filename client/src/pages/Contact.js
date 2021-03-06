import React from "react";
import CommentSection from "../components/CommentSection";
import axios from "axios";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import UpdateContact from "./UpdateContact";
// import { NavLink } from 'react-router-dom'

class Contact extends React.Component {
  
  state = {
    f_name: "",
    l_name: "",
    address: "",
    cell_number: "",
    email: "",
    comments: "",
  };

  handleChange(event, property) {
    this.setState({ [property]: event.target.value });
  }

  handleSubmit(event) {
    alert("Success " + this.state.f_name);
    // get all contacts
    axios.get('/contacts').then(res => {
        console.log(res.data)
        let doesContactExist = false
        for (let i = 0; i < res.data.length; i++) {
            console.log(res.data[i])
            console.log(this.state.email)
            if ( res.data[i].email === this.state.email) {
                doesContactExist = true;
            }
        }
        console.log('doesContactExist - ', doesContactExist);
        if (doesContactExist === false){
            axios.post('/contacts/add', {
                f_name: this.state.f_name,
                l_name: this.state.l_name,
                address: this.state.address,
                cell_number: this.state.cell_number,
                email: this.state.email,
                comments: this.state.comments
            }).then(function (res) {
                console.log(res)
            }).catch(function (err) {
                console.log(err)
            })
            alert('sucessfully added new contact')
        } else {
            alert('We will take you to your update page')
            ;
            // <NavLink></NavLink>
       }
    });
    event.preventDefault();
  }

  render() {
    // if (this.state.success) {
    //   return (
    //     <div>Success</div>
    //   );
    // }
    return (
      <div>
        <div className="container">
          <div className="py-5 text-center">
            <img
              className="d-block mx-auto mb-4"
              src="/docs/4.3/assets/brand/bootstrap-solid.svg"
              alt=""
              width={72}
              height={72}
            />
            <h1>Contact us</h1>
            <p className="lead">
              Please fill out our contact form!
            </p>
          </div>
          <div className="row" />
          <div>
            <h2 className="mb-3">Billing address</h2>
            {/* HANDLE SUBMIT */}
            <form className="needs-validation" onSubmit={(event) => this.handleSubmit(event)}>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label htmlFor="firstName">First name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="firstName"
                    required
                    value={this.state.f_name}
                    onChange={event => this.handleChange(event, "f_name")}
                  />
                  <div className="invalid-feedback">
                    Valid first name is required.
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="lastName">Last name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="lastName"
                    required
                    value={this.state.l_name}
                    onChange={event => this.handleChange(event, "l_name")}
                  />
                  <div className="invalid-feedback">
                    Valid last name is required.
                  </div>
                </div>
              </div>
              <div className="mb-3"></div>
              <div className="mb-3">
                <label htmlFor="email">
                  Email <span className="text-muted">(Required)</span>
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="you@example.com"
                  required
                  value={this.state.email}
                  onChange={event => this.handleChange(event, "email")}
                />
                <div className="invalid-feedback">
                  Please enter a valid email address for shipping updates.
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="address">Address</label>
                <input
                  type="text"
                  className="form-control"
                  id="address"
                  placeholder="1234 Main St"
                  required
                  value={this.state.address}
                  onChange={event => this.handleChange(event, "address")}
                />
                <div className="invalid-feedback">
                  Please enter your shipping address.
                </div>
                <label htmlFor="Emergency number">Emergency number</label>
                <input
                  type="tel"
                  pattern=".{10}"
                  className="form-control"
                  id="validationCustom08"
                  placeholder="Must be 10 digits"
                  // onInput="check(this)"
                  required
                  value={this.state.cell_number}
                  onChange={event => this.handleChange(event, "cell_number")}
                />
              </div>

              <div className="form-group">
                <label htmlFor="comment">Comment:</label>
                <textarea
                  className="form-control"
                  rows={5}
                  id="comment"
                  placeholder={"Please tell us how we did!"}
                  value={this.state.comments}
                  onChange={event => this.handleChange(event, "comments")}
                />
              </div>
              <button
                className="btn btn-primary btn-lg btn-block"
                type="submit"
              >
                Continue to checkout
              </button>
            </form>
            <CommentSection className='commentSection'></CommentSection>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
