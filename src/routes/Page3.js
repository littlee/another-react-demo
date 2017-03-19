module.exports = {
  path: 'page-3',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, require('../pages/Page3').default)
    })
  }
}