#pragma strict
static var  r : float;
static var  g : float;
static var  b :  float;
var amount: float; 
var text : GUIText;
var Textenabled : boolean;
var reading : boolean;
var brosef : GUIText;
var f : int;
static var red: boolean;
var p : int;
var clashing : boolean;

function Start () {
r = 1; 
g = 0; 
b = 1; 
f = 0;
amount = 0.5;
gameObject.renderer.material.SetColor("_Color",Color.magenta);
text.fontSize = 25;
reading = true;
red = false;
p = 0;
clashing = true;
}

function Update () {
text.enabled = Textenabled;
brosef.enabled = Textenabled;

}
function OnCollisionExit()  {
Textenabled = false;
}
function OnCollisionStay() {
if((Input.GetKeyDown(KeyCode.LeftShift)&&reading==true)||(Input.GetKeyDown(KeyCode.RightShift)&&reading==true)) {
f+=1;
}

switch(f) {
case 0:
 Textenabled = true;
 text.text = "Eww. Pink and Green. Who picked this out? Rick James?";
 break;
 case 1: 
 Textenabled = true;
 text.text = "What color matches well with green?";
 break;
 case 2: 
 Textenabled = true;
 text.text = "Try red";
 break;
case 3: 
   Textenabled = false;
   reading = false;
   break;
case 4: 
Textenabled = true;
text.text = "Try to figure out the next cube out on your own";
break;
case 5: 
Textenabled = true;
text.text = "If you need help, press the h key"; 
break;
case 6: 
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
if(b<=0.1 && g<=0.1 && r>=0.5&&f<4) {
text.text ="Good Job! You got red!";
reading = true;
Textenabled = true;
red = true;

}
if(b<=0.1 && g<=0.1&&r>=0.5 &&  p==0) {
color.score+=100;
p+=1;
clashing = false;
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
if(Input.GetKey("r")) {
r=0.5;
g=0.5;
b=0.5;
}
if(clashing==true) {
gameObject.renderer.material.SetColor("_Color",Color(r,g,b));
}
}