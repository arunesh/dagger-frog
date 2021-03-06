// This is a module for cloud persistance in mongolab - https://mongolab.com
angular.module('mongolab', ['ngResource']).
    factory('Project', function($resource) {
//        var Project = $resource('https://api.mongolab.com/api/1/databases' +
//            '/dagger/collections/projects/:id',
//            { apiKey: '3i_zlJimJhO-i3RnZD8EieMfvLNr4R4c' }, {
//                update: { method: 'PUT' }
//            }
//        );
        var Project = $resource('http://127.0.0.1\\:8081/task/:id');

        Project.prototype.update = function(cb) {
            return Project.update({id: this._id.$oid},
                angular.extend({}, this, {_id:undefined}), cb);
        };

        Project.prototype.destroy = function(cb) {
            return Project.remove({id: this._id.$oid}, cb);
        };

        return Project;
    });
