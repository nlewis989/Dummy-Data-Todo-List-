
    // We'll pre-populate this array with a couple objects just so it's not undefined if your internet connection isn't working properly.

    let arrayOfTodos = [
        {
        "userId": 14,
        "id": 1,
        "title": "delectus aut autem",
        "completed": false
    },
    {
        "userId": 20,
        "id": 2,
        "title": "delectus aut autem",
        "completed": false
    }]
    
    const fetchTodos = () => {
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then( (response) => response.json())
        .then( (json) => arrayOfTodos = json)
    }
    
    const logTodos = () => {
        console.log(arrayOfTodos)
    }
    
    const populateTodos = () => {
        const ol =document.getElementById('todo-list');
        console.log('arrayOfTodos:', arrayOfTodos)
        //for (let index = 0; index < arrayOfTodos.length; index++) {
            //const todoItem = arrayOfTodos[Index];
            //console.log('todoITem.completed', todoItem.id, todoItem.completed)

            /////////document.getElementById('todo-list').title
            
            //var node = document.createElement("LI");
            //var textnode = document.createTextNode(arrayOfTodos.title);
            //node.appendChild(textnode);
            //document.getElementById("todo-list").appendChild(node); 

            //let li = document.createElement('li');
            //var text = document.createTextNode(arrayOfTodos[0].title)
            //li.append(text)
            //ol.append(li)
            
            for (let index = 0; index < arrayOfTodos.length; index++) {
                const title =arrayOfTodos[index].title;
                let li = document.createElement('LI');
                var text =document.createTextNode(title);
                li.append(text)
                ol.append(li)

            }
            //document.thencreateElement("li");
            //document.thencreateTextNode(li).title;

        }
    
    
