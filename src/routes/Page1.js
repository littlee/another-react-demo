module.exports = {
  path: 'page-1',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, require('../pages/Page1').default)
    })
  }
}