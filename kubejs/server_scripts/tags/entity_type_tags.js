// priority: 110
//   __   ___   _    _  _ ___ _    ___ ___   _        __
//   \ \ / /_\ | |  | || | __| |  / __|_ _| /_\      / /
//    \ V / _ \| |__| __ | _|| |__\__ \| | / _ \    / _ \
//     \_/_/ \_\____|_||_|___|____|___/___/_/ \_\   \___/
//                       

/**
 * @file Entity Type Tag additions for Valhelsia 6.
 * @copyright Valhelsia Inc 2023-2024
 */

/**
 * Entity Type Tag Event Handler
 */
ServerEvents.tags('entity_type', event => {

  // Blacklist some overpowered drygmy mobs (mainly bosses).
  event.add('ars_nouveau:drygmy_blacklist', [
    'artifacts:mimic',
    //'irons_spellbooks:dead_king',
    'twilightforest:alpha_yeti',
    'twilightforest:hydra',
    'twilightforest:lich',
    'twilightforest:naga',
    'twilightforest:snow_queen',
    'twilightforest:ur_ghast',
  ]);

  // Expand Ars Nouveau Magic Find to other mobs.
  event.add('ars_nouveau:magic_find', [
    // TODO: Go through Aether, Malum, etc. for more.
    'artifacts:mimic',
    'conjurer_illager:conjurer',
    //'irons_spellbooks:archevoker',
    //'irons_spellbooks:cryomancer',
    //'irons_spellbooks:dead_king',
    //'irons_spellbooks:necromancer',
    //'irons_spellbooks:priest',
    //'irons_spellbooks:pyromancer',
    'minecraft:evoker',
    'minecraft:illusioner',
    'twilightforest:death_tome',
    'twilightforest:lich',
    'twilightforest:skeleton_druid',
    'twilightforest:wraith',
  ]);

  event.add('forbidden_arcanus:quantum_catcher_blacklisted', [
    // Picking up these mobs causes the game to disconnect from a server.
    'alexsmobs:cachalot_whale',
    'alexsmobs:giant_squid',
  ]);

  // Add Halloween Event Candy to Spoopy Mobs
  event.add('valhelsia_tweaks:drops_candy', [
    'minecraft:zombie',
    'minecraft:husk',
    'minecraft:skeleton',
    'minecraft:stray',
    'minecraft:witch',
    'minecraft:spider',
    'minecraft:phantom',
    'minecraft:cave_spider',
    'minecraft:wither_skeleton',
    'alexsmobs:bone_serpent',
    'alexsmobs:murmur',
    'alexsmobs:skelewag',
    'alexsmobs:underminer',
    'aquamirae:captain_cornelia',
    'aquamirae:tortured_soul',
    //'environmental:zombie_deer',
    'goblintraders:goblin_trader',
    'goblintraders:vein_goblin_trader',
    'minecolonies:mummy',
    'minecolonies:pharao',
    'quark:forgotten',
    'quark:wraith',
    //'savage_and_ravage:skeleton_villager',
    'twilightforest:death_tome',
    'twilightforest:hedge_spider',
    'twilightforest:king_spider',
    'twilightforest:lich',
    'twilightforest:skeleton_druid',
    'twilightforest:swarm_spider',
    'twilightforest:wraith',
  ]);

});