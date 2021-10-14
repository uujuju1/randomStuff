// copters
const ACopter = extend(UnitType, "ACopter", {
	draw(unit) {
		this.super$draw(unit);
		Draw.alpha(1);
		Draw.rect(
			"random-stuff-ACopter-rotor",
			unit.x + Angles.trnsx(unit.rotation - 90, 0, 6),
			unit.y + Angles.trnsy(unit.rotation - 90, 0, 6),
			Time.time * -15);
	}
});
ACopter.constructor = () => extend(UnitEntity, {});

const BCopter = extend(UnitType, "BCopter", {
	draw(unit) {
		this.super$draw(unit);
		Draw.alpha(1);
		Draw.rect(
			"random-stuff-BCopter-rotor",
			unit.x + Angles.trnsx(unit.rotation - 90, 0, 8),
			unit.y + Angles.trnsy(unit.rotation - 90, 0, 8),
			Time.time * -15);
	}
});
BCopter.constructor = () => extend(UnitEntity, {});

const CCopter = extend(UnitType, "CCopter", {
	draw(unit) {
		this.super$draw(unit);
		Draw.alpha(1);
		Draw.rect(
			"random-stuff-CCopter-rotorB",
			unit.x + Angles.trnsx(unit.rotation - 90, 6, -10),
			unit.y + Angles.trnsy(unit.rotation - 90, 6, -10),
			Time.time * -15);
		Draw.rect(
			"random-stuff-CCopter-rotorB",
			unit.x + Angles.trnsx(unit.rotation - 90, -6, -10),
			unit.y + Angles.trnsy(unit.rotation - 90, -6, -10),
			Time.time * -15);
		Draw.rect(
			"random-stuff-CCopter-rotorA",
			unit.x + Angles.trnsx(unit.rotation - 90, 0, 8),
			unit.y + Angles.trnsy(unit.rotation - 90, 0, 8),
			Time.time * -15);
	}
});
CCopter.constructor = () => extend(UnitEntity, {});

const DCopter = extend(UnitType, "DCopter", {
	draw(unit) {
		this.super$draw(unit);
		Draw.alpha(1);
		Draw.rect(
			"random-stuff-DCopter-rotorA",
			unit.x + Angles.trnsx(unit.rotation - 90, 0, 12),
			unit.y + Angles.trnsy(unit.rotation - 90, 0, 12),
			Time.time * -15);
		Draw.rect(
			"random-stuff-DCopter-joint",
			unit.x + Angles.trnsx(unit.rotation - 90, 0, 12),
			unit.y + Angles.trnsy(unit.rotation - 90, 0, 12),
			0);
		Draw.rect(
			"random-stuff-CCopter-rotorB",
			unit.x + Angles.trnsx(unit.rotation - 90, 6, -16),
			unit.y + Angles.trnsy(unit.rotation - 90, 6, -16),
			Time.time * -15);
		Draw.rect(
			"random-stuff-CCopter-rotorB",
			unit.x + Angles.trnsx(unit.rotation - 90, -6, -16),
			unit.y + Angles.trnsy(unit.rotation - 90, -6, -16),
			Time.time * -15);
	}
});
DCopter.constructor = () => extend(UnitEntity, {});