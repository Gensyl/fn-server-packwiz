// priority: 99
//   __   ___   _    _  _ ___ _    ___ ___   _        __
//   \ \ / /_\ | |  | || | __| |  / __|_ _| /_\      / /
//    \ V / _ \| |__| __ | _|| |__\__ \| | / _ \    / _ \
//     \_/_/ \_\____|_||_|___|____|___/___/_/ \_\   \___/
//

/**
 * @file Recipe removals for Valhelsia 6's Recipe Overhaul Mode.
 * 
 * If intending to replace the recipe with a new one (be it differing input or output), 
 * it is preferable to use replace instead of remove, if practical.
 * @see replace.js
 * 
 * @copyright Valhelsia Inc 2024
 */

/**
 * Recipe Removal Event Handler
 */
ServerEvents.recipes(event => {
  if (!global.config.overhaul) {
    return;
  }

  // Remove recipes by recipe ID.
  [
    'valhelsia:crafting/pneumaticcraft/speed_upgrade', // Now only made with glycerol, not sugar.
    'minecraft:bread', // Now requires dough + cooking.
    'ars_elemental:glyph_conjure_terrain',
    'ars_nouveau:enchanters_eye',
    // 'ars_nouveau:glyph_break',
    'ars_nouveau:glyph_conjure_water',
    'ars_nouveau:glyph_extract',
    // 'ars_nouveau:glyph_hex',
    // 'ars_nouveau:glyph_pierce',
    'ars_nouveau:mob_jar',
    'ars_nouveau:novice_spell_book',
    'ars_nouveau:apprentice_spell_book_upgrade',
    'ars_nouveau:archmage_spell_book_upgrade',
    'ars_nouveau:void_prism',
    'botania:mana_void',
    'botania:redstone_root',
    // 'cave_enhancements:amethyst_flute',
    'computercraft:computer_advanced',
    'computercraft:computer_normal',
    'computercraft:monitor_advanced',
    'computercraft:monitor_normal',
    'computercraft:speaker',
    'galosphere:silver_bomb',
    // 'immersivepetroleum:molotov_wool',
    'mekanism:teleportation_core',
    // 'modularrouters:sender_module_3',
    // 'modularrouters:void_module',
    // 'moreminecarts:silica_steel_mix',
    // 'moreminecarts:silica_steel_blasting',
    // 'moreminecarts:silica_steel_smelting',
    'quark:tweaks/crafting/utility/bent/bread',// Now requires dough + cooking.
    'sophisticatedbackpacks:backpack',
    'sophisticatedbackpacks:void_upgrade',
    'sophisticatedbackpacks:advanced_void_upgrade',
    'storagedrawers:diamond_storage_upgrade',
    'storagedrawers:emerald_storage_upgrade',
    'storagedrawers:void_upgrade',
    'supplementaries:globe_sepia',
    'xercamusic:lyre',
    // 'xercamusic:xylophone',
  ].forEach((recipeID) => event.remove({id: recipeID}));

  // Remove recipes by input.
  [
    // Note: Should generally use recipe IDs instead of input ingredient.

  ].forEach((ingredientID) => event.remove({input: ingredientID}));
  
  // Remove recipes by output.
  [
    // Note: Should generally use recipe IDs instead of output item.
    
  ].forEach((itemID) => event.remove({output: itemID}));

});