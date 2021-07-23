
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./defi-ui-lib.cjs.production.min.js')
} else {
  module.exports = require('./defi-ui-lib.cjs.development.js')
}
