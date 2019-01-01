const generator = function * (sequencer) {
    let results;
    let args = [...arguments];
    args.shift();
    if (args.length > 0) {
        results = sequencer.apply(null, args);
    } else {
        results = sequencer();
    }
    for (let i = 0; i < results.length; i++) {
        yield results[i];
    }
}

export default generator;