#pragma strict

//static var Str : String;

 var b : boolean;
 var mainText : GUIText;
 var brosef : GUIText;
 var f : int;

 
function Start () {
//Str = "Yolo Swaggins and the Fellowship of the Bling";
b=false;
mainText.text = "swag";
//booty = "booty";
f=0;
}

function Update () {

//booty;
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


mainText.fontSize = 25;
mainText.pixelOffset.x=0;
//booty.active;
mainText.enabled = b;
brosef.enabled = b;
if(Input.GetKeyDown(KeyCode.LeftShift)) {
f+=1;
}
Debug.Log(f);
}
function OnTriggerEnter() {

b=true;
}
function OnTriggerExit() {
b=false;
//booty.enabled = false;
}

 
