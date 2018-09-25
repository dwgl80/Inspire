import React from 'react';
import { FormattedMessage } from 'react-intl';

import messages from './messages.js';
import H1 from './H1.js';
import H2 from './H2.js';

const Header = () => {
  const { header, title } = messages;
  return (
    <div>
      <H1>
        <FormattedMessage {...header} />
      </H1>
      <H2>
        <FormattedMessage {...title} />
      </H2>
    </div>
  );
};

export default Header;
