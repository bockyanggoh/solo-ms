var COST = 100000000;
var SLOT_CAP = 200;

function start() {
  if (cm.getMeso() < COST) {
    cm.sendOk(
      "If you broke just say so. Come back when you have 100 million mesos.",
    );
    cm.dispose();
    return;
  }

  cm.sendYesNo(
    "Hi, I am #p9010002#. " +
      "Would you like to add a scroll slot to your weapon?\n\n" +
      "Cost: 100,000,000 mesos",
  );
}

function action(mode, type, selection) {
  if (mode !== 1) {
    cm.dispose();
    return;
  }

  if (cm.getMeso() < COST) {
    cm.sendOk(
      "Looks like you spent your mesos while we were talking. Come back with 100 million!",
    );
    cm.dispose();
    return;
  }

  var success = cm.addWeaponUpgradeSlot(SLOT_CAP);
  if (!success) {
    cm.sendOk(
      "You either don't have a weapon equipped or it already has " +
        SLOT_CAP +
        " slots added.",
    );
    cm.dispose();
    return;
  }

  cm.gainMeso(-COST);
  cm.sendOk("Done! Your weapon has been enchanted. Come back any time!");
  cm.dispose();
}
