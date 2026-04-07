/* KrexelBoss.js
 * Monitors Krexel Phase 2 (9420522) on map 541020700 and summons Bacal waves
 * when HP drops below 30%. Caps at 10 Bacals on the map at any time.
 *
 * Bacal mob IDs: 9420523 and 9420524 (alternates per spawn)
 */

var MAP_ID         = 541020700;
var KREXEL_PHASE2  = 9420522;
var BACAL1         = 9420523;
var BACAL2         = 9420524;
var MAX_BACALS     = 10;
var HP_THRESHOLD   = 0.30;
var CHECK_INTERVAL = 15000; // 15 seconds

var summonTask = null;

function init() {
    summonTask = em.schedule("checkAndSummonBacals", CHECK_INTERVAL);
}

function checkAndSummonBacals() {
    var LifeFactory = Java.type('server.life.LifeFactory');
    var Point = Java.type('java.awt.Point');

    var map = em.getChannelServer().getMapFactory().getMap(MAP_ID);
    var krexel = map.getMonsterById(KREXEL_PHASE2);

    if (krexel != null) {
        var hpPercent = krexel.getHp() / krexel.getMaxHp();

        if (hpPercent <= HP_THRESHOLD) {
            // Count current Bacals on the map
            var bacalCount = 0;
            var monsters = map.getAllMonsters();
            for (var i = 0; i < monsters.size(); i++) {
                var mob = monsters.get(i);
                if (mob.getId() == BACAL1 || mob.getId() == BACAL2) {
                    bacalCount++;
                }
            }

            var toSpawn = MAX_BACALS - bacalCount;
            if (toSpawn > 0) {
                var pos = krexel.getPosition();
                for (var j = 0; j < toSpawn; j++) {
                    var bacalId = (j % 2 == 0) ? BACAL1 : BACAL2;
                    map.spawnMonsterOnGroundBelow(LifeFactory.getMonster(bacalId), pos);
                }
                map.broadcastMessage(
                    Java.type('tools.PacketCreator').serverNotice(6,
                        "Krexel calls upon its servants! Bacals have appeared!"
                    )
                );
            }
        }
    }

    // Always reschedule — boss may be re-triggered via reactor
    summonTask = em.schedule("checkAndSummonBacals", CHECK_INTERVAL);
}

// --- Required event boilerplate ---
function cancelSchedule() {
    if (summonTask != null) {
        summonTask.cancel(true);
        summonTask = null;
    }
}

function dispose() {
    cancelSchedule();
}

function setup(eim, leaderid) {}
function monsterValue(eim, mobid) { return 0; }
function disbandParty(eim, player) {}
function playerDisconnected(eim, player) {}
function playerEntry(eim, player) {}
function monsterKilled(mob, eim) {}
function scheduledTimeout(eim) {}
function afterSetup(eim) {}
function changedLeader(eim, leader) {}
function playerExit(eim, player) {}
function leftParty(eim, player) {}
function clearPQ(eim) {}
function allMonstersDead(eim) {}
function playerUnregistered(eim, player) {}
