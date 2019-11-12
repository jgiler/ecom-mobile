import React from "react";
import axios from "axios";
import ShowComment from "./ShowComment";

class CommentSection extends React.Component {

  state = {
    contacts: []
  };

  componentDidMount() {
    axios
      .get("/api/contacts")
      .then(res => {
        this.setState({ contacts: res.data.contacts }, () => 
        console.log(res.data.contacts)
        );
      })
  
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (

      <div className="contacts">
        {this.state.contacts &&
          this.state.contacts.map((contacts, index) => (
            <ShowComment
            key={index}
            f_name={contacts.f_name} 
            comments={contacts.comments} 
            />
          ))}
      </div>
    );
  };
}

export default CommentSection;
