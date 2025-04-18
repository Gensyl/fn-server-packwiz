// priority: 10
//   __   ___   _    _  _ ___ _    ___ ___   _        __
//   \ \ / /_\ | |  | || | __| |  / __|_ _| /_\      / /
//    \ V / _ \| |__| __ | _|| |__\__ \| | / _ \    / _ \
//     \_/_/ \_\____|_||_|___|____|___/___/_/ \_\   \___/
//

/**
 * @file Recipe additions for Polishing with the Grindstone (Sully's Mod),
 * and with Sandpaper (Create).
 * 
 * @copyright Valhelsia Inc 2023-2024
 */

/**
 * Polishing Recipe Event Handler
 */
ServerEvents.recipes(event => {
  const ID_PREFIX = 'valhelsia:polishing/';

  /**
   * Creates a new Grindstone Polishing recipe.
   * @param {(!string|!Item)} output Output item.
   * @param {(!string|!InputItem)} input Input ingredient.
   */
  const polish = (output, input) => {
    event.custom({
      type: 'sullysmod:grindstone_polishing',
      experience: 1,
      ingredients: [InputItem.of(input).ingredient.toJson()],
      result: OutputItem.of(output).item.toJson(),
    }).id(`${ID_PREFIX}grindstone/${OutputItem.of(output).item.id.replace(':','/')}_from_${InputItem.of(input).ingredient.first.id.replace(':', '_')}`);

    event.recipes.create.sandpaper_polishing(output, input).id(`${ID_PREFIX}sandpaper/${OutputItem.of(output).item.id.replace(':','/')}_from_${InputItem.of(input).ingredient.first.id.replace(':', '_')}`);

  };

  // Remove unused polishing recipes.
  [
    'create:sandpaper_polishing/polished_jade',
    'create:sandpaper_polishing/rose_quartz',
    // 'minecraft:sandpaper_polishing/iron_bars_from_polishing', // Create Deco has the wrong namespace.
    'sullysmod:grindstone_polishing/polished_jade_from_jade_ore',
    'sullysmod:grindstone_polishing/polished_jade_from_rough_jade',
    'sullysmod:grindstone_polishing/polished_jade_from_deepslate_jade_ore',
  ].forEach((recipeID) => event.remove({id: recipeID}));

  // General Polishing
  polish('sullysmod:polished_jade', 'sullysmod:rough_jade');
  polish('create:polished_rose_quartz', '#valhelsia:rose_quartz');
  // polish('createdeco:polished_iron_bars', 'minecraft:iron_bars');
  // polish('createdeco:polished_iron_bars_overlay', 'createdeco:iron_bars_overlay');

  // Stone Polishing
  // TODO
});