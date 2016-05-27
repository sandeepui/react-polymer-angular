'use strict';

/**
 * @ngdoc directive
 * @name angularApp.directive:commentList
 * @description
 * # commentList
 */
angular.module('commentList', ['comment'])
  .directive('commentList', function () {
    return {
      template: '<div class="commentList">' +
                  '<comment-model ng-repeat="comment in comments" author="{{comment.author}}">' +
                    '{{comment.msg}}&nbsp;' +
                    '&nbsp;<i style="font-size:12px" ng-if="commentTimeElapsed(comment.dateCreated)">' +
                        'posted: {{commentTimeElapsed(comment.dateCreated)}} ago' +
                    '</i>' +
                  '</comment-model>' +
                  '<span ng-if="comments.length < 1">No comments yet</span>' +
                '</div>',
      restrict: 'E',
      scope: {
        comments: '='
      },
      link: function postLink(scope) {
        scope.commentTimeElapsed = function (dateStr) {
          if (dateStr != null && !dateStr.isEmpty) {
            // convert string to Date
            var date = new Date(dateStr);

            // check the validity of the date
            // get seconds
            var seconds = Math.floor((new Date() - date) / 1000);

            // get the years
            var interval = Math.floor(seconds / (365 * 24 * 3600));

            if (interval >= 1) {
              return interval + ' year(s)';
            }

            // get the months
            interval = Math.floor(seconds / (30 * 24 * 3600));
            if (interval >= 1) {
              return interval + ' month(s)';
            }

            // get the days
            interval = Math.floor(seconds / (24 * 3600));
            if (interval >= 1) {
              return interval + ' day(s)';
            }

            // get the hours
            interval = Math.floor(seconds / (60 * 60));
            if (interval >= 1) {
              return interval + ' hour(s)';
            }

            // get the minutes
            interval = Math.floor(seconds / 60);
            if (interval >= 1) {
              return interval + ' minute(s)';
            }

            return '1 minute';
          }
        };
      }
    };
  });
