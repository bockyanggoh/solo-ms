var status;
var exchangeAmount;

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
        cm.sendSimple("Hey, welcome to Barry's corner store! What are you looking for?\r\n#L0#Equipment Shop#l\r\n#L1#Use Items Shop#l\r\n#L2#Etc Shop#l\r\n#L3#Exchange Mesos for NX#l");
    } else if (status == 1) {
        if (sel == 0) {
            cm.openShopNPC(9201088);
            cm.dispose();
        } else if (sel == 1) {
            cm.openShopNPC(9201089);
            cm.dispose();
        } else if (sel == 2) {
            cm.openShopNPC(9201090);
            cm.dispose();
        } else if (sel == 3) {
            cm.sendGetNumber("How many sets would you like to exchange?\r\nRate: #r1 set = 10,000,000 mesos = 10,000 NX#k\r\nYou currently have #b" + cm.getMeso() + " mesos#k.\r\nMax: 210 sets (2,100,000,000 mesos = 2,100,000 NX).", 1, 1, 210);
        } else {
            cm.dispose();
        }
    } else if (status == 2) {
        var sets = sel;
        var mesos = sets * 10000000;
        var nx = sets * 10000;
        if (mesos > cm.getMeso()) {
            cm.sendOk("You don't have enough mesos. You need #r" + mesos + " mesos#k for " + sets + " set(s) but only have #b" + cm.getMeso() + " mesos#k.");
            cm.dispose();
            return;
        }
        exchangeAmount = mesos;
        cm.sendYesNo("You are about to exchange #r" + mesos + " mesos#k for #b" + nx + " NX#k.\r\n(" + sets + " set(s) at 10,000,000 mesos per set)\r\nWould you like to proceed?");
    } else if (status == 3) {
        if (mode == 1) {
            if (cm.getMeso() < exchangeAmount) {
                cm.sendOk("You no longer have enough mesos to complete this exchange.");
                cm.dispose();
                return;
            }
            var nx = (exchangeAmount / 10000000) * 10000;
            cm.gainMeso(-exchangeAmount);
            cm.getPlayer().getCashShop().gainCash(1, nx);
            cm.sendOk("Exchange complete! #r" + exchangeAmount + " mesos#k have been converted to #b" + nx + " NX#k.");
        }
        cm.dispose();
    } else {
        cm.dispose();
    }
}
