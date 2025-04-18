// priority: 9
//   __   ___   _    _  _ ___ _    ___ ___   _        __
//   \ \ / /_\ | |  | || | __| |  / __|_ _| /_\      / /
//    \ V / _ \| |__| __ | _|| |__\__ \| | / _ \    / _ \
//     \_/_/ \_\____|_||_|___|____|___/___/_/ \_\   \___/
//

/**
 * @file Shapeless recipe additions for Valhelsia 6's Recipe Overhaul Mode.
 * @see shaped.js
 * 
 * @copyright Valhelsia Inc 2024
 */

/**
 * Shapeless Recipe Event Handler
 */
ServerEvents.recipes(event => {
  if (!global.config.overhaul) {
    return;
  }

  const ID_PREFIX = 'valhelsia:overhaul/crafting/shapeless/';

  // Ars Nouveau
  event.shapeless('ars_nouveau:novice_spell_book', [
    'minecraft:book',
    ['botania:manasteel_shovel'],//, 'forbidden_arcanus:deorum_shovel'],
    ['botania:manasteel_pick'],//, 'forbidden_arcanus:deorum_pickaxe'],
    ['botania:manasteel_axe'],//, 'forbidden_arcanus:deorum_axe'],
    ['botania:manasteel_sword'],//, 'forbidden_arcanus:deorum_sword'],
  ]).id(`${ID_PREFIX}novice_spell_book`);

  // Botania
  event.shapeless('botania:redstone_root', 'minecraft:hanging_roots').id(`${ID_PREFIX}redstone_root`);

  // Supplementaries
  event.shapeless('supplementaries:globe_sepia', ['supplementaries:globe', 'supplementaries:antique_ink', '#forge:dyes/brown']).id(`${ID_PREFIX}sepia_globe`);
});
