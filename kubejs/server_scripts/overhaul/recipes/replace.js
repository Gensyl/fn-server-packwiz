// priority: 89
//   __   ___   _    _  _ ___ _    ___ ___   _        __
//   \ \ / /_\ | |  | || | __| |  / __|_ _| /_\      / /
//    \ V / _ \| |__| __ | _|| |__\__ \| | / _ \    / _ \
//     \_/_/ \_\____|_||_|___|____|___/___/_/ \_\   \___/
//

/**
 * @file Recipe input / output replacements for Valhelsia 6's Recipe Overhaul mode.
 * 
 * This replaces a number of recipe ingredients or outputs with things that better
 * fit our vision for a cohesive modpack. These are often harder to make, but not
 * always. As such, it's not really an "expert mode" as it is just our take on things.
 * 
 * @copyright Valhelsia Inc 2024
 */

/**
 * Recipe Replacement Event Handler
 */
ServerEvents.recipes(event => {
  if (!global.config.overhaul) {
    return;
  }

  // ----- Convenience Functions -----

  /**
   * Replaces a given input ingredient in all KubeJS-compatible recipes.
   * @param {*} from Original ingredient.
   * @param {*} to New ingredient.
   */
  const replaceInput = (from, to) => {
    event.replaceInput({}, from, to);
  };

  /**
   * Replaces a given output item in all KubeJS-compatible recipes.
   * @param {*} from Original output item.
   * @param {*} to New output item.
   */
  const replaceOutput = (from, to) => {
    event.replaceOutput({}, from, to);
  };

  /**
   * Replaces input ingredients in one or more recipes, by recipe ID.
   * @param {string|Array} recipes One or more recipe IDs to replace ingredients in.
   * @param {*} from Original ingredient.
   * @param {*} to New ingredient.
   */
  const replaceInputID = (recipes, from, to) => {
    if (Array.isArray(recipes)) {
      recipes.forEach((recipeID) => event.replaceInput({id: recipeID}, from, to));
    } else {
      event.replaceInput({id: recipes}, from, to);
    }
  };

  /**
   * Replaces output items in one or more recipes, by recipe ID.
   * @param {string|Array} recipes One or more recipe IDs to replace items in.
   * @param {*} from Original item.
   * @param {*} to New item.
   */
  const replaceOutputID = (recipes, from, to) => {
    if (Array.isArray(recipes)) {
      recipes.forEach((recipeID) => event.replaceOutput({id: recipeID}, from, to));
    } else {
      event.replaceOutput({id: recipes}, from, to);
    }
  };

  // Replace inputs / outputs by recipe type.
  const replaceInputType = (recipeType, from, to) => {
    event.replaceInput({type: recipeType}, from, to);
  };

  const replaceOutputType = (recipeType, from, to) => {
    event.replaceOutput({type: recipeType}, from, to);
  };

  /// ----- Generic Replacements -----

  // Bottle -> Jar
  replaceInputID([
    'twilightforest:cicada_jar', 
    'twilightforest:firefly_jar'
  ], 'minecraft:glass_bottle', 'supplementaries:jar');

  // Ink Sac -> Antique Ink
  replaceInputID([
    'minecraft:writable_book',
    'fairylights:letter_bunting',
    'xercamusic:music_sheet',
  ], 'minecraft:ink_sac', 'supplementaries:antique_ink');


  // ----- Mod-specific Replacements -----

  // Ad Astra
  replaceInputID('ad_astra:recipes/solar_panel', 'minecraft:blue_stained_glass', 'mekanismgenerators:solar_panel');

  // Applied Energistics 2
  replaceInputID('ae2:tools/network_memory_card', 'minecraft:iron_ingot', '#forge:plates/aluminum');
  replaceInputID('ae2:tools/network_memory_card', 'minecraft:gold_ingot', '#forge:plates/gold');

  // Botania
  replaceInputID('botania:cacophonium', 'minecraft:copper_ingot', '#forge:ingots/brass');

  // ComputerCraft
  replaceInputID('computercraft:computer_advanced_upgrade', '#forge:ingots/gold', '#forge:plates/gold');

  // Engineer's Decor
  // replaceInputID('engineersdecor:dependent/small_solar_panel_recipe', 'minecraft:quartz', 'mekanismgenerators:solar_panel');
  // replaceInput('engineersdecor:metal_bar', '#forge:rods/steel');

  // Forbidden and Arcanus
  replaceInputID('forbidden_arcanus:enchanted_golden_apple', 'forbidden_arcanus:deorum_ingot', '#forge:storage_blocks/deorum');

  // Immersive Engineering
  replaceInputID('immersiveengineering:crafting/empty_casing', '#forge:plates/copper', '#forge:plates/brass');
  replaceInputID('immersiveengineering:metalpress/bullet_casing', '#forge:plates/copper', '#forge:plates/brass');

  // Joy of Painting

  // Modular Routers
  // replaceInputID('modularrouters:modular_router', 'minecraft:iron_bars', '#forge:plates/aluminum');

  // Xerca's Music Maker Mod

  // Tonewoods
  replaceInputID('xercamusic:cello', 'minecraft:stick', 'minecraft:spruce_planks');
  replaceInputID('xercamusic:cello', 'minecraft:dark_oak_planks', 'autumnity:maple_planks');
  replaceInputID('xercamusic:guitar', 'minecraft:stick', 'biomesoplenty:mahogany_planks');
  // replaceInputID('xercamusic:guitar', 'minecraft:oak_planks', 'atmospheric:rosewood_planks');
  replaceInputID('xercamusic:redstone_guitar', 'minecraft:stick', 'autumnity:maple_planks');
  replaceInputID('xercamusic:redstone_guitar', 'minecraft:oak_planks', 'ecologics:walnut_planks');
  replaceInputID('xercamusic:violin', 'minecraft:spruce_planks', 'autumnity:maple_planks');

  // Metals
  replaceInputID([
    'xercamusic:french_horn',
    'xercamusic:saxophone',
    'xercamusic:tubular_bell',
  ], 'minecraft:gold_nugget', '#forge:nuggets/brass');

  replaceInputID('xercamusic:cymbal', 'minecraft:gold_nugget', '#forge:nuggets/bronze');
  replaceInputID('xercamusic:redstone_guitar', 'minecraft:string', '#forge:wires/steel');
  replaceInputID('xercamusic:sansula', 'minecraft:gold_nugget', '#forge:nuggets/steel');

});