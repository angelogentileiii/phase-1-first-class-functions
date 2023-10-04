function goForAWalk(){
    console.log(`Let's go for a walk!`)
}

function loveWalks(){
    console.log(`Yes! I love walks.`)
}

function goForARun(){
    console.log(`I want to run.`)
}

function receivesAFunction(callback) {
    goForAWalk();
    callback();
}

//receivesAFunction(loveWalks);

/*
function returnsANamedFunction() {
    let excitement;
    if (walking === goForARun) {
        excitement = 'Sounds good!';
    } else if (walking === loveWalks) {
        excitement = 'YESSSSSS!!!!';
    } else {
        excitement = 'I guess so.';
    }

    receivesAFunction(walking);

    const returnFunc = (() => console.log(`${excitement} I am ready`))
    return returnFunc()
}

returnsANamedFunction(goForARun);

*/

function returnsANamedFunction(){
    const returnFunc = (() => console.log(`I'm ready.`))
    return returnFunc;
}

function returnsAnAnonymousFunction(){
    return (() => console.log(`Hello everyone!`))
}