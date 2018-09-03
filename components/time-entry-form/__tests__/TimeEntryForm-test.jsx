import React from 'react';
import { shallow } from 'enzyme';

import TimeEntryForm from '../TimeEntryForm';

test('is defaultstate is loaded in timeentryform', () => {
  const timeEntryForm = shallow(<TimeEntryForm />);

  expect(timeEntryForm.state()).toEqual({
    formData: {
      employer: 'Port of Rotterdam',
      activity: 'Design',
      date: '',
      from: '',
      to: ''
    },
    inputs: {
      fromIsValid: false,
      toIsValid: false
    },
    isFormVisible: false,
    isFormLoading: false
  });
});
