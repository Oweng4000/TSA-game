#pragma strict
static var  r : float;
static var  g : float;
static var  b :  float;
private var f : int;
var text : GUIText;
var amount: float; 
var Textenabled : boolean;
var reading : boolean;
var brosef : GUIText;
var h : int;
static var orange : boolean;
var p : int;
var clashing : boolean;


function Start () {
r = 0; 
g = 1; 
b = 0; 
amount = 0.5;
gameObject.renderer.material.SetColor("_Color",Color.green);
text.text = "This is your first cube. Boy, does it clash";
f = 0;
h = 0;
Textenabled=true;
text.fontSize = 25;
reading = true;
orange = false;
p = 0;
clashing = true;
}

function Update () {


}
function OnCollisionExit() {
text.enabled = false;
brosef.enabled = false;
}
function OnCollisionStay() {
text.enabled = Textenabled; 
brosef.enabled = Textenabled;
if((Input.GetKeyDown(KeyCode.LeftShift)&&reading==true)||(Input.GetKeyDown(KeyCode.RightShift)&&reading==true)) {
f+=1;
}
switch(f) {
case 1: 
  text.text = "Your job as Mr. Cube is to fix the color";
  break;
case 2: 
  text.text = "Use the Q and A keys to adjust the amount of red in the cube";
  break;
case 3: 
   text.text = "Use the W and S keys to adjust the amount of green";
   break;
case 4:
   text.text = "Use the E and D keys to adjust the amount of blue";
   break;
case 5: 
   text.text = "Press the R key to reset the color to grey";
   break;
case 6: 
 text.text = "We want to make these colors match";
 break;
case 7: 
  text.text = "The color that matches best with blue is orange";
  break; 
case 8: 
  text.text = "Try to get an orange color";
  break;
case 9: 
  text.text = "Remember you can only adjust the color of the cubes";
  break;
case 10: 
   text.text = "You cannot set the color of the platforms"; 
   break;
case 11: 
   Textenabled = false;
   
   reading = false;
   break;
 case 12: 
 Textenabled= true;
  text.text = "Move to the next cube when you're ready";
  break;
  
case 13: 
Textenabled = false;
break;
 

}
if(Input.GetKey('q')&&r<1.0) {
 r+=amount*Time.deltaTime;
}


if(Input.GetKey('a')&&r>0.0) {
r-=amount*Time.deltaTime;
}

if(Input.GetKey('w')&&g<1.0){ 
g+=amount*Time.deltaTime;

}

if(Input.GetKey('s')&&g>0.0) {
g-=amount*Time.deltaTime; 
}


if(Input.GetKey('e')&&b<1.0) {
b+=amount*Time.deltaTime;
}


if(Input.GetKey('d')&&b>0.0) {
b-=amount*Time.deltaTime;
}

if(r>=1.0) { 
r=1.0; 
}
if(g>= 1.0) {
g=1.0; 
}
if(b>=1.0) {
b =1.0;
}
if(r<=0.0) {
r=0.0;
}
if(b<=0.0) {
b=0.0;
}
if(g<=0.0) {
g=0.0;
}
if(g>=0.2&&r>=0.8&&b<=0.2&&f<12) {
Textenabled=true;
orange = true;
text.text="Good Job! You got an orange!";
reading= true;

//h+=1;
//Debug.Log(orange);
}
if(g>=0.4&&r>=0.8&&b<0.1&&p==0) {
color.score+=100;
p+=1;
clashing = false;
}
if(Input.GetKey("r")) {
r=0.5;
g=0.5;
b=0.5;
}

if(clashing==true) {
gameObject.renderer.material.SetColor("_Color",Color(r,g,b));
}
}