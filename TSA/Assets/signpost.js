#pragma strict

//static var Str : String;

 var b : boolean;
 var mainText : GUIText;
 var brosef : GUIText;
 private var f : int;
 //var positionOfCube : GameObject;
 //var x : double;
 //var y : double; 
 //var z : double;

 
function Start () {
//Str = "Yolo Swaggins and the Fellowship of the Bling";
b=false;
mainText.text = "swag";
//booty = "booty";
f=0;

}

function Update () {
//x = positionOfCube.transform.position.x;
//y = positionOfCube.transform.position.y;
//z = positionOfCube.transform.position.z;
//booty;



mainText.fontSize = 25;
mainText.pixelOffset.x=0;
//mainText.transform.Translate(Vector3(x,y,z));
//booty.active;
mainText.enabled = b;
brosef.enabled = b;
if(Input.GetKeyDown(KeyCode.LeftShift)||Input.GetKeyDown(KeyCode.RightShift)) {
f+=1;
}
if(f==0) 
{
mainText.text= "Hello and Welcome to Mr. Cube!!!!!";
}
if(f==1)
{
mainText.text = "Use left and right arrow keys to move";

}
if(f==2) 
{
mainText.text = "Use space to jump!";
}
if(f==3)
{
mainText.text = "In front of you is a cube. Jump up there to learn more.";
}
if(f>3) {
b=false;
}

}
function OnTriggerEnter() {

if(f<=3) {
b=true;
}
}
function OnTriggerExit() {
b=false;

}

 
