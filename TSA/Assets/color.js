#pragma strict
static var  r : float;
static var  g : float;
static var  b :  float;
var amount: float; 
var health: int;
var speed : int;
var jumpSpeed : int;
var jumping : boolean;
var y : float;
//var lockPos : float;
var i : int;
var x : double; 
var y2 : double;
var z : double; 
var jump : AudioClip;
static var score : int; 
var scoreText : GUIText;

function Start () {

r = 0.5; 
g = 0.5; 
b = 0.5; 
amount = 0.5; 
health = 100; 
speed = 2;
jumpSpeed =300;
jumping = false;
//lockPos = 0;
i = 0;
score = 0;
scoreText.text = score.ToString();

}

function Update () {



if(Input.GetKey("right")) {
transform.Translate(Vector3.right*speed*Time.deltaTime); 

}
if(Input.GetKey("left")) {
transform.Translate(Vector3.left*speed*Time.deltaTime);

}
if(Input.GetKey("space")&&jumping==false){
     jumping = true;
    gameObject.rigidbody.AddForce(Vector3.up * jumpSpeed);
    audio.PlayOneShot(jump, 1);
    }
    
if(y<-10) {
transform.position = Vector3(x,y2,z);
rigidbody.velocity = Vector3(0, 0, 0);

rigidbody.rotation=Quaternion.Euler(Vector3(0,0,0));

}
  


y = transform.position.y; 

gameObject.rigidbody.useGravity = true;

scoreText.text = score.ToString();
}

function OnCollisionExit() {

 

}
function OnCollisionEnter() {
jumping=false;
y2 = transform.position.y;
x = transform.position.x;
z = transform.position.z;
}



