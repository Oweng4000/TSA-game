#pragma strict
static var  r : float;
static var  g : float;
static var  b :  float;
var amount: float; 

function Start () {
r = 0; 
g = 1; 
b = 1; 
amount = 0.5;
gameObject.renderer.material.SetColor("_Color",Color.cyan);
}

function Update () {


}
function OnCollisionStay() {
Debug.Log("Helllo");
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
gameObject.renderer.material.SetColor("_Color",Color(r,g,b));
}