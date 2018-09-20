import React from 'react';

import { storiesOf } from '@storybook/react';
import PageHeader from '../shared/components/page-header/PageHeader';


storiesOf('PageHeader', module)
  .add('PageHeader', () => (
    <PageHeader
      text="Timesheets"
      summation={1}
      summationText="Entry"
      summationTextPlural="Entries"
      selectBoxes={[
        {
          name: 'timeEntryFilter',
          onChange: () => { console.log('change'); },
          options: ['All Clients', 'Humanoids', 'Reinforcements'],
          optionValues: ['', 'huma', 'rein'],
          value: ''
        }]}
      displaySearchField
    />
  ));
