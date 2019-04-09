angular.module('treck', ['ngRoute']).config(function ($routeProvider) {
  $routeProvider
    .when('/first', {
      templateUrl: 'first.html',
      controller: 'AnimFirst'

    })
    .when('/second', {
      templateUrl: 'second.html',
      controller: 'Anim'
    })
    .when('/thid', {
      templateUrl: 'thid.html',
      controller: 'QuestionContr'
    })
    .when('/form', {
      templateUrl: 'form.html',
      controller: 'Form'
    })
    .when('/checkout', {
      templateUrl: 'checkout.html',
      controller: 'QuestionController'
    })
    .otherwise({
      redirectTo: '/first',

    });

})
  .controller('QuestionController', function ($scope, $location) {
    var prog = document.getElementById('progres');
    prog.style.width = 40 + '%';
    document.getElementById('pers').innerHTML = 40 + '%';
    prog.setAttribute('aria-valuenow', String(40))
    var input = document.getElementsByTagName('input')
    for (let i = 0; i < input.length; i++) {
      input[i].onchange = function (event) {
        var chk = event.target

        if (chk.tagName === 'INPUT' && chk.type === 'checkbox') {
          var col = 0;
          for (let iz = 0; iz < input.length; iz++) {
            if (input[iz].checked == true) {
              col++
            }
          }
            if (col > 0) {
            document.getElementById('next').setAttribute(
              "style", "");
            col = 0;

          }
          else {
            document.getElementById('next').setAttribute(
              "style", "pointer-events: none;");
            col = 0
          }
        }
      }
    }
  })

  .controller('Anim', function ($scope, $location) {
    var prog = document.getElementById('progres');
    prog.style.width = 20 + '%';
    document.getElementById('pers').innerHTML = 20 + '%';
    prog.setAttribute('aria-valuenow', String(20))
    $scope.animate = function (a, b) {
      var prog = document.getElementById('progres');
      var startpos = a;
      var lastpos = b;
      //alert(x.getAttribute('aria-valuenow'))
      var interval = setInterval(function () {

        if (startpos < lastpos) {
          startpos++
          prog.style.width = startpos + '%';
          document.getElementById('pers').innerHTML = startpos + '%';
          prog.setAttribute('aria-valuenow', String(startpos))
        }
        else {
          clearInterval(interval)
        }
      }, 10)
    }
  })
  .controller('Form', function ($scope, $location) {
    $scope.animate = function (a, b) {
      var prog = document.getElementById('progres');
      var startpos = a;
      var lastpos = b;
      //alert(x.getAttribute('aria-valuenow'))
      var interval = setInterval(function () {

        if (startpos < lastpos) {
          startpos++
          prog.style.width = startpos + '%';
          document.getElementById('pers').innerHTML = startpos + '%';
          prog.setAttribute('aria-valuenow', String(startpos))
        }
        else {
          clearInterval(interval)
        }
      }, 10)
    }
    $scope.animate(60, 100)
  })
  .controller('QuestionContr', function ($scope, $location) {
    $scope.animate = function (a, b) {
      var prog = document.getElementById('progres');
      var startpos = a;
      var lastpos = b;
      //alert(x.getAttribute('aria-valuenow'))
      var interval = setInterval(function () {

        if (startpos < lastpos) {
          startpos++
          prog.style.width = startpos + '%';
          document.getElementById('pers').innerHTML = startpos + '%';
          prog.setAttribute('aria-valuenow', String(startpos))
        }
        else {
          clearInterval(interval)
        }
      }, 10)
    }
    $scope.animate(40, 60)
    var input = document.getElementsByTagName('input')
    for (let i = 0; i < input.length; i++) {
      input[i].onchange = function () {
        var chk = event.target

        if (chk.tagName === 'INPUT' && chk.type === 'checkbox') {
          var col = 0;
          for (let iz = 0; iz < input.length; iz++) {
            if (input[iz].checked == true) {
              col++
            }
          }
          if (col > 0) {
            document.getElementById('next').setAttribute(
              "style", "");
            col = 0;

          }
          else {
            document.getElementById('next').setAttribute(
              "style", "pointer-events: none;");
            col = 0
          }
        }
      }
    }
  })
  .controller('AnimFirst', function ($scope, $location) {
    var prog = document.getElementById('progres');
    prog.style.width = 0 + '%';
    document.getElementById('pers').innerHTML = 0 + '%';
    prog.setAttribute('aria-valuenow', String(0))
    $scope.animate = function (a, b) {
      var prog = document.getElementById('progres');
      var startpos = a;
      var lastpos = b;
      //alert(x.getAttribute('aria-valuenow'))
      var interval = setInterval(function () {

        if (startpos < lastpos) {
          startpos++
          prog.style.width = startpos + '%';
          document.getElementById('pers').innerHTML = startpos + '%';
          prog.setAttribute('aria-valuenow', String(startpos))
        }
        else {
          clearInterval(interval)
        }
      }, 10)
    }

  })