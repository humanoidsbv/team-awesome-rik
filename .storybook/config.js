import { configure } from '@storybook/react';

function loadStories() {
  require('../stories/SelectBox.js');
  require('../stories/SearchField.js');
}

configure(loadStories, module);
