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
		let inputLiquid = refiner.consumes.get(ConsumeType.liquid).liquid;
		let outputLiquid = refiner.outputLiquid.liquid;

		Draw.rect(refiner.region, this.x, this.y, 0);

		Draw.color(inputLiquid.color);
		Draw.alpha(this.liquids.get(inputLiquid) / refiner.liquidCapacity);
		Draw.rect(refiner.InputRegion, this.x, this.y);

		Draw.color(outputLiquid.color);
		Draw.alpha(this.liquids.get(outputLiquid) / refiner.liquidCapacity);
		Draw.rect(refiner.outputRegion, this.x, this.y);
	}
});