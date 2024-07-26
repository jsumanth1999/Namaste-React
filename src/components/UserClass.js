
import React from "react";

class UserClass extends React.Component {
    constructor(props){
        console.log("child constructor");
        super(props);

        this.state = {
            userInfo: {
                name: "Dummy",
                location: "Default",
                contact: "Address"
            }
        };
    }

    async componentDidMount(){
    const data = await fetch("https://api.github.com/users/srinivasmatru")
    const json = await data.json();
    console.log(json);
    this.setState({
        userInfo : json
    })

    }

    render(){
        console.log("Child render");
        const {login, avatar_url, url} = this.state.userInfo;
        return (
             <div className="user-card">
            <h1>User Details</h1>
            <h2>Name: {login}</h2>
            <img src={avatar_url} />
            <h2>Contact: {url}</h2>
        </div>
        )
    }
}

export default UserClass;

