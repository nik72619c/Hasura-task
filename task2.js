function flipbookString(flipbook){
	let result=[];
	flipbook.forEach((element,index)=>{
		let numberOfTimes=(flipbook[index+1]? flipbook[index+1][0] : element[1]+1)-element[0];
		for(let i=0;i<numberOfTimes;i++){
			result.push(" From page number "+element[0]+" to "+(flipbook[index+1] ? flipbook[index+1][0] : element[1])+ " print a image of source "+element[2]+" on a position of coordinate "+element[4]		);
		}
		})
	return result;
};

let flipbookInput=[[01,40,"baby.jpg","position","(0,0)"],[11,40,"toddler.jpg","position","(10,0)"],
[21,40,"adult.jpg","position","(20,0)"],
[31,40,"old_person.jpg","position","(30,0)"]];
let result = flipbookString(flipbookInput);
console.log(result);
