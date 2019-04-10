interface ICoordinate { x: number, y: number }

export default function getIntermediateDotIndexes(
    anchorCoordinate: ICoordinate,
    focusCoordinate: ICoordinate,
    dimension: number
) {
    const intermediateDotIndexes = []
    // const testIndex = []

    // check horizontal
    if (focusCoordinate.y === anchorCoordinate.y) {
        const row = focusCoordinate.y
        for (
            let col = Math.min(focusCoordinate.x, anchorCoordinate.x) + 1;
            col < Math.max(focusCoordinate.x, anchorCoordinate.x);
            col++
        ) {
            const index = row * dimension + col
            intermediateDotIndexes.push(index)
        }
    }

    // check vertical
    if (focusCoordinate.x === anchorCoordinate.x) {
        const col = anchorCoordinate.x
        for (
            let row = Math.min(focusCoordinate.y, anchorCoordinate.y) + 1;
            row < Math.max(focusCoordinate.y, anchorCoordinate.y);
            row++
        ) {
            const index = row * dimension + col
            intermediateDotIndexes.push(index)
        }
    }

    // check diagonal
    const dx = focusCoordinate.x - anchorCoordinate.x
    const dy = focusCoordinate.y - anchorCoordinate.y
    if (Math.abs(dx) === Math.abs(dy)) {
        let loopCount = 1

        const getCalculatedCol = (iterator: number) => {
            if (dx === dy) {
                // diagonal from top left to bottom right or vice versa
                const col = Math.min(focusCoordinate.x, anchorCoordinate.x)
                return col + iterator
            } else {
                // diagonal from top right to bottom left or vice versa
                const col = Math.max(focusCoordinate.x, anchorCoordinate.x)
                return col - iterator
            }
        }

        for (
            let row = Math.min(focusCoordinate.y, anchorCoordinate.y) + 1;
            row < Math.max(focusCoordinate.y, anchorCoordinate.y);
            row++
        ) {
            const index = row * dimension + getCalculatedCol(loopCount)
            intermediateDotIndexes.push(index)
            loopCount++
        }
    }

    return intermediateDotIndexes
}
