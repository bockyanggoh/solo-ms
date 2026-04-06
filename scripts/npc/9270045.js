var status;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, sel) {
    if (mode == -1 || mode == 0) {
        cm.dispose();
        return;
    }

    status++;

    if (status == 0) {
        cm.sendSimple("I'm Commando Jim. Krexel lies just ahead. Only the strongest dare face it.\r\n#b#L0#Return to the Ruins of Krexel#l");
    } else if (status == 1) {
        cm.warp(541020700);
        cm.dispose();
    } else {
        cm.dispose();
    }
}
