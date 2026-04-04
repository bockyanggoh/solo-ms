var status;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, sel) {
    if (mode == -1) {
        cm.dispose();
        return;
    }
    if (mode == 0 && type > 0) {
        cm.dispose();
        return;
    }

    status++;

    if (status == 0) {
        cm.sendSimple("Hey, welcome to Barry's corner store! What are you looking for?\r\n#L0#Equipment Shop#l\r\n#L1#Use Items Shop#l\r\n#L2#Etc Shop#l");
    } else if (status == 1) {
        if (sel == 0) {
            cm.openShopNPC(9201088);
            cm.dispose();
        } else if (sel == 1) {
            cm.openShopNPC(9201089);
            cm.dispose();
        } else {
            cm.openShopNPC(9201090);
            cm.dispose();
        }
    } else {
        cm.dispose();
    }
}
