// copters
const ACopter = extend(UnitType, "ACopter", {
	draw(unit) {
		this.super$draw(unit);
		Draw.rect(
			"random-stuff-ACopter-rotor",
			unit.x + Angles.trnsx(unit.rotation - 90, 0, 6),
			unit.y + Angles.trnsy(unit.rotation - 90, 0, 6),
			Time.time * -15);
		Draw.rect(
			"random-stuff-ACopter-rotor-outline",
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
			"random-stuff-BCopter-rotor",
			unit.x + Angles.trnsx(unit.rotation - 90, 0, 8),
			unit.y + Angles.trnsy(unit.rotation - 90, 0, 8),
			Time.time * -15);
		Draw.rect(
			"random-stuff-BCopter-rotor-outline",
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
			"random-stuff-CCopter-rotorB",
			unit.x + Angles.trnsx(unit.rotation - 90, 6, -10),
			unit.y + Angles.trnsy(unit.rotation - 90, 6, -10),
			Time.time * -15);
		Draw.rect(
			"random-stuff-CCopter-rotorB-outline",
			unit.x + Angles.trnsx(unit.rotation - 90, 6, -10),
			unit.y + Angles.trnsy(unit.rotation - 90, 6, -10),
			Time.time * -15);
		Draw.rect(
			"random-stuff-CCopter-rotorB",
			unit.x + Angles.trnsx(unit.rotation - 90, -6, -10),
			unit.y + Angles.trnsy(unit.rotation - 90, -6, -10),
			Time.time * -15);
		Draw.rect(
			"random-stuff-CCopter-rotorB-outline",
			unit.x + Angles.trnsx(unit.rotation - 90, -6, -10),
			unit.y + Angles.trnsy(unit.rotation - 90, -6, -10),
			Time.time * -15);
		Draw.rect(
			"random-stuff-CCopter-rotorA",
			unit.x + Angles.trnsx(unit.rotation - 90, 0, 8),
			unit.y + Angles.trnsy(unit.rotation - 90, 0, 8),
			Time.time * -15);
		Draw.rect(
			"random-stuff-CCopter-rotorA-outline",
			unit.x + Angles.trnsx(unit.rotation - 90, 0, 8),
			unit.y + Angles.trnsy(unit.rotation - 90, 0, 8),
			Time.time * -15);
	}
});
CCopter.constructor = () => extend(UnitEntity, {});