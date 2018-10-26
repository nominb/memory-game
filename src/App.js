import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Score from "./components/Score";
import friends from "./friends.json";
import "./App.css";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    score: 0,
    clickedFriendsId: [],
    goal: 6,
    message:""
  };

  componentDidMount (){

  }

  shuffleFriendCard = id => {
    const clickedFriendsId = this.state.clickedFriendsId;
    // this.setState({cards: clickedFriendsId});

    if(this.state.clickedFriendsId.includes(id)){
      this.setState({clickedFriendsId: [], score: 0, message: "You lost!"});
    
    }else{
      clickedFriendsId.push(id)

      if(clickedFriendsId.length === 6) {
        this.setState({score:6,status: "You Won!", clickedFriendsId: []});
        console.log("You Won!");
        return;
      }

      this.setState({friends, clickedFriendsId, score: clickedFriendsId.length, message: ""});
    
      for (let i = friends.length -1; i>0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [friends[i], friends[j]] = [friends[j], friends[i]];
       }
      }
     }
    

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <div className="Game">
        <header className="header">
        <strong className ="title"> The Clicky</strong>
        <h1 className = "intro">CLick the image only once!</h1>
        </header>
        <Score total={this.state.score}
        goal={6}
        message = {this.state.message}
        />
      <Wrapper>
        {this.state.friends.map(friend => (
          <FriendCard
            shuffleFriendCard={this.shuffleFriendCard}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
          />
        ))}
      </Wrapper>
       </div>
    );
        }
      }


export default App;
