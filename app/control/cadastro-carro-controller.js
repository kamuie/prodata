angular.module('pdApp').controller('CadastroCarroController',CadastroCarroController)

function CadastroCarroController ($scope,MSGS){

$scope.entidade = {};
$scope.listaDeCarros = [];
    $scope.salvar = salvar;
    $scope.limpar = limpar;
    $scope.destruir = clear;
    function salvar(){
        if($scope.form.$valid) {
            $scope.listaDeCarros.push($scope.entidade);
            MSGS.suc('dibas','pq diabos aspas simples');
            limpar();
        }else{
            MSGS.er('naok');
            $scope.form.cor.$setTouched();
        }

    }

    function limpar(){

            $scope.entidade = {};
            $scope.form.$setUntouched();
    }
    function clear(){
        $scope.listaDeCarros = [];
    }
}