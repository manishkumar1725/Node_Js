import { todoListItems } from './todoInterface';


class todo implements todoListItems{

    todoList: string[]=[];  
    
    addTask(Task: string) {
      

        this.todoList[this.todoList.length] = Task;
        console.log("=========== NEW TASK ===========\n"+"Task "+this.todoList[this.todoList.length - 1]+" is inserted in the list\n"+"Number of Items :"+this.todoList.length)

    }
    deleteTask(Task: string) {
       

        var index;
        for(index=0;index<this.todoList.length;index++)
        {
            if(this.todoList[index]==Task)
            {
                this.todoList.splice(index,1)
            }
        }
        console.log("=========== TASK REMOVED ===========\n"+"Task "+Task+" removed from the list\n"+"Number of Items :"+this.todoList.length)
    }
    showAll(): void {
       

        var index=0;
        for(index=0;index<this.todoList.length;index++)
        {
            console.log(this.todoList[index]);
        }
    }
}
    var todoItems = new todo();

    todoItems.addTask("Buy Eggs");
    todoItems.addTask("Buy Cars")
    todoItems.addTask("Buy Pens")

    todoItems.deleteTask("Buy Cars");

    todoItems.showAll();



  