// priority: 10
//   __   ___   _    _  _ ___ _    ___ ___   _        __
//   \ \ / /_\ | |  | || | __| |  / __|_ _| /_\      / /
//    \ V / _ \| |__| __ | _|| |__\__ \| | / _ \    / _ \
//     \_/_/ \_\____|_||_|___|____|___/___/_/ \_\   \___/
//

/**
 * @file Shapeless recipe additions for Valhelsia 6.
 * 
 * @see shaped.js
 * 
 * @copyright Valhelsia Inc 2024
 */

/**
 * Shapeless Recipe Event Handler
 */
ServerEvents.recipes(event => {
  const ID_PREFIX = 'valhelsia:crafting/';

  // Minecraft
  event.shapeless('minecraft:yellow_dye', 'forbidden_arcanus:yellow_orchid').id(`${ID_PREFIX}yellow_dye_from_yellow_orchid`);
  event.shapeless('9x minecraft:copper_ingot', 'minecraft:copper_block').id(`${ID_PREFIX}copper_ingot`);

  // Biomes 'o' Plenty
  event.shapeless('2x biomesoplenty:orange_sand', ['minecraft:sand', 'minecraft:red_sand']).id(`${ID_PREFIX}orange_sand`);

  // Create
  event.shapeless('create:brass_sheet', ['#forge:ingots/brass', 'immersiveengineering:hammer']).id(`${ID_PREFIX}brass_sheet_hammering`);
  
  // Darker Depths
  //event.shapeless('darkerdepths:mossy_grimestone', ['darkerdepths:grimestone', 'darkerdepths:glowspire']).id(`${ID_PREFIX}mossy_grimestone`);

  // Ecologics
  //event.shapeless('4x ecologics:surface_moss', 'minecraft:moss_block').id(`${ID_PREFIX}surface_moss`);  

  // Farmer's Delight
  event.shapeless('farmersdelight:organic_compost', [
    'minecraft:dirt', 
    'farmersdelight:straw',
    'farmersdelight:straw',
    'minecraft:bone_meal',
    'minecraft:bone_meal',
    '#forge:dusts/wood',
    '#forge:dusts/wood',
    '#forge:dusts/wood',
    '#forge:dusts/wood'
  ]).id(`${ID_PREFIX}compost_from_sawdust`);

  // Forbidden and Arcanus
  event.shapeless('4x forbidden_arcanus:ender_pearl_fragment', 'minecraft:ender_pearl').id(`${ID_PREFIX}ender_pearl_fragments_from_ender_pearl`);

  // Mekanism
  event.shapeless('9x mekanism:ingot_uranium', 'mekanism:block_uranium').id(`${ID_PREFIX}uranium_ingots_from_block`);

  // Phantasmic (Nourished Nether)
  event.shapeless('9x nourished_nether:ectoplasm', 'nourished_nether:ectoplasm_block').id(`${ID_PREFIX}ectoplasm_from_block`);
  event.shapeless('9x nourished_nether:wither_bone', 'nourished_nether:wither_bone_block').id(`${ID_PREFIX}wither_bone_from_block`);

  // Quark
  event.shapeless('2x quark:myalite', ['minecraft:cobblestone', 'minecraft:amethyst_block', 'quark:myalite_crystal']).id(`${ID_PREFIX}myalite`);
  event.shapeless('quark:dusky_myalite', ['ars_nouveau:sourcestone', 'quark:myalite_crystal']).id(`${ID_PREFIX}dusky_myalite`);
  event.shapeless('9x quark:ravager_hide', ['quark:bonded_ravager_hide']).id(`${ID_PREFIX}ravager_hide_from_bonded_ravager_hide`);

});
