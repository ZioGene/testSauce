describe('Protractor Exercise 1.0', function() {

    beforeAll(function() {
        browser.get('http://pfy.cloud.reply.eu/protractor/ex1/');
    });

    it('should have a title', function() {
        //check page title
        expect(browser.getTitle())
            .toEqual('Super Calculator');
    });

});
