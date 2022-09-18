let visitorCounter = 0;

export function incrementVisitorCounter() {
    visitorCounter++;
    return visitorCounter;
}
/*
//cant use this in module type syntax... this belongs to common js syntax
module.exports = {
    incrementVisitorCounter: incrementVisitorCounter
};*/