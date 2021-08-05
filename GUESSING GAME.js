var colors=[
	[255,0,0],
	[255,255,0],
	[0,255,0],
	[0,255,255],
	[0,0,255],
	[255,0,255],
	[170,170,170],
	[160,170,180],
	[150,170,190]
];
var squares=document.querySelectorAll(".square");
var tryagain=document.querySelector(".tryagain");
var spans=document.querySelectorAll("span");
var remark=document.querySelector(".remark");
var top_color=document.querySelector(".container1");
var colorpicked,correct_color;
var len=6;
var easy=document.querySelector(".Easy");
var medium=document.querySelector(".Medium");
var hard=document.querySelector(".Hard");
function reset(){
	tryagain.textContent="New colors";
	remark.textContent="GUESS IT😉😜";
	for(var i=0;i<len;i++){
		for(var j=0;j<3;j++){
			colors[i][j]=Math.floor((Math.random() *255));
		}
	}
	for(var i=0;i<len;i++){
		var color="rgb("+String(colors[i][0])+","+String(colors[i][1])+","+String(colors[i][2])+")";
		squares[i].style.background=color;
	}
	colorpicked=Math.floor((Math.random() * (len)));
	top_color.style.background="#3399ff";
	var total=colors[colorpicked][0]+colors[colorpicked][1]+colors[colorpicked][2];
	correct_color="rgb("+String(colors[colorpicked][0])+","+String(colors[colorpicked][1])+","+String(colors[colorpicked][2])+")";
	for(var i=0;i<3;i++){
		spans[i].textContent=Math.floor((colors[colorpicked][i]/total)*100);
	}
	for(var i=len;i<9;i++){
		squares[i].style.background="#232323";
	}
	for(var i=0;i<len;i++){
		squares[i].addEventListener("click",function(){
			if(this.style.background==squares[colorpicked].style.background){
				remark.textContent="YOU WON!🎉🎉";
				remark.color="red";
				tryagain.textContent="try again?";
				for(var j=0;j<len;j++){
					squares[j].style.background=correct_color;
				}
				top_color.style.background=correct_color;
			}
			else{
				remark.textContent="TRY AGAIN😞😞";
				this.style.background="#232323";
			}
		});
	}
}
easy.addEventListener("click",function(){
	len=3;
	easy.classList.add("mode");
	medium.classList.remove("mode");
	hard.classList.remove("mode");
	reset();
});
medium.addEventListener("click",function(){
	len=6;
	easy.classList.remove("mode");
	medium.classList.add("mode");
	hard.classList.remove("mode");
	reset();
});
hard.addEventListener("click",function(){
	len=9;
	easy.classList.remove("mode");
	medium.classList.remove("mode");
	hard.classList.add("mode");
	reset();
});
reset();
tryagain.addEventListener("click",reset);