-- Berserkie (9420514) - Level 85
INSERT INTO drop_data (dropperid, itemid, minimum_quantity, maximum_quantity, questid, chance)
VALUES (9420514, 0, 500, 750, 0, 400000);

-- Montrecer (9420518) - Level 105
INSERT INTO drop_data (dropperid, itemid, minimum_quantity, maximum_quantity, questid, chance)
VALUES (9420518, 0, 700, 900, 0, 400000);

-- Krexel Phase 1 (9420521) - mesos only, not the rewarding form
INSERT INTO drop_data (dropperid, itemid, minimum_quantity, maximum_quantity, questid, chance)
VALUES (9420521, 0, 5000, 15000, 0, 400000);

-- Krexel Last Form (9420522) - full loot table
INSERT INTO drop_data (dropperid, itemid, minimum_quantity, maximum_quantity, questid, chance)
VALUES
    (9420522, 0,       10000, 30000, 0, 400000),  -- Mesos
    (9420522, 2020013, 1,     1,     0, 999999),  -- Reindeer Milk (guaranteed)
    (9420522, 2020015, 1,     1,     0, 999999),  -- Sunset Dew (guaranteed)
    (9420522, 2000005, 1,     1,     0, 999999),  -- Power Elixir (guaranteed)
    (9420522, 2000004, 1,     1,     0, 999999),  -- Elixir (guaranteed)
    (9420522, 1442044, 1,     1,     0, 31500),   -- Zedbug (warrior equip)
    (9420522, 2290000, 1,     1,     0, 20000),   -- [Mastery Book] Monster Magnet 20
    (9420522, 2290001, 1,     1,     0, 20000),   -- [Mastery Book] Monster Magnet 30
    (9420522, 2290025, 1,     1,     0, 20000);   -- [Mastery Book] Mana Reflection 30
