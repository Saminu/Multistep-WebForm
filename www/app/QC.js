angular
    .module('QC', [ 'ngResource','angulartics','angulartics.google.analytics'])
//    .constant('endpoint', 'http://192.168.192.102:8090/project');

    .constant('endpoint', 'https://omgapi.quiddiportal.com')

    .config(['$httpProvider', function ($httpProvider) {
        $httpProvider.defaults.withCredentials = true;
    }])

    .controller('ContactController', ['$scope', '$http', 'Contact', function ($scope, $http, Contact) {

        $scope.formData = {};
        $scope.submitted = false;
        $scope.resultMessage = {};
        $scope.result = 'hidden';
        $scope.submitButtonDisabled = false;
        $scope.querys = ['Advertising Enquiry','General Info','Complaint','Unsubscribe From Email','Technical Website Fault'];
        $scope.formData.query = $scope.querys[0];

        // on load, set cookie
        Contact.get().$promise.then(function (data) {
            $http.defaults.headers.post['X-CSRFToken'] = data.token;
        });
        // on submit, send details to backend
        $scope.sendDetails = function () {
            Contact.post($scope.formData).$promise.then(function() {
                $scope.submitted = true;
            });
        };

      // on submit validate and send data to swiftMailer
            $scope.submit = function(contactform) {
                $scope.submitted = true;
                $scope.submitButtonDisabled = true;
                if (contactform.$valid) {
                    $http({
                    method  : 'POST',
                    url     : 'blog/contact-send.php',
                    data    : $.param($scope.formData),  //param method from jQuery
                    headers : { 'Content-Type': 'application/x-www-form-urlencoded' }  //set the headers so angular passing info as form data (not request payload)
                }).success(function(data){
                    console.log(data);
                    if (data.success) { //success comes from the return json object
                        $scope.submitButtonDisabled = true;
                        $scope.resultMessage = data.message;
                        $scope.result='bg-success';
                    } else {
                        $scope.submitButtonDisabled = false;
                        $scope.resultMessage = data.message;
                        $scope.result='bg-danger';
                    }
                });
            } else {
                $scope.submitButtonDisabled = false;
                $scope.resultMessage = 'Please fill out all the fields correctly.';
                $scope.result='bg-danger';
            }
        //        console.log($scope.formData);
        }

    }]);
