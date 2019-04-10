export default function populateDotsCoordinate(
    dotsDimension: number,
    containerWidth: number,
    containerHeight: number
) {
    const mappedIndex = []
    const screenCoordinates = []

    for (let rowIndex = 0; rowIndex < dotsDimension; rowIndex++) {
        for (let columnIndex = 0; columnIndex < dotsDimension; columnIndex++) {
            const offsetX = containerWidth / dotsDimension * columnIndex
            const offsetY = containerHeight / dotsDimension * rowIndex

            screenCoordinates.push({
                x: offsetX + containerWidth / dotsDimension / 2,
                y: offsetY + containerWidth / dotsDimension / 2
            })
            mappedIndex.push({ x: columnIndex, y: rowIndex })
        }
    }

    return {
        mappedIndex,
        screenCoordinates
    }
}
