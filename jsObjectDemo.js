function car(){
	
	this.color="red";
	this.engine="2000";
	this.brand="Toyota";
	
	this.getModel=function(){
		console.log("This is the model of the car");
	}
}

 module.exports=new car();
