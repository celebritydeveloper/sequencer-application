const rangeSeq = function (start, step)
{
    let range = [];
    let current = start;
    for (let i = 0; i <= 10; i++ ) {
        range.push(current);
        current += step;
    }

    return range;
}

export default rangeSeq;