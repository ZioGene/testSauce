describe('Protractor Exercise 1', function() {

    beforeAll(function() {
        browser.get('http://pfy.cloud.reply.eu/protractor/ex1/');
    });

    it('should have a title', function() {
        //check page title
        expect(browser.getTitle())
            .toEqual('Super Calculator');
    });

    describe('Test slow calculator', function() {

        it('should add one and two', function() {
            element(by.model('vm.first')).sendKeys(1);
            element(by.model('vm.second')).sendKeys(2);

            element(by.id('gobutton')).click();

            expect(element(by.binding('vm.latest')).getText()).
            toEqual('3'); //TODO: This is wrong!
        });
        describe('Test more complex in depth', function () {

            beforeEach(function(){
               browser.get(browser.params.exercise1.url);
            });

            var firstNumber = element(by.model('vm.first'));
            var secondNumber = element(by.model('vm.second'));
            var goButton = element(by.id('gobutton'));
            var latestResult = element(by.binding('vm.latest'));

            it('should add one and two', function() {
                firstNumber.sendKeys(1);
                secondNumber.sendKeys(2);

                goButton.click();

                expect(latestResult.getText()).toEqual('3');
            });

            it('should add four and six', function() {

                firstNumber.sendKeys(5);
                secondNumber.sendKeys(5);

                goButton.click();
                //TODO: Fill this in.
                expect(latestResult.getText()).toEqual('10');
            });

            var history = element.all(by
                .repeater('result in vm.memory'));

            function add(a, b) {
                firstNumber.sendKeys(a);
                secondNumber.sendKeys(b);
                goButton.click();
            }

            it('should have a history', function() {
                add(1, 2);
                add(3, 4);

                expect(history.count()).toEqual(2);

                add(5, 6);

                expect(history.count()).toEqual(3); //TODO: This is wrong!
            });

            it('should have a history', function() {
                add(1, 2);
                add(3, 4);

                expect(history.last().getText()).toContain('1 + 2');
                expect(history.first().getText()).toContain('3 + 4'); //TODO: This is wrong!
            });

            var allOperators = element.all(by.options('value for (key, value) in vm.operators'));

            it('should multiply five and five', function() {
                //TODO: Fill this in.
                expect(allOperators.count()).toEqual(5);
                allOperators.get(2).click();

                firstNumber.sendKeys(5);
                secondNumber.sendKeys(5);
                goButton.click();

                expect(latestResult.getText()).toEqual('25');
                expect(history.first().getText()).toContain('5 * 5');
            });
        });

    });

});
