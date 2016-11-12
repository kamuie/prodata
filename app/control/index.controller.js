
angular.module('pdApp').controller('IndexController',IndexController)

function IndexController($scope){

    $scope.nome = 'jao';
    $scope.ola = ola;

    function ola (){
        alert('ola')
    }
}