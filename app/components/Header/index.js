import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import messages from './messages';
import H1 from './H1';
import H2 from './H2';

const Header = ({ path }) => {
  const { header, title } = messages;
  return (
    <div>
      <H1 path={path}>
        <FormattedMessage {...header} />
      </H1>
      <H2 path={path}>
        <FormattedMessage {...title} />
      </H2>
    </div>
  );
};

Header.propTypes = {
  path: PropTypes.string,
};

export default Header;
