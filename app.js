const inputBox = document.getElementById("input")
const submitBtn = document.getElementById("submit-btn")
const listDisplay = document.getElementById("list-display")

inputBox.addEventListener("keypress", function (e) {
	if (event.key === "Enter") {
		let inputValue = inputBox.value
		//create list item
		let listItem = document.createElement("li")
		listItem.innerHTML = inputValue + "<button>set</button>"
		listDisplay.appendChild(listItem)
		inputBox.value = ""
	}
})
