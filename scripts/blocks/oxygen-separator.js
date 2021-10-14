const OxygenSeparator = extend(GenericCrafter, "oxygen-separator", {
	load(){
		this.super$load();
		this.region = Core.atlas.find("random-stuff-oxygen-separator");
		this.InputRegion = Core.atlas.find("random-stuff-oxygen-separator-input");
		this.outputRegion = Core.atlas.find("random-stuff-oxygen-separator-output");
	}
});
OxygenSeparator.buildType = () => extend(GenericCrafter.GenericCrafterBuild, OxygenSeparator, {
	draw(tile){
		let inputLiquid = OxygenSeparator.consumes.get(ConsumeType.liquid).liquid;
		let outputLiquid = OxygenSeparator.outputLiquid.liquid;

		Draw.rect(OxygenSeparator.region, this.x, this.y, 0);

		Draw.color(inputLiquid.color);
		Draw.alpha(this.liquids.get(inputLiquid) / OxygenSeparator.liquidCapacity);
		Draw.rect(OxygenSeparator.InputRegion, this.x, this.y);

		Draw.color(outputLiquid.color);
		Draw.alpha(this.liquids.get(outputLiquid) / OxygenSeparator.liquidCapacity);
		Draw.rect(OxygenSeparator.outputRegion, this.x, this.y);
	}
});