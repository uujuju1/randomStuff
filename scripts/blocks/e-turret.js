const multiplex = extend(PowerTurret, "e-multiplex", {
	change: 0,
	setBars(){
		this.super$setBars();
		this.bars.add("change", e => new Bar("charge", Pal.lancerLaser, () => 0.2 * this.change));
	}
});
const bulletA = extend(BasicBulletType, {
	damage: 220,
	speed: 4,
	lifetime: 60,
	width: 7,
	height: 12,
	frontColor: Color.valueOf("8AA3F4"),
	backColor: Color.valueOf("6974C4"),
	init(){
		multiplex.change++;
	}
})

const bulletB = extend(BasicBulletType, {
	damage: 300,
	speed: 8,
	lifetime: 30,
	width: 9,
	height: 14,
	frontColor: Color.valueOf("8AA3F4"),
	backColor: Color.valueOf("6974C4"),
	init(){
		multiplex.change--;
	}
})
multiplex.shootType = bulletA;
multiplex.buildType = () => extend(PowerTurret.PowerTurretBuild, multiplex, {
	updateTile(){
		this.super$updateTile();
		if (multiplex.change == 0) {multiplex.shootType = bulletA;}
		if (multiplex.change == 5) {multiplex.shootType = bulletB;}
	}
});