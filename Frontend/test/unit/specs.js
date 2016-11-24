// this file is only being used by karma
require('phantomjs-polyfill');

requireAll(require.context("../../app/", false, /vendor.ts$/));
requireAll(require.context("../../app/", false, /app.module.ts$/));
requireAll(require.context("../../app/", true, /spec.ts$/));

function requireAll(r) {
    r.keys().forEach(r);
}