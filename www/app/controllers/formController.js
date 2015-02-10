/**
 * Created by simba on 05/02/15.
 */
angular.module('formApp')
    .controller('formController', ['$scope', '$http', function ($scope, $http) {

        $scope.formData = {};

        //process postcode

        //function to process postcode search
        $scope.getPostcode = function () {
            $http.get("https://form.quiddiportal.com/v1.0/api/postcode?extended=1&postcode=" + $scope.formData.postcode)
                .success(function (data) {
                    $scope.Postcodes = data;
                })
                .error(function () {
                });
        };

        // function to process mobile no
        $scope.checkMobileno = function () {
            $http.get("https://form.quiddiportal.com/v1.0/api/mobile?data=0758689209&cc=GB")
                .success(function (data) {
                    $scope.mobilenoCheck = data;
                    //      console.log(data);
                })
                .error(function () {

                })
        };
        $scope.checkMobileno();

        // function to process email
        $scope.checkEmail = function () {
            $http.get("https://form.quiddiportal.com/v1.0/api/email?data=saminu@myself.com")
                .success(function (data) {
                    $scope.emailCheck = data;
                    //    console.log(data);
                })
                .error(function () {

                })
        };
        $scope.checkEmail();


        //validation
        $scope.validator = {
            start: null,
            amount: null,
            profile: null,
            status: null,
            //           identity:null,
            personal: null,
            finish: null,

            isValid: function () {
                return this.start;
            }
        };


        // Store all of our form data in this object

        $scope.amounts = [
            {option: '£25,000 - £29,999'},
            {option: '£30,000 - £39,999'},
            {option: '£40,000 - £49,999'},
            {option: '£50,000 - £59,999'},
            {option: '£60,000 - £69,999'},
            {option: '£70,000 - £79,999'},
            {option: '£80,000 - £89,999'},
            {option: '£90,000 - £99,999'},
            {option: '£100,000 - £199,999'},
            {option: '£110,000 - £119,999'},
            {option: '£120,000 - £129,999'},
            {option: '£130,000 - £139,999'},
            {option: '£140,000 - £149,999'},
            {option: '£150,000 - £159,999'},
            {option: '£160,000 - £169,999'},
            {option: '£170,000 - £179,999'},
            {option: '£180,000 - £189,999'},
            {option: '£190,000 - £199,999'},
            {option: '£200,000 - £209,999'},
            {option: '£210,000 - £219,999'},
            {option: '£220,000 - £229,999'},
            {option: '£230,000 - £239,999'},
            {option: '£240,000 - £249,999'},
            {option: '£250,000 - £259,999'},
            {option: '£260,000 - £269,999'},
            {option: '£270,000 - £279,999'},
            {option: '£280,000 - £289,999'},
            {option: '£290,000 - £299,999'},
            {option: '£300,000 - £309,999'},
            {option: '£310,000 - £319,999'},
            {option: '£320,000 - £329,999'},
            {option: '£330,000 - £339,999'},
            {option: '£340,000 - £349,999'},
            {option: '£350,000 - £359,999'},
            {option: '£360,000 - £369,999'},
            {option: '£370,000 - £379,999'},
            {option: '£380,000 - £389,999'},
            {option: '£390,000 - £399,999'},
            {option: '£400,000 - £409,999'},
            {option: '£400,000 - £409,999'},
            {option: '£410,000 - £419,999'},
            {option: '£420,000 - £429,999'},
            {option: '£430,000 - £439,999'},
            {option: '£440,000 - £449,999'},
            {option: '£450,000 - £459,999'},
            {option: '£460,000 - £469,999'},
            {option: '£470,000 - £479,999'},
            {option: '£480,000 - £489,999'},
            {option: '£490,000 - £499,999'},
            {option: '£500,000 - £519,999'},
            {option: '£520,000 - £539,999'},
            {option: '£540,000 - £559,999'},
            {option: '£560,000 - £579,999'},
            {option: '£580,000 - £599,999'},
            {option: '£600,000 - £619,999'},
            {option: '£620,000 - £639,999'},
            {option: '£640,000 - £659,999'},
            {option: '£660,000 - £679,999'},
            {option: '£680,000 - £699,999'},
            {option: '£700,000 - £719,999'},
            {option: '£720,000 - £739,999'},
            {option: '£740,000 - £759,999'},
            {option: '£760,000 - £779,999'},
            {option: '£780,000 - £799,999'},
            {option: '£800,000 - £819,999'},
            {option: '£820,000 - £839,999'},
            {option: '£840,000 - £859,999'},
            {option: '£860,000 - £879,999'},
            {option: '£880,000 - £899,999'},
            {option: '£900,000 - £919,999'},
            {option: '£920,000 - £939,999'},
            {option: '£940,000 - £959,999'},
            {option: '£960,000 - £979,999'},
            {option: '£980,000 - £999,999'},
            {option: 'Over £1,000,000'}
        ];

        $scope.pvalues = [
            {option: '£50,000 - £54,999'},
            {option: '£55,000 - £59,999'},
            {option: '£60,000 - £64,999'},
            {option: '£65,000 - £69,999'},
            {option: '£70,000 - £74,999'},
            {option: '£75,000 - £79,999'},
            {option: '£80,000 - £84,999'},
            {option: '£85,000 - £89,999'},
            {option: '£90,000 - £94,999'},
            {option: '£95,000 - £99,999'},
            {option: '£100,000 - £104,999'},
            {option: '£105,000 - £109,999'},
            {option: '£110,000 - £114,999'},
            {option: '£110,000 - £114,999'},
            {option: '£115,000 - £119,999'},
            {option: '£120,000 - £119,999'}
        ];

        $scope.mtypes = [
            {option: 'Remortgage'},
            {option: 'First Time Buyer'},
            {option: 'Buy to Let'},
            {option: 'Right to buy'},
            {option: 'New purchase'}
        ];

        $scope.estatuses = [
            {option: 'Employed'},
            {option: 'Self Employed'},
            {option: 'Retired'},
            {option: 'Unemployed'}
        ];

        $scope.bankrupts = [
            {option: 'No'},
            {option: 'Not in past 7 yrs'},
            {option: 'Less than a year'},
            {option: '1-2 yrs ago'},
            {option: '2-5 yrs ago'},
            {option: '5-7 yrs ago'}
        ];

        //year arrays
        var year = [],
            n = new Date().getFullYear(),
            lowEnd = 1900,
            highEnd = n - 18;

        for (var i = lowEnd; i <= highEnd; i++) {
            year.unshift(i);
        }

        $scope.days = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'];
        $scope.months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        $scope.years = year;


        // function to process the form
        $scope.processForm = function () {
//            alert('awesome!');
        };

    }]);