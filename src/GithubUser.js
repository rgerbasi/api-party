import React, { Component } from 'react'

class GithubUser extends Component {
    constructor(props){
        super(props)

        this.fetchUserData()
    }

    fetchUserDate = () =>{
        fetch(`https://api.github.com/users/${this.props.match.params.username}`)
            .then(response => response.json())
            .then(user => console.log(user))
            .catch(() => console.log("well fuck"))
    }

    render(){
        return (
            <div className="GithubUser">
                <h1>User: {this.props.match.params.username}</h1>
            </div>
        )
    }
}

export default GithubUser