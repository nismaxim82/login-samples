interface ICoordinate { x: number, y: number }

const DEFAULT_HIT_SLOP = 25

export default function getDotIndex(
    { gestureCoordinate, dots, hitSlop = DEFAULT_HIT_SLOP }: { gestureCoordinate: ICoordinate; dots: ICoordinate[]; hitSlop?: number; }) {
    let dotIndex
    const { x, y } = gestureCoordinate
    for (let i = 0; i < dots.length; i++) {
        const { x: dotX, y: dotY } = dots[i]
        if (
            dotX + hitSlop >= x &&
            dotX - hitSlop <= x &&
            (dotY + hitSlop >= y && dotY - hitSlop <= y)
        ) {
            dotIndex = i
            break
        }
    }
    return dotIndex
}
