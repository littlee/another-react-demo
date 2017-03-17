module.exports = {
  path: 'page-2',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, require('../pages/Page2').default)
    })
  }
}