// Transforming the App.js component into a class-based one
import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    person: {
      fullName: "Anas Barrak",
      bio: "I am a web developer.",
      imgSrc: "https://th.bing.com/th/id/OIP.ehr3qDmlDSBpuGbDa3QJDAHaB2?pid=ImgDet&rs=1",
      profession: "Web Developer",
    },
    show: false,
    intervalId: null,
    lastMountedTime: null,
  };

  toggleShow = () => {
    this.setState((prevState) => ({
      show: !prevState.show,
    }));
  };

  componentDidMount() {
    // Starting the interval when the component is mounted
    const intervalId = setInterval(() => {
      this.setState({
        lastMountedTime: new Date(),
      });
    }, 1000);

    this.setState({ intervalId });
  }

  componentWillUnmount() {
    // Clearing the interval when the component is unmounted
    clearInterval(this.state.intervalId);
  }

  render() {
    const { person, show, lastMountedTime } = this.state;

    return (
      <div className="App">
        {/*Adding a button that toggles the show state, when the show state is true, the person's profile will appear.*/}
        <button onClick={this.toggleShow}>
          Toggle Profile {show ? "Off" : "On"}
        </button>

        {show && (
          <div>
            <h2>{person.fullName}</h2>
            <p>{person.bio}</p>
            <img src={person.imgSrc} alt="profile" />
            <p>Profession: {person.profession}</p>
          </div>
        )}
{/*Creating a field that shows the time interval since the last component is mounted using the component lifecycle*/}
        {lastMountedTime && (
          <p>Last mounted at: {lastMountedTime.toLocaleTimeString()}</p>
        )}
      </div>
    );
  }
}

export default App;

