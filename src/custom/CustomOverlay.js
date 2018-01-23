export function CustomOverlay(map, image, bounds) {
    this.map = map;
    this.image = image;
    this.bounds = bounds;
    this.div = null;
    this.setMap(map);
}


