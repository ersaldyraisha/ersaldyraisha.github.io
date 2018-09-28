import * as _ from './utils'
import activeStateMobile from './activeStateMobile'
import WPViewportFix from './windowsPhoneViewportFix'
import objectFitPolyfill from './objectFitPolyfill'
import formValidation from './formValidation'
import projectList from './list'

const App = {
    activeStateMobile,
    WPViewportFix,
    objectFitPolyfill,
    formValidation,
    
    angular() {
        angular.module('portfolio-app', ['slick', 'ngRoute', 'ngAnimate'])

        .controller('mainCtrl', ['$scope', ($scope) => {
            $scope.name = 'main'
            $scope.isDetailActive = false
            $scope.isPhotoVisible = false
            $scope.projectList = projectList
            $scope.activeProject = null

            $scope.headTrigger = () => {
                $scope.isPhotoVisible = !$scope.isPhotoVisible
            }

            $scope.scrollDown = () => {
                window.scrollTo({
                    top: 1000,
                    behavior: 'smooth',
                })
            }

            $scope.scrollUp = () => {
                window.scrollTo({
                    top: -1000,
                    behavior: 'smooth',
                });
            }

            /* $scope.detailTrigger = (id) => {
                if ($scope.isDetailActive === false) {
                    $scope.activeProject = $scope.projectList
                        .filter(curr => {
                            if (curr.id === id)
                                return curr
                        })
                        .reduce(curr => curr)
                    $scope.isDetailActive = !$scope.isDetailActive
                } else {
                    $scope.isDetailActive = !$scope.isDetailActive
                }
            } */
        }])

        .controller('projectCtrl', ['$scope','$routeParams', ($scope, $routeParams) => {
            $scope.projectId = $routeParams.projectId
            $scope.activeImage = null
            $scope.isImageActive = false
            $scope.projectContent = projectList
                .filter(curr => {
                    if (curr.id === $scope.projectId)
                        return curr
                })
                .reduce(curr => curr)
            $scope.back = () => {
                history.back()
                return false
            }
            $scope.showImage = (src) => {
                $scope.activeImage = src
                $scope.isImageActive = !$scope.isImageActive
                //console.log(index)
            }
        }])

        .config(['$routeProvider', '$locationProvider', ($routeProvider, $locationProvider) => {
            $routeProvider
                .when('/', {
                    templateUrl: 'home.html',
                    controller: 'mainCtrl'
                })
                .when('/project/:projectId', {
                    templateUrl: 'project.html',
                    controller: 'projectCtrl'
                })
                .otherwise({
                    redirectTo: '/'
                })
        }])

        

    }
}

for (let fn in App) {
    App[fn]()
}

export default App
