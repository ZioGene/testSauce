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
            toEqual('5'); //TODO: This is wrong!
        });

        describe('Test more complex in depth', function () {

            beforeEach(function () {
                //TODO: use browser.get use protractor global param url as http://pfy.cloud.reply.eu/protractor/ex1/
            });

            var firstNumber = element(by.model('vm.first'));
            var secondNumber = element(by.model('vm.second'));
            var goButton = ; //TODO: Complete me!
            var latestResult = ; //TODO: Complete me!

            it('should add one and two', function() {
                firstNumber.sendKeys(1);
                secondNumber.sendKeys(2);

                goButton.click();

                expect(latestResult.getText()).toEqual('3');
            });

            it('should add four and six', function() {
                //TODO: Fill this in.
                expect(latestResult.getText()).toEqual('10');
            });

            var history = element.all(by
                .repeater('result in vm.bar')); //TODO: This is wrong!

            function add(a, b) {
                //TODO: Complete me!
            }

            it('should have a history', function() {
                add(1, 2);
                add(3, 4);

                expect(history.count()).toEqual(2);

                add(5, 6);

                expect(history.count()).toEqual(0); //TODO: This is wrong!
            });

            it('should have a history', function() {
                add(1, 2);
                add(3, 4);

                expect(history.last().getText()).toContain('1 + 2');
                expect(history.first().getText()).toContain('foo'); //TODO: This is wrong!
            });

            var allOperators = element.all(by.options('value for (key, value) in vm.operators'));

            it('should multiply five and five', function() {
                //TODO: Fill this in.

                expect(latestResult.getText()).toEqual('25');
                expect(history.first().getText()).toContain('5 * 5');
            });
        });

    });

});
