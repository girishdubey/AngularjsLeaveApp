app.service('testService', function () {
    var currData = 0;
    this.setCurrData = function (d) {
        if (d > 0) {
            currData = d;
        }
    };
    this.getCurrData = function () {
        return currData;
    };
});