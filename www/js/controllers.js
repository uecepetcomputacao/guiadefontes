angular.module('starter')
.controller('ListagemController', function($scope){

	$scope.listaGuia = ['Aquecimento Global','Antropologia','Análise de Sistemas','Aquicultura e Carcinicultura','Administração'];

});

angular.module('starter')
.controller('ArtigoEscolhidoController', function($stateParams, $scope){

	$scope.artigoEscolhido = $stateParams.artigo;



});