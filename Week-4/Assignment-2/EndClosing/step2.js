function end(congrat, ending) {

    var start = congrat.length - (ending.length);

    if (congrat.substr(start, congrat.length) === ending) {

        return true;

    } else {

        return false;
    }

}
end("Congratulation", "on")