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
        angular.module('portfolio-app', ['slick'])

        .controller('mainCtrl', ['$http', '$scope', ($http, $scope) => {
            $scope.isListActive = false
            $scope.isPhotoVisible = false
            $scope.projectList = projectList
            $scope.head = 'head1'
            
            $scope.headTrigger = () => {
                $scope.isPhotoVisible = !$scope.isPhotoVisible
            }

            $scope.showList = () => {
                $scope.isListActive = !$scope.isListActive
            }

            $scope.showDetail = (id) => {
                $scope.activeProject = $scope.projectList
                    .filter(curr => {
                        if ( curr.id === id )
                            return curr
                    })
                    .reduce(curr => curr)
                console.log($scope.activeProject)
            }
            

        }])

        .controller('listCtrl', ['$http', '$scope', ($http, $scope) => {
            $scope.name = 'list'
        }])

        .controller('detailCtrl', ['$http', '$scope', ($http, $scope) => {
            $scope.name = 'detail'
        }])
    }
}

for (let fn in App) {
    App[fn]()
}

export default App
