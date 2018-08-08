import * as _ from './utils'
import activeStateMobile from './activeStateMobile'
import WPViewportFix from './windowsPhoneViewportFix'
import objectFitPolyfill from './objectFitPolyfill'
import formValidation from './formValidation'

const App = {
    activeStateMobile,
    WPViewportFix,
    objectFitPolyfill,
    formValidation,
    
    angular() {
        angular.module('portfolio-app', [])

        .controller('mainCtrl', ['$http', '$scope', ($http, $scope) => {
            $scope.isListActive = false
            $scope.showList = () => {
                $scope.isListActive = !$scope.isListActive
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
