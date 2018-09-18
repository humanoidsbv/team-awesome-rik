import React from 'react';
import { shallow } from 'enzyme';

import TimeEntryForm from '../TimeEntryForm';

test('is defaultstate is loaded in timeentryform', () => {
  const timeEntryForm = shallow(<TimeEntryForm />);

  expect(timeEntryForm.state()).toEqual({
    formData: {
      clientId: 'apple',
      activity: 'Design',
      date: '',
      from: '',
      to: ''
    },
    inputs: {
      dateIsValid: true,
      fromIsValid: true,
      toIsValid: true
    },
    isFormVisible: false,
    isFormLoading: false
  });
});
