/*
	battleship.js: A scriptCraft version of the popular warship guessing game. 
	
	Creators: Mark Hario & Joe Cumins 
*/

var drone = require('drone')

var cornerBlock;


exports.drawBoard = function(){
	var theDrone = new Drone(self);
	//theDrone.fwd();
	cornerBlock = theDrone.chkpt('corner-stone');
	console.log('checkpoint POS:' + theDrone.getLocation());

	theDrone.box(blocks.stone, 12,1,12);
	theDrone.move('corner-stone');
	theDrone.up();
	theDrone.box(blocks.sandstone, 1,12,12);
	theDrone.move('corner-stone');
	theDrone.fwd(11);
	theDrone.turn(3);
	theDrone.fwd();

	theDrone.turn(3);
	theDrone.chkpt('corner-stone2');
	theDrone.box(blocks.stone, 12,1,12);
	theDrone.move('corner-stone2');
	theDrone.up();
	theDrone.box(blocks.sandstone, 1,12,12);
};

events.blockBreak( function( event ) {
	var brokenBlock = event.getBlock().getLocation();
	if (brokenBlock.y !== 4) checkBattleship();
	console.log('block location:' + event.getBlock().getLocation());

    var x = brokenBlock.x;
    var y = brokenBlock.y;
    var z = brokenBlock.z;
    var d = new Drone(x,y,z, brokenBlock.yaw, brokenBlock.world).box(blocks.sponge);
});


