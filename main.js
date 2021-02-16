var names=[];

function submit(){

var display_names=[];

for (var counter=1; counter <=4; counter=counter+1){
var student = document.getElementById("student"+counter).value;
console.log(student);
names.push(student);



    
}
console.log(names);

var len= names.length;
console.log(len);

for (index = 0; index<len; index++){

  display_names.push("<h4>NAME - " + names[index] + "</h4>");
  console.log(display_names);


}

document.getElementById("with_commas").innerHTML=(display_names);

var remove=display_names.join (" ");
console.log (remove);
document.getElementById("without_commas").innerHTML=(remove);



document.getElementById("submitbutton").style.display="none";
document.getElementById("sort-button").style.display="inline-block";



}
function sorting() {
names.sort();
    var display_sorted=[];
    
var lenn = names.length;
console.log(lenn);


    for (k=0; k<lenn; k++){
display_sorted.push("<h4>NAME-" + names[k] + "</h4>"  );
console.log (display_sorted);


    }
var removee=display_sorted.join (" ");
console.log(removee);
document.getElementById("without_commas").innerHTML=(removee);




}
function newupdate(){
    document.getElementById("without_commas").innerHTML= "<h1>" + names + "</h1>";
}