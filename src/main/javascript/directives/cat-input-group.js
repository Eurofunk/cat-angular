'use strict';

angular.module('cat.directives.inputGroup', [])

/**
 * @ngdoc directive
 * @name cat.directives.inputs:catInputGroup
 */
    .directive('catInputGroup', function CatInputGroupDirective() {
        return {
            restrict: 'A',
            transclude: true,
            scope: {
                label: '@',
                name: '@',
                labelI18n: '@'
            },
            link: function CatInputGroupLink(scope, element) {
                element.addClass('form-group');
            },
            templateUrl: 'template/cat-input.tpl.html'
        };
    });