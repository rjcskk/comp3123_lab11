import React, { Component } from 'react';
import './PersonList.css'; // Import the CSS file for styling

class PersonList extends Component {
  state = {
    persons: []
  }

  componentDidMount() {
    fetch('https://randomuser.me/api/?results=10')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        const persons = data.results;
        this.setState({ persons });
      })
      .catch(error => console.error('Error fetching data:', error));
  }

  render() {
    const { persons } = this.state;

    return (
      <div className="person-list-container">
        <h2>User List</h2>
        <ul className="person-list">
          {persons.map((person, index) => (
            <li key={index} className="person-item">
              <img src={person.picture.large} alt="User" className="person-image" />
              <div className="person-details">
                <strong>Name:</strong> {person.name.first} {person.name.last} <br />
                <strong>Username:</strong> {person.login.username} <br />
                <strong>Gender:</strong> {person.gender} <br />
                <strong>Timezone:</strong> {person.location.timezone.description} <br />
                <strong>Address:</strong> {person.location.street.number} {person.location.street.name}, {person.location.city}, {person.location.country} <br />
                <strong>Email:</strong> {person.email} <br />
                <strong>Birth Date:</strong> {new Date(person.dob.date).toLocaleDateString()} (Age: {person.dob.age}) <br />
                <strong>Registered:</strong> {new Date(person.registered.date).toLocaleDateString()} <br />
                <strong>Phone:</strong> {person.phone} <br />
                <strong>Cell:</strong> {person.cell} <br />
              </div>
              <br />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default PersonList;
