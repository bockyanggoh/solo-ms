/* treeboss00.js
 * Portal from Ruins of Krexel I (541020700) to the Krexel boss arena (541020800).
 */

function enter(pi) {
    pi.playPortalSound();
    pi.warp(541020800, "sp");
    return true;
}
