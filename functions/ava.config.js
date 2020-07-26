export default ({projectDir}) => ({
  babel: {
    extensions: ['js', 'jsx']
  },
  files: [
    'test/*.spec.js',
  ],
  cache: true,
  failWithoutAssertions: false,
  verbose: true
});