import React from 'react';

const recompose = (obj, string) => {
  const parts = string.split('.');
  const newObj = obj[parts[0]];

  if (parts[1]) {
    parts.splice(0, 1);
    const newString = parts.join('.');
    return recompose(newObj, newString);
  }

  return newObj;
};

const t = (locale, file) => {
  const cache = {};
  return key => {
    const id = `${locale}/${file}.json`;

    if (typeof cache[id] !== 'object') {
      cache[id] = require('data/locales/' + locale + '/' + file + '.json');
    }

    return recompose(cache[id], key);
  };
};

export const withTranslation = (Component, file) => {
  return class withTranslation extends React.Component {
    render () {
      return <Component {...this.props} t={t(this.props.locale, file)} />;
    }
  };
};
