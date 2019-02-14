let todoList : string[] = [];

function addTask(task : string)
{
    todoList[todoList.length] = task;
    console.log("=========== NEW TASK ===========\n"+"Task "+todoList[todoList.length - 1]+" is inserted in the list\n"+"Number of Items :"+todoList.length)
}

addTask("Buy Eggs");
addTask("Buy Cars");

function deleteTask(task :string)
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

deleteTask("Buy Cars");

function showAll()
{
    var index=0;
    for(index=0;index<todoList.length;index++)
    {
        console.log(todoList[index]);
    }
}

showAll();