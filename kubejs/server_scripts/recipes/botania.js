// priority: 10
//   __   ___   _    _  _ ___ _    ___ ___   _        __
//   \ \ / /_\ | |  | || | __| |  / __|_ _| /_\      / /
//    \ V / _ \| |__| __ | _|| |__\__ \| | / _ \    / _ \
//     \_/_/ \_\____|_||_|___|____|___/___/_/ \_\   \___/
//

/**
 * @file Recipe additions for Botania's recipe types.
 * 
 * @copyright Valhelsia Inc 2023-2024
 */

/**
 * Botania Recipe Event Handler
 */
ServerEvents.recipes(event => {
  const ID_PREFIX = 'valhelsia:botania/';

  /**
   * Cost of small conjuration duplication. Examples oc small cost items
   * are plants that have mainly decorative use, such as grasses and
   * roots.
   */
  const CONJ_COST_SML = 800;

  /**
   * Cost of medium conjuration duplication. Examples of medium cost items
   * are plants that have a functional use, such as wild vegetables,
   * or plants that are larger than grasses or roots but not quite full blocks.
   */
  const CONJ_COST_MED = 1000;

  /**
   * Cost of large conjuration duplication. Examples of large cost items
   * are full-block sized plants (stems, logs, etc.).
   */
  const CONJ_COST_LRG = 2000;
  
  /**
   * Creates a conjuration recipe to duplicate an item with a mana pool. 
   * 
   * @param {!string} item The Item ID of the item to duplicate (MUST be a string).
   * @param {number} [mana] The mana cost of the duplication (default: 800).
   */
  const conj2x = (item, mana) => {
    if (typeof mana == 'undefined') {
      mana = CONJ_COST_SML;
    }

    event.recipes.botania.mana_infusion(`2x ${item}`, item, mana, 'botania:conjuration_catalyst').id(`${ID_PREFIX}conjuration/${item.replace(':','/')}`);
  };

  // Mana Infusion
  //event.recipes.botania.mana_infusion('output_here', 'input_here', 200);

  // Mana Infusion - Alchemy
  event.recipes.botania.mana_infusion('minecraft:kelp', 'minecraft:seagrass', 200, 'botania:alchemy_catalyst').id(`${ID_PREFIX}alchemy/seagrass_to_kelp`);
  event.recipes.botania.mana_infusion('minecraft:seagrass', 'minecraft:kelp', 200, 'botania:alchemy_catalyst').id(`${ID_PREFIX}alchemy/kelp_to_seagrass`);
  event.recipes.botania.mana_infusion('minecraft:weeping_vines', 'minecraft:twisting_vines', 500, 'botania:alchemy_catalyst').id(`${ID_PREFIX}alchemy/twisting_vines_to_weeping_vines`);
  event.recipes.botania.mana_infusion('minecraft:twisting_vines', 'minecraft:weeping_vines', 500, 'botania:alchemy_catalyst').id(`${ID_PREFIX}alchemy/weeping_vines_to_twisting_vines`);

  // event.recipes.botania.mana_infusion('blue_skies:starlit_vine', 'blue_skies:bluebright_vine', 500, 'botania:alchemy_catalyst').id(`${ID_PREFIX}alchemy/bluebright_vine_to_starlit_vine`);
  // event.recipes.botania.mana_infusion('blue_skies:frostbright_vine', 'blue_skies:starlit_vine', 500, 'botania:alchemy_catalyst').id(`${ID_PREFIX}alchemy/starlit_vine_to_frostbright_vine`);
  // event.recipes.botania.mana_infusion('blue_skies:lunar_vine', 'blue_skies:frostbright_vine', 500, 'botania:alchemy_catalyst').id(`${ID_PREFIX}alchemy/frostbright_vine_to_lunar_vine`);
  // event.recipes.botania.mana_infusion('blue_skies:dusk_vine', 'blue_skies:lunar_vine', 500, 'botania:alchemy_catalyst').id(`${ID_PREFIX}alchemy/lunar_vine_to_dusk_vine`);
  // event.recipes.botania.mana_infusion('blue_skies:maple_vine', 'blue_skies:dusk_vine', 500, 'botania:alchemy_catalyst').id(`${ID_PREFIX}alchemy/dusk_vine_to_maple_vine`);
  // event.recipes.botania.mana_infusion('blue_skies:bluebright_vine', 'blue_skies:maple_vine', 500, 'botania:alchemy_catalyst').id(`${ID_PREFIX}alchemy/maple_vine_to_bluebright_vine`);

  // event.recipes.botania.mana_infusion('darkerdepths:lush_sprouts', 'biomesoplenty:sprout', 500, 'botania:alchemy_catalyst').id(`${ID_PREFIX}alchemy/sprout_to_lush_sprouts`);
  

  // Mana Infusion - Conjuration
  conj2x('minecraft:crimson_roots');
  conj2x('minecraft:hanging_roots');
  conj2x('minecraft:nether_sprouts');
  conj2x('minecraft:warped_roots');
  conj2x('minecraft:small_dripleaf', CONJ_COST_MED);

  // conj2x('atmospheric:arid_sprouts');
  // conj2x('atmospheric:yucca_branch');

  conj2x('biomesoplenty:barley');
  conj2x('biomesoplenty:bush');
  conj2x('biomesoplenty:cattail');
  conj2x('biomesoplenty:clover');
  conj2x('biomesoplenty:dead_grass');
  conj2x('biomesoplenty:desert_grass');
  conj2x('biomesoplenty:dune_grass');
  conj2x('biomesoplenty:huge_clover_petal', CONJ_COST_MED);
  conj2x('biomesoplenty:reed');
  conj2x('biomesoplenty:sea_oats');
  conj2x('biomesoplenty:sprout');
  conj2x('biomesoplenty:watergrass');

  // conj2x('darkerdepths:dry_sprouts');
  // conj2x('darkerdepths:glowshroom', CONJ_COST_MED);
  // conj2x('darkerdepths:glowshroom_block', CONJ_COST_LRG);
  // conj2x('darkerdepths:glowshroom_stem', CONJ_COST_LRG);
  // conj2x('darkerdepths:long_roots', CONJ_COST_MED);
  // conj2x('darkerdepths:lush_sprouts');
  // conj2x('darkerdepths:mossy_sprouts');
  // conj2x('darkerdepths:roots');
  
  // conj2x('environmental:mycelium_sprouts');

  conj2x('farmersdelight:wild_cabbages', CONJ_COST_MED);
  conj2x('farmersdelight:wild_onions', CONJ_COST_MED);
  conj2x('farmersdelight:wild_carrots', CONJ_COST_MED);
  conj2x('farmersdelight:wild_potatoes', CONJ_COST_MED);
  conj2x('farmersdelight:wild_rice', CONJ_COST_MED);
  conj2x('farmersdelight:sandy_shrub');

  // conj2x('farmersrespite:wild_tea_bush', CONJ_COST_MED);
  // conj2x('farmersrespite:wild_coffee_bush', CONJ_COST_MED);

  conj2x('forbidden_arcanus:petrified_root', CONJ_COST_MED);

  conj2x('supplementaries:wild_flax', CONJ_COST_MED);

  conj2x('twilightforest:moss_patch');
  conj2x('twilightforest:torchberry_plant');

  // Elven Trade
  // event.recipes.botania.elven_trade(['output_here'], 'input_here');

  // Pure Daisy
  event.recipes.botania.pure_daisy('forbidden_arcanus:soulless_sand', 'minecraft:soul_sand').id(`${ID_PREFIX}pure_daisy/soul_sand_to_soulless_sand`);
  event.recipes.botania.pure_daisy('minecraft:sand', 'forbidden_arcanus:soulless_sand').id(`${ID_PREFIX}pure_daisy/soulless_sand_to_sand`);

  // Brewing (Note: Needs a corresponding entry in a startup script too!)
  // event.recipes.botania.brew('kubejs:torrent', ['input_here']);

  // Petal Apothecary
  // event.recipes.botania.petal_apothecary('output_here', ['input_here']);

  // Runic Altar
  // event.recipes.botania.runic_altar('output_here', ['input_1', 'input_2'], 5000);

  // Terrestrial Agglomoration Plate
  // event.recipes.botania.terra_plate('output_here', ['input_1', 'input_2'], 5000000);

  // Orechid - Stone
  event.recipes.botania.orechid('create:zinc_ore', 'minecraft:stone', 7000).id(`${ID_PREFIX}orechid/zinc_ore`);
  event.recipes.botania.orechid('forbidden_arcanus:arcane_crystal_ore', 'minecraft:stone', 1000).id(`${ID_PREFIX}orechid/arcane_crystal_ore`);
  event.recipes.botania.orechid('immersiveengineering:ore_aluminum', 'minecraft:stone', 4000).id(`${ID_PREFIX}orechid/bauxite_ore`);
  event.recipes.botania.orechid('immersiveengineering:ore_nickel', 'minecraft:stone', 1500).id(`${ID_PREFIX}orechid/nickel_ore`);
  event.recipes.botania.orechid('immersiveengineering:ore_silver', 'minecraft:stone', 3000).id(`${ID_PREFIX}orechid/silver_ore`);
  event.recipes.botania.orechid('mekanism:fluorite_ore', 'minecraft:stone', 5000).id(`${ID_PREFIX}orechid/fluorite_ore`);
  event.recipes.botania.orechid('mekanism:lead_ore', 'minecraft:stone', 2000).id(`${ID_PREFIX}orechid/lead_ore`);
  event.recipes.botania.orechid('mekanism:osmium_ore', 'minecraft:stone', 18000).id(`${ID_PREFIX}orechid/osmium_ore`);
  event.recipes.botania.orechid('mekanism:tin_ore', 'minecraft:stone', 4000).id(`${ID_PREFIX}orechid/tin_ore`);
  event.recipes.botania.orechid('mekanism:uranium_ore', 'minecraft:stone', 1500).id(`${ID_PREFIX}orechid/uranium_ore`);
  event.recipes.botania.orechid('sullysmod:jade_ore', 'minecraft:stone', 1000).id(`${ID_PREFIX}orechid/jade_ore`);

  // Orechid - Deepslate
  event.recipes.botania.orechid('create:deepslate_zinc_ore', 'minecraft:deepslate', 150).id(`${ID_PREFIX}orechid/deepslate_zinc_ore`);
  event.recipes.botania.orechid('forbidden_arcanus:deepslate_arcane_crystal_ore', 'minecraft:deepslate', 75).id(`${ID_PREFIX}orechid/deepslate_arcane_crystal_ore`);
  event.recipes.botania.orechid('immersiveengineering:deepslate_ore_aluminum', 'minecraft:deepslate', 75).id(`${ID_PREFIX}orechid/deepslate_bauxite_ore`);
  event.recipes.botania.orechid('immersiveengineering:deepslate_ore_nickel', 'minecraft:deepslate', 100).id(`${ID_PREFIX}orechid/deepslate_nickel_ore`);
  event.recipes.botania.orechid('immersiveengineering:deepslate_ore_silver', 'minecraft:deepslate', 125).id(`${ID_PREFIX}orechid/deepslate_silver_ore`);
  // event.recipes.botania.orechid('irons_spellbooks:arcane_debris', 'minecraft:deepslate', 10).id(`${ID_PREFIX}orechid/arcane_debris`);
  event.recipes.botania.orechid('mekanism:deepslate_fluorite_ore', 'minecraft:deepslate', 100).id(`${ID_PREFIX}orechid/deepslate_fluorite_ore`);
  event.recipes.botania.orechid('mekanism:deepslate_lead_ore', 'minecraft:deepslate', 100).id(`${ID_PREFIX}orechid/deepslate_lead_ore`);
  event.recipes.botania.orechid('mekanism:deepslate_osmium_ore', 'minecraft:deepslate', 180).id(`${ID_PREFIX}orechid/deepslate_osmium_ore`);
  event.recipes.botania.orechid('mekanism:deepslate_tin_ore', 'minecraft:deepslate', 150).id(`${ID_PREFIX}orechid/deepslate_tin_ore`);
  event.recipes.botania.orechid('mekanism:deepslate_uranium_ore', 'minecraft:deepslate', 150).id(`${ID_PREFIX}orechid/deepslate_uranium_ore`);
  event.recipes.botania.orechid('sullysmod:deepslate_jade_ore', 'minecraft:deepslate', 50).id(`${ID_PREFIX}orechid/deepslate_jade_ore`);
  
  // Orechid - Netherrack
  // event.recipes.botania.orechid_ignem('malum:blazing_quartz_ore', 'minecraft:netherrack', 9800).id(`${ID_PREFIX}orechid_ignem/blazing_quartz_ore`);

  // Orechid - End Stone
  event.recipes.botania.orechid('enlightened_end:bismuth_ore', 'minecraft:end_stone', 900).id(`${ID_PREFIX}orechid/bismuth_ore`);
  event.recipes.botania.orechid('enlightened_end:irradium_ore', 'minecraft:end_stone', 450).id(`${ID_PREFIX}orechid/irradium_ore`);
  event.recipes.botania.orechid('enlightened_end:malachite_ore', 'minecraft:end_stone', 1200).id(`${ID_PREFIX}orechid/malachite_ore`);
  event.recipes.botania.orechid('enlightened_end:adamantite_node', 'minecraft:end_stone', 30).id(`${ID_PREFIX}orechid/adamantite_ore`);

  // Orechid - Modded Stone
  // Ad Astra, Moon
  event.recipes.botania.orechid('ad_astra:moon_cheese_ore', 'ad_astra:moon_stone', 320).id(`${ID_PREFIX}orechid/moon_cheese_ore`);
  event.recipes.botania.orechid('ad_astra:moon_desh_ore', 'ad_astra:moon_stone', 600).id(`${ID_PREFIX}orechid/moon_desh_ore`);
  event.recipes.botania.orechid('ad_astra:moon_iron_ore', 'ad_astra:moon_stone', 1080).id(`${ID_PREFIX}orechid/moon_iron_ore`);
  event.recipes.botania.orechid('ad_astra:moon_ice_shard_ore', 'ad_astra:moon_stone', 850).id(`${ID_PREFIX}orechid/moon_ice_shard_ore`);

  // Ad Astra, Mars
  event.recipes.botania.orechid('ad_astra:mars_iron_ore', 'ad_astra:mars_stone', 1350).id(`${ID_PREFIX}orechid/mars_iron_ore`);
  event.recipes.botania.orechid('ad_astra:mars_ostrum_ore', 'ad_astra:mars_stone', 550).id(`${ID_PREFIX}orechid/mars_ostrum_ore`);
  event.recipes.botania.orechid('ad_astra:mars_diamond_ore', 'ad_astra:mars_stone', 150).id(`${ID_PREFIX}orechid/mars_diamond_ore`);
  event.recipes.botania.orechid('ad_astra:mars_ice_shard_ore', 'ad_astra:mars_stone', 850).id(`${ID_PREFIX}orechid/mars_ice_shard_ore`);

  // Ad Astra, Mercury (note: Mercury only contains Iron Ore so adding Magma Blocks just so it doesn't generate only iron)
  event.recipes.botania.orechid_ignem('ad_astra:mercury_iron_ore', 'ad_astra:mercury_stone', 1450).id(`${ID_PREFIX}orechid_ignem/mercury_iron_ore`);
  event.recipes.botania.orechid_ignem('minecraft:magma_block', 'ad_astra:mercury_stone', 800).id(`${ID_PREFIX}orechid_ignem/mercury_magma_block`);;

  // Ad Astra, Venus
  event.recipes.botania.orechid_ignem('ad_astra:venus_coal_ore', 'ad_astra:venus_stone', 5000).id(`${ID_PREFIX}orechid/venus_coal_ore`);
  event.recipes.botania.orechid_ignem('ad_astra:venus_calorite_ore', 'ad_astra:venus_stone', 700).id(`${ID_PREFIX}orechid/venus_calorite_ore`);
  event.recipes.botania.orechid_ignem('ad_astra:venus_gold_ore', 'ad_astra:venus_stone', 450).id(`${ID_PREFIX}orechid/venus_gold_ore`);
  event.recipes.botania.orechid_ignem('ad_astra:venus_diamond_ore', 'ad_astra:venus_stone', 200).id(`${ID_PREFIX}orechid/venus_diamond_ore`);

  // Ad Astra, Glacio
  event.recipes.botania.orechid('ad_astra:glacio_coal_ore', 'ad_astra:glacio_stone', 3000).id(`${ID_PREFIX}orechid/glacio_coal_ore`);
  event.recipes.botania.orechid('ad_astra:glacio_copper_ore', 'ad_astra:glacio_stone', 4300).id(`${ID_PREFIX}orechid/glacio_copper_ore`);
  event.recipes.botania.orechid('ad_astra:glacio_ice_shard_ore', 'ad_astra:glacio_stone', 300).id(`${ID_PREFIX}orechid/glacio_ice_shard_ore`);
  event.recipes.botania.orechid('ad_astra:glacio_iron_ore', 'ad_astra:glacio_stone', 900).id(`${ID_PREFIX}orechid/glacio_iron_ore`);
  event.recipes.botania.orechid('ad_astra:glacio_lapis_ore', 'ad_astra:glacio_stone', 50).id(`${ID_PREFIX}orechid/glacio_lapis_ore`);

  // The Aether
  event.recipes.botania.orechid('aether:ambrosium_ore', 'aether:holystone', 1250).id(`${ID_PREFIX}orechid/ambrosium_ore`);
  event.recipes.botania.orechid('aether:gravitite_ore', 'aether:holystone', 40).id(`${ID_PREFIX}orechid/gravitite_ore`);
  event.recipes.botania.orechid('aether:zanite_ore', 'aether:holystone', 230).id(`${ID_PREFIX}orechid/zanite_ore`);

  // // Blue Skies, Everbright
  // event.recipes.botania.orechid('blue_skies:everbright_aquite_ore', 'blue_skies:turquoise_stone', 600).id(`${ID_PREFIX}orechid/everbright_aquite_ore`);
  // event.recipes.botania.orechid('blue_skies:everbright_charoite_ore', 'blue_skies:turquoise_stone', 50).id(`${ID_PREFIX}orechid/everbright_charoite_ore`);
  // event.recipes.botania.orechid('blue_skies:everbright_diopside_ore', 'blue_skies:turquoise_stone', 50).id(`${ID_PREFIX}orechid/everbright_diopside_ore`);
  // event.recipes.botania.orechid('blue_skies:everbright_moonstone_ore', 'blue_skies:turquoise_stone', 2300).id(`${ID_PREFIX}orechid/everbright_moonstone_ore`);
  // event.recipes.botania.orechid('blue_skies:everbright_pyrope_ore', 'blue_skies:turquoise_stone', 900).id(`${ID_PREFIX}orechid/everbright_pyrope_ore`);

  // // Blue Skies, Everdawn
  // event.recipes.botania.orechid('blue_skies:everdawn_aquite_ore', 'blue_skies:lunar_stone', 600).id(`${ID_PREFIX}orechid/everdawn_aquite_ore`);
  // event.recipes.botania.orechid('blue_skies:everdawn_charoite_ore', 'blue_skies:lunar_stone', 50).id(`${ID_PREFIX}orechid/everdawn_charoite_ore`);
  // event.recipes.botania.orechid('blue_skies:everdawn_diopside_ore', 'blue_skies:lunar_stone', 50).id(`${ID_PREFIX}orechid/everdawn_diopside_ore`);
  // event.recipes.botania.orechid('blue_skies:everdawn_moonstone_ore', 'blue_skies:lunar_stone', 1850).id(`${ID_PREFIX}orechid/everdawn_moonstone_ore`);
  // event.recipes.botania.orechid('blue_skies:everdawn_pyrope_ore', 'blue_skies:lunar_stone', 800).id(`${ID_PREFIX}orechid/everdawn_pyrope_ore`);
  // event.recipes.botania.orechid('blue_skies:horizonite_ore', 'blue_skies:lunar_stone', 100).id(`${ID_PREFIX}orechid/horizonite_ore`);

  // TODO: Deeper and Darker (Sculk Stone)

  // Marimorphosis
  // event.recipes.botania.marimorphosis('output_here', 'input_here', 1, ['plains'], 10);
});
