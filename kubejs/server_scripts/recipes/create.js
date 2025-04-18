// priority: 10
//   __   ___   _    _  _ ___ _    ___ ___   _        __
//   \ \ / /_\ | |  | || | __| |  / __|_ _| /_\      / /
//    \ V / _ \| |__| __ | _|| |__\__ \| | / _ \    / _ \
//     \_/_/ \_\____|_||_|___|____|___/___/_/ \_\   \___/
//

/**
 * @file Recipe additions for Create's crafting methods.
 * 
 * @copyright Valhelsia Inc 2024
 */

/**
 * Create Recipe Event Handler
 */
ServerEvents.recipes(event => {
  const ID_PREFIX = 'valhelsia:create/';

  // Filling
  // event.recipes.create.filling('irons_spellbooks:blood_vial', [Fluid.of('biomesoplenty:blood 250'), 'minecraft:glass_bottle']).id(`${ID_PREFIX}filling/blood_vial`);

  // Mechanical Crafting
  event.recipes.create.mechanical_crafting('valhelsia_structures:dungeon_door', [
    'CCCC',
    'HWWH',
    'CWWC',
    'HSSH',
    'CCCC'
  ], {
    C: '#forge:ingots/steel',
    W: 'minecraft:dark_oak_planks',
    H: 'create:shaft',
    S: '#forge:plates/steel',
  }).id(`${ID_PREFIX}mechanical_crafting/dungeon_door`);

  // Mixing
  event.recipes.create.mixing([Fluid.of('minecraft:milk 250')], [Fluid.of('minecraft:water 250'), '#valhelsia:nuts']).heated().id(`${ID_PREFIX}mixing/milk_from_nuts`);
  // event.recipes.create.mixing([Fluid.of('immersiveengineering:phenolic_resin 250')], [Fluid.of('immersiveengineering:acetaldehyde 250'), 'darkerdepths:resin']).heated().id(`${ID_PREFIX}mixing/phenolic_resin_from_resin`);

});