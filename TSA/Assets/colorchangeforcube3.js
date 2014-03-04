#pragma strict
static var  r : float;
static var  g : float;
static var  b :  float;
var amount: float; 
var text : GUIText; 
var brosef : GUIText;
var Textenabled : boolean;
var reading : boolean;
var f : int;
var hint : GUIText;
var p : int;
var clashing : boolean;


function Start () {
r = 1; 
g = 0.92; 
b = 0.016; 
amount = 0.5;
gameObject.renderer.material.SetColor("_Color",Color(r,g,b));
text.text = "Good Job! You got green!";
Textenabled = false;
text.fontSize = 25;
reading = false;
f=0;
hint.text = "Hint: look at the last puzzle";
hint.enabled = false;
hint.fontSize = 25;
p = 0;
clashing = true;
}
function OnCollisionExit() {
Textenabled = false; 
}
function Update () {
brosef.enabled = Textenabled;
text.enabled = Textenabled;
if((Input.GetKeyDown(KeyCode.LeftShift)&&reading==true)||(Input.GetKeyDown(KeyCode.RightShift)&&reading==true)) {
f+=1;
}

}
function OnCollisionStay() {
if(f==1) {
reading = false; 
Textenabled = false;
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
if(Input.GetKey("r")) {
r=0.5;
g=0.5;
b=0.5;
}
if(Input.GetKey("h")) {
hint.enabled = true;
}
if(r<=0.1 && g>=0.5 && b<=0.1&&f==0) {
Textenabled = true;
hint.enabled = false;
reading = true;
}
if(r<=0.1 && g>=0.5 && b<=0.1 && p==0) {
color.score+=100;
p+=1;
clashing = false;
}
if(clashing == true) {
gameObject.renderer.material.SetColor("_Color",Color(r,g,b));
}
}