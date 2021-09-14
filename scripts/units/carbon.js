let SapFireColor = [
	Color.valueOf("2e0469"),
	Color.valueOf("9d57ff")
];
const hitEffect = new Effect(60, e => {
	let rand = new Rand();
	Draw.color(SapFireColor[0], SapFireColor[1], e.fin());	
	Lines.stroke(e.fout() * 2);
	Lines.circle(e.x, e.y, e.fin() * 20);

	Angles.randLenVectors(e.id, 6, 2 + 19 * e.finpow(), (x, y) => {
		Fill.circle(e.x + x, e.y + y, e.fout() * 4.8);
		Drawf.light(e.x + x, e.y + y, e.fout() * 7.8, Color.white, 0.9 * e.fout());
	});
});
const CarbonBullet = extend(ArtilleryBulletType, {
	speed: 4,
	lifetime: 90,
	splashDamage: 500,
	splashDamageRadius: 32,
	frontColor: SapFireColor[0],
	backColor: SapFireColor[1],
	fragBullets: 4,
	fragBullet: extend(BasicBulletType, {
		speed: 2,
		lifetime: 20,
		damage: 220,
		frontColor: SapFireColor[0],
		backColor: SapFireColor[1]
	})
});
const carbonWeaponA = extend(Weapon, "random-stuff-weapon-atom-carbonized", {
	reload: 30,
	mirror: true,
	alternate: true,
	rotate: true,
	rotateSpeed: 1.5,
	x: 8,
	y: 0,
	bullet: CarbonBullet
});
const carbonWeaponB = extend(Weapon, "random-stuff-weapon-atom-carbonized", {
	reload: 30,
	mirror: true,
	alternate: true,
	rotate: true,
	rotateSpeed: 1.5,
	x: 12,
	y: -8,
	bullet: CarbonBullet
});
const carbon = extend(UnitType, "carbon", {});
carbon.weapons.add(carbonWeaponA);
carbon.weapons.add(carbonWeaponB);
carbon.constructor = () => extend(UnitEntity, {});