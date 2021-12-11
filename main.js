function clickSound(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/hW89wY1fV/model.json",modelready);


}
function modelready(){
    classifier.classify(GotResults);
}
function GotResults(error,results){
if(error){
    console.error(error);

}
else{
    console.log(results);
    random_r= Math.floor(Math.random()* 255) +1;
    random_g= Math.floor(Math.random()* 255) +1;
    random_b= Math.floor(Math.random()* 255) +1;
document.getElementById("h3Listener").style.color="rgb("+random_r+","+random_g+","+random_b+")";
document.getElementById("h4Accuracy").style.color="rgb("+random_r+","+random_g+","+random_b+")";
document.getElementById("h3Listener").innerHTML=results[0].label;
document.getElementById("h4Accuracy").innerHTML=(results[0].confidence*100).toFixed(2)+"%";


img1=document.getElementById("img_1");
img2=document.getElementById("img_2");
img3=document.getElementById("img_3");
img4=document.getElementById("img_4");

if(results[0].label == "Ring"){
img1.src="k.gif";
img2.src="f.png";
img3.src="r.png";
img4.src="s.png";


}
else if(results[0].label == "clap"){
    img1.src="k.png";
    img2.src="f.gif";
    img3.src="r.png";
    img4.src="s.png";
    
}
else if(results[0].label == "thump"){
    img1.src="k.png";
    img2.src="f.png";
    img3.src="r.gif";
    img4.src="s.png";
    
}
else if(results[0].label == "whistle"){
    img1.src="k.png";
    img2.src="f.png";
    img3.src="r.png";
    img4.src="s.gif";
    
}
else{
    img1.src="d.png";
    img2.src="d.png";
    img3.src="d.png";
    img4.src="d.png";
    
}












}
}











