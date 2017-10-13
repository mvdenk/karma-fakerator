var path = require('path');

var pattern = function (file) {
    return { pattern: file, included: true, served: true, watched: false };
};

var framework = function (files) {
    files.unshift(pattern(require.resolve('fakerator')));
};

framework.$inject = ['config.files'];
module.exports = { 'framework:fakerator': ['factory', framework] };