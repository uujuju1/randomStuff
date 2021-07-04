const tahamaki = extend(Planet, "tahamaki", Planets.serpulo, 0.3, 0.3, {
	generator: new SerpuloPlanetGenerator(),
    bloom: true,
    radius: 0.3,
    accessible: true,
    hasAtmosphere: false,
    localizedName: "Tahamaki"
});
tahamaki.meshLoader = () => extend(HexMesh, tahamaki, 2, {});