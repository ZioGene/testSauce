var TodoList = require('./todo.po.solution.js');

var todoListObjects = new TodoList();

describe('Protractor Exercise 2', function() {

    beforeAll(function() {
        todoListObjects.getPage();
    });

    it('should have a title', function() {
        //check page title
        expect(browser.getTitle())
            .toEqual('Todo App Organizer');
    });

    describe('add a todo', function() {

        it('should add a todo: write first protractor test', function () {

            todoListObjects.todoText.sendKeys('write first protractor test');
            todoListObjects.addButton.click();

            expect(todoListObjects.todoList.count()).toEqual(3); //TODO: expect to be equal to ...
            expect(todoListObjects.todoList.get(2).getText()).toEqual('write first protractor test');
        });

        it('You wrote your first test, cross it off the list', function () {

            todoListObjects.todoList.get(2).element(by.css('input')).click();

            expect(todoListObjects.doneElements.count()).toEqual(2);
            expect(todoListObjects.doneElements.last().getText()).toEqual('write first protractor test');
        });

        it('You do not finish to write your first test, become it active', function() {
            todoListObjects.doneElements.last().click();

            expect(todoListObjects.doneElements.count()).toEqual(1);

        });
    });

    describe('archive done todo', function() {

        it('should click archive button and list items', function () {

            todoListObjects.archiveButton.click();

            expect(todoListObjects.todoList.count()).toEqual(2); //TODO: It's wrong!
            expect(todoListObjects.doneElements.count()).toEqual(0); //TODO: It's wrong!
        });

        it('You finally wrote your first test, cross it off the list and archive', function () {

            todoListObjects.todoList.get(1).element(by.css('input')).click();

            expect(todoListObjects.doneElements.count()).toEqual(1);
            expect(todoListObjects.doneElements.last().getText()).toEqual('write first protractor test');

            todoListObjects.archiveButton.click();
            expect(todoListObjects.todoList.count()).toEqual(1);
        });

        it('Click archive again and verify the list items', function () {

            todoListObjects.archiveButton.click();
            expect(todoListObjects.todoList.count()).toEqual(1);
        });
    });
});