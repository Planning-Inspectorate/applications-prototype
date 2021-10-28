module.exports = function (router) {

    var version = "0-1-0"; /* CHANGE ME TO THE VERSION YOURE WORKING ON */
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    router.post('/' + version + '/postcode', function (req, res) {
        res.redirect(301, '/' + version + '/out-of-boundary')
    })
    router.post('/' + version + '/out-of-boundary', function (req, res) {
        res.redirect(301, '/' + version + '/overview')
    })

  }
