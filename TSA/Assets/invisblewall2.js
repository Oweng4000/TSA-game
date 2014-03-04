#pragma strict
var lockPos : float;
var wall : GameObject;
//static var orange : boolean;
function Start () {
lockPos = 0;
}

function Update () {
Debug.Log(colochangecube2.red);
if(colochangecube2.red==true) {
 wall.collider.enabled = false;
}

}