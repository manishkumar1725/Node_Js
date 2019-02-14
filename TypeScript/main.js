"use strict";
exports.__esModule = true;
var todo = /** @class */ (function () {
    function todo() {
        this.todoList = [];
    }
    todo.prototype.addTask = function (Task) {
        this.todoList[this.todoList.length] = Task;
        console.log("=========== NEW TASK ===========\n" + "Task " + this.todoList[this.todoList.length - 1] + " is inserted in the list\n" + "Number of Items :" + this.todoList.length);
    };
    todo.prototype.deleteTask = function (Task) {
        var index;
        for (index = 0; index < this.todoList.length; index++) {
            if (this.todoList[index] == Task) {
                this.todoList.splice(index, 1);
            }
        }
        console.log("=========== TASK REMOVED ===========\n" + "Task " + Task + " removed from the list\n" + "Number of Items :" + this.todoList.length);
    };
    todo.prototype.showAll = function () {
        var index = 0;
        for (index = 0; index < this.todoList.length; index++) {
            console.log(this.todoList[index]);
        }
    };
    return todo;
}());
var todoItems = new todo();
todoItems.addTask("Buy Eggs");
todoItems.addTask("Buy Cars");
todoItems.addTask("Buy Pens");
todoItems.deleteTask("Buy Cars");
todoItems.showAll();
/*  todoList : string[]

  addTask(task : string)
 {
     todoList[todoList.length] = task;
     console.log("=========== NEW TASK ===========\n"+"Task "+todoList[todoList.length - 1]+" is inserted in the list\n"+"Number of Items :"+todoList.length)
 }

 deleteTask(task : string)
 {
     var index;
     for(index=0;index<todoList.length;index++)
     {
         if(todoList[index]==task)
         {
             todoList.splice(index,1)
         }
     }
     console.log("=========== TASK REMOVED ===========\n"+"Task "+task+" removed from the list\n"+"Number of Items :"+todoList.length)
 }

 showAll()
 {
     var index=0;
     for(index=0;index<todoList.length;index++)
     {
         console.log(todoList[index]);
     }
 }
*/
