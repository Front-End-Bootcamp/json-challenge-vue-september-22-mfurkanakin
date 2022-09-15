import data from "../data/data"


let getGroup = (param) => {
	let filteredGroup =  data.filter(obj => obj.group === param)
	let asistant = filteredGroup.find(obj => obj.type === "assistant")
	let newGroup = {
		"group": param,
		"student": getGroupStudents(filteredGroup) ,
		"assistant": asistant.name,
	}
	return newGroup;
}

let getGroupStudents = (group) => {
	let studentsName = []
	group.forEach(obj => studentsName.push(obj.name))
	return studentsName;
}

console.log(getGroup('Orchid'));
console.log(getGroup('SteelBlue'));
console.log(getGroup('YellowGreen'));
console.log(getGroup('IndianRed'));
console.log(getGroup('LightSeaGreen'));
