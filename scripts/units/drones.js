const ADrone = extend(UnitType, "ADrone", {
	draw(unit) {
		this.super$draw(unit);
		Draw.rect(
			"random-stuff-ADrone-rotor",
			unit.x,
			unit.y,
			Time.time * -15);
	}
});
ADrone.constructor = () => extend(UnitEntity, {});

const BDrone = extend(UnitType, "BDrone", {
	draw(unit) {
		this.super$draw(unit);
		Draw.rect(
			"random-stuff-BDrone-rotor",
			unit.x + Angles.trnsx(unit.rotation - 90, -4, 4),
			unit.y + Angles.trnsy(unit.rotation - 90, -4, 4),
			Time.time * -15);


		Draw.rect(
			"random-stuff-BDrone-rotor",
			unit.x + Angles.trnsx(unit.rotation - 90, 4, 4),
			unit.y + Angles.trnsy(unit.rotation - 90, 4, 4),
			Time.time * -15);


		Draw.rect(
			"random-stuff-BDrone-rotor",
			unit.x + Angles.trnsx(unit.rotation - 90, 4, -4),
			unit.y + Angles.trnsy(unit.rotation - 90, 4, -4),
			Time.time * -15);


		Draw.rect(
			"random-stuff-BDrone-rotor",
			unit.x + Angles.trnsx(unit.rotation - 90, -4, -4),
			unit.y + Angles.trnsy(unit.rotation - 90, -4, -4),
			Time.time * -15);
	}
});
BDrone.constructor = () => extend(UnitEntity, {});

const CDrone = extend(UnitType, "CDrone", {
	draw(unit) {
		this.super$draw(unit);
		Draw.rect(
			"random-stuff-CDrone-rotor",
			unit.x,
			unit.y,
			Time.time * -15);
	}
});
CDrone.constructor = () => extend(UnitEntity, {});

const DDrone = extend(UnitType, "DDrone", {
	draw(unit) {
		this.super$draw(unit);
		Draw.rect(
			"random-stuff-BDrone-rotor",
			unit.x + Angles.trnsx(unit.rotation - 90, -4, 4),
			unit.y + Angles.trnsy(unit.rotation - 90, -4, 4),
			Time.time * -15);


		Draw.rect(
			"random-stuff-BDrone-rotor",
			unit.x + Angles.trnsx(unit.rotation - 90, 4, 4),
			unit.y + Angles.trnsy(unit.rotation - 90, 4, 4),
			Time.time * -15);


		Draw.rect(
			"random-stuff-BDrone-rotor",
			unit.x + Angles.trnsx(unit.rotation - 90, 4, -4),
			unit.y + Angles.trnsy(unit.rotation - 90, 4, -4),
			Time.time * -15);


		Draw.rect(
			"random-stuff-BDrone-rotor",
			unit.x + Angles.trnsx(unit.rotation - 90, -4, -4),
			unit.y + Angles.trnsy(unit.rotation - 90, -4, -4),
			Time.time * -15);
	}
});
DDrone.constructor = () => extend(UnitEntity, {});