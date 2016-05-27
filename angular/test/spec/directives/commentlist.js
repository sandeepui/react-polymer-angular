'use strict';

describe('Directive: comment', function () {

  // load the directive's module
  beforeEach(module('commentList'));

  var element, scope, compile;

  beforeEach(inject(function ($rootScope, $compile) {
    scope = $rootScope.$new();
    compile = $compile;
  }));

  it('should render the comments', function (){
    var comments = [
      {'author': 'Santiago', 'msg': 'Msg 1', id: 1},
      {'author': 'Pablo', 'msg': 'Msg 2', id: 2}
    ];
    scope.comments = comments;
    element = angular.element('<comment-list comments="comments"></comment-list>');
    element = compile(element)(scope);
    scope.$digest();
    expect(element.find('comment-model').length).toBe(2);
  });

  it('should not render any comment if the data is empty', function (){
    var comments = [];
    scope.comments = comments;
    element = angular.element('<comment-list comments="comments"></comment-list>');
    element = compile(element)(scope);
    scope.$digest();
    expect(element.find('comment-model').length).toBe(0);
  });

  it('should render  - No Comments yet - msg if the data is empty', function (){
    var comments = [];
    scope.comments = comments;
    element = angular.element('<comment-list comments="comments"></comment-list>');
    element = compile(element)(scope);
    scope.$digest();
    expect(element.find('span').text()).toBe('No comments yet');
  });

  it('should test for comment-time elapsed function for 1 minute ago',function(){

    var comments = [
      {'author':'test3','msg':'test3','dateCreated':new Date(),'id':'8ff613370d2af8c2'}
    ];
    scope.comments = comments;
    element = angular.element('<comment-list comments="comments"></comment-list>');
    element = compile(element)(scope);
    scope.$digest();
    expect(element.find('i').text()).toBe('posted: 1 minute ago');
  });

  it('should test for comment-time elapsed function for 1 minute(s) ago',function(){
    var minutes = new Date();
    minutes.setMinutes(minutes.getMinutes() - 1);

    var comments = [
      {'author':'test3','msg':'test3','dateCreated':minutes,'id':'8ff613370d2af8c2'}
    ];
    scope.comments = comments;
    element = angular.element('<comment-list comments="comments"></comment-list>');
    element = compile(element)(scope);
    scope.$digest();
    expect(element.find('i').text()).toBe('posted: 1 minute(s) ago');
  });

  it('should test for comment-time elapsed function for 1 hour(s) ago',function(){
    var hours = new Date();
    hours.setHours(hours.getHours() - 1);

    var comments = [
      {'author':'test3','msg':'test3','dateCreated':hours,'id':'8ff613370d2af8c2'}
    ];
    scope.comments = comments;
    element = angular.element('<comment-list comments="comments"></comment-list>');
    element = compile(element)(scope);
    scope.$digest();
    expect(element.find('i').text()).toBe('posted: 1 hour(s) ago');
  });

  it('should test for comment-time elapsed function for 1 day(s) ago',function(){
    var day = new Date();
    day.setDate(day.getDate() - 1);

    var comments = [
      {'author':'test3','msg':'test3','dateCreated':day,'id':'8ff613370d2af8c2'}
    ];
    scope.comments = comments;
    element = angular.element('<comment-list comments="comments"></comment-list>');
    element = compile(element)(scope);
    scope.$digest();
    expect(element.find('i').text()).toBe('posted: 1 day(s) ago');
  });

  it('should test for comment-time elapsed function for 1 month(s) ago',function(){
    var month = new Date();
    month.setMonth(month.getMonth() - 1);

    var comments = [
      {'author':'test3','msg':'test3','dateCreated':month,'id':'8ff613370d2af8c2'}
    ];
    scope.comments = comments;
    element = angular.element('<comment-list comments="comments"></comment-list>');
    element = compile(element)(scope);
    scope.$digest();
    expect(element.find('i').text()).toBe('posted: 1 month(s) ago');
  });

  it('should test for comment-time elapsed function for 1 year(s) ago',function(){
    var year = new Date();
    year.setYear(year.getFullYear() - 1);

    var comments = [
      {'author':'test3','msg':'test3','dateCreated':year,'id':'8ff613370d2af8c2'}
    ];
    scope.comments = comments;
    element = angular.element('<comment-list comments="comments"></comment-list>');
    element = compile(element)(scope);
    scope.$digest();
    expect(element.find('i').text()).toBe('posted: 1 year(s) ago');
  });
});
