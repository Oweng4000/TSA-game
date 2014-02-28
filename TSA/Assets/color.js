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
var lockPos : float;
//var frameRate : double; 


function Start () {
//frameRate = 60.0;
Application.targetFrameRate=60; 
r = 0.5; 
g = 0.5; 
b = 0.5; 
amount = 0.5; 
health = 100; 
speed = 2;
jumpSpeed =10;
jumping = false;
lockPos = 0;

}

function Update () {
//y = transform.position.y;


if(Input.GetKey("right")) {
transform.Translate(Vector3.right*speed*Time.deltaTime); 
//Camera.mainCamera.transform.Translate(Vector3.right*speed*Time.deltaTime);
//Spotlight.transform.Translate(Vector3.right*Time.deltaTime);
}
if(Input.GetKey("left")) {
transform.Translate(Vector3.left*speed*Time.deltaTime);
//Camera.mainCamera.transform.Translate(Vector3.left*speed*Time.deltaTime);
//Spotlight.transform.Translate(Vector3.right*Time.deltaTime);
}
if(Input.GetKey("space")){
    gameObject.rigidbody.AddForce(Vector3.up * jumpSpeed);
    
    //jumping = true;
    }
    
if(y<-10) {
transform.position = Vector3(-4.386902e-05,-2.193451e-05,-2.193451e-05);
rigidbody.velocity = Vector3(0, 0, 0);
//Camera.mainCamera.transform.position= Vector3(0, 0.5483226, -8.4856);
rigidbody.rotation=Quaternion.Euler(Vector3(0,0,0));

}
  //else if(gameObject.collider==true) {
  //jumping = false;
  //}


y = transform.position.y; 
//Debug.Log("blue = " +b); 
//Debug.Log("green = " +g); 
gameObject.rigidbody.useGravity = true;
rigidbody.angularVelocity = Vector3(0,0,0);
transform.rotation = Quaternion.Euler(lockPos, lockPos,lockPos);
}



