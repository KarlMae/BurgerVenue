export const checkIfCoordinateWithinDistance = (coordinateToCheck, centerCoordinate, km) => {
    const ky = 40000 / 360;
    const kx = Math.cos(Math.PI * centerCoordinate.lat / 180.0) * ky;
    const dx = Math.abs(centerCoordinate.lng - coordinateToCheck.lng) * kx;
    const dy = Math.abs(centerCoordinate.lat - coordinateToCheck.lat) * ky;
    return Math.sqrt(dx * dx + dy * dy) >= km;
}
