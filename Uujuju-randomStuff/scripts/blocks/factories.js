// craftEffect
const scorchCraftEffect = new Effect(60, e => {
	let alpha = 1;
	const square = Core.atlas.find("random-stuff-square")
	Draw.color(Color.valueOf("ffffff"), Color.valueOf("ffff00"), e.fin());
	Draw.alpha(alpha);
	Fill.poly(e.x, e.y, 4, 4, e.fout() * 360);
	Draw.color();
});
// factories
const scorchForge = extendContent(GenericCrafter, "scorch-smelter", {
	craftEffect: scorchCraftEffect,
	crafTime: 60
});