var Calculator = require('./calculator.po.solution.js');

var calculatorObjects = new Calculator();

describe('Protractor Exercise 1', function() {

    beforeAll(function() {
        calculatorObjects.getPage();
    });

    it('should have a title', function() {
        //check page title
        expect(browser.getTitle())
            .toEqual('Super Calculator');
    });

    describe('Test slow calculator', function() {

        it('should add one and two', function() {
            calculatorObjects.firstNumber.sendKeys(1);
            calculatorObjects.secondNumber.sendKeys(2);

            calculatorObjects.goButton.click();

            expect(calculatorObjects.latestResult.getText()).
            toEqual('3'); //TODO: This is wrong!
        });
        describe('Test more complex in depth', function () {

            beforeEach(function(){
               calculatorObjects.getPage();
            });

            it('should add one and two', function() {
                calculatorObjects.firstNumber.sendKeys(1);
                calculatorObjects.secondNumber.sendKeys(2);

                calculatorObjects.goButton.click();

                expect(calculatorObjects.latestResult.getText()).toEqual('3');
            });

            it('should add four and six', function() {

                calculatorObjects.firstNumber.sendKeys(5);
                calculatorObjects.secondNumber.sendKeys(5);

                calculatorObjects.goButton.click();
                //TODO: Fill this in.
                expect(calculatorObjects.latestResult.getText()).toEqual('10');
            });


            it('should have a history', function() {
                calculatorObjects.add(1, 2);
                calculatorObjects.add(3, 4);

                expect(calculatorObjects.history.count()).toEqual(2);

                add(5, 6);

                expect(calculatorObjects.history.count()).toEqual(3); //TODO: This is wrong!
            });

            it('should have a history', function() {
                calculatorObjects.add(1, 2);
                calculatorObjects.add(3, 4);

                expect(calculatorObjects.history.last().getText()).toContain('1 + 2');
                expect(calculatorObjects.history.first().getText()).toContain('3 + 4'); //TODO: This is wrong!
            });

            it('should multiply five and five', function() {
                //TODO: Fill this in.
                expect(calculatorObjects.allOperators.count()).toEqual(5);
                calculatorObjects.allOperators.get(2).click();

                calculatorObjects.firstNumber.sendKeys(5);
                calculatorObjects.secondNumber.sendKeys(5);
                calculatorObjects.goButton.click();

                expect(calculatorObjects.latestResult.getText()).toEqual('25');
                expect(calculatorObjects.history.first().getText()).toContain('5 * 5');
            });
        });

    });

});
