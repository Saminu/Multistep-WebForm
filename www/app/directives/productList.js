
angular
    .module('QC')
    .directive('productList', function(Product) {
        return {
            restrict: 'AE',
            replace: 'true',
            templateUrl: '/templates/product-table.html',
            link: function ($scope, element, attributes) {

                $scope.getAprColspan = function(isMobile) {

                    var i, all = 0, mobile = 0;

                    for(i in $scope.feed.meta) {
                        if($scope.feed.meta.hasOwnProperty(i)) {
                            if($scope.feed.meta[i].isMobile !== undefined) {
                                all++;
                                if($scope.feed.meta[i].isMobile) {
                                    mobile++;
                                }
                            }
                        }
                    }

                    return isMobile ? mobile : all;
                };

                $scope.getImgRowspan = function (useImage) {

                    if(useImage) {

                        for(i in $scope.feed.meta) {
                            if($scope.feed.meta.hasOwnProperty(i)) {
                                if($scope.feed.meta[i].message !== undefined) {
                                    return 2;
                                }
                            }
                        }
                    }

                    return 1;
                };

                Product.get({ productType: attributes.productList }).$promise.then(function (feed) {
                    $scope.feed = feed;
           //        console.log(feed.data.productType);
                }, function (error) { console.log(error); });

            }
        };
    });