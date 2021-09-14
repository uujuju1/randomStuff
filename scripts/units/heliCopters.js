const copterRotors = [
	Core.atlas.find("random-stuff-ACopter-rotor"),
	Core.atlas.find("random-stuff-BCopter-rotor"),
	Core.atlas.find("random-stuff-CCopter-rotorA"),
	Core.atlas.find("random-stuff-DCopter-rotorA"),
	Core.atlas.find("random-stuff-CCopter-rotorB")
]
// copters
const ACopter = extend(UnitType, "ACopter", {
	draw(unit) {
		this.super$draw(unit);
		Draw.rect(
			copterRotors[0],
			unit.x + Angles.trnsx(unit.rotation - 90, 0, 6),
			unit.y + Angles.trnsy(unit.rotation - 90, 0, 6),
			Time.time * -15);
	}
});
ACopter.constructor = () => extend(UnitEntity, {});

const BCopter = extend(UnitType, "BCopter", {
	draw(unit) {
		this.super$draw(unit);
		Draw.rect(
			copterRotors[1],
			unit.x + Angles.trnsx(unit.rotation - 90, 0, 8),
			unit.y + Angles.trnsy(unit.rotation - 90, 0, 8),
			Time.time * -15);
	}
});
BCopter.constructor = () => extend(UnitEntity, {});

const CCopter = extend(UnitType, "CCopter", {
	draw(unit) {
		this.super$draw(unit);
		Draw.rect(
			copterRotors[4],
			unit.x + Angles.trnsx(unit.rotation - 90, 6, -10),
			unit.y + Angles.trnsy(unit.rotation - 90, 6, -10),
			Time.time * -15);
		Draw.rect(
			copterRotors[4],
			unit.x + Angles.trnsx(unit.rotation - 90, -6, -10),
			unit.y + Angles.trnsy(unit.rotation - 90, -6, -10),
			Time.time * -15);
		Draw.rect(
			copterRotors[2],
			unit.x + Angles.trnsx(unit.rotation - 90, 0, 8),
			unit.y + Angles.trnsy(unit.rotation - 90, 0, 8),
			Time.time * -15);
	}
});
CCopter.constructor = () => extend(UnitEntity, {});

const DCopter = extend(UnitType, "DCopter", {
	draw(unit) {
		this.super$draw(unit);
		Draw.rect(
			copterRotors[3],
			unit.x + Angles.trnsx(unit.rotation - 90, 0, 12),
			unit.y + Angles.trnsy(unit.rotation - 90, 0, 12),
			Time.time * -15);
		Draw.rect(
			copterRotors[4],
			unit.x + Angles.trnsx(unit.rotation - 90, 6, -16),
			unit.y + Angles.trnsy(unit.rotation - 90, 6, -16),
			Time.time * -15);
		Draw.rect(
			copterRotors[4],
			unit.x + Angles.trnsx(unit.rotation - 90, -6, -16),
			unit.y + Angles.trnsy(unit.rotation - 90, -6, -16),
			Time.time * -15);
	}
});
DCopter.constructor = () => extend(UnitEntity, {});