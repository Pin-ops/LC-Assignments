function confirmEnding(str, target) {

    var action = str.substring(str.length - target.length);

    return action == target;

}
confirmEnding("Abstraction", "action");