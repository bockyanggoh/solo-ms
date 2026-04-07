/* Krexel Branch Reactor (5411001)
 * Destroying this reactor spawns Krexel Phase 1 (9420521).
 * Phase 1 auto-revives into Phase 2 (9420522) on death via WZ revive field.
 * KrexelBoss.js event handles Phase 2 Bacal summoning mechanics.
 */

var KREXEL_PHASE1 = 9420521;

function act() {
    var map = rm.getReactor().getMap();
    if (map.getMonsterById(KREXEL_PHASE1) != null) {
        return; // already spawned
    }

    rm.mapMessage(6, "The Krexel Branch has been destroyed! Krexel awakens!");
    rm.summonBossDelayed(
        KREXEL_PHASE1,
        3000,
        rm.getReactor().getPosition().x,
        rm.getReactor().getPosition().y,
        "BgmSG/Ghostship",
        "Krexel has been summoned!"
    );
}
