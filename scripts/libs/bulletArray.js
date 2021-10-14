const FFBFragFrag = extend(BasicBulletType, {
	damage: 7,
	speed: 1,
	lifetime: 8,
	frontColor: Color.valueOf("8AA3F4"),
	backColor: Color.valueOf("5462C4"),
})
const FFBFrag = extend(BasicBulletType, {
	damage: 10,
	speed: 1,
	lifetime: 16,
	frontColor: Color.valueOf("8AA3F4"),
	backColor: Color.valueOf("5462C4"),
	fragBullets: 2,
	fragBullet: AFragFrag
});
const FragFragBullet = extend(BasicBulletType, {
	damage: 15,
	speed: 4,
	lifetime: 30,
	knockback: 1,
	frontColor: Color.valueOf("8AA3F4"),
	backColor: Color.valueOf("5462C4"),
	fragBullets: 2,
	fragBullet: AFrag
});

const LaserBullet = extend(LaserBulletType, {
	damage: 125,
	width: 8,
	length: 80,
	lifetime: 30
});
module.exports = {
	superfrag: FragFragBullet,
	specialLaser: LaserBullet,
}