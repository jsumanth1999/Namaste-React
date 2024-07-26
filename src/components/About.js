import User from "./User";
import UserClass from "./UserClass";
import React from "react";


// const About = () => {
//     return (
//         <div className="about-us">
//         <h1>About Us Page</h1>
//         <h2>This is About page using roueter</h2>
//         <UserClass name={"Srinivas Class"} location={"Hyderabad Class"} contact={"srinivas123@gmail.com"}/>
//         </div>
//     )
// };

class About extends React.Component {
  constructor() {
    super();

    console.log("Parent constructor");
  }

  componentDidMount() {}

  render() {
    return (
      <div className="about-us">
        <h1>About Us Page</h1>
        <h2>This is About page using roueter</h2>
        {/* <userContext.Consumer>
          {({ loggedInValue }) => <h1>{loggedInValue}</h1>}
        </userContext.Consumer> */}
        <UserClass
          name={"Srinivas Class"}
          location={"Hyderabad Class"}
          contact={"srinivas123@gmail.com"}
        />
      </div>
    );
  }
}

export default About;
