const files =
  '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$'
const styles = '\\.(css|less|styl|scss)$'
const mock = '<rootDir>/config/mock.js'

module.exports = {
  collectCoverageFrom: ['src/**/*.js'],
  moduleNameMapper: {
    [files]: mock,
    [styles]: mock,
  },
  rootDir: '../',
}
