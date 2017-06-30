angular.module('starter')
.controller('ListagemController', function($scope){

	$scope.listaGuia = [{"titulo" : "Aquecimento Global", "info" : "Alexandre Araújo Costa - 8723-2712", "pat" : "Doutor", "mail" : "alexandre.costa@uece.br"},
						{"titulo" : "Antropologia", "info" : "Jouberth Max Maranhão Piorsky Aires", "pat" : "Doutor", "mail" : "max.maranhao@uece.br"},
						{"titulo" : "Analise de Sistemas", "info" : "Paulo Marcelo Farias Moreira - 9195-7328", "pat" : "Especialista", "mail" : "pmfarias@uece.br"},
						{"titulo" : "Aquicultura e Carcinicultura", "info" : "Célia Maria de Souza Sampaio (Laboratório) 9992-6010", "info2" : "Ricardo Rodrigues da Silva -  9944-2117", "pat" : "Doutora", "pat2" : "Mestre em Ciências Veterinárias",  "mail" : "celia.sampaio@uece.br", "mail2" : "ricardo.rodrigues@uece.br"},
						{"titulo" : "Administração", "info" : "Francisco Roberto Pinto - 9981-4606", "info2" : "Vladimir Spinelli Chagas -  9985-8058", "pat" : "Doutor em Gestão de Empresas", "pat2" : "Doutor em Administração", "mail" : "roberto.pinto@uece.br", "mail2" : "vladimir.spinelli@uece.br"}];

});


angular.module('starter')
.controller('ArtigoEscolhidoController', function($stateParams, $scope){

	$scope.artigoEscolhido = angular.fromJson($stateParams.artigo);



});