class SlingShot {
  constructor(bodyA,pointB){
   var options = {
      bodyA:bodyA,
      pointB:pointB,
      length:8,
      stiffness:0.04
   }

this.sling= Constraint.create(options);
this.pointB=pointB;
World.add(world,this.sling);
}
display (){
   if (this.sling.bodyA){
      var pointA=this.sling.bodyA.position;
      strokeWeight(4);
      line (pointA.x,pointA.y,this.pointB.x,this.pointB.y);
   }
    
}
fly (){
this.sling.bodyA=null;

}



}