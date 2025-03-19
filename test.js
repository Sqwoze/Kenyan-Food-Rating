function createListItem() {
    // Logic for creating a list
    // document.createElement('tag'): Creates a new element
    const newTaskList = document.createElement("li")
    console.log(newTaskList)

    const taskInput = document.getElementById("taskInput")

    const taskInputValue = taskInput.value
    console.log(taskInputValue)
}

submitBtn.addEventListener("click", createListItem)