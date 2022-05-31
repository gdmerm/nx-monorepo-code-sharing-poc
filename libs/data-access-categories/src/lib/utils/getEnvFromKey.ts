import Config from 'react-native-config';

export default (key: string) => {
  const prop = process.env[key] || Config[key];
  if (typeof prop === 'undefined' || prop === null) {
    return ''
  }
  return prop;
}
