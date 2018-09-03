import React from 'react';

class TeamMemberForm extends React.Component {
  static defaultState = {
    formData: {
      profession: 'Developer',
      startDate: '2018-08-06T07:00:00.000Z',
      firstName: 'Rik',
      lastName: 'Frieling',
      email: 'rikfrieling@gmail.com',
      bio: 'Houdt van lange strandwandelingen en leuke dingen doen met vrienden',
      adress: 'Hamburgerstraat 14bis',
      zipCode: '3512 NR',
      city: 'Utrecht',
      socialProfiles: 'links',
      picture: '/static/rik.jpg'
    },
    isFormVisible: false
  }

  state={ ...this.defaultState };

  render() {
    const { isFormVisible } = this.state;
    return (
      <React.Fragment>
        <button
          className={`team-member-button
                     team-member-button${isFormVisible ? '--hidden' : '--visible'}`
                     }
          type="button"
          onClick={this.handleClick}
        >
          New Humanoid
        </button>
      </React.Fragment>
    );
  }
}

export default TeamMemberForm;
