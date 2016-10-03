function TodoList() {

    //model var
    this.todoText = element(by.model('vm.todoText'));
    this.todoList = element.all(by.repeater('todo in vm.todos'));
    this.doneElements = element.all(by.css('.done-true'));
    //action/view var
    this.addButton = element(by.css('[value="add"]'));
    this.archiveButton = element(by.id('archive'));

    //help utility functions

    /**
     * Get the global parma for the exercise 1 and call browser.get with the passed param or the default value
     */
    this.getPage = function () {
        if (browser.params.exercise1.url) {
            browser.get(browser.params.exercise2.url);
        } else {
            browser.get('http://pfy.cloud.reply.eu/protractor/ex2/');
        }
    };

}

module.exports = TodoList;
