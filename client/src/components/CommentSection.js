import React from "react";
import axios from "axios";
import ShowComment from "./ShowComment";

class CommentSection extends React.Component {

  state = {
    contacts: []
  };

  componentDidMount() {
    axios
      .get("/contacts")
      .then(res => {
        this.setState({ contacts: res.data }, () => 
        console.log(res.data),
        console.log('sort newest at top')
        );
      })

      .catch(err => {
        console.log(err, 'failed to get contacts');
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
