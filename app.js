const inputTask = document.getElementById("input")
const submitBtn = document.getElementById("submit-btn")
const listDisplay = document.getElementById("list-display")

inputTask.addEventListener("keypress", function (e) {
	if (event.key === "Enter") {
		let inputValue = inputTask.value
		//create list item
		let listItem = document.createElement("li")
		listItem.innerHTML = inputValue + "<button>set</button>"
		listDisplay.appendChild(listItem)
		inputTask.value = ""
	}
})
