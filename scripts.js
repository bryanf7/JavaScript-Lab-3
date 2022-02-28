function passFail(score){
    return (score>60)? true:false;
}
function addSubmission(array,newName,newScore,newDate){
    let person={"name":newName,"score":newScore,"date": newDate,"passed":passFail(newScore)};
    return array.push(person);
}
function deleteSubmissionByIndex(array,index){
    return array.splice(index,1)
}
function deletSubmissionByName(array,name){
    let index = array.findIndex(element=> {return (element.name === name) ? true:false ;});
    return array.splice(index,1);
}
function editSubmission(array,index,score) {
    array[index].score=score;
    array[index].passed=passFail(score);
    return array;
}
function findSubmissionByName(array,name){
    return array.find(element=> {return (element.name===name)? true:false});
}
function findLowestScore(array){
    let lowest=array[0].score;
    array.forEach(element  => {(element.score<lowest)? lowest=element.score: false});
    /*for (let i=0;i<array.length;i++){
        if (array[i].score < lowest){
            lowest= array[i].score;
        }
    } */
    return array.find(element=> {return (element.score === lowest)?true:false});
}
function findAverageScore(array){
    let size=array.length;
    let sum=0;
    for (element of array){
        sum+= parseInt(element.score);
    }
    return Math.round(sum/size)
}
function filterPassing(array){
    newArray=new Array();
    newArray.push(array.filter(element=> element.passed== true));
    return newArray;
}
function filter90PAndAbove(array){
    greaterThan=new Array();
    greaterThan.push(array.filter(element=> parseInt(element.score)>=90));
    return greaterThan;
}
//Below functions are for the Extra Challenges:
function createRange(start,end){
    let range= new Array();
    for (let i=start;i<end;i++){
        range.push(i);
    }
    range.push(end);
    return range;
}
function countElements(array){
    const counter = [];
    for (let i=0; i<array.length;i++){
        var num=array[i];
        counter[num]= counter[num]? counter[num]+1:1; //['a', 'b', 'a', 'c', 'a', 'b']
        /*1st iteration counter array is empty []
         so [] is not equal to 'a', it will add 'a' to array counter with a value of 1
         2 iteration condition will check if 'b' exist in counter array, if so it will increase the value by 1 else it will add 'b' in the next index of counter array with a value of 1
         counter = [a:1,b:1]
         3 iteration condition will check if 'a' exist in counter array, because it does it will increment the value by 1.
         counter = [a:2,b:1]*/
    };
    return counter;
}
//Declare and Initialize array submission
let submission =[
    {"name":"James","score":"95","date": "'2020-01-24'","passed":true},
    {"name":"Joe","score":"77","date": "2018-05-14","passed":false},
    {"name":"Jack","score":"59","date":"2019-07-05","passed":false},
    {"name":"Jill","score":"88","date": "2020-04-22","passed":true},
];
//Call  and log all the functions
console.log(addSubmission(submission,"Bryan","100","2022-02-26"));
console.log(submission);
console.log(deleteSubmissionByIndex(submission,0));
console.log(deletSubmissionByName(submission,"Bryan"));
console.log(submission);
console.log(editSubmission(submission,1,"90"));
console.log(findSubmissionByName(submission,"Jill"));
console.log(findLowestScore(submission));
console.log(submission);
console.log(findAverageScore(submission));
console.log(filterPassing(submission));
console.log(filter90PAndAbove(submission));
//Extra Challenges
console.log(createRange(2,5))
console.log(countElements(['a', 'b', 'a', 'c', 'a', 'b']));