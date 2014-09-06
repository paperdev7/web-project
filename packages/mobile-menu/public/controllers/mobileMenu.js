'use strict';

angular.module('mean.mobile-menu')

.controller('MobileMenuController', ['$scope', 'Global', 'MobileMenu',
  function($scope, Global, MobileMenu) {
    $scope.menus = [];
   // $scope.menus
   
   //메뉴 호
   // var menus = MobileMenu.get({act:'list'});
  // console.log(menus);
    var menus = function(){
    	MobileMenu.query(function(res) {
	        $scope.menus = res;
	      });
    };
    menus();
   
    //type 0 신규
    $scope.createMenu = function(){//신규추가
    	var pid = $scope.menus.length+1;
    	$scope.menus.push({pid:pid,name:'',title:'',url:'',disable:true,type:'0',icon:'',sort:'',menu:[{name:''}]});
    };
    //신규저장
    $scope.saveMenu   = function(menu){
      menu.menus = [{name : menu.name}];
    	var mobileMenu = new MobileMenu(menu);
    	mobileMenu.$save(function(res){
    		console.log(res);
    	});

    };
	//수정
	$scope.updateMenu = function(menu){
    menu.menus = [{name : menu.name}];
		menu.$update(function(res){
			//console.log(res);
		});
	};


  }
]);
