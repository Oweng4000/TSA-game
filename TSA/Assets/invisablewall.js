#pragma strict
var lockPos : float;
var wall : GameObject;
//static var orange : boolean;
function Start () {
lockPos = 0;
}

function Update () {
Debug.Log(colorchangeforcubes.orange);
if(colorchangeforcubes.orange==true) {
 wall.collider.enabled = false;
}

}