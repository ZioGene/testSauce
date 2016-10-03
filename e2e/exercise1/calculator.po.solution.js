function Calculator() {

    //model var
    this.firstNumber = element(by.model('vm.first'));
    this.secondNumber = element(by.model('vm.second'));
    //action/view var
    this.goButton = element(by.id('gobutton'));
    this.latestResult = element(by.binding('vm.latest'));
    this.history = element.all(by.repeater('result in vm.memory'));
    this.allOperators = element.all(by.options('value for (key, value) in vm.operators'));

    //help utility functions
    /**
     * Should add a and b input param and do the operation
     * @param {int} a first operand
     * @param {int} b second operand
     */
    this.add = function (a, b) {
        this.firstNumber.sendKeys(a);
        this.secondNumber.sendKeys(b);
        this.goButton.click();
    };

    /**
     * Get the global parma for the exercise 1 and call browser.get with the passed param or the default value
     */
    this.getPage = function () {
        if (browser.params.exercise1.url) {
            browser.get(browser.params.exercise1.url);
        } else {
            browser.get('http://pfy.cloud.reply.eu/protractor/ex1/');
        }
    };

}

module.exports = Calculator;
