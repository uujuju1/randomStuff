// ACrawler
const ABlaster = extend(UnitType, "ABlaster", {
	ammo: 0,
	update(unit){
		this.super$update(unit);
		if (this.ammo == 3) {
			unit.kill();
			this.ammo = 0;
		}
	}
});

const bulletA = extend(BasicBulletType, {
	speed: 4,
	lifetime: 20,
	splashDamage: 80,
	splashDamageRadius: 32,
	collidedsAir: true,
	init(){
		ABlaster.ammo++;
	}
});

const ABlasterCannon = extend(Weapon, "random-stuff-crawler-blaster", {
	reload: 60,
	mirror: false,
	x: 0,
	y: 0,
	bullet: bulletA,
});

ABlaster.weapons.add(ABlasterCannon);
ABlaster.constructor = () => extend(UnitEntity, {});

// BCrawler
const BBlaster = extend(UnitType, "BBlaster", {
	ammo: 0,
	update(unit){
		this.super$update(unit);
		if (this.ammo == 6) {
			unit.kill();
			this.ammo = 0;
		}
	}
});

const bulletB = extend(BasicBulletType, {
 	speed: 4,
 	lifetime: 20,
 	splashDamage: 160,
 	splashDamageRadius: 32,
 	collidedsAir: true,
 	init(){
 		BBlaster.ammo++;
 	}
});

const BBlasterCannon = extend(Weapon, "a", {
	reload: 60,
	mirror: false,
	x: 0,
	y: 0,
	bullet: bulletB,
});

BBlaster.weapons.add(BBlasterCannon);
BBlaster.constructor = () => extend(UnitEntity, {});

// CCrawler
const CBlaster = extend(UnitType, "CBlaster", {
	ammo: 0,
	update(unit){
		this.super$update(unit);
		if (this.ammo == 12) {
			unit.kill();
			this.ammo = 0;
		}
	}
});

const bulletC = extend(BasicBulletType, {
	speed: 4,
	lifetime: 20,
	splashDamage: 320,
	splashDamageRadius: 32,
	collidedsAir: true,
	init(){
		CBlaster.ammo++;
	}
});

const CBlasterCannon = extend(Weapon, "random-stuff-crawler-blaster", {
	reload: 60,
	mirror: false,
	x: 0,
	y: 0,
	bullet: bulletC,
});

CBlaster.weapons.add(CBlasterCannon);
CBlaster.constructor = () => extend(UnitEntity, {});