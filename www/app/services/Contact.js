'use strict';

angular.module('QC')
    .service('Contact', function Contact($resource, endpoint) {
        return $resource(endpoint + '/api/contact', null, { post: { method: 'POST' }});
    });
