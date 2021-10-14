const electraHit = new Effect(14, e => {
	Draw.color(Color.white, Pal.lancerLaser, e.fin());
    e.scaled(7, s => {
        Lines.stroke(0.5 + s.fout());
        Lines.circle(e.x, e.y, s.fin() * 5);
    });
    Lines.stroke(0.5 + e.fout());
    Angles.randLenVectors(e.id, 5, e.fin() * 15, (x, y) => {
        let ang = Mathf.angle(x, y);
        Lines.lineAngle(e.x + x, e.y + y, ang, e.fout() * 3 + 1);
    });
    Drawf.light(e.x, e.y, 20, Pal.lancerLaser, 0.6 * e.fout());
});
const AFragFrag = extend(BasicBulletType, {
	damage: 7,
	speed: 1,
	lifetime: 8,
	frontColor: Color.valueOf("8AA3F4"),
	backColor: Color.valueOf("5462C4"),
})
const AFrag = extend(BasicBulletType, {
	damage: 10,
	speed: 1,
	lifetime: 16,
	frontColor: Color.valueOf("8AA3F4"),
	backColor: Color.valueOf("5462C4"),
	fragBullets: 2,
	fragBullet: AFragFrag
});
const ABullet = extend(BasicBulletType, {
	damage: 15,
	speed: 4,
	lifetime: 30,
	knockback: 1,
	frontColor: Color.valueOf("8AA3F4"),
	backColor: Color.valueOf("5462C4"),
	fragBullets: 2,
	fragBullet: AFrag
});
const magnetAWeapon = extend(Weapon, "random-stuff-weapon-magnet-frag" ,{
	reload: 30,
	recoil: 1,
	mirror: true,
	x: 4.5,
	y: -2.5,
	bullet: ABullet
});
const magnetA = extend(UnitType, "magnetA", {});
magnetA.weapons.add(magnetAWeapon);
magnetA.constructor = () => extend(UnitEntity, {});