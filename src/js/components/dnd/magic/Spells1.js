export const Spells = [{
  cst:`1act`,
  desc:`You hurl a bubble of acid. Choose one creature within range, or choose two creatures within range that are within 5 feet of each other. A target must succeed on a Dexterity saving throw or take 1d6 acid damage. This spell's damage increases by 1d6 when you reach 5th level (2d6), 11th level (3d6), and 17th level (4d6).`,
  dur:`Inst.`,
  lvl:`cantrip`,
  name:`Acid Splash`,
  rng:60,
  type:`conj cantrip`
},{
  cst:`1act`,
  desc:`You set an alarm against unwanted intrusion. Choose a door, a window, or an area within range that is no larger than a 20-ft cube. Until the spell ends, an alarm alerts you whenever a Tiny or larger creature touches or enters the warded area. When you cast the spell, you can designate creatures that won't set off the alarm. You also choose whether the alarm is mental or audible. A mental alarm alerts you with a ping in your mind if you are within 1 mile of the warded area. This ping awakens you if you are sleeping. An audible alarm produces the sound of a hand bell for 10 seconds within 60 feet.`,
  dur:`8h`,
  lvl:1,
  name:`Alarm`,
  rng:30,
  type:`1lvl abju rit`
},{
  cst:`1act`,
  desc:`This spell lets you convince a beast that you mean it no harm. Choose a beast that you can see within range. It must see and hear you. If the beast's Intelligence is 4 or higher, the spell fails. Otherwise, the beast must succeed on a Wisdom saving throw or be charmed by you for the spell's duration. If you or one of your companions harms the target, the spell ends.`,
  dur:`24h`,
  hlvl:`When you cast this spell using a spell slot of 2lvl or higher, you can affect one additional beast for each slot level above 1st.`,
  lvl:1,
  name:`Animal Friendship`,
  rng:30,
  type:`1lvl enchmt`
},{
  cst:`1act`,
  desc:`Up to three creatures of your choice that you can see within range must make Charisma saving throws. Whenever a target that fails this saving throw makes an attack roll or a saving throw before the spell ends, the target must roll a d4 and subtract the number rolled from the attack roll or saving throw.`,
  dur:`Conc 1m`,
  hlvl:`When you cast this spell using a spell slot of 2lvl or higher, you can target one additional creature for each slot level above 1st.`,
  lvl:1,
  name:`Bane`,
  rng:30,
  type:`1lvl enchmt`
},{
  cst:`1act`,
  desc:`You extend your hand and trace a sigil of warding in the air. Until the end of your next turn, you have resistance against bludgeoning, piercing, and slashing damage dealt by weapon attacks.`,
  dur:`1r`,
  lvl:`cantrip`,
  name:`Blade Ward`,
  rng:`S`,
  type:`abju cantrip`
},{
  cst:`1act`,
  desc:`You bless up to three creatures of your choice within range. Whenever a target makes an attack roll or a saving throw before the spell ends, the target can roll a d4 and add the number rolled to the attack roll or saving throw.`,
  dur:`Conc 1m`,
  lvl:1,
  name:`Bless`,
  rng:30,
  type:`1lvl enchmt`
},{
  cst:`1act`,
  desc:`As you hold your hands with thumbs touching and fingers spread, a thin sheet of flames shoots forth from your outstretched fingertips. Each creature in a 15-ft cone must make a Dexterity saving throw. A creature takes 3d6 fire damage on a failed save, or half as much damage on a successful one. The fire ignites any flammable objects in the area that aren't being worn or carried.`,
  dur:`Inst.`,
  hlvl:`When you cast this spell using a spell slot of 2lvl or higher, the damage increases by 1d6 for each slot level above 1st.`,
  lvl:1,
  name:`Burning Hands`,
  rng:`S (15-ft cone)`,
  type:`1lvl evo`
},{
  cst:`1act`,
  desc:`You attempt to charm a humanoid you can see within range. It must make a Wisdom saving throw, and does so with advantage if you or your companions are fighting it. If it fails the saving throw, it is charmed by you until the spell ends or until you or your companions do anything harmful to it. The charmed creature regards you as a friendly acquaintance. When the spell ends, the creature knows it was charmed by you.`,
  dur:`1h`,
  hlvl:`When you cast this spell using a spell slot of 2lvl or higher, you can target one additional creature for each slot level above 1st. The creatures must be within 30 feet of each other when you target them.`,
  lvl:1,
  name:`Charm Person`,
  rng:30,
  type:`1lvl enchmt`
},{
  cst:`1act`,
  desc:`You create a ghostly, skeletal hand in the space of a creature within range. Make a ranged spell attack against the creature to assail it with the chill of the grave. On a hit, the target takes 1d8 necrotic damage, and it can't regain hit points until the start of your next turn. Until then, the hand clings to the target. If you hit an undead target, it also has disadvantage on attack rolls against you until the end of your next turn. This spell's damage increases by 1d8 when you reach 5th level (2d8), 11th level (3d8), and 17th level (4d8).`,
  dur:`1r`,
  lvl:`cantrip`,
  name:`Chill Touch`,
  rng:120,
  type:`necro cantrip`
},{
  cst:`1act`,
  desc:`You hurl a 4-inch-diameter sphere of energy at a creature that you can see within range. You choose acid, cold, fire, lightning, poison, or thunder for the type of orb you create, and then make a ranged spell attack against the target. If the attack hits, the creature takes 3d8 of the type you chose.`,
  dur:`Inst.`,
  hlvl:`When you cast this spell using a spell slot of 2lvl or higher, the damage increases by 1d8 for each slot level above 1st.`,
  lvl:1,
  name:`Chromatic Orb`,
  rng:90,
  type:`1lvl evo`
},{
  cst:`1act`,
  desc:`A dazzling array of flashing, colored light springs from your hand. Roll 6d10; the total is how many hit points of creatures this spell can effect. Creatures in a 15-ft cone originating from you are affected in ascending order of their current hit points (ignoring unconscious creatures and creatures that can't see). Starting with the creature that has the lowest current hit points, each creature affected by this spell is blinded until the spell ends. Subtract each creature's hit points from the total before moving on to the creature with the next lowest hit points. A creature's hit points must be equal to or less than the remaining total for that creature to be affected.`,
  dur:`1r`,
  hlvl:`When you cast this spell using a spell slot of 2lvl or higher, roll an additional 2d10 for each slot level above 1st.`,
  lvl:1,
  name:`Color Spray`,
  rng:`S (15-ft cone)`,
  type:`1lvl illus`
},{
  cst:`1act`,
  desc:`You speak a one-word command to a creature you can see within range. The target must succeed on a Wisdom saving throw or follow the command on its next turn. The spell has no effect if the target is undead, if it doesn't understand your language, or if your command is directly harmful to it. Some typical commands and their effects follow. You might issue a command other than one described here. If you do so, the DM determines how the target behaves. If the target can't follow your command, the spell ends. ends its turn.`,
  dur:`1r`,
  hlvl:`When you cast this spell using a spell slot of 2lvl or higher, you can affect one additional creature for each slot level above 1st. The creatures must be within 30 feet of each other when you target them.`,
  lvl:1,
  name:`Command`,
  rng:60,
  type:`1lvl enchmt`
},{
  cst:`1 bns act`,
  desc:`You attempt to compel a creature into a duel. One creature that you can see within range must make a Wisdom saving throw. On a failed save, the creature is drawn to you, compelled by your divine demand. For the duration, it has disadvantage on attack rolls against creatures other than you, and must make a Wisdom saving throw each time it attempts to move into a space that is more than 30 feet away from you; if it succeeds on this saving throw, the spell doesn't restrict the target's movement for that turn. The spell ends if you attack any other creature, if you cast a spell that targets a hostile creature other than the target, if a creature friendly to you damages the target or casts a harmful spell on it, or if you end your turn more than 30 feet away from the target.`,
  dur:`Conc 1m`,
  lvl:1,
  name:`Compelled Duel`,
  rng:30,
  type:`1lvl enchmt`
},{
  cst:`1act`,
  desc:`For the duration, you understand the literal meaning of any spoken language that you hear. You also understand any written language that you see, but you must be touching the surface on which the words are written. It takes about 1 minute to read one page of text. This spell doesn't decode secret messages in a text or a glyph, such as an arcane sigil, that isn't part of a written language.`,
  dur:`1h`,
  lvl:1,
  name:`Comprehend Languages`,
  rng:`S`,
  type:`1lvl divi rit`
},{
  cst:`1act`,
  desc:`You either create or destroy water.`,
  dur:`Inst.`,
  hlvl:`When you cast this spell using a spell slot of 2lvl or higher, you create or destroy 10 additional gallons of water, or the size of the cube increases by 5 feet, for each slot level above 1st.`,
  lvl:1,
  name:`Create or Destroy Water`,
  rng:30,
  type:`1lvl transm`
},{
  cst:`1act`,
  desc:`A creature you touch regains a number of hit points equal to 1d8 + your spellcasting ability modifier. This spell has no effect on undead or constructs.`,
  dur:`Inst.`,
  hlvl:`When you cast this spell using a spell slot of 2lvl or higher, the healing increases by 1d8 for each slot level above 1st.`,
  lvl:1,
  name:`Cure Wounds`,
  rng:`T`,
  type:`1lvl evo`
},{
  cst:`1act`,
  desc:`You create up to four torch-sized lights within range, making them appear as torches, lanterns, or glowing orbs that hover in the air for the duration. You can also combine the four lights into one glowing vaguely humanoid form of Medium size. Whichever form you choose, each light sheds dim light in a 10-ft radius. As a bonus action on your turn, you can move the lights up to 60 feet to a new spot within range. A light must be within 20 feet of another light created by this spell, and a light winks out if it exceeds the spell's range.`,
  dur:`Conc 1m`,
  lvl:`cantrip`,
  name:`Dancing Lights`,
  rng:120,
  type:`evo cantrip`
},{
  cst:`1act`,
  desc:`For the duration, you know if there is an aberration, celestial, elemental, fey, fiend, or undead within 30 feet of you, as well as where the creature is located. Similarly, you know if there is a place or object within 30 feet of you that has been magically consecrated or desecrated. The spell can penetrate most barriers, but it is blocked by 1 ft of stone, 1 inch of common metal, a thin sheet of lead, or 3 feet of wood or dirt.`,
  dur:`Conc 10m`,
  lvl:1,
  name:`Detect Evil and Good`,
  rng:`S`,
  type:`1lvl divi`
},{
  cst:`1act`,
  desc:`For the duration, you sense the presence of magic within 30 feet of you. If you sense magic in this way, you can use your action to see a faint aura around any visible creature or object in the area that bears magic, and you learn its school of magic, if any. The spell can penetrate most barriers, but it is blocked by 1 ft of stone, 1 inch of common metal, a thin sheet of lead, or 3 feet of wood or dirt.`,
  dur:`Conc 10m`,
  lvl:1,
  name:`Detect Magic`,
  rng:`S`,
  type:`1lvl divi rit`
},{
  cst:`1act`,
  desc:`For the duration, you can sense the presence and location of poisons, poisonous creatures, and diseases within 30 feet of you. You also identify the kind of poison, poisonous creature, or disease in each case. The spell can penetrate most barriers, but it is blocked by 1 ft of stone, 1 inch of common metal, a thin sheet of lead, or 3 feet of wood or dirt.`,
  dur:`Conc 10m`,
  lvl:1,
  name:`Detect Poison or Disease`,
  rng:`S`,
  type:`1lvl divi rit`
},{
  cst:`1act`,
  desc:`You make yourself -- including your clothing, armor, weapons, and other belongings on your person -- look different until the spell ends or until you use your action to dismiss it. You can seem 1 ft shorter or taller and can appear thin, fat, or in between. You can't change your body type, so you must adopt a form that has the same basic arrangement of limbs. Otherwise, the extent of the illus is up to you. The changes wrought by this spell fail to hold up to physical inspection. For example, if you use this spell to add a hat to your outfit, objects pass through the hat, and anyone who touches it would feel nothing or would feel your head and hair. If you use this spell to appear thinner than you are, the hand of someone who reaches out to touch you would bump into you while it was seemingly still in midair. To discern that you are disguised, a creature can use its action to inspect your apperance and must succeed on an Intelligence (Investigation) check against your spell save DC.`,
  dur:`1h`,
  lvl:1,
  name:`Disguise Self`,
  rng:`S`,
  type:`1lvl illus`
},{
  cst:`1 bns act`,
  desc:`Your prayer empowers you with divine radiance. Until the spell ends, your weapon attacks deal an extra 1d4 radiant damage on a hit.`,
  dur:`Conc 1m`,
  lvl:1,
  name:`Divine Favor`,
  rng:`S`,
  type:`1lvl evo`
},{
  cst:`1act`,
  desc:`You whisper a discordant melody that only one creature of your choice within range can hear, wracking it with terrible pain. The target must make a Wisdom saving throw. On a failed save, it takes 3d6 psychic damage and must immediately use its reaction, if available, to move as far as its speed allows away from you. The creature doesn't move into obviously dangerous ground, such as a fire or a pit. On a successful save, the target takes half as much damage and doesn't have to move away. A deafened creature automatically succeeds on the save.`,
  dur:`Inst.`,
  hlvl:`When you cast this spell using a spell slot of 2lvl or higher, the damage increases by 1d6 for each slot level above 1st.`,
  lvl:1,
  name:`Dissonant Whispers`,
  rng:60,
  type:`1lvl enchmt`
},{
  cst:`1act`,
  desc:`* You create a tiny, harmless sensory effect that predicts what the weather will be at your location for the next 24 hours. The effect might manifest as a golden orb for clear skies, a cloud for rain, falling snowflakes for snow, and so on. This effect persists for 1 round. * You instantly make a flower bloom, a seed pod open, or a leaf bud bloom. * You create an instantenous, harmless sensory effect, such as falling leaves, a puff of wind, the sound of a small animal, or the faint order of skunk. The effect must fit in a 5-ft cube. * You instantly light or snuff out a candle, a torch, or a small campfire.`,
  dur:`Inst.`,
  lvl:`cantrip`,
  name:`Druidcraft`,
  rng:30,
  type:`Transmutation cantrip`
},{
  cst:`1act`,
  desc:`A beam of crackling energy streaks toward a creature within range. Make a ranged spell attack against the target. On a hit, the target takes 1d10 force damage.`,
  dur:`Inst.`,
  lvl:`cantrip`,
  name:`Eldritch Blast`,
  rng:120,
  type:`evo cantrip`
},{
  cst:`1 bns act`,
  desc:`The next time you hit a creature with a weapon attack before this spell ends, a writhing mass of thorny vines appears at the point of impact, and the target must succeed on a Strength saving throw or be restrained by the magical vines until the spell ends. A Large or larger creature has advantage on this saving throw. If the target succeeds on the save, the vines shrivel away. While restrained by this spell, the target takes 1d6 piercing damage at the start of each of its turns. A creature restrained by the vines or one that can touch a creature can use its action to make a Strength check against your spell save DC. On a success, the target is freed.`,
  dur:`Conc 1m`,
  hlvl:`If you cast this spell using a spell slot of 2lvl or higher, the damage increases by 1d6 for each slot level above 1st.`,
  lvl:1,
  name:`Ensnaring Strike`,
  rng:`S`,
  type:`1lvl conj`
},{
  cst:`1act`,
  desc:`Grasping weeds and vines sprout from the ground in a 20-ft square starting form a point within range. For the duration, these plants turn the ground in the area into difficult terrain. A creature in the area when you cast the spell must succeed on a Strength saving throw or be restrained by the entangling plants until the spell ends. A creature restrained by the plants can use its action to make a Strength check against your spell save DC. On a success, it frees itself. When the spell ends, the conjured plants wilt away.`,
  dur:`Conc 1m`,
  lvl:1,
  name:`Entangle`,
  rng:90,
  type:`1lvl conj`
},{
  cst:`1act`,
  desc:`Each object in a 20-ft cube within range is outlined in blue, green, or violet light (your choice). Any creature in the area when the spell is cast is also outlined in light if it fails a Dexterity saving throw. For the duration, objects and affected creatures shed dim light in a 10-ft radius. Any attack roll against an affected creature or object has advantage if the attacker can see it, and the affected creature or object can't benefit from being invisible.`,
  dur:`Conc 1m`,
  lvl:1,
  name:`Faerie Fire`,
  rng:60,
  type:`1lvl evo`
},{
  cst:`1 bns act`,
  desc:`This spell allows you to move at an incredible pace. When you cast this spell, and then as a bonus action on each of your turns until the spell ends, you can take the Dash action.`,
  dur:`Conc 10m`,
  lvl:1,
  name:`Expeditious Retreat`,
  rng:`S`,
  type:`1lvl transm`
},{
  cst:`1act`,
  desc:`Bolstering yourself with a necromantic facsimile of life, you gain 1d4 + 4 temporary hit points for the duration.`,
  dur:`1h`,
  hlvl:`When you cast this spell using a spell slot of 2lvl or higher, you gain 5 additional temporary hit points for each slot level above 1st.`,
  lvl:1,
  name:`False Life`,
  rng:`S`,
  type:`1lvl necro`
},{
  cst:`1 reaction, which you take when you or a creature within 60 feet of you falls`,
  desc:`Choose up to five falling creatures within range. A falling creature's rate of descent slows to 60 feet per round until the spell ends. If the creature lands before the spell ends, it takes no falling damage and can land on its feet, and the spell ends for that creature.`,
  dur:`1m`,
  lvl:1,
  name:`Feather Fall`,
  rng:60,
  type:`1lvl transm`
},{
  cst:`1hr`,
  desc:`Your familiar acts independently of you, but it always obeys your commands. In combat, it rolls its own initiative and acts on its own turn. A familiar can't attack, but it can take other actions as normal. When the familiar drops to 0 hit points, it disappears, leaving behind no physical form. It reappears after you cast this spell again. While your familiar is within 100 feet of you, you can communicate with it telepathically. Additionally, as an action, you can see through your familiar's eyes and hear what it hears until the start of your next turn, gaining the benefits of any special senses that the familiar has. During this time, you are deaf and blind with regard to your own senses. As an action, you can temporarily dismiss your familiar. It disappears into a pocket dimension where it awaits your summons. Alternatively, you can dismiss it forever. As an action while it is temporarily dismissed, you can cause it to reappear in any unoccupied space within 30 feet of you. You can't have more than one familiar at a time. If you cast this spell while you already have a familiar, you instead cause it to adopt a new form. Choose one of the forms from the above list. Your familiar transforms into the chosen creature. Finally, when you cast a spell with a range of touch, your familiar can deliver the spell as if it had cast the spell. Your familiar must be within 100 feet of you, and it must use its reaction to deliver the spell when you cast it. If the spell requires an attack roll, you use your action modifier for the roll.`,
  dur:`Inst.`,
  lvl:1,
  name:`Find Familiar`,
  rng:10,
  type:`1lvl conj rit`
},{
  cst:`1act`,
  desc:`You hurl a mote of fire at a creature or object within range. Make a ranged spell attack against the target. On a hit, the target takes 1d10 fire damage. A flammable object hit by this spell ignites if it isn't being worn or carried. This spell's damage increases by 1d10 when you reach 5th level (2d10), 11th level (3d10), and 17th level (4d10).`,
  dur:`Inst.`,
  lvl:`cantrip`,
  name:`Fire Bolt`,
  rng:120,
  type:`evo cantrip`
},{
  cst:`1act`,
  desc:`You create a 20-ft-radius sphere of fog centered on a point within range. The sphere spreads around corners, and its area is heavily obscured. It lasts for the duration or until a wind of moderate or greater speed (at least 10 miles per hour) disperses it.`,
  dur:`Conc 1h`,
  hlvl:`When you cast this spell using a spell slot of 2lvl or higher, the radius of the fog increases by 20 feet for each slot level above 1st.`,
  lvl:1,
  name:`Fog Cloud`,
  rng:120,
  type:`1lvl conj`
},{
  cst:`1act`,
  desc:`For the duration, you have advantage on all Charisma checks directed at one creature of your choice that isn't hostile toward you. When the spell ends, the creature realizes that you have used magic to influence its mood and becomes hostile toward you. A creature prone to violence might attack you. Another creature might seek retribution in other ways (at the DM's discretion), depending on the nature of your interaction with it.`,
  dur:`Conc 1m`,
  lvl:`cantrip`,
  name:`Friends`,
  rng:`S`,
  type:`Enchantment cantrip`
},{
  cst:`1act`,
  desc:`Up to ten berries appear in your hand and are infused with magic for the duration. A creature can use its action to eat one berry. Eating a berry restores 1 hit point, and the berry provides enough nourishment to sustain a creature for a day. The berries lose their potency if they have not been consumed within 24 hours of the casting of this spell.`,
  dur:`Inst.`,
  lvl:1,
  name:`Goodberry`,
  rng:`T`,
  type:`1lvl transm`
},{
  cst:`1act`,
  desc:`Slick grease covers the ground in a 10-ft square centered on a point within range and turns it into difficult terrain for the duration. When the grease appears, each creature standing in its area must succeed on a Dexterity saving throw or fall prone. A creature that enters the area or ends its turn there must also succeed on a Dexterity saving throw or fall prone.`,
  dur:`1m`,
  lvl:1,
  name:`Grease`,
  rng:60,
  type:`1lvl conj`
},{
  cst:`1act`,
  desc:`You touch one willing creature. Once before the spell ends, the target can roll a d4 and add the number rolled to one ability check of its choice. It can roll the die before or after making the ability check. The spell then ends.`,
  dur:`Conc 1m`,
  lvl:`cantrip`,
  name:`Guidance`,
  rng:`T`,
  type:`Divi cantrip`
},{
  cst:`1act`,
  desc:`A flash of light streaks toward a creature of your choice within range. Make a ranged spell attack against the target. On a hit, the target takes 4d6 radiant damage, and the next attack roll made against this target before the end of your next turn has advantage, thanks to the mystical dim light glittering on the target until then.`,
  dur:`1r`,
  hlvl:`When you cast this spell using a spell slot of 2lvl or higher, the damage increases by 1d6 for each slot level above 1st.`,
  lvl:1,
  name:`Guiding Bolt`,
  rng:120,
  type:`1lvl evo`
},{
  cst:`1 bns act`,
  desc:`The next time you hit a creature with a ranged weapon attack before this spell ends, this spell creates a rain of thorns that sprouts from your ranged weapon or ammunition. In addition to the normal effects of the attack, the target of the attack and each creature within 5 feet of it must make a Dexterity saving throw. A creature takes 1d10 piercing damage on a failed save, or half as much damage on a successful one.`,
  dur:`Conc 1m`,
  hlvl:`If you cast this spell using a spell slot of 2lvl or higher, the damage increases by 1d10 for each slot level above 1st (to a maximum of 6d10).`,
  lvl:1,
  name:`Hail of Thorns`,
  rng:`S`,
  type:`1lvl conj`
},{
  cst:`1 bns act`,
  desc:`A creature of your choice that you can see within range regains hit points equal to 1d4 + your spellcasting ability modifier. This spell has no effect on undead or constructs.`,
  dur:`Inst.`,
  hlvl:`When you cast this spell using a spell slot of 2lvl or higher, the healing increases by 1d4 for each slot level above 1st.`,
  lvl:1,
  name:`Healing Word`,
  rng:60,
  type:`1lvl evo`
},{
  cst:`1 reaction, which you take in response to being damaged by a creature within 60 feet of you that you can see.`,
  desc:`You point your finger, and the creature that damaged you is momentarily surrounded by hellish flames. The creature must make a Dexterity saving throw. It takes 2d10 fire damage on a failed save, or half as much damage on a successful one.`,
  dur:`Inst.`,
  hlvl:`When you cast this spell using a spell slot of 2lvl or higher, the damage increases by 1d10 for each slot level above 1st.`,
  lvl:1,
  name:`Hellish Rebuke`,
  rng:60,
  type:`1lvl evo`
},{
  cst:`1 bns act`,
  desc:`You place a curse on a creature that you can see within range. Until the spell ends, you deal an extra 1d6 necrotic damage to the target whenever you hit it with an attack. Also choose one ability when you cast the spell. The target has disadvantage on ability checks made with the chosen ability. If the target drops to 0 hit points before this spell ends, you can use a bonus action on a subsequent turn of yours to curse a new creature. A *[remove curse](../remove-curse/)* cast on the target ends this spell early.`,
  dur:`Conc 1h`,
  hlvl:`When you cast this spell using a spell slot of 3rd or 4th level, you can maintain your concentration on the spell for up to 8 hours. When you use a spell slot of 5th level or higher, you can maintain your concentration on the spell for up to 24 hours.`,
  lvl:1,
  name:`Hex`,
  rng:90,
  type:`1lvl enchmt`
},{
  cst:`1act`,
  desc:`A willing creature you touch is imbued with bravery. Until the spell ends, the creature is immune to being frightened and gains temporary hit points equal to your spellcasting ability modifier at the start of each of its turns. When the spell ends, the target loses any remaining temporary hit points from this spell.`,
  dur:`Conc 1m`,
  lvl:1,
  name:`Heroism`,
  rng:`T`,
  type:`1lvl enchmt`
},{
  cst:`1 bns act`,
  desc:`You choose a creature you can see within range and mystically mark it as your quarry. Until the spell ends, you deal an extra 1d6 damage to the target whenever you hit it with a weapon attack, and you have advantage on any Wisdom (Perception) or Wisdom (Survival) check you make to find it. If the target drops to 0 hit points before this spell ends, you can use a bonus action on a subsequent turn of yours to mark a new creature.`,
  dur:`Conc 1h`,
  hlvl:`When you cast this spell using a spell slot of 3rd or 4th level, you can maintain your concentration on the spell for up to 8 hours. When you use a spell slot of 5th level or higher, you can maintain your concentration on the spell for up to 24 hours.`,
  lvl:1,
  name:`Hunter's Mark`,
  rng:90,
  type:`1lvl divi`
},{
  cst:`1m`,
  desc:`You choose one object that you must touch throughout the casting of the spell. If it is a magic item or some other magic-imbued object, you learn its properties and how to use them, whether it requires attunement to use, and how many charges it has, if any. You learn whether any spells are affecting the item and what they are. If the item was created by a spell, you learn which spell created it. If you instead touch a creature throughout the casting, you learn what spells, if any, are currently affecting it.`,
  dur:`Inst.`,
  lvl:1,
  name:`Identify`,
  rng:`T`,
  type:`1lvl divi rit`
},{
  cst:`1m`,
  desc:`You write on parchment, paper, or some other suitable writing material and imbue it with a potent illus that lasts for the duration. To you and any creatures you designate when you cast the spell, the writing appears normal, written in your hand, and conveys whatever meaning you intended when you wrote the text. To all others, the writing appears as if it were written in an unknown or magical script that is unintelligible. Alternatively, you can cause the writing to appear to be an entirely different message, written in a different hand and language, though the language must be one you know. Should the spell be dispelled, the original script and the illus both disappear. A creature with truesight can read the hidden message.`,
  dur:`10 days`,
  lvl:1,
  name:`Illusory Script`,
  rng:`T`,
  type:`1lvl illus rit`
},{
  cst:`1act`,
  desc:`Make a melee spell attack against a creature you can reach. On a hit, the target takes 3d10 necrotic damage. spell slot of 2lvl or higher, the damage increases by 1d10 for each slot level above 1st.`,
  dur:`Inst.`,
  hlvl:`When you cast this spell using a`,
  lvl:1,
  name:`Inflict Wounds`,
  rng:`T`,
  type:`1lvl necro`
},{
  cst:`1act`,
  desc:`You touch a creature. The creature's jump distance is tripled until the spell ends.`,
  dur:`1m`,
  lvl:1,
  name:`Jump`,
  rng:`T`,
  type:`1lvl transm`
},{
  cst:`1act`,
  desc:`You touch one object that is no larger than 10 feet in any dimension. Until the spell ends, the object sheds bright light in a 20-ft radius and dim light for an additional 20 feet. The light can be colored as you like. Completely covering the object with something opaque blocks the light. The spell ends if you cast it again or dismiss it as an action. If you target an object held or worn by a hostile creature, that creature must succeed on a Dexterity saving throw to avoid the spell.`,
  dur:`1h`,
  lvl:`cantrip`,
  name:`Light`,
  rng:`T`,
  type:`evo cantrip`
},{
  cst:`1act`,
  desc:`You touch a creature. The target's speed increases by 10 feet until the spell ends.`,
  dur:`1h`,
  hlvl:`When you cast this spell using a spell slot of 2lvl or higher, you can target one additional creature for each spell slot above 1st.`,
  lvl:1,
  name:`Longstrider`,
  rng:`T`,
  type:`1lvl transm`
},{
  cst:`1act`,
  desc:`You touch a willing creature who isn't wearing armor, and a protective magical force surrounds it until the spell ends. The target's base AC becomes 13 + its Dexterity modifier. The spell ends if the target dons armor or if you dismiss the spell as an action.`,
  dur:`8h`,
  lvl:1,
  name:`Mage Armor`,
  rng:`T`,
  type:`1lvl abju`
},{
  cst:`1act`,
  desc:`A spectral, floating hand appears at a point you choose within range. The hand lasts for the duration or until you dismiss it as an action. The hand vanishes if it is ever more than 30 feet away from you or if you cast this spell again. You can use your action to control the hand. You can use the hand to manipulate an object, open an unlocked door or container, stow or retrieve an item from an open container, or pour the contents out of a vial. You can move the hand up to 30 feet each time you use it. The hand can't attack, activate magic items, or carry more than 10 pounds.`,
  dur:`1m`,
  lvl:`cantrip`,
  name:`Mage Hand`,
  rng:30,
  type:`conj cantrip`
},{
  cst:`1act`,
  desc:`You create three glowing darts of magical force. Each dart hits a creature of your choice that you can see within range. A dart deals 1d4 + 1 force damage to its target. The darts all strike simultaneously, and you can direct them to hit one creature or several.`,
  dur:`Inst.`,
  hlvl:`When you cast this spell using a spell slot of 2lvl or higher, the spell creates one more dart for each slot level above 1st.`,
  lvl:1,
  name:`Magic Missile`,
  rng:120,
  type:`1lvl evo`
},{
  cst:`1m`,
  desc:`This spell repairs a single break or tear in an object you touch, such as a broken key, a torn cloak, or a leaking wineskin. As long as the break or tear is no longer than 1 ft in any dimension, you mend it, leaving no trace of the former damage. This spell can physically repair a magic item or construct, but the spell can't restore magic to such an object.`,
  dur:`Inst.`,
  lvl:`cantrip`,
  name:`Mending`,
  rng:`T`,
  type:`Transmutation cantrip`
},{
  cst:`1act`,
  desc:`You point your finger toward a creature within range and whisper a message. The target (and only the target) hears the message and can reply in a whisper that only you can hear. You can cast this spell through solid objects if you are familiar with the target and know it is beyond the barrier. Magical silence, 1 ft of stone, 1 inch of common metal, a thin sheet of lead, or 3 feet of wood blocks the spell. The spell doesn't have to follow a straight line and can travel freely around corners or through openings.`,
  dur:`1r`,
  lvl:`cantrip`,
  name:`Message`,
  rng:120,
  type:`Transmutation cantrip`
},{
  cst:`1act`,
  desc:`You create a sound or an image of an object within range that lasts for the duration. The illus also ends if you dismiss it as an action or cast this spell again. If you create a sound, its volume can range from a whisper to a scream. It can be your voice, someone else's voice, a lion's roar, a beating of drums, or any other sound you choose. The sound continues unabated throughout the duration, or you can make discrete sounds at different times before the spell ends. If you create an image of an object such as a chair, muddy ftprints, or a small chest-it must be no larger than a 5-ft cube. The image can't create sound, light, smell, or any other sensory effect. Physical interaction with the image reveals it to be an illus, because things can pass through it. If a creature uses its action to examine the sound or image, the creature can determine that it is an illus with a successful Intelligence (Investigation) check against your spell save DC. If a creature discerns the illus for what it is, the illus becomes faint to the creature.`,
  dur:`1m`,
  lvl:`cantrip`,
  name:`Minor illus`,
  rng:30,
  type:`illus cantrip`
},{
  cst:`1act`,
  desc:`You extend your hand toward a creature you can see within range and project a puff of noxious gas from your palm. The creature must succeed on a Constitution saving throw or take 1d12 poison damage. This spell's damage increases by 1d12 when you reach 5th level (2d12), 11th level (3d12), and 17th level (4d12).`,
  dur:`Inst.`,
  lvl:`cantrip`,
  name:`Poison Spray`,
  rng:10,
  type:`conj cantrip`
},{
  cst:`1act`,
  desc:`* You create an instantaneous, harmless sensory effect, such as a shower of sparks, a puff of wind, faint musical notes, or an odd odor. * You instantaneously light or snuff out a candle, a torch, or a small campfire. * You instantaneously clean or soil an object no larger than 1 cubic ft. * You chill, warm, or flavor up to 1 cubic ft of nonliving material for 1 hour. * You make a color, a small mark, or a symbol appear on an object or a surface for 1 hour. * You create a nonmagical trinket or an illusory image that can fit in your hand and that lasts until the end of your next turn. If you cast this spell multiple times, you can have up to three of its non-instantaneous effects active at a time, and you can dismiss such an effect as an action.`,
  dur:`Up to 1 hour`,
  lvl:`cantrip`,
  name:`Prestidigitation`,
  rng:10,
  type:`Transmutation cantrip`
},{
  cst:`1act`,
  desc:`A flickering flame appears in your hand. The flame remains there for the duration and harms neither you nor your equipment. The flame sheds bright light in a 10-ft radius and dim light for an additional 10 feet. The spell ends if you dismiss it as an action or if you cast it again. You can also attack with the flame, although doing so ends the spell. When you cast this spell, or as an action on a later turn, you can hurl the flame at a creature within 30 feet of you. Make a ranged spell attack. On a hit, the target takes 1d8 fire damage. This spell's damage increases by 1d8 when you reach 5th level (2d8), 11th level (3d8), and 17th level (4d8).`,
  dur:`10m`,
  lvl:`cantrip`,
  name:`Produce Flame`,
  rng:`S`,
  type:`conj cantrip`
},{
  cst:`1act`,
  desc:`The protection grants several benefits. Creatures of those types have disadvantage on attack rolls against the target. The target also can't be charmed, frightened, or possessed by them. If the target is already charmed, frightened, or possessed by such a creature, the target has advantage on any new saving throw against the relevant effect.`,
  dur:`Conc 10m`,
  lvl:1,
  name:`Protection from Evil and Good`,
  rng:`T`,
  type:`1lvl abju`
},{
  cst:`1act`,
  desc:`All nonmagical food and drink within a 5-ft radius sphere centered on a point of your choice within range is purified and rendered free of poison and disease.`,
  dur:`Inst.`,
  lvl:1,
  name:`Purify Food and Drink`,
  rng:10,
  type:`1lvl transm`
},{
  cst:`1act`,
  desc:`A frigid beam of blue-white light streaks toward a creature within range. Make a ranged spell attack against the target. On a hit, it takes 1d8 cold damage, and its speed is reduced by 10 feet until the start of your next turn. The spell's damage increases by 1d8 when you reach 5th level (2d8), 11th level (3d8), and 17th level (4d8).`,
  dur:`Inst.`,
  lvl:`cantrip`,
  name:`Ray of Frost`,
  rng:60,
  type:`evo cantrip`
},{
  cst:`1act`,
  desc:`A ray of sickening greenish energy lashes out toward a creature within range. Make a ranged spell attack against the target. On a hit, the target takes 2d8 poison damage and must make a Constitution saving throw. On a failed save, it is also poisoned until the end of your next turn.`,
  dur:`Inst.`,
  hlvl:`When you cast this spell using a spell slot of 2lvl or higher, the damage increases by 1d8 for each slot level above 1st.`,
  lvl:1,
  name:`Ray of Sickness`,
  rng:60,
  type:`1lvl necro`
},{
  cst:`1act`,
  desc:`At your touch, all curses affecting one creature or object end. If the object is a cursed magical item, its curse remains, but the spell breaks its owner's attunement to the object so it can be removed or discarded.`,
  dur:`Inst.`,
  lvl:3,
  name:`Remove Curse`,
  rng:`T`,
  type:`3lvl abju`
},{
  cst:`1act`,
  desc:`You touch one willing creature. Once before the spell ends, the target can roll a d4 and add the number rolled to one saving throw of its choice. It can roll the die before or after making the saving throw. The spell then ends.`,
  dur:`Conc 1m`,
  lvl:`cantrip`,
  name:`Resistance`,
  rng:`T`,
  type:`abju cantrip`
},{
  cst:`1act`,
  desc:`Flame-like radiance descends on a creature that you can see within range. The target must succeed on a Dexterity saving throw or take 1d8 radiant damage. The target gains no benefit from cover for this saving throw. The spell's damage increases by 1d8 when you reach 5th level (2d8), 11th level (3d8), and 17th level (4d8).`,
  dur:`Inst.`,
  lvl:`cantrip`,
  name:`Sacred Flame`,
  rng:60,
  type:`evo cantrip`
},{
  cst:`1 bns act`,
  desc:`You ward a creature within range against attack. Until the spell ends, any creature who targets the warded creature with an attack or a harmful spell must first make a Wisdom saving throw. On a failed save, the creature must choose a new target or lose the attack or spell. This spell doesn't protect the warded creature from area effects, such as the explosion of a fireball. If the warded creature makes an attack or casts a spell that affects an enemy creature, this spell ends.`,
  dur:`1m`,
  lvl:1,
  name:`Sanctuary`,
  rng:30,
  type:`1lvl abju`
},{
  cst:`1 bns act`,
  desc:`A shimmering field appears and surrounds a creature of your choice within range, granting it a +2 bonus to AC for the duration.`,
  dur:`Conc 10m`,
  lvl:1,
  name:`Shield of Faith`,
  rng:60,
  type:`1lvl abju`
},{
  cst:`1 bns act`,
  desc:`The next time you hit a creature wiht a melee weapon attack during the spell's duration, your weapon flares with white-hot intensity, and the attack deals an extra 1d6 fire damage to the target and causes the target to ignite in flames. At the start of each of its turns until the spell ends, the target must make a Constitution saving throw. On a failed save, it takes 1d6 fire damage. On a successful save, the spell ends. If the target or a creature within 5 feet of it uses an action to put out the flames, or if some other effect douses the flames (such as the target being submerged in water), the spell ends.`,
  dur:`Conc 1m`,
  hlvl:`When you cast this spell using a spell slot of 2lvl or higher, the initial extra damage dealt by the attack increases by 1d6 for each slot level above 1st.`,
  lvl:1,
  name:`Searing Smite`,
  rng:`S`,
  type:`1lvl evo`
},{
  cst:`1 reaction, which you take when you are hit by an attack or targeted by the magic missile spell`,
  desc:`An invisible barrier of magical force appears and protects you. Until the start of your next turn, you have a +5 bonus to AC, including against the triggering attack, and you take no damage from magic missile.`,
  dur:`1r`,
  lvl:1,
  name:`Shield`,
  rng:`S`,
  type:`1lvl abju`
},{
  cst:`1 bns act`,
  desc:`The wood of a club or a quarterstaff you are holding is imbued with nature's power. For the duration, you can use your spellcasting ability instead of Strength for the attack and damage rolls of melee attacks using that weapon, and the weapon's damage die becomes a d8. The weapon also becomes magical, if it isn't already. The spell ends if you cast it again or if you let go of the weapon.`,
  dur:`1m`,
  lvl:`cantrip`,
  name:`Shillelagh`,
  rng:`T`,
  type:`Transmutation cantrip`
},{
  cst:`1act`,
  desc:`Lightning springs from your hand to deliver a shock to a creature you try to touch. Make a melee spell attack against the target. You have advantage on the attack roll if the target is wearing armor made of metal. On a hit, the target takes 1d8 lightning damage, and it can't take reactions until the start of its next turn. The spell's damage increases by 1d8 when you reach 5th level (2d8), 11th level (3d8), and 17th level (4d8).`,
  dur:`Inst.`,
  lvl:`cantrip`,
  name:`Shocking Grasp`,
  rng:`T`,
  type:`evo cantrip`
},{
  cst:`1act`,
  desc:`You create the image of an object, a creature, or some other visible phenomenon that is no larger than a 15-ft cube. The image appears at a spot within range and lasts for the duration. The image is purely visual; it isn't accompanied by sound, smell, or other sensory effects. You can use your action to cause the image to move to any spot within range. As the image changes location, you can alter its appearance so that its movements appear natural for the image. For example, if you create an image of a creature and move it, you can alter the image so that it appears to be walking. Physical interaction with the image reveals it to be an illus, because things can pass through it. A creature that uses its action to examine the image can determine that it is an illus with a successful Intelligence (Investigation) check against your spell save DC. If a creature discerns the illus for what it is, the creature can see through the image.`,
  dur:`Conc 10m`,
  lvl:1,
  name:`Silent Image`,
  rng:60,
  type:`1lvl illus`
},{
  cst:`1act`,
  desc:`This spell sends creatures into a magical slumber. Roll 5d8; the total is how many hit points of creatures this spell can affect. Creatures within 20 feet of a point you choose within range are affected in ascending order of their current hit points (ignoring unconscious creatures). Starting with the creature that has the lowest current hit points, each creature affected by this spell falls unconscious until the spell ends, the sleeper takes damage, or someone uses an action to shake or slap the sleeper awake. Subtract each creature's hit points from the total before moving on to the creature with the next lowest hit points. A creature's hit points must be equal to or less than the remaining total for that creature to be affected. Undead and creatures immune to being charmed aren't affected by this spell.`,
  dur:`1m`,
  hlvl:`When you cast this spell using a spell slot of 2lvl or higher, roll an additional 2d8 for each slot level above 1st.`,
  lvl:1,
  name:`Sleep`,
  rng:90,
  type:`1lvl enchmt`
},{
  cst:`1act`,
  desc:`You touch a living creature that has 0 hit points. The creature becomes stable. This spell has no effect on undead or constructs.`,
  dur:`Inst.`,
  lvl:`cantrip`,
  name:`Spare the Dying`,
  rng:`T`,
  type:`necro cantrip`
},{
  cst:`1act`,
  desc:`You gain the ability to comprehend and verbally communicate with beasts for the duration. The knowledge and awareness of many beasts is limited by their intelligence, but at a minimum, beasts can give you information about nearby locations and monsters, including whatever they can perceive or have perceived within the past day. You might be able to persuade a beast to perform a small favor for you, at the DM's discretion.`,
  dur:`10m`,
  lvl:1,
  name:`Speak with Animals`,
  rng:`S`,
  type:`1lvl divi rit`
},{
  cst:`1act`,
  desc:`* Your voice booms up to three times as loud as normal for 1 minute. * You cause flames to flicker, brighten, dim, or change color for 1 minute. * You cause harmless tremors in the ground for 1 minute. * You create an instantaneous sound that originates from a point of your choice within range, such as a rumble of thunder, the cry of a raven, or ominous whispers. * You instantaneously cause an unlocked door or window to fly open or slam shut. * You alter the appearance of your eyes for 1 minute. If you cast this spell multiple times, you can have up to three of its 1-minute effects active at a time, and you can dismiss such an effect as an action.`,
  dur:`Up to 1 minute`,
  lvl:`cantrip`,
  name:`Thaumaturgy`,
  rng:30,
  type:`Transmutation cantrip`
},{
  cst:`1act`,
  desc:`You create a long, vine-like whip covered in thorns that lashes out at your command toward a creature in range. Make a melee spell attack against the target. If the attack hits, the creature takes 1d6 piercing damage, and if the creature is Large or smaller, you pull the creature up to 10 feet closer to you. This spell's damage increases by 1d6 when you reach 5th level (2d6), 11th level (3d6), and 17th level (4d6).`,
  dur:`Inst.`,
  lvl:`cantrip`,
  name:`Thorn Whip`,
  rng:30,
  type:`Transmutation cantrip`
},{
  cst:`1 bns act`,
  desc:`The first time you hit with a melee weapon attack during this spell's duration, your weapon rings with thunder that is audible within 300 feet of you, and the attack deals an extra 2d6 thunder damage to the target. Additionally, if the target is a creature, it must succeed on a Strength saving throw or be pushed 10 feet away from you and knocked prone.`,
  dur:`Conc 1m`,
  lvl:1,
  name:`Thunderous Smite`,
  rng:`S`,
  type:`1lvl evo`
},{
  cst:`1act`,
  desc:`A wave of thunderous force sweeps out from you. Each creature in a 15-ft cube originating from you must make a Constitution saving throw. On a failed save, a creature takes 2d8 thunder damage and is pushed 10 feet away from you. On a successful save, the creature takes half as much damage and isn't pushed. In addition, unsecured objects that are completely within the area of effect are automatically pushed 10 feet away from you by the spell's effect, and the spell emits a thunderous boom audible out to 300 feet.`,
  dur:`Inst.`,
  hlvl:`When you cast this spell using a spell slot of 2lvl or higher, the damage increases by 1d8 for each slot level above 1st.`,
  lvl:1,
  name:`Thunderwave`,
  rng:`S (15-ft cube)`,
  type:`1lvl evo`
},{
  cst:`1act`,
  desc:`You extend your hand and point a finger at a target in range. Your magic grants you a brief insight into the target's defenses. On your next turn, you gain advantage on your first attack roll against the target, provided that this spell hasn't ended.`,
  dur:`Conc 1 round`,
  lvl:`cantrip`,
  name:`True Strike`,
  rng:30,
  type:`Divi cantrip`
},{
  cst:`1act`,
  desc:`This spell creates an invisible, mindless, shapeless force that performs simple tasks at your command until the spell ends. The servant springs into existence in an unoccupied space on the ground within range. It has AC 10, 1 hit point, and a Strength of 2, and it can't attack. If it drops to 0 hit points, the spell ends. Once on each of your turns as a bonus action, you can mentally command the servant to move up to 15 feet and interact with an object. The servant can perform simple tasks that a human servant could do, such as fetching things, cleaning, mending, folding clothes, lighting fires, serving food, and pouring wine. Once you give the command, the servant performs the task to the best of its ability until it completes the task, then waits for your next command. If you command the servant to perform a task that would move it more than 60 feet away from you, the spell ends.`,
  dur:`1h`,
  lvl:1,
  name:`Unseen Servant`,
  rng:60,
  type:`1lvl conj rit`
},{
  cst:`1act`,
  desc:`You unleash a string of insults laced with subtle enchmts at a creature you can see within range. If the target can hear you (though it need not understand you), it must succeed on a Wisdom saving throw or take 1d4 psychic damage and have disadvantage on the next attack roll it makes before the end of its next turn. This spell's damage increases by 1d4 when you reach 5th level (2d4), 11th level (3d4), and 17th level (4d4).`,
  dur:`Inst.`,
  lvl:`cantrip`,
  name:`Vicious Mockery`,
  rng:60,
  type:`Enchantment cantrip`
},{
  cst:`1act`,
  desc:`A beam of crackling, blue energy lances out toward a creature within range, forming a sustained arc of lightning between you and the target. Make a ranged spell attack against that creature. On a hit, the target takes 1d12 lightning damage, and on each of your turns for the duration, you can use your action to deal 1d12 lightning damage to the target automatically. The spell ends if you use your action to do anything else. The spell also ends if the target is ever outside the spell's range or if it has total cover from you.`,
  dur:`Conc 1m`,
  hlvl:`When you cast this spell using a spell slot of 2lvl or higher, the damage increases by 1d12 for each slot level above 1st.`,
  lvl:1,
  name:`Witch Bolt`,
  rng:30,
  type:`1lvl evo`
},{
  cst:`1 bns act`,
  desc:`The next time you hit with a melee weapon attack during this spell's duration, your attack deals an extra 1d6 psychic damage. Additionally, if the target is a creature, it must make a Wisdom saving throw or be frightened of you until the spell ends. As an action, the creature can make a Wisdom check against your spell save DC to steel its resolve and end this spell.`,
  dur:`Conc 1m`,
  lvl:1,
  name:`Wrathful Smite`,
  rng:`S`,
  type:`1lvl evo`
},{
  cst:`1act`,
  desc:`Your spell bolsters your allies with toughness and resolve. Choose up to three creatures within range. Each target's hit point maximum and current hit points increase by 5 for the duration.`,
  dur:`8h`,
  hlvl:`When you cast this spell using a spell slot of 3rd level or higher, a target's hit points increase by an additional 5 for each slot level above 2nd.`,
  lvl:2,
  name:`Aid`,
  rng:30,
  type:`2dlvl abju`
},{
  cst:`1act`,
  desc:`By means of this spell, you use an animal to deliver a message. Choose a Tiny beast you can see within range, such as a squirrel, a blue jay, or a bat. You specify a location, which you must have visited, and a recipient who matches a general description, such as \u201ca man or woman dressed in the uniform of the town guard\u201d or \u201ca red-haired dwarf wearing a pointed hat.\u201d You also speak a message of up to twenty-five words. The target beast travels for the duration of the spell toward the specified location, covering about 50 miles per 24 hours for a flying messenger, or 25 miles for other animals. When the messenger arrives, it delivers your message to the creature that you described, replicating the sound of your voice. The messenger speaks only to a creature matching the description you gave. If the messenger doesn't reach its destination before the spell ends, the message is lost, and the beast makes its way back to where you cast this spell.`,
  dur:`24h`,
  hlvl:`If you cast this spell using a spell slot of 3rd level or higher, the duration of the spell increases by 48 hours for each slot level above 2nd.`,
  lvl:2,
  name:`Animal Messenger`,
  rng:30,
  type:`2dlvl enchmt rit`
},{
  cst:`1act`,
  desc:`You can blind or deafen a foe. Choose one creature that you can see within range to make a Constitution saving throw. If it fails, the target is either blinded or deafened (your choice) for the duration. At the end of each of its turns, the target can make a Constitution saving throw. On a success, the spell ends.`,
  dur:`1m`,
  hlvl:`When you cast this spell using a spell slot of 3rd level or higher, you can target one additional creature for each slot level above 2nd.`,
  lvl:2,
  name:`Blindness/Deafness`,
  rng:30,
  type:`2dlvl necro`
},{
  cst:`1m`,
  desc:`* *Weal*, for good results * *Woe*, for bad results * *Weal and woe*, for both good and bad results * *Nothing*, for results that aren't especially good or bad The spell doesn't take into account any possible circumstances that might change the outcome, such as the casting of additional spells or the loss or gain of a companion. If you cast the spell two or more times before completing your next long rest, there is a cumulative 25 percent chance for each casting after the first that you get a random reading. The DM makes this roll in secret.`,
  dur:`Inst.`,
  lvl:2,
  name:`Augury`,
  rng:`S`,
  type:`2dlvl divi rit`
},{
  cst:`1act`,
  desc:`You attempt to suppress strong emotions in a group of people. Each humanoid in a 20-ft-radius sphere centered on a point you choose within range must make a Charisma saving throw; a creature can choose to fail this saving throw if it wishes. If a creature fails its saving throw, choose one of the following two effects. You can suppress any effect causing a target to be charmed or frightened. When this spell ends, any suppressed effect resumes, provided that its duration has not expired in the meantime. Alternatively, you can make a target indifferent about creatures o f your choice that it is hostile toward. This indifference ends if the target is attacked or harmed by a spell or if it witnesses any of its friends being harmed. When the spell ends, the creature becomes hostile again, unless the DM rules otherwise.`,
  dur:`Conc 1m`,
  lvl:2,
  name:`Calm Emotions`,
  rng:60,
  type:`2dlvl Enchantment`
},{
  cst:`1act`,
  desc:`Choose a humanoid that you can see within range. The target must succeed on a Wisdom saving throw or be paralyzed for the duration. At the end of each of its turns, the target can make another Wisdom saving throw. On a success, the spell ends on the target.`,
  dur:`Conc 1m`,
  hlvl:`When you cast this spell using a spell slot of 3rd level or higher, you can target one additional humanoid for each slot level above 2nd. The humanoids must be within 30 feet of each other when you target them.`,
  lvl:2,
  name:`Hold Person`,
  rng:60,
  type:`2dlvl divi rit`
},{
  cst:`1act`,
  desc:`You touch a creature and can end either one disease or one condition afflicting it. The condition can be blinded, deafened, paralyzed, or poisoned.`,
  dur:`Inst.`,
  lvl:2,
  name:`Lesser Restoration`,
  rng:`T`,
  type:`2dlvl abju`
},{
  cst:`10m`,
  desc:`Up to six creatures of your choice that you can see within range each regain hit points equal to 2d8 + your spellcasting ability modifier. This spell has no effect on undead or constructs.`,
  dur:`Inst.`,
  hlvl:`When you cast this spell using a spell slot of 3rd level or higher, the healing increases by 1d8 for each slot level above 2nd.`,
  lvl:2,
  name:`Prayer of Healing`,
  rng:30,
  type:`2dlvl evo`
},{
  cst:`1act`,
  desc:`For the duration, no sound can be created within or pass through a 20-ft-radius sphere centered on a point you choose within range. Any creature or object entirely inside the sphere is immune to thunder damage, and creatures are deafened while entirely inside it.`,
  dur:`Conc 10m`,
  lvl:2,
  name:`Silence`,
  rng:120,
  type:`2dlvl illus rit`
},{
  cst:`1 bns act`,
  desc:`You create a floating, spectral weapon within range that lasts for the duration or until you cast this spell again. When you cast the spell, you can make a melee spell attack against a creature within 5 feet of the weapon. On a hit, the target takes force damage equal to 1d8 + your spellcasting ability modifier. As a bonus action on your turn, you can move the weapon up to 20 feet and repeat the attack against a creature within 5 feet of it. The weapon can take whatever form you choose. Clerics of deities who are associated with a particular weapon (as St. Cuthbert is known for his mace and Thor for his hammer) make this spell's effect resemble that weapon.`,
  dur:`1m`,
  lvl:2,
  name:`Spiritual Weapon`,
  rng:60,
  type:`2dlvl evo`
},{
  cst:`1act`,
  desc:`This spell wards a willing creature you touch and creates a mystic connection between you and the target until the spell ends. While the target is within 60 feet of you, it gains a +1 bonus to AC and saving throws, and it has resistance to all damage. Also, each time it takes damage, you take the same amount of damage. The spell ends if you drop to 0 hit points or if you and the  target become separated by more than 60 feet. It also ends if the spell is cast again on either of the connected creatures. You can also dismiss the spell as an action.`,
  dur:`1h`,
  lvl:2,
  name:`Warding Bond`,
  rng:`T`,
  type:`2dlvl abju`
},{
  cst:`1m`,
  desc:`This spell creates an undead servant. Choose a pile of bones or a corpse of a Medium or Small humanoid within range. Your spell imbues the target with a foul mimicry of life, raising it as an undead creature. The target becomes a skeleton if you chose bones or a zombie if you chose a corpse (the DM has the creature's game statistics). On each of your turns, you can use a bonus action to mentally command any creature you made with this spell if the creature is within 60 feet of you (if you control multiple creatures, you can command any or all of them at the same time, issuing the same command to each one). You decide what action the creature will take and where it will move during its next turn, or you can issue a general command, such as to guard a particular chamber or corridor. If you issue no commands, the creature only defends itself against hostile creatures. Once given an order, the creature continues to follow it until its task is complete. The creature is under your control for 24 hours, after which it stops obeying any command you've given it. To maintain control of the creature for another 24 hours, you must cast this spell on the creature again before the current 24-hour period ends. This use of the spell reasserts your control over up to four creatures you have animated with this spell, rather than animating a new one.`,
  dur:`Inst.`,
  hlvl:`When you cast this spell using a spell slot of 4th level or higher, you animate or reassert control over two additional undead creatures for each slot level above 3rd. Each of the creatures must come from a different corpse or pile of bones.`,
  lvl:3,
  name:`Animate Dead`,
  rng:10,
  type:`3lvl necro`
},{
  cst:`1act`,
  desc:`You create an invisible, magical eye within range that hovers in the for the duration. You mentally recieve visual information from the eye, which has normal vision and darkvision out to 30 feet. The eye can look in every direction. As an action, you can move the eye up to 30 feet in any direction. There is no limit to how far away from you the eye can move, but it can't enter another plane of existence. A solid barrier blocks the eye's movement, but the eye can pass through an opening as small as 1 inch in diameter.`,
  dur:`Conc 1h`,
  lvl:4,
  name:`Arcane Eye`,
  rng:30,
  type:`4lvl divi`
},{
  cst:`1act`,
  desc:`Life-preserving energy radiates from you in an aura with a 30-ft radius. Until the spell ends, the aura moves with you, centered on you. Each nonhostile creature in the aura (including you) has resistance to necrotic damage, and its hit point maximum can't be reduced. In addition, a nonhostile, living creature regains 1 hit point when it starts its turn in the aura with 0 hit points.`,
  dur:`Conc 10m`,
  lvl:4,
  name:`Aura of Life`,
  rng:`S (30-ft radius)`,
  type:`4lvl abju`
},{
  cst:`1act`,
  desc:`Purifying energy radiates from you in an aura with a 30-ft radius. Until the spell ends, the aura moves with you, centered on you. Each nonhostile creature in the aura (including you) can't become diseased, has resistance to poison damage, and has advantage on saving throws against effects that cause any of the following conditions:blinded, charmed, deafened, frightened, paralyzed, poisoned, and stunned.`,
  dur:`Conc 10m`,
  lvl:4,
  name:`Aura of Purity`,
  rng:`S (30-ft radius)`,
  type:`4lvl abju`
},{
  cst:`1act`,
  desc:`Healing energy radiates from you in an aura with a 30-ft radius. Until the spell ends, the aura moves with you, centered on you. You can use a bonus action to cause one creature in the aura (including you) to regain 2d6 hit points.`,
  dur:`Conc 1m`,
  lvl:3,
  name:`Aura Of Vitality`,
  rng:`S (30-ft radius)`,
  type:`3lvl evo`
},{
  cst:`1act`,
  desc:`You attempt to send one creature that you can see within range to another plane of existence. The target must succeed on a Charisma saving throw or be banished. If the target is native to the plane of existance you're on, you banish the target to a harmless demiplane. While there, the target is incapacitated. The target remains there until the spell ends, at which point the target reappears in the space it left or in the nearest unoccupied space if that space is occupied. If the target is native to a different plane of existance than the one you're on, the target is banished with a faint popping noise, returning to its home plane. If the spell ends before 1 minute has passed, the target reappears in the space it left or in the nearest unoccupied space if that space is occupied. Otherwise, the target doesn't return.`,
  dur:`Conc 1m`,
  hlvl:`When you cast this spell using a spell slot of 5th level or higher, you can target one additional creature for each slot level above 4th.`,
  lvl:4,
  name:`Banishment`,
  rng:60,
  type:`4lvl abju`
},{
  cst:`1act`,
  desc:`This spell bestows hope and vitality. Choose any number of creatures within range. For the duration, each target has advantage on Wisdom saving throws and death saving throws, and regains the maximum number of hit points possible from any healing.`,
  dur:`Conc 1m`,
  lvl:3,
  name:`Beacon of Hope`,
  rng:30,
  type:`3lvl abju`
},{
  cst:`1act`,
  desc:`Necromantic energy washes over a creature of your choice that you can see within range, draining moisture and vitality from it. The target must make a Constitution saving throw. The target takes 8d8 necrotic damage on a failed save, or half as much damage on a successful one. The spell has no effect on undead or constructs. If you target a plant creature or a magical plant, it makes the saving throw with disadvantage, and the spell deals maximum damage to it. If you target a nonmagical plant that isn't a creature, such as a tree or shrub, it doesn't make a saving throw; it simply withers and dies.`,
  dur:`Inst.`,
  hlvl:`When you cast this spell using a spell slot of 5th level of higher, the damage increases by 1d8 for each slot level above 4th.`,
  lvl:4,
  name:`Blight`,
  rng:30,
  type:`4lvl necro`
},{
  cst:`1act`,
  desc:`* Choose one ability score. While cursed, the target has disadvantage on ability checks and saving throws made with that ability score. * While cursed, the target has disadvantage on attack rolls against you. * While cursed, the target must make a Wisdom saving throw at the start of each of its turns. If it fails, it wastes its action that turn doing nothing. * While the target is cursed, your attacks and spells deal an extra 1d8 necrotic damage to the target. A *[remove curse](../remove-curse/ \`remove curse (lvl 3)\`)* spell ends this effect. At the DM's option, you may choose an alternative curse effect, but it should be no more powerful than those described above. The DM has final say on such a curse's effect.`,
  dur:`Conc 1m`,
  hlvl:`If you cast this spell using a spell slot of 4th level or higher, the duration is concentration, up to 10 minutes. If you use a spell slot of 5th level or higher, the duration is 8 hours. If you use a spell slot of 7th level or higher, the duration is 24 hours. If you use a 9th level spell slot, the spell lasts until it is dispelled. Using a spell slot of 5th level or higher grants a duration that doesn't require concentration.`,
  lvl:3,
  name:`Bestow Curse`,
  rng:`T`,
  type:`3lvl necro`
},{
  cst:`1 bns act`,
  desc:`The next time you hit a creature with a melee weapon attack during this spell's duration, your weapon flares with bright light, and the attack deals an extra 3d8 radiant damage to the target. Additionally, the target must succeed on a Constitution saving throw or be blinded until the spell ends. A creature blinded by this spell makes another Constitution saving throw at the end of each of its turns. On a successful save, it is no longer blinded.`,
  dur:`Conc 1m`,
  lvl:3,
  name:`Blinding Smite`,
  rng:`S`,
  type:`3lvl evo`
},{
  cst:`1act`,
  desc:`Roll a d20 at the end of each of your turns for the duration of the spell. On a roll of 11 or higher, you vanish from your current plane of existence and appear in the Ethereal Plane (the spell fails and the casting is wasted if you were already on that plane). At the start of your next turn, and when the spell ends if you are on the Ethereal Plane, you return to an unoccupied space of your choice that you can see within 10 feet of the space you vanished from. If no unoccupied space is available within that range, you appear in the nearest unoccupied space (chosen at random if more than one space is equally near). You can dismiss this spell as an action. While on the Ethereal Plane, you can see and hear the plane you originated from, which is cast in shades of gray, and you can't see anything there more than 60 feet away. You can only affect and be affected by other creatures on the Ethereal Plane. Creatures that aren't there can't perceive you or interact with you, unless they have the ability to do so.`,
  dur:`1m`,
  lvl:3,
  name:`Blink`,
  rng:`S`,
  type:`3lvl transm`
},{
  cst:`1act`,
  desc:`A storm cloud appears in the shape of a cylinder that is 10 feet tall with a 60-ft radius, centered on a point you can see 100 feet directly above you. The spell fails if you can't see a point in the air where the storm cloud could appear (for example, if you are in a room that can't accommodate the cloud). When you cast the spell, choose a point you can see within range. A bolt of lightning flashes down from the cloud to that point. Each creature within 5 feet of that point must make a Dexterity saving throw. A creature takes 3d10 lightning damage on a failed save, or half as much damage on a successful one. On each of your turns until the spell ends, you can use your action to call down lightning in this way again, targeting the same point or a different one. If you are outdoors in stormy conditions when you cast this spell, the spell gives you control over the existing storm instead of creating a new one. Under such conditions, the spell's damage increases by 1d10.`,
  dur:`Conc 10m`,
  hlvl:`When you cast this spell using a spell slot of 4th or higher level, the damage increases by 1d10 for each slot level above 3rd.`,
  lvl:3,
  name:`Call Lightning`,
  rng:120,
  type:`3lvl conj`
},{
  cst:`10m`,
  desc:`You create an invisible sensor within range in a location familiar to you (a place you have visited or seen before) or in an obvious location that is unfamiliar to you (such as behind a door, around a corner, or in a grove of trees). The sensor remains in place for the duration, and it can't be attacked or otherwise interacted with. When you cast the spell, you choose seeing or hearing. You can use the chosen sense through the sensor as if you were in its space. As your action, you can switch between seeing and hearing. A creature that can see the sensor (such as a creature benefiting from *[see invisibility](../see-invisibility/ \`see invisibility (lvl 2)\`)* or truesight) sees a luminous, intangible orb about the size of your fist.`,
  dur:`Conc 10m`,
  lvl:3,
  name:`Clairvoyance`,
  rng:`1 mile`,
  type:`3lvl divi`
},{
  cst:`1act`,
  desc:`You fill the air with spinning daggers in a cube 5 feet on each side, centered on a point you choose within range. A creature takes 4d4 slashing damage when it enters the spell's area for the first time on a turn or starts its turn there.`,
  dur:`Conc 1m`,
  hlvl:`When you cast this spell using a spell slot of 3rd level or higher, the damage increases by 2d4 for each slot level above 2nd.`,
  lvl:2,
  name:`Cloud of Daggers`,
  rng:60,
  type:`2dlvl conj`
},{
  cst:`1act`,
  desc:`Creatures of your choice that you can see within range and that can hear you must make a Wisdom saving throw. A target automatically succeeds on this saving throw if it can't be charmed. On a failed save, a target is affected by this spell. Until the spell ends, you can use a bonus action on each of your turns to designate a direction that is horizontal to you. Each affected target must use as much of its movement as possible to move in that direction on its next turn. It can take any action before it moves. After moving in this way, it can make another Wisdom save to try to end the effect. A target isn't compelled to move into an obviously deadly hazard, such as a fire or a pit, but it will provoke opportunity attacks to move in the designated direction.`,
  dur:`Conc 1m`,
  lvl:4,
  name:`Compulsion`,
  rng:30,
  type:`4lvl enchmt`
},{
  cst:`1act`,
  desc:`* One beast of challenge rating 2 or lower * Two beasts of challenge rating 1 or lower * Four beasts of challenge rating 1/2 or lower * Eight beasts of challenge rating 1/4 or lower Each beast is also considered fey, and it disappears when it drops to 0 hit points or when the spell ends. The summoned creatures are friendly to you and your companions. Roll initiative for the summoned creatures as a group, which has its own turns. They obey any verbal commands that you issue to them (no action required by you). If you don't issue any commands to them, they defend themselves from hostile creatures, but otherwise take no actions. The DM has the creatures' statistics.`,
  dur:`Conc 1h`,
  hlvl:`When you cast this spell using certain higher-level spell slots, you choose one of the summoning options above, and more creatures appear:twice as many with a 5lvl slot, three times as many with a 7lvl`,
  lvl:3,
  name:`Conjure Animals`,
  rng:60,
  type:`3lvl conj`
},{
  cst:`1act`,
  desc:`You throw a nonmagical weapon or fire a piece of nonmagical ammunition into the air to create a cone of identical weapons that shoot forward and then disappear. Each creature in a 60-ft cone must succeed on a Dexterity saving throw. A creature takes 3d8 damage on a failed save, or half as much damage on a successful one. The damage type is the same as that of the weapon or ammunition used as a component.`,
  dur:`Inst.`,
  lvl:3,
  name:`Conjure Barrage`,
  rng:`S (60-ft cone)`,
  type:`3lvl conj`
},{
  cst:`1 reaction, which you take when you see a creature within 60 feet of you casting a spell.`,
  desc:`You attempt to interrupt a creature in the process of casting a spell. If the creature is casting a spell of 3rd level or lower, its spell fails and has no effect. If it is casting a spell of 4th level or higher, make an ability check using your spellcasting ability. The DC equals 10 + the spell's level. On a success, the creature's spell fails and has no effect.`,
  dur:`Inst.`,
  hlvl:`When you cast this spell using a spell slot of 4th level or higher, the interrupted spell has no effect if its level is less than or equal to the level of the spell slot you used.`,
  lvl:3,
  name:`Counterspell`,
  rng:60,
  type:`3lvl abju`
},{
  cst:`1act`,
  desc:`You create 45 pounds of food and 30 gallons of water on the ground or in containers within range, enough to sustain up to fifteen humanoids or five steeds for 24 hours. The food is bland but nourishing, and spoils if uneaten after 24 hours. The water is clean and doesn't go bad.`,
  dur:`Inst.`,
  lvl:3,
  name:`Create Food and Water`,
  rng:30,
  type:`3lvl conj`
},{
  cst:`1act`,
  desc:`Holy power radiates from you in an aura with a 30-ft radius, awakening boldness in friendly creatures. Until the spell ends, the aura moves with you, centered on you. While in the aura, each nonhostile creature in the aura (including you) deals an extra 1d4 radiant damage when it hits with a weapon attack.`,
  dur:`Conc 1m`,
  lvl:3,
  name:`Crusader's Mantle`,
  rng:`S`,
  type:`3lvl evo`
},{
  cst:`1act`,
  desc:`A 60-ft-radius sphere of light spreads out from a point you choose within range. The sphere is bright light and sheds dim light for an additional 60 feet. If you chose a point on an object you are holding or one that isn't being worn or carried, the light shines from the object and moves with it. Completely covering the affected object with an opaque object, such as a bowl or a helm, blocks the light. If any of this spell's area overlaps with an area of darkness created by a spell of 3rd level or lower, the spell that created the darkness is dispelled.`,
  dur:`1h`,
  lvl:3,
  name:`Daylight`,
  rng:60,
  type:`3lvl evo`
},{
  cst:`1act`,
  desc:`Choose one creature, object, or magical effect within range. Any spell of 3rd level or lower on the target ends. For each spell of 4th level or higher on the target, make an ability check using your spellcasting ability. The DC equals 10 + the spell's level. On a successful check, the spell ends.`,
  dur:`Inst.`,
  hlvl:`When you cast this spell using a spell slot of 4th level or higher, you automatically end the effects of a spell on the target if the spell's level is equal to or less than the level of the spell slot you used.`,
  lvl:3,
  name:`Dispel Magic`,
  rng:120,
  type:`3lvl abju`
},{
  cst:`1act`,
  desc:`A nonmagical weapon you touch becomes a magic weapon. Choose one of the following damage types:acid, cold, fire, lightning, or thunder. For the duration, the weapon has a +1 bonus to attack rolls and deals an extra 1d4 damage of the chosen type when it hits.`,
  dur:`Conc 1h`,
  hlvl:`When you cast this spell using a spell slot of 5th or 6th level, the bonus to attack rolls increases to +2 and the extra damage increases to 2d4. When you use a spell slot of 7th level or higher, the bonus increases to +3 and the extra damage increases to 3d4.`,
  lvl:3,
  name:`Elemental Weapon`,
  rng:`T`,
  type:`3lvl transm`
},{
  cst:`1act`,
  desc:`You project a phantasmal image of a creature's worst fears. Each creature in a 30-ft cone must succeed on a Wisdom saving throw or drop whatever it is holding and become frightened for the duration. While frightened by this spell, a creature must take the Dash action and move away from you by the safest available route on each of its turns, unless there is nowhere to move. If the creature ends its turn in a location where it doesn't have line of sight to you, the creature can make a Wisdom saving throw. On a successful save, the spell ends for that creature.`,
  dur:`Conc 1m`,
  lvl:3,
  name:`Fear`,
  rng:`S (30-ft cone)`,
  type:`3lvl illus`
},{
  cst:`1act`,
  desc:`You touch a willing creature and put it into a cataleptic state that is indistinguishable from death. For the spell's duration, or until you use an action to touch the target and dismiss the spell, the target appears dead to all outward inspection and to spells used to determine the target's status. The target is blinded and incapacitated, and its speed drops to 0. The target has resistance to all damage except psychic damage. If the target is diseased or poisoned when you cast the spell, or becomes diseased or poisoned while under the spell's effect, the disease and poison have no effect until the spell ends.`,
  dur:`1h`,
  lvl:3,
  name:`Feign Death`,
  rng:`T`,
  type:`3lvl necro rit`
},{
  cst:`1act`,
  desc:`A bright streak flashes from your pointing finger to a point you choose within range and then blossoms with a low roar into an explosion of flame. Each creature in a 20-ft-radius sphere centered on that point must make a Dexterity saving throw. A target takes 8d6 fire damage on a failed save, or half as much damage on a successful one. The fire spreads around corners. It ignites flammable objects in the area that aren't being worn or carried.`,
  dur:`Inst.`,
  hlvl:`When you cast this spell using a spell slot of 4th level or higher, the damage increases by 1d6 for each slot level above 3rd.`,
  lvl:3,
  name:`Fireball`,
  rng:150,
  type:`3lvl evo`
},{
  cst:`1act`,
  desc:`You touch a willing creature. The target gains a flying speed of 60 feet for the duration. When the spell ends, the target falls if it is still aloft, unless it can stop the fall.`,
  dur:`Conc 10m`,
  hlvl:`When you cast this spell using a spell slot of 4th level or higher, you can target one additional creature for each slot level above 3rd.`,
  lvl:3,
  name:`Fly`,
  rng:`T`,
  type:`3lvl transm`
},{
  cst:`1act`,
  desc:`You transform a willing creature you touch, along with everything it's wearing and carrying, into a misty cloud for the duration. The spell ends if the creature drops to 0 hit points. An incorporeal creature isn't affected. While in this form, the target's only method of movement is a flying speed of 10 feet. The target can enter and occupy the space of another creature. The target has resistance to nonmagical damage, and it has advantage on Strength, Dexterity, and Constitution saving throws. The target can pass through small holes, narrow openings, and even mere cracks, though it treats liquids as though they were solid surfaces. The target can't fall and remains hovering in the air even when stunned or otherwise incapacitated. While in the form of a misty cloud, the target can't talk or manipulate objects, and any objects it w as carrying or holding can't be dropped, used, or otherwise interacted with. The target can't attack or cast spells.`,
  dur:`Conc 1h`,
  lvl:3,
  name:`Gaseous Form`,
  rng:`T`,
  type:`3lvl transm`
},{
  cst:`1act`,
  desc:`Choose a willing creature that you can see within range. Until the spell ends, the target's speed is doubled, it gains a +2 bonus to AC, it has advantage on Dexterity saving throws, and it gains an additional action on each of its turns. That action can be used only to take the Attack (one weapon attack only), Dash, Disengage, Hide, or Use an Object action. When the spell ends, the target can't move or take actions until after its next turn, as a wave of lethargy sweeps over it.`,
  dur:`Conc 1m`,
  lvl:3,
  name:`Haste`,
  rng:30,
  type:`3lvl transm`
},{
  cst:`1act`,
  desc:`You create a twisting pattern of colors that weaves through the air inside a 30-ft cube within range. The pattern appears for a moment and vanishes. Each creature in the area who sees the pattern must make a Wisdom saving throw. On a failed save, the creature becomes charmed for the duration. While charmed by this spell, the creature is incapacitated and has a speed of 0. The spell ends for an affected creature if it takes any damage or if someone else uses an action to shake the creature out of its stupor.`,
  dur:`Conc 1m`,
  lvl:3,
  name:`Hypnotic Pattern`,
  rng:120,
  type:`3lvl illus`
},{
  cst:`1 bns act`,
  desc:`The next time you make a ranged w eapon attack during the spell's duration, the weapon's ammunition, or the weapon itself if it's a thrown weapon, transforms into a bolt of lightning. Make the attack roll as normal. The target takes 4d8 lightning damage on a hit, or half as much damage on a miss, instead of the weapon's normal damage. Whether you hit or miss, each creature within 10 feet of the target must make a Dexterity saving throw. Each of these creatures takes 2d8 lightning damage on a failed save, or half as much damage on a successful one. The piece of ammunition or weapon then returns to its normal form.`,
  dur:`Conc 1m`,
  hlvl:`When you cast this spell using a spell slot of 4th level or higher, the damage for both effects of the spell increases by 1d8 for each slot level above 3rd.`,
  lvl:3,
  name:`Lightning Arrow`,
  rng:`S`,
  type:`3lvl transm`
},{
  cst:`1m`,
  desc:`You create a 10-ft-radius, 20-ft-tall cylinder of magical energy centered on a point on the ground that you can see within range. Glowing runes appear wherever the cylinder intersects with the floor or other surface. * The creature can't willingly enter the cylinder by nonmagical means. If the creature tries to use teleportation or interplanar travel to do so, it must first succeed on a Charisma saving throw. * The creature has disadvantage on attack rolls against targets within the cylinder. * Targets within the cylinder can't be charmed, frightened, or possessed by the creature. When you cast this spell, you can elect to cause its magic to operate in the reverse direction, preventing a creature of the specified type from leaving the cylinder and protecting targets outside it.`,
  dur:`1h`,
  hlvl:`When you cast this spell using a spell slot of 4th level or higher, the duration increases by 1 hour for each slot level above 3rd.`,
  lvl:3,
  name:`Magic Circle`,
  rng:10,
  type:`3lvl abju`
},{
  cst:`1act`,
  desc:`You create the image of an object, a creature, or some other visible phenomenon that is no larger than a 20-ft cube. The image appears at a spot that you can see within range and lasts for the duration. It seems completely real, including sounds, smells, and temperature appropriate to the thing depicted. You can't create sufficient heat or cold to cause damage, a sound loud enough to deal thunder damage or deafen a creature, or a smell that might sicken a creature (like a troglodyte's stench). As long as you are within range o f the illus, you can use your action to cause the image to move to any other spot within range. As the image changes location, you can alter its appearance so that its movements appear natural for the image. For example, if you create an image o f a creature and move it, you can alter the image so that it appears to be walking. Similarly, you can cause the illus to make different sounds at different times, even making it carry on a conversation, for example. Physical interaction with the image reveals it to be an illus, because things can pass through it. A creature that uses its action to examine the image can determine that it is an illus with a successful Intelligence (Investigation) check against your spell save DC. If a creature discerns the illus for what it is, the creature can see through the image, and its other sensory qualities become faint to the creature.`,
  dur:`Conc 10m`,
  hlvl:`When you cast this spell using a spell slot o f 6th level or higher, the spell lasts until dispelled, without requiring your concentration.`,
  lvl:3,
  name:`Major Image`,
  rng:120,
  type:`3lvl illus`
},{
  cst:`1 bns act`,
  desc:`As you call out words of restoration, up to six creatures of your choice that you can see within range regain hit points equal to 1d4 + your spellcasting ability modifier. This spell has no effect on undead or constructs.`,
  dur:`Inst.`,
  hlvl:`When you cast this spell using a spell slot of 4th level or higher, the healing increases by 1d4 for each slot level above 3rd.`,
  lvl:3,
  name:`Mass Healing Word`,
  rng:60,
  type:`3lvl evo`
},{
  cst:`1act`,
  desc:`You assume a different form. When you cast the spell, choose one of the following options, the effects of which last for the duration of the spell. While the spell lasts, you can end one option as an action to gain the benefits of a different one.`,
  dur:`Conc 1h`,
  lvl:2,
  name:`Alter Self`,
  rng:`S`,
  type:`2nd-Level Transmutation`
},{
  cst:`1act`,
  desc:`You touch a closed door, window, gate, chest, or other entryway, and it becomes locked for the duration. You and the creatures you designate when you cast this spell can open the object normally. You can also set a password that, when spoken within 5 feet of the object, suppresses this spell for 1 minute. Otherwise, it is impassable until it is broken or the spell is dispelled or suppressed. Casting knock on the object suppresses arcane lock for 10 minutes. While affected by this spell, the object is more difficult to break or force open; the DC to break it or pick any locks on it increases by 10.`,
  dur:`Until dispelled`,
  lvl:2,
  name:`Arcane Lock`,
  rng:`T`,
  type:`2nd-Level abju`
},{
  cst:`1act`,
  desc:`You touch a willing creature. Until the spell ends, the target's skin has a rough, bark-like appearance, and the target's AC can't be less than 16, regardless of what kind of armor it is wearing.`,
  dur:`Conc 1h`,
  lvl:2,
  name:`Barkskin`,
  rng:`T`,
  type:`2dlvl transm`
},{
  cst:`1act`,
  desc:`For the duration, you hide a target that you touch from divi magic. The target can be a willing creature or a place or an object no larger than 10 feet in any dimension. The target can't be targeted by any divi magic or perceived through magical scrying sensors.`,
  dur:`8h`,
  lvl:3,
  name:`Nondetection`,
  rng:`T`,
  type:`3lvl abju`
},{
  cst:`1act`,
  desc:`You step into a stone object or surface large enough tofully contain your body, melding yourself and all the equipment you carry with the stone for the duration. Using your movement, you step into the stone at a point you can touch. Nothing of your presence remains visible or otherwise detectable by nonmagical senses. While merged with the stone, you can't see what occurs outside it, and any Wisdom (Perception) checks you make to hear sounds outside it are made with disadvantage. You remain aware of the passage of time and can cast spells on yourself while merged in the stone. You can use your movement to leave the stone where you entered it, which ends the spell. You otherwise can't move. Minor physical damage to the stone doesn't harm you, but its partial destruction or a change in its shape (to the extent that you no longer fit w ithin it) expels you and deals 6d6 bludgeoning damage to you. The stone's complete destruction (or transm into a different substance) expels you and deals 50 bludgeoning damage to you. If expelled, you fall prone in an unoccupied space closest to where you first entered.`,
  dur:`8h`,
  lvl:3,
  name:`Meld Into Stone`,
  rng:`T`,
  type:`3lvl transm rit`
},{
  cst:`1m`,
  desc:`A Large quasi-real, horselike creature appears on the ground in an unoccupied space of your choice within range. You decide the creature's appearance, but it is equipped with a saddle, bit, and bridle. Any of the equipment created by the spell vanishes in a puff of smoke if it is carried more than 10 feet away from the steed. For the duration, you or a creature you choose can ride the steed. The creature uses the statistics for a riding horse, except it has a speed of 100 feet and can travel 10 miles in an hour, or 13 miles at a fast pace. When the spell ends, the steed gradually fades, giving the rider 1 minute to dismount. The spell ends if you use an action to dismiss it or if the steed takes any damage.`,
  dur:`1h`,
  lvl:3,
  name:`Phantom Steed`,
  rng:30,
  type:`3lvl illus rit`
},{
  cst:`1act or 8h`,
  desc:`This spell channels vitality into plants within a specific area. There are two possible uses for the spell, granting either immediate or long-term benefits. If you cast this spell using 1 action, choose a point within range. All normal plants in a 100-ft radius centered on that point become thick and overgrown. A creature moving through the area must spend 4 feet of movement for every 1 ft it moves. You can exclude one or more areas of any size within the spell's area from being affected. If you cast this spell over 8 hours, you enrich the land. All plants in a half-mile radius centered on a point within range become enriched for 1 year. The plants yield twice the normal amount of food when harvested.`,
  dur:`Inst.`,
  lvl:3,
  name:`Plant Growth`,
  rng:150,
  type:`3lvl transm`
},{
  cst:`1act`,
  desc:`For the duration, the willing creature you touch has resistance to one damage type of your choice:acid, cold, fire, lightning, or thunder.`,
  dur:`Conc 1m`,
  lvl:3,
  name:`Protection from Energy`,
  rng:`T`,
  type:`3lvl abju`
},{
  cst:`1act`,
  desc:`You touch a creature that has died within the last minute. That creature returns to life with 1 hit point. This spell can't return to life a creature that has died of old age, nor can it restore any missing body parts.`,
  dur:`Inst.`,
  lvl:3,
  name:`Revivify`,
  rng:`T`,
  type:`3lvl conj`
},{
  cst:`1act`,
  desc:`You send a short message of twenty-five words or less to a creature with which you are familiar. The creature hears the message in its mind, recognizes you as the sender if it knows you, and can answer in a like manner immediately. The spell enables creatures with Intelligence scores of at least 1 to understand the meaning of your message. You can send the message across any distance and even to other planes of existence, but if the target is on a different plane than you, there is a 5 percent chance that the message doesn't arrive.`,
  dur:`1r`,
  lvl:3,
  name:`Sending`,
  rng:`Unlimited`,
  type:`3lvl evo`
},{
  cst:`1act`,
  desc:`Until the spell ends, freezing rain and sleet fall in a 20-ft-tall cylinder with a 40-ft radius centered on a point you choose within range. The area is heavily obscured, and exposed flames in the area are doused. The ground in the area is covered with slick ice, making it difficult terrain. When a creature enters the spell's area for the first time on a turn or starts its turn there, it must make a Dexterity saving throw. On a failed save, it falls prone. If a creature is concentrating in the spell's area, the creature must make a successful Constitution saving throw against your spell save DC or lose concentration.`,
  dur:`Conc 1m`,
  lvl:3,
  name:`Sleet Storm`,
  rng:150,
  type:`3lvl conj`
},{
  cst:`1act`,
  desc:`You alter time around up to six creatures of your choice in a 40-ft cube within range. Each target must succeed on a wisdom saving throwor be affected by this spell for the duration. An affected target's speed is halved, it takes a -2 penalty to AC and Dexterity saving throws, and it can't use reactions. On its turn, it can use either an action or a bonus action, not both. Regardless of the creature's abilities or magic items, it can't make more than one melee or ranged attack during its turn. If the creature attempts to cast a spell with a casting time of 1 action, roll a d20. On an 11 or higher, the spell doesn't take effect until the creature's next turn, and the creature must use its action on that turn to complete the spell. If it can't, the spell is wasted. A creature affected by this spell makes another Wisdom saving throwat the end of its turn. On a successful save, the effect ends for it.`,
  dur:`Conc 1m`,
  lvl:3,
  name:`Slow`,
  rng:120,
  type:`3lvl transm`
},{
  cst:`1act`,
  desc:`You grant the semblance o f life and intelligence to a corpse of your choice within range, allowing it to answer the questions you pose. The corpse must still have a mouth and can't be undead. The spell fails if the corpse was the target o f this spell within the last 10 days. Until the spell ends, you can ask the corpse up to five questions. The corpse knows only what it knew in life, including the languages it knew. Answers are usually brief, cryptic, or repetitive, and the corpse is under no compulsion to offer a truthful answer if you are hostile to it or it recognizes you as an enemy. This spell doesn't return the creature's soul to its body, only its animating spirit. Thus, the corpse can't learn new information, doesn't comprehend anything that has happened since it died, and can't speculate about future events.`,
  dur:`10m`,
  lvl:3,
  name:`Speak with Dead`,
  rng:10,
  type:`3lvl necro`
},{
  cst:`1act`,
  desc:`You imbue plants within 30 feet of you with limited sentience and animation, giving them the ability to communicate with you and follow your simple commands. You can question plants about events in the spell's area within the past day, gaining information about creatures that have passed, weather, and other circumstances. You can also turn difficult terrain caused by plant growth (such as thickets and undergrowth) into ordinary terrain that lasts for the duration. Or you can turn ordinary terrain where plants are present into difficult terrain that lasts for the duration, causing v ines and branches to hinder pursuers, for example. Plants might be able to perform other tasks on your behalf, at the DM's discretion. The spell doesn't enable plants to uproot themselves and move about, but they can freely move branches, tendrils, and stalks. If a plant creature is in the area, you can communicate with it as if you shared a common language, but you gain no magical ability to influence it. This spell can cause the plants created by the entangle spell to release a restrained creature.`,
  dur:`10m`,
  lvl:3,
  name:`Speak with Plants`,
  rng:`S (30-ft radius`,
  type:`3lvl transm`
},{
  cst:`1act`,
  desc:`You call forth spirits to protect you. They flit around you to a distance of 15 feet for the duration. If you are good or neutral, their spectral form appears angelic or fey (your choice). If you are evil, they appear fiendish. When you cast this spell, you can designate any number of creatures you can see to be unaffected by it. An affected creature's speed is halved in the area, and when the creature enters the area for the first time on a turn or starts its turn there, it must make a Wisdom saving throw. On a failed save, the creature takes 3d8 radiant damage (if you are good or neutral) or 3d8 necrotic damage (if you are evil). On a successful save, the creature takes half as much damage.`,
  dur:`Conc 10m`,
  hlvl:`When you cast this spell using a spell slot of 4th level or higher, the damage increases by 1d8 for each slot level above 3rd.`,
  lvl:3,
  name:`Spirit Guardians`,
  rng:`S (15-ft radius)`,
  type:`3lvl conj`
},{
  cst:`1act`,
  desc:`You create a 20-ft-radius sphere of yellow, nauseating gas centered on a point within range. The cloud spreads around corners, and its area is heavily obscured. The cloud lingers in the air for the duration. Each creature that is completely within the cloud at the start of its turn must make a Constitution saving throw against poison. On a failed save, the creature spends its action that turn retching and reeling. Creatures that don't need to breathe or are immune to poison automatically succeed on this saving throw. A moderate wind (at least 10 miles per hour) disperses the cloud after 4 rounds. A strong wind (at least 20 miles per hour) disperses it after 1 round.`,
  dur:`Conc 1m`,
  lvl:3,
  name:`Stinking Cloud`,
  rng:90,
  type:`3lvl conj`
},{
  cst:`1act`,
  desc:`This spell assaults and twists creatures' minds, spawning delusions and provoking uncontrolled action. Each creature in a 10-ft radius sphere centered on a point you choose within range must succeed on a Wisdom saving throw when you cast this spell or by affected by it. An affected target can't take reactions and must roll a d10 at the start of each of its turns to determine its behaviour for that turn. At the end of each of its turns, an affected target can make a Wisdom saving throw. If it succeeds, this effect ends for that target`,
  dur:`Conc 1m`,
  hlvl:`When you cast this spell using a spell slot of 5th level or higher, the radius of the sphere increases by 5 feet for each spell slot above 4th.`,
  lvl:4,
  name:`Confusion`,
  rng:90,
  type:`4lvl enchmt`
},{
  cst:`1m`,
  desc:`* One elemental of challenge rating 2 or lower * Two elementals of challenge rating 1 or lower * Four elementals of challenge rating 1/2 or lower * Eight elementals of challenge rating 1/4 or lower. An elemental summoned by this spell disappears when it drops to 0 hit points or when the spell ends. The summoned creatures are friendly to you and your companions. Roll initiative for the summoned creatures as a group, which has its own turns. They obey any verbal commands that you issue to them (no action required by you). If you don't issue any commands to them, they defend themselves from hostile creatures, but otherwise take no actions. The DM has the creatures' statistics.`,
  dur:`Conc 1h`,
  hlvl:`When you cast this spell using certain higher-level slots, you choose one of the summoning options above, and more creatures appear:twice as many with a 6lvl slot and three times as many with an 8lvl slot.`,
  lvl:4,
  name:`Conjure Minor Elementals`,
  rng:90,
  type:`4lvl conj`
},{
  cst:`1act`,
  desc:`Until the spell ends, you control any freestanding water inside an area you choose that is a cube up to 100 feet on a side. You can choose from any of the following effects when you cast this spell. As an action on your turn, you can repeat the same effect or choose a different one. If you choose an area in a large body of water, you can instead create a 20-ft tall wave that travels from one side of the area to the other and then crashes down. Any Huge or smaller vehicles in the wave's path are carried with it to the other side. Any Huge or smaller vehicles struck by the wave have a 25 percent chance of capsizing. The water level remains elevated until the spell ends or you choose a different effect. If this effect produced a wave, the wave repeats on the start of your next turn while the flood effect lasts. When a creature enters the vortex for the first time on a turn, or starts its turn there, it must make a Strength saving throw. On a failed save, the creature takes 2d8 bludgeoning damage and is caught in the vortex until the spell ends. On a successful save, the creature takes half damage, and isn't caught in the vortex. A creature caught in the vortex can use its action to try and swim away from the vortex as described above, but has disadvantage on the Strength (Athletics) check to do so. The first time each turn that an object enters the vortex, the object takes 2d8 bludgeoning damage; this damage occurs each round it remains in the vortex.`,
  dur:`Conc 10m`,
  lvl:4,
  name:`Control Water`,
  rng:300,
  type:`4lvl transm`
},{
  cst:`1act`,
  desc:`* One fey creature of challenge rating 2 or lower * Two fey creatures of challenge rating 1 or lower * Four fey creatures of challenge rating 1/2 or lower * Eight fey creatures of challenge rating 1/4 or lower A summoned creature disappears when it drops to 0 hit points or when the spell ends. The summoned creatures are friendly to you and your companions. Roll initiative for the summoned creatures as a group, which have their own turns. They obey any verbal commands that you issue to them (no action required by you). If you don't issue any commands to them, they defend themselves from hostile creatures, but otherwise take no actions. The DM has the creatures' statistics.`,
  dur:`Conc 1h`,
  hlvl:`When you cast this spell using certain higher-level spell slots, you choose one of the summoning options above, and more creatures appear:twice as many with a 6lvl slot and three times as many with an 8lvl slot.`,
  lvl:4,
  name:`Conjure Woodland Beings`,
  rng:60,
  type:`4lvl conj`
},{
  cst:`1act`,
  desc:`You touch a creature and grant it a measure of protection from death. The first time the target would drop to 0 hit points as a result of taking damage, the target instead drops to 1 hit point, and the spell ends. If the spell is still in effect when the target is subjected to an effect that would kill it instantaneously without dealing damage, that effect is instead negated against the target, and the spell ends.`,
  dur:`8h`,
  lvl:4,
  name:`Death Ward`,
  rng:`T`,
  type:`4lvl abju`
},{
  cst:`1act`,
  desc:`This spell grants the creature you touch the ability to understand any spoken language it hears. Moreover, when the target speaks, any creature that knows at least one language and can hear the target understands what it says.`,
  dur:`1h`,
  lvl:3,
  name:`Tongues`,
  rng:`T`,
  type:`3lvl divi`
},{
  cst:`1act`,
  desc:`You touch a willing beast. For the duration of the spell, you can use your action to see through the beast's eyes and hear what it hears, and continue to do so until you use your action to return to your normal senses. While perceiving through the beast's senses, you gain the benefits of any special senses possessed by that creature, though you are blinded and deafened to your own surroundings.`,
  dur:`Conc 1h`,
  lvl:2,
  name:`Beast Sense`,
  rng:`T`,
  type:`2dlvl divi rit`
},{
  cst:`1act`,
  desc:`Your body becomes blurred, shifting and wavering to all who can see you. For the duration, any creature has disadvantage on attack rolls against you. An attacker is immune to this effect if it doesn't rely on sight, as with blindsight, or can see through illuss, as with truesight.`,
  dur:`Conc 1m`,
  lvl:2,
  name:`Blur`,
  rng:`S`,
  type:`2nd-Level illus`
},{
  cst:`1act`,
  desc:`The next time you hit a creature with a weapon attack before this spell ends, the weapon gleams with astral radiance as you strike. The attack deals an extra 2d6 radiant damage to the target, which becomes visible if it's invisible, and the target sheds dim light in a 5-ft radius and can't become invisible until the spell ends.`,
  dur:`Conc 1m`,
  hlvl:`When you cast this spell using a spell slot of 3rd level or higher, the extra damage increases by 1d6 for each slot level above 2nd.`,
  lvl:2,
  name:`Branding Smite`,
  rng:`S`,
  type:`2nd-Level evo`
},{
  cst:`1act`,
  desc:`You plant four pieces of nonmagical ammunition-arrows or crossbow bolts-in the ground within range and lay magic upon them to protect an area. Until the spell ends, whenever a creature other than you comes within 30 feet of the ammunition for the first time on a turn or ends its turn there, one piece of ammunition flies up to strike it. The creature must succeed on a Dexterity saving throw or take 1d6 piercing damage. The piece of ammunition is then destroyed. The spell ends when no ammunition remains. When you cast this spell, you can designate any creatures you choose, and the spell ignores them.`,
  dur:`8h`,
  hlvl:`When you cast this spell using a spell slot of 3rd level or higher, the amount of ammunition that can be affected increases by two for each slot level above 2nd.`,
  lvl:2,
  name:`Cordon Of Arrows`,
  rng:5,
  type:`2nd-Level transm`
},{
  cst:`1act`,
  desc:`One humanoid of your choice that you can see within range must succeed on a Wisdom saving throw or become charmed by you for the duration. While the target is charmed in this way, a twisted crown of jagged iron appears on its head, and a madness glows in its eyes. The charmed target must use its action before moving on each of its turns to make a melee attack against a creature other than itself that you mentally choose.`,
  dur:`Conc 1m`,
  lvl:2,
  name:`Crown of Madness`,
  rng:120,
  type:`2nd-Level enchmt`
},{
  cst:`1act`,
  desc:`Magical darkness spreads from a point you choose within range to fill a 15-ft-radius sphere for the duration. The darkness spreads around corners. A creature with darkvision can't see through this darkness, and nonmagical light can't illuminate it. If the point you choose is on an object you are holding or one that isn't being worn or carried, the darkness emanates from the object and moves with it. Completely covering the source of the darkness with an opaque object, such as a bowl or a helm, blocks the darkness. If any of this spell's area overlaps with an area of light created by a spell of 2lvl or lower, the spell that created the light is dispelled.`,
  dur:`Conc 10m`,
  lvl:2,
  name:`Darkness`,
  rng:60,
  type:`2nd-Level evo`
},{
  cst:`1act`,
  desc:`You touch a willing creature to grant it the ability to see in the dark. For the duration, that creature has darkvision out to a range of 60 feet.`,
  dur:`8h`,
  lvl:2,
  name:`Darkvision`,
  rng:`T`,
  type:`2dlvl transm`
},{
  cst:`1act`,
  desc:`For the duration, you can read the thoughts of certain creatures. When you cast the spell and as your action on each turn until the spell ends, you can focus your mind on any one creature that you can see within 30 feet of you. If the creature you choose has an Intelligence of 3 or lower or doesn't speak any language, the creature is unaffected. You initially learn the surface thoughts of the creature-what is most on its mind in that moment. As an action, you can either shift your attention to another creature's thoughts or attempt to probe deeper into the same creature's mind. If you probe deeper, the target must make a Wisdom saving throw. If it fails, you gain insight into its reasoning (if any), its emotional state, and something that looms large in its mind (such as something it worries over, loves, or hates). If it succeeds, the spell ends. Either way, the target knows that you are probing into its mind, and unless you shift your attention to another creature's thoughts, the creature can use its action on its turn to make an Intelligence check contested by your Intelligence check; if it succeeds, the spell ends. Questions verbally directed at the target creature naturally shape the course of its thoughts, so this spell is particularly effective as part of an interrogation. You can also use this spell to detect the presence of thinking creatures you can't see. When you cast the spell or as your action during the duration, you can search for thoughts within 30 feet of you. The spell can penetrate barriers, but 2 feet of rock, 2 inches of any metal other than lead, or a thin sheet of lead blocks you. You can't detect a creature with an Intelligence of 3 or lower or one that doesn't speak any language. Once you detect the presence of a creature in this way, you can read its thoughts for the rest of the duration as described above, even if you can't see it, but it must still be within range.`,
  dur:`Conc 1m`,
  lvl:2,
  name:`Detect Thoughts`,
  rng:`S`,
  type:`2nd-Level divi`
},{
  cst:`1act`,
  desc:`Your magic turns others into beasts. Choose any number of willing creatures that you can see within range. You transform each target into the form of a Large or smaller beast with a challenge rationg of 4 or lower.  On subsequent turns, you can use your action to transform affected creatures into new forms. The transformation lasts for the duration for each target, or until the target drops to 0 hit points or dies.  You can choose a different form for each target. A target's game statistics are replaced by the statistics of the chosen beast, thought the target retains its alignment and Intelligence, Wisdom, and Charisma scores. The target assumes the hit points of its new form, and when it reverts to its normal form, it returns to the number of hit points it had before it transformed. If it reverts as a result of dropping to 0 hit points, any excess damage carries over to its normal form. As long as the excess damage doesn't reduce the creature's normal form to 0 hit points, it isn't knocked unconscious. The creature is limited in the actions it can perform by the nature of its new form, and it can't speak or cast spells. The target's gear melds into the new form. The target can't activate, wield, or otherwise benefit from any of its equipment.`,
  dur:`Conc 24h`,
  lvl:8,
  name:`Animal Shapes`,
  rng:30,
  type:`8lvl transm`
},{
  cst:`1act`,
  desc:`A 10-ft-radius invisible sphere of antimagic surrounds you. This area is divorced from the magical energy that suffuses the multiverse. Within the sphere, spells can't be cast, summoned creatures disappear, and even magic items become mundane. Until the spell ends, the sphere moves with you, centered on you. Spells and other magical effects, except those created by an artifact or a deity, are suppressed in the sphere and can't protrude into it. A slot expended to cast a suppressed spell is consumed. While an effect is suppressed, it doesn't function, but the time is spends suppressed counts against its duration. A magic weapon's properties and powers are suppressed if it is used against a target in the sphere or wielded by an attacker in the sphere. If a magic weapon or a piece of magic ammunition fully leaves the sphere (for example, if you fire a magic arrow or throw a magic spear at a target outside the sphere), the magic of the item ceases to be suppressed as soon as it exits.`,
  dur:`Conc 1h`,
  lvl:8,
  name:`Antimagic Field`,
  rng:`S (10-ft-radius sphere)`,
  type:`8lvl abju`
},{
  cst:`1hr`,
  desc:`This spell attracts or repels creatures of your choice. You target something within range, either a Huge or smaller object or creature or an erea that is no larger than a 200-ft cube. Then specify a kind of intelligent creature such as red dragons, goblins or vampires. You invest the target with an aura that either attracts or repels the specified creatures for the duration. Choose antipathy or sympathy as the aura's effect. If the target damages or otherwise harms an affected creature, the affected creature can make a Wisdom saving throw to end the effect, as described below. A creature that successfully saves against this affect is immune to it for 1 minute, after which time it can be affected again.`,
  dur:`10 days`,
  lvl:8,
  name:`Antipathy/Sympathy`,
  rng:60,
  type:`8lvl enchmt`
},{
  cst:`1hr`,
  desc:`You and up to eight willing creatures within range project your astral bodies into the Astral Plane (the spell fails and the casting is wasted if you are already on that plane). The material body you leave behind is unconscious and in a state of suspended animation; it doesn't need food or air and doesn't age. Your astral body resembles your mortal form in almost every way, replicating your game statistics and possessions. The principal difference is the addition of a silvery cord that extends from between your shoulder blades and trails behind you, fading to invisibility after 1 ft. This cord is your tether to your material body. As long as the tether remains intact, you can find your way home. If the cord is cut--something that can happen only when an effect specifically states that it does--your soul and body are separated, killing you instantly. Your astral form can freely travel through the Astral Plane and can pass through portals there leading to any other plane. If you enter a new plane or return to the plane you were on when casting this spell, your body and possessions are transported along the silver cord, allowing you to re-enter your body as you enter the new plane. Your astral form is a separate incarnation. Any damage or other effects that apply to it have no effect on your physical body, nor do they persist when you return to it. The spell ends for you and your companions when you use your action to dismiss it. When the spell ends, the affected creature returns to its physical body, and it awakens. The spell might also end early for you or one of your companions. A successful _dispel magic_ spell used against an astral or physical body ends the spell for that creature. If a creature's original body or its astral form drops to 0 hit points, the spell ends for that creature. If the spell ends and the silver cord is intact, the cord pulls the creature's astral form back to its body, ending its state of suspended animation. If you are returned to your body prematurely, your companions remain in their astral forms and must find their own way back to their bodies, usually by dropping to 0 hit points.`,
  dur:`Special`,
  lvl:9,
  name:`Astral Projection`,
  rng:10,
  type:`9lvl necro`
},{
  cst:`1hr`,
  desc:`This spell grows an inert duplicate of a living creature as a safeguard against death. This clone forms inside a sealed vessel and grows to full size and maturity after 120 days; you can also choose to have the clone be a younger version of th esame creature. It remains inert and endures indefinitely, as long as its vessel remains undisturbed. At any time after the clone matures, if the original creature dies, its soul tranfers to the clone, provided that the soul is free and willing to return. The clone is physically identical to the original and has the same personality, memories, and abilities, but none of the original's equipment. The original creature's physical remains, if they still exist, become inert and can't thereafter be restured to life, since the creature's soul is elsewhere.`,
  dur:`Inst.`,
  lvl:8,
  name:`Clone`,
  rng:`T`,
  type:`8lvl necro`
},{
  cst:`10m`,
  desc:`You take control of the weather within 5 miles of you for the duration. You must be outdoors to cast this spell. Moving to a place where you don't have a clear path to the sky ends the spell early. When you cast the spell, you change the current weather conditions, which are determined by the DM based on the climate and season. You can change precipitation, temperature, and wind. It takes 1d4 x 10 minutes for the new conditions to take effect. Once they do so, you can change the conditions again. When the spell ends, the weather gradually returns to normal. When you change the weather conditions, find a current condition on the following tables and change its stage by one, up or down. When changing the wind, you can change its direction. ## Precipitation |Stage|Condition|\n|---|---|\n| 1 | Clear |\n| 2 | Light clouds |\n| 3 | Overcast or ground fog |\n| 4 | Rain, hail, or snow |\n| 5 | Torrential rain, driving hail, or blizzard | ## Temperature |Stage|Condition|\n|---|---|\n| 1 | Unbearable heat |\n| 2 | Hot |\n| 3 | Warm |\n| 4 | Cool |\n| 5 | Cold |\n| 6 | Arctic cold | ## Wind |Stage|Condition|\n|---|---|\n| 1 | Calm |\n| 2 | Moderate wind |\n| 3 | Strong wind |\n| 4 | Gale |\n| 5 | Storm |`,
  dur:`Conc 8h`,
  lvl:8,
  name:`Control Weather`,
  rng:`S (5-mile radius)`,
  type:`Wind transm`
},{
  cst:`1act`,
  desc:`You create a shadowy door on a flat solid surface that you can see within range. The door is large enough to allow Medium creatures to pass through unhindered. When opened, the door leads to a demiplane that appears to be an empty room 30 feet in each dimension, made of wood or stone. When the spell ends, the door disappears, and any creatures or objects inside the demiplane remain trapped there, as the door also disappears from the other side. Each time you cast this spell, you can create a new demiplane, or have the shadowy door connect to a demiplane you created with a previous casting of this spell.  Additionally, if you know the nature and contents of a demiplane created by a casting of this spell by another creature, you can have the shadowy door connect to its demiplane instead.`,
  dur:`1h`,
  lvl:8,
  name:`Demiplane`,
  rng:60,
  type:`8lvl conj`
},{
  cst:`1act`,
  desc:`You attempt to beguile a creature that you can see within range. It must succeed on a Wisdom saving throw or be charmed by you for the duration. If you or creatures that are friendly to you are fighting it, it has advantage on the saving throw. While the creature is charmed, you have a telepathic link with it as long as the two of you are on the same plane of existence. You can use this telepathic link to issue commands to the creature while you are conscious (no action required), which it does its best to obey. You can specify a simple and general course of action, such as \`Attack that creature,\` \`Run over there,\` or \`Fetch that object.\` If the creature completes the order and doesn't receive further direction from you, it defends and preserves itself to the best of its ability. You can use your action to take total and precise control of the target. Until the end of your next turn, the creature takes only the actions you choose, and doesn't do anything that you don't allow it to do. During this time, you can also cause the creature to use a reaction, but this requires you to use your own reaction as well. Each time the target takes damage, it makes a new Wisdom saving throw against the spell. If the saving throw succeeds, the spell ends.`,
  dur:`Conc 1h`,
  hlvl:`When you cast this spell with a 9lvl spell slot, the duration is concentration, up to 8 hours.`,
  lvl:8,
  name:`Dominate Monster`,
  rng:60,
  type:`8lvl enchmt`
},{
  cst:`1act`,
  desc:`You create a seismic disturbance at a point on the ground that you can see within range. For the duration, an intense tremor rips through the ground in a 100-ft-radius circle centered on that point and shakes creatures and structures in contact with the ground in that area. The ground in the area becomes difficult terrain. Each creature on the ground that is concentrating must make a Constitution saving throw. On a failed save, the creature's concentration is broken. When you cast this spell and at the end of each turn you spend concentrating on it, each creature on the ground in the area must make a Dexterity saving throw. On a failed save, the creature is knocked prone. This spell can have additional effects depending on the terrain in the area, as determined by the DM. A fissure that opens beneath a structure causes it to automatically collapse (see below).`,
  dur:`Conc 1m`,
  lvl:8,
  name:`Earthquake`,
  rng:`500 feet`,
  type:`8lvl evo`
},{
  cst:`1act`,
  desc:`You blast the mind of a creature that you can see within range, attempting to shatter its intellect and personality. The target takes 4d6 psychic damage and must amke an Intelligence saving throw. On a failed save, the creature's Intelligence and Charisma scores become 1. The creature can't cast spells, activate magic items, understand language, or communicate in any intelligible way. The creature can, however, identify its friends, follow them, and even protect them. At the end of every 30 days, the creature can repeat its saving throw against this spell. If it succeeds on its saving throw, the spell ends. The spell can also be ended by _[greater restoration](../greater-restoration/ \`greater restoration (lvl 5)\`)_, _[heal](../heal/ \`heal (lvl 6)\`)_, or _[wish](../wish/ \`wish (lvl 9)\`)_.`,
  dur:`Inst.`,
  lvl:8,
  name:`Feeblemind`,
  rng:150,
  type:`8lvl enchmt`
},{
  cst:`1m`,
  desc:`You touch a willing creature and bestow a limited ability to see into the immediate future. For the duration the target can't be surprised and has advantage on attack rolls, ability checks, and saving throws. Additionally, other creatures have disadvantage on attack rolls against the target for the duration. This spell immediately ends if you cast it again before its duration ends.`,
  dur:`8h`,
  lvl:9,
  name:`Foresight`,
  rng:`T`,
  type:`9lvl divi`
},{
  cst:`1act`,
  desc:`You conjure a portal linking an unoccupied space you can see whithin range to a precise location on a different plane of existence. The portal is a circular opening, which you can make 5 to 20 feet in diameter. You can orient the portal in any direction you choose. The portal lasts for the duration. The portal has a front and a back on each plane where it appears. Travel through the portal is possible only by moving through its front. Anything that does so is instantly transported to the other plane, appearing in the unoccupied space nearest to the portal. Deities and other planar rulers can prevent portals created by this spell from opening in their presence or anywhere within their domains. When you cast this spell, you can speak the name of a specific creature (a pseudonym, title or nickname doesn't work). If that creature is on a plane other than the one you are on, the portal opens in the named creature's immediate vicinity and draws the creature through it to the nearest unoccupied space on your side of the portal. You gain no special power over the creature, and it is free to act as the DM deems appropriate. It might leave, attack you or help you.`,
  dur:`Conc 1m`,
  lvl:9,
  name:`Gate`,
  rng:60,
  type:`9lvl conj`
},{
  cst:`1act`,
  desc:`Until the spell ends, when you make a Charisma check, you can replace the number you roll with a 15. Additionally, no matter what you say, magic that would determine if you are telling the truth indicates that you are being truthful.`,
  dur:`1h`,
  lvl:8,
  name:`Glibness`,
  rng:`S`,
  type:`8lvl transm`
},{
  cst:`1act`,
  desc:`Divine light washes out from you and coalesces in a soft radiance in a 30-ft radius around you. Creatures of your choice in that radius when you cast this spell shed dim light in a 5-ft radius and have advantage on all saving throws, and other creatures have disadvantage on attack rolls against them until the spell ends. In addition, when a fiend or an undead hits an affected creature with a melee attack, the aura flashes with brilliant light. The attacker must succeed on a Constitution saving throw or be blinded until the spell ends.`,
  dur:`Conc 1m`,
  lvl:8,
  name:`Holy Aura`,
  rng:`S`,
  type:`8lvl abju`
},{
  cst:`1m`,
  desc:`You create a magical restraint to hold a creature that you can see within range. The target must succeed on a Wisdom saving throw or be bound by the spell; if it succeeds, it is immune to this spell if you cast it again. While affected by this spell, the creature doesn't need to breathe, eat, or drink, and it doesn't age. Divi spells can't locate or perceive the target. When you cast the spell, you choose one of the following forms of imprisonment. The special component for this version of the spell is a small mithral orb. The special component for this version of the spell is a fine chain of precious metal. The special component for this version of the spell is a miniature representation of the prison made from jade. The special component for this version of the spell is a large, transparent gemstone, such as a corundum, diamond, or ruby. A _dispel magic_ spell can end the spell only if it is cast as a 9lvl spell, targeting either the prison or the special component used to create it. You can use a particular special component to create only one prison at a time. If you cast the spell again using the same component, the target of the first casting is immediately freed from its binding.`,
  dur:`Until dispelled`,
  lvl:9,
  name:`Imprisonment`,
  rng:30,
  type:`9lvl abju`
},{
  cst:`1act`,
  desc:`A swirling cloud of smoke shot through with white-hot embers appears in a 20-ft-range. The cloud spreads around corners and is heavily obscured. It lasts for the duration or until a wind of moderate or greater speed (at least 10 miles per hour) disperses it. When the cloud appears, each creature in it must make a Dexterity saving throw. A creature takes 10d8 fire damage on a failed save, or half as much damage on a successful one. A creature must also make this saving throw when it enters the spell's area for the first time on a turn or ends its turn there. The cloud moves 10 feet directly away from you in a direction that you choose at the start of each of your turns.`,
  dur:`Conc 1m`,
  lvl:8,
  name:`Incendiary Cloud`,
  rng:150,
  type:`8lvl conj`
},{
  cst:`1act`,
  desc:`A flood of healing energy flows from you into injured creatures around you. You restore up to 700 hit points, divided as you choose among any number of creatures that you can see within range. Creatures healed by this spell are also cured of all diseases and any effect making them blinded or deafened. This spell has no effect on undead or constructs.`,
  dur:`Inst.`,
  lvl:9,
  name:`Mass Heal`,
  rng:60,
  type:`9lvl conj`
},{
  cst:`1act`,
  desc:`You banish a creature that you can see within range into a labyrinthine demiplane. The target remains there for the duration or until it escapes the maze. The target can use its action to attempt to escape. When it does so, it makes a DC 20 Intelligence check. If it succeeds, it escapes, and the spell ends (a minotaur or goristro demon automatically succeeds). When the spell ends, the target reappears in the space it left or, if that space is occupied, in the nearest unoccupied space.`,
  dur:`Conc 10m`,
  lvl:8,
  name:`Maze`,
  rng:60,
  type:`8lvl conj`
},{
  cst:`1act`,
  desc:`Blazing orbs of fire plummet to the ground at four different points you can see within range. Each creature in a 40-ft-radius sphere centered on each point you choose must make a Dexterity saving throw. The sphere spreads around corners. A creature takes 20d6 fire damage and 20d6 bludgeoning damage on a failed save, or half as much damage on a successful one. A creature in the area of more than one fiery burst is affected only once. The spell damages objects in the area and ignites flammable objects that aren't being worn or carried.`,
  dur:`Inst.`,
  lvl:9,
  name:`Meteor Swarm`,
  rng:`1 mile`,
  type:`9lvl evo`
},{
  cst:`1act`,
  desc:`Until the spell ends, one willing creature you touch is immune to psychic damage, any effect that would sense its emotions or read its thoughts, divi spells, and the charmed condition. The spell even foils _[wish](../wish/ \`wish (lvl 9)\`)_ spells and spells or effects of similar power used to affect the target's mind or to gain information about the target.`,
  dur:`24h`,
  lvl:8,
  name:`Mind Blank`,
  rng:`T`,
  type:`8lvl abju`
},{
  cst:`1act`,
  desc:`A wave of healing energy washes over the creature you touch. The target regains all its hit points. If the creature is charmed, frightened, paralyzed, or stunned, the condition ends. If the creature is prone, it can use its reaction to stand up. This spell has no effect on undead or constructs.`,
  dur:`Inst.`,
  lvl:9,
  name:`Power Word Heal`,
  rng:`T`,
  type:`9lvl evo`
},{
  cst:`1act`,
  desc:`You utter a word of power that can compel one creature you can see within range to die instantly.  If the creature you choose has 100 hit points or fewer, it dies. Otherwise, the spell has no effect.`,
  dur:`Inst.`,
  lvl:9,
  name:`Power Word Kill`,
  rng:60,
  type:`9lvl enchmt`
},{
  cst:`1act`,
  desc:`You speak a word of power that can overwhelm the mind of one creature you can see within range, leaving it dumbfounded. If the target has 150 hit points or fewer, it is stunned. Otherwise, the spell has no effect. The stunned target must make a Constitution saving throw at the end of each of its turns.  On a successful save, this stunning effect ends.`,
  dur:`Inst.`,
  lvl:8,
  name:`Power Word Stun`,
  rng:60,
  type:`8lvl enchmt`
},{
  cst:`1act`,
  desc:`A shimmering, multicolored plane of light forms a vertical opaque wall--up to 90 feet long, 30 feet high, and 1 inch thick--centered on a point you can see within range. Alternatively, you can shape the wall into a sphere up to 30 feet in diameter centered on a point you choose within range. The wall remains in place for the duration. If you position the wall so that it passes through a space occupied by a creature, the spell fails, and your action and the spell slot are wasted. The wall sheds bright light out to a range of 100 feet and dim light for an additional 100 feet. You and creatures you designate at the time you cast the spell can pass through and remain near the wall without harm. If another creature that can see the wall moves to within 20 feet of it or starts its turn there, the creature must succeed on a Constitution saving throw or become blinded for 1 minute. The wall consists of seven layers, each with a different color. When a creature attempts to reach into or pass through the wall, it does so one layer at a time through all thew wall's layers. As it passes or reaches through each layer, the creature must make a Dexterity saving throw or be affected by that layer's properties as described below. The wall can be destroyed, also one layer at a time, in order from red to violet, by means specific to each layer. Once a layer is destroyed it remains so for the duration of the spell. A _rod of cancellation_ destroys a _prismatic wall_, but an _antimagic_ field has no effect on it. While this layer is in place, spells can't be cast through the wall. The laer is destoryed by bright light shed by a _daylight_ spell or a similar spell of equal or higher level.`,
  dur:`10m`,
  lvl:9,
  name:`Prismatic Wall`,
  rng:60,
  type:`9lvl abju`
},{
  cst:`1act`,
  desc:`You assume the form of a different creature for the duration. The new form can be of any creature with a challenge rating equal to your level or lower. The creature can't be a construct or an undead, and you must have seen the sort of creature at least once. You transform into an average example of that creature, one without any class levels or the Spellcasting trait. Your game statistics are replaced by the statistics of the chosen creature, though you retain your alignement and Intelligence, Wisdom and Charisma scores. You also retain all of your skill and saving throw proficiencies, in addition to gaining those of the creature. If the creature has the same proficiency as you and the bonus listed in its statistics is higher than yours, use the creature's bonus in place of yours. You can't use any legendary actions or lair actions of the new form. You assume the hit points and Hit Dice of the new form. When you revert to your normal form, you return to the number of hit points you had before you transformed. If you revert as a result of dropping to 0 hit points, any excess damage carries over to your normal form. As long as the excess damage doesn't reduce your normal form to 0 hit points, you aren't knocked unconscious. You retain the benefit of any features from your class, race, or other source and can use them, provided that your new form is physically capable of doing so. You can't use any special senses you have (for example, darkvision) unless your new form also has that sense. You can only speak if the creature can normally speak. When you transform, you choose whether your equipment falls to the ground, merges into the new form, or is worn by it. Worn equipment functions as normal. The DM determines whether it is practical for the new form to wear a piece of equipment, based on the creature's shape and size. Your equipment doesn't change shape or size to match the new form, and any equipment that the new form can't wear must either fall to the ground or merge into your new form. Equipment that merges has no effect in that state.`,
  dur:`Conc 1h`,
  lvl:9,
  name:`Shapechange`,
  rng:`S`,
  type:`9lvl transm`
},{
  cst:`1act`,
  desc:`A churning storm cloud forms, centered on a point you can see and spreading to a radius of 360 feet. Lightning flashes in the area, thunder booms, and strong winds roar. Each creature under the cloud (no more than 5,000 feet beneath the cloud) when it appears must make a Constitution saving throw. On a failed save, a creature takes 2d6 thunder damage and becomes deafened for 5 minutes. Each round you maintain concentration on this spell, the storm produces additional effects on your turn.`,
  dur:`Conc 1m`,
  lvl:9,
  name:`Storm of Vengeance`,
  rng:`Sight`,
  type:`9lvl conj`
},{
  cst:`1act`,
  desc:`You create a telepathic link between yourself and a willing creature with which you are familiar. The creature can be anywhere on the same plane of existence as you. The spell ends if you or the target are no longer on the same plane. Until the spell ends, you and the target can instantaneously share words, images, sounds and other sensory messages with one another through the link, and the target recognizes you as the creature it is communicating with. The spell enables a creature with an Intelligence score of at least 1 to understand the meaning of your words and take in the scope of any sensory messages you send to it.`,
  dur:`24h`,
  lvl:8,
  name:`Telepathy`,
  rng:`Unlimited`,
  type:`8lvl evo`
},{
  cst:`1act`,
  desc:`Brilliant sunlight flashes in a 60-ft radius centered on a point you choose within range. Each creature in that light must make a Constitution saving throw. On a failed save, a creature takes 12d6 radiant damage and is blinded for 1 minute. On a successful save, it takes half as much damage and isn't blinded by this spell. Undead and oozes have disadvantage on this saving throw. A creature blinded by this spell makes another Constitution saving throw at the end of each of its turns. On a successful save, it is no longer blinded. This spell dispels any darkness in its area that was created by a spell.`,
  dur:`Inst.`,
  lvl:8,
  name:`Sunburst`,
  rng:150,
  type:`8lvl evo`
},{
  cst:`1act`,
  desc:`You briefly stop the flow of time for everyone but yourself. No time passes for other creatures, while you take 1d4 + 1 turns in a row, during which you can use actions and move as normal. This spell ends if one of the actions you use during this period, or any effects that you create during this period, affects a creature other than you or an object being worn or carried by someone other than you. In addition, the spell ends if you move to a place more than 1,000 feet form the location where you cast it.`,
  dur:`Inst.`,
  lvl:9,
  name:`Time Stop`,
  rng:`S`,
  type:`9lvl transm`
},{
  cst:`1act`,
  desc:`Choose one creature or nonmagical object that you can see within range. You transform the creature into a different creature, the creature into an object or the object into a creature (the object must be neither worn nor carried by another creature). The transformation lasts for the duration, or until the target drops to 0 hit points or dies. If you concentrate on this spell for the full duration, the transformation becomes permanent. Shapechangers aren't affected by this spell. An unwilling creature can make a Wisdom saving throw, and if it succeeds, it isn't affected by this spell. The target assumes the hit points of its new form, and when it reverts to its normal form, the creature returns to the number of hit points it had before it transformed. If it reverts as a result of dropping to 0 hit points, any excess damage carries over to its normal form. As long as the excess damage doesn't reduce the creature's normal form to 0 hit points, it isn't knocked unconscious. The creature is limited in the actions it can perform by the nature of its new form, and it can't speak, cast spells, or take any other action that requires hands or speech, unless its new form is capable of such actions. The target's gear melds into the new form. The creature can't activate, use, wield, or otherwise benefit from any of its equipment. If the spell becomes permanent, you no longer control the creature. It might remain friendly to you, depending on how you have treated it.`,
  dur:`Conc 1h`,
  lvl:9,
  name:`True Polymorph`,
  rng:30,
  type:`9lvl transm`
},{
  cst:`1m`,
  desc:`A wall of water springs into existence at a point you choose within range. You can make the wall up to 300 feet long, 300 feet high, and 50 feet thick. The wall lasts for the duration. When the wall appears, each creature within its area must make a Strength saving throw. On a failed save, a creature takes 6d10 bludgeoning damage, or half as much damage on a successful save. At the start of each of your turns after the wall appears, the wall, along with any creatures in it, moves 50 feet away from you. Any Huge or smaller creature inside the wall or whose space the wall enters when it moves must succeed on a Strength saving throw or take 5d10 bludgeoning damage. A creature can take theis damage only once per round. At the end of the turn, the wall's height is reduced by 50 feet, and the damage creatures take from the the spell on subsequent rounds is reduced by 1d10. When the wall reaches 0 feet in height, the spell ends. A creature caught in the wall can move by swimming. Because of the force of the wave, though, the creature must make a successful Strength (Athletics) check against your spell save DC in order to move at all. If it fails the check, it can't move. A creature that moves out of the area falls to the ground.`,
  dur:`Conc 6r`,
  lvl:8,
  name:`Tsunami`,
  rng:`Sight`,
  type:`8lvl conj`
},{
  cst:`1hr`,
  desc:`You touch a creature that has been dead for no longer than 200 years and that died for any reason except old age. If the creature's soul is free and willing, the creature is restored to life with all its hit points. This spell closes all wounds, neutralizes any poison, cures all diseases, and lifts any curses affecting the creature when it died. The spell replaces damaged or missing organs and limbs. The spell can even provide a new body if the original no longer exists, in which case you must speak the creature's name. The creature then appears in an unoccupied space you choose within 10 feet of you.`,
  dur:`Inst.`,
  lvl:9,
  name:`True Resurrection`,
  rng:`T`,
  type:`9lvl necro`
},{
  cst:`1act`,
  desc:`Drawing on the deepest fears of a group of creatures, you create illusory creatures in their minds, visible only to them. Each creature in a 30-ft-radius sphere centered on a point of your choice within range must make a Wisdom saving throw. On a failed save, a creature becomes frightened for the duration. The illus calls on the creature's deepest fears, manifesting its worst nightmares as an implacable threat. At the start of each of the frightened creature's turns, it must succeed on a Wisdom saving throw or take 4d10 psychic damage. On a successful save, the spell ends for that creature.`,
  dur:`Conc 1m`,
  lvl:9,
  name:`Weird`,
  rng:120,
  type:`9lvl illus`
},{
  cst:`1act`,
  desc:`_Wish_ is the mightiest spell a mortal creature can cast. By simply speaking aloud, you can alter the very foundations of reality in accord with your desires. The basic use of this spell is to duplicate any other spell of 8th level or lower. You don't need to meet any requirements in that spell, including costly components. The spell simply takes effect. * You create one object of up to 25,000 gp in value that isn't a magic item. The object can be no more than 300 feet in any dimension, and it appears in an unoccupied space you can see on the ground. * You allow up to twenty creatures that you can see to regain all hit points, and you end all effects on them described in the _greater restoration_ spell. * You grant up to ten creatures that you can see resistance to a damage type you choose. * You grant up to ten creatures you can see immunity to a single spell or other magical effect for 8 hours. For instance, you could make yourself and all your companions immune to a lich's life drain attack. * You undo a single recent event by forcing a reroll of any roll made within the last round (including your last turn). Reality reshapes itself to accomodate the new result. For example, a _wish_ spell could undo an opponent's successful save, a foe's critical hit, or a friend's failed save. You can force the reroll to be made with advantage or disadvantage, and you can choose whether to use the reroll or the original roll. You might be able to achieve something beyond the scope of the above examples. State your wish to the DM as precisely as possible. The DM has great latitude in ruling what occurs in such an instance; the greater the wish, the greater the likelihood that something goes wrong. This spell might simply fail, the effect you desire might only be partly achieved, or you might suffer some unforeseen consequence as a result of how you worded the wish. For example, wishing that a villain were dead might propel you forward in time to a period when that villain is no longer alive, effectively removing you from the game. Similarly, wishing for a legendary magic item or artifact might instantly transport you to the presence of the item's current owner. The stress of casting this spell to produce any effect other than duplicating another spell weakens you. After enduring that stress, each time you cast a spell until you finish a long rest, you take 1d10 necrotic damage per level of that spell. This damage can't be reduced or prevented in any way. In addition, you Strength drops to 3 if it isn't 3 or lower already, for 2d4 days. For each of those days that you spend resting and doing nothing more than light activity, your remaining recovery time decreases by 2 days. Finally, there is a 33 percent chance that you are unable to cast _wish_ ever again if you suffer this stress.`,
  dur:`Inst.`,
  lvl:9,
  name:`Wish`,
  rng:`S`,
  type:`9lvl conj`
},{
  cst:`1m`,
  desc:`You summon a celestial of challenge rating 4 or lower, which apperas in an unoccupied space that you can see within range. The celestial disappears when it drops to 0 hit points or when the spell ends. The celestial is friendly to you and your companions for the duration. Roll initiative for the celestial, which has its own turns. It obeys any verbal commands that you issue to it (no action required by you), as long as they don't violate its alignment. If you don't issue any commands to the celestial, it defends itself from hostile creatures but otherwise takes no actions. The DM has the celestial's statistics.`,
  dur:`Conc 1h`,
  hlvl:`When you cast this spell using a 9lvl spell slot, you summon a celestial of challenge rating 5 or lower.`,
  lvl:7,
  name:`Conjure Celestial`,
  rng:90,
  type:`7lvl conj`
},{
  cst:`1act`,
  desc:`A beam of yellow light flashes from your pointing finger, then condenses to linger at a chose point within range as a glowing bead for the duration. When the spell ends, either because your concentration is broken or because you decide to end it, the bead blossoms with a low roar into an explosion of flame that spreads around corners. Each creature in a 20-ft-radius sphere centered on that point must make a Dexterity saving throw. A creature takes fire damage equal to the total accumulated damage on a failed save, or half as much damage on a successful one. The spell's base damage is 12d6. If at the end of your turn the bead has not yet detonated, the damage increases by 1d6. If the glowing bead is touched before the interval has expired, the creature touching it must make a Dexterity saving throw. On a failed save, the spell ends immediately, causing the bead to erupt in flame. On a successful save, the creature can throw the bead up to 40 feet. When it strikes a creature or a solid object, the spell ends, and the bead explodes. The fire damages objects in the area dn ignites flammable objects that aren't being worn or carried.`,
  dur:`Conc 1m`,
  hlvl:`When you cast theis spell using a spell slot of 8th level or higher, the base damage increases by 1d6 for each slot level above 7th.`,
  lvl:7,
  name:`Delayed Blast Fireball`,
  rng:150,
  type:`7lvl evo`
},{
  cst:`1act`,
  desc:`You teleport yourself from your current location to any other spot within range. You arrive at exactly the spot desired. It can be a place you can see, one you can visualise, or one you can describe by stating distance and direction, such as \`200 feet straight downward\` or \`upward to the northwest at a 45-degree angle, 300 feet.\` You can bring along objects as long as their weight doesn't exceed what you can carry. You can also bring one willing creature of your size or smaller who is carrying gear up to its carrying capacity. The creature must be within 5 feet of you when you cast this spell. If you would arrive in a place already occupied by an object or a creature, you and any creature travelling with you each take 4d6 force damage, and the spell fails to teleport you.`,
  dur:`Inst.`,
  lvl:4,
  name:`Dimension Door`,
  rng:`500 feet`,
  type:`4lvl conj`
},{
  cst:`1 bns act`,
  desc:`Regardless of its current hit points, a celestial, an element, a fey or a fiend that fails its save is forced back to its plane of origin (if it isn't there already) and can't return to your current plane for 24 hours by any means short of a _wish_ spell.`,
  dur:`Inst.`,
  lvl:7,
  name:`Divine Word`,
  rng:30,
  type:`7lvl evo`
},{
  cst:`1act`,
  desc:`You step into the border regions of the Ethereal Plane, in the area where it overlaps with your current plane. You remain in the Border Ethereal for the duration or until you use your action to dismiss the spell. During this time, you can move in any direction. If you move up or down, every ft of movement costs an extra ft. You can see and hear the plane you originated from, but everything there looks gray, and you can't see anything more than 60 feet away. While on the Ethereal Plane, you can only affect and be affected by other creatures on that plane. Creatures that aren't on the Ethereal Plane can't perceive you and can't interact with you, unless a special ability or magic has given them the ability to do so. You ignore all objects and effects that aren't on the Ethereal Plane, allowing you to move through objects you perceive on the plane you originated from. When the spell ends, you immediately return to the plan you originated from in the spot you currently occupy.  If you occupy the same spot as a solid object or creature when this happens, you are immediately shunted to the nearest unoccupied space that you can occupy and take force damage equal to twice the number of feet you are moved. This spell has no effect if you cast it while you are on the Ethereal Plane or a plane that doesn't border it, such as one of the Outer Planes.`,
  dur:`Up to 8h`,
  hlvl:`When you cast this spell using a spell slot of 8th level or higher, you can target up to three willing creatures (including you) for each slot level above 7th. The creatures must be within 10 feet of you when you cast the spell.`,
  lvl:7,
  name:`Etherealness`,
  rng:`S`,
  type:`7lvl transm`
},{
  cst:`1act`,
  desc:`You send negative engery coursing through a creature that you can see within range, causing it searing pain. The target must make a Constitution saving throw. It takes 7d8 + 30 necrotic damage on a failed save, or half as much damage on a successful one. A humanoid killed by this spell rises at the start of your next turn as a zombie that is permanently under your command, following your verbal orders to the best of its ability.`,
  dur:`Inst.`,
  lvl:7,
  name:`Finger of Death`,
  rng:60,
  type:`7lvl necro`
},{
  cst:`1act`,
  desc:`A storm made up of sheets of roaring flame appears in a location you choose within range. The area of the storm consists of up to ten 10-ft-cubes, which you can arrange as you wish. Each cube must have at least one face adjacent to the face of another cube. Each creature in the area must make a Dexterity saving throw. It takes 7d10 fire damage on a failed save, or half as much damage on a successful one. The fire damages objects in the area and ignites flammable objects that aren't being worn or carried. If you choose, plant life in the area is unaffected by this spell.`,
  dur:`Inst.`,
  lvl:7,
  name:`Fire Storm`,
  rng:150,
  type:`7lvl evo`
},{
  cst:`1act`,
  desc:`An immobile, invisible, cube-shaped prison composed of magical force springs into existence around an area you choose within range. The prison can be a cage or a solid box, as you choose. A prison in the shape of a cage can be up to 20 feet on a side and is made from 1/2-inch diameter bars spaced 1/2-inch apart. A prison in the shape of a box can be up to 10 feet on a size, creating a solid barrier that prevents any matter from passing through it and blocking any spells cast into or out from the area. When you cast the spell, any creature that is completely inside the cage's area is trapped. Creatures only partially within the area, or those too large to fit inside the area, are pushed away from the center of the area until they are completely outside the area. A creature inside the cage can't leave it by nonmagical means. If the creature tries to use teleportation or interplanar travel to leave the cage, it must first make a Charisma saving throw. On a success, the creature can use that magic to exit the cage. On a failure, the creature can't exit the cage and wastes the use of the spell or effect. The cage also extends into the Ethereal Plane, blocking ethereal travel. This spell can't be dispelled by _[dispel magic](../dispel-magic/ \`dispel magic (lvl 3)\`)_.`,
  dur:`1h`,
  lvl:7,
  name:`Forcecage`,
  rng:`100 feet`,
  type:`7lvl evo`
},{
  cst:`10m`,
  desc:`You make terrain in a area up to 1 mile square look, sound, smell, and even feel like some other sort of terrain. The terrain's general shape remains the same, however. Open fields or a road could be made to resemble a swamp, hill, crevasse, or some other difficult or impassable terrain. A pond can be made to seem like a grassy meadow, a precipice like a gental slope, or a rock-strewn gully like a wide and smooth road. Similarly, you can alter the appearance of structures, and add them where none are present. The spell doesn't disguise, conceal or add creatures. The illus includes audible, visual, tactile, and olfactory elements, so it can turn clear ground into difficult terrain (or vice versa) or otherwise impede movement through the area. Any piece of the illusory terrain (such as a rock or stick) that is removed from the spell's area disappears immediately. Creatures with truesight can see through the illus to the terrain's true form; however, all other elements of the illus remain, so while the creature is aware of the illus's presence, the creature can still physically interact with the illus.`,
  dur:`10 days`,
  lvl:7,
  name:`Mirage Arcane`,
  rng:`Sight`,
  type:`7lvl illus`
},{
  cst:`1act`,
  desc:`Eight multicolored rays of light flash from your hand. Each ray is a different color and has a different power and purpose. Each creature in a 60-ft code must make a Dexterity saving throw. For each target, roll a d8 to determine which color ray affects it.`,
  dur:`Inst.`,
  lvl:7,
  name:`Prismatic Spray`,
  rng:`S (60-ft cone)`,
  type:`7lvl evo`
},{
  cst:`1act`,
  desc:`You create an illusory copy of yourself that lasts for the duration. The copy can appear at any location within range that you have seen before, regardless of intervening obstacles. The illus looks and sounds like you but is intangible. If the illus takes any damage, it disappears, and the spell ends. You can use your action to move this illus up to twice your speed, and make it gesture, speak, and behave in whatever way you choose. It mimics your mannerisms perfectly. You can see through its eyes and hear through its ears as if you were in its space. On your turn as a bonus action, you can switch from using its senses to using your own, or back again. While you are using its senses, you are blinded and deafened in regard to your own surroundings. Physical interaction with the image reveals it to be an illus, because things can pass through it. A creature that uses its action to examine the image can determine that it is an illus with a successful Intelligence (Investigation) check against your spell save DC. If a creature discerns the illus for what it is, the creature can see through the image, and any noise it makes sounds hollow to the creature.`,
  dur:`Conc 1d`,
  lvl:7,
  name:`Project Image`,
  rng:`500 miles`,
  type:`7lvl illus`
},{
  cst:`1act`,
  desc:`You and up to eight willing creatures who link hands in a circle are transported to a different plane of existence. You can specify a target destination in general terms, such as the City of Brass on the Elemental Plane of Fire or the palace of Dispater on the secolvl of the Nine Hells, and you appear in or near that destination. If you are trying to reach the City of Brass, for example, you might arrive in is Street of Steel, before its Gate of Ashes, or looking at the city from across the Sea of Fire, at the DM's discretion. Alternatively, if you know the sigil sequence of a teleportation circle on another plane of existence, this spell can take you to that circle. If the teleportation circle is too small to hold all the creatures you transported, they appear in the closest unoccupied spaces next to the circle. You can use this spell to banish an unwilling creature to another plane.  Chose a creature within your reach and make a melee spell attack against it. On a hit, the creature must make a Charisma saving throw. If the creature fails this save, it is transported to a random location on the plane of existence you specify. A creature so transported must find its own way back to your current plane of existence.`,
  dur:`Inst.`,
  lvl:7,
  name:`Plane Shift`,
  rng:`T`,
  type:`7lvl conj`
},{
  cst:`1m`,
  desc:`You touch a creature and stimulate its natural healing ability. The target regains 4d8 + 15 hit points. For the duration of the spell, the target regains 1 hit point at the start of each of its turns (10 hit points each minute). The target's severed body members (fingers, legs, tails, and so on), if any, are restored after 2 minutes. If you have the severed part and hold it to the stump, the spell instantaneously causes the limb to knit to the stump.`,
  dur:`1h`,
  lvl:7,
  name:`Regenerate`,
  rng:`T`,
  type:`7lvl transm`
},{
  cst:`1hr`,
  desc:`You touch a dead creature that has been dead for no more than a century, that didn't die of old age, and that isn't undead. If its soul is free and willing, the target returns to life with all its hit points. This spell neutralizes any poisons and cures normal diseases afflicting the creature when it died. It doesn't however, remove magical diseases, curses, and the like; if such effects aren't removed prior to casting the spell, the afflict the target on its return to life. This spell closes all mortal wounds and restores any missing body parts. Coming back from the dead is an ordeal. The target takes a -4 penalty to all attack rolls, saving throws, and ability checks. Every time the target finishes a long rest, the penalty is reduced by 1 until it disappears. Casting this spell to restore life to a creature that has been dead for one year or longer taxes you greatly. Until you finish a long rest, you can't cast spells again, and you have disadvantage on all attack rolls, ability checks, and saving throws.`,
  dur:`Inst.`,
  lvl:7,
  name:`Resurrection`,
  rng:`T`,
  type:`7lvl necro`
},{
  cst:`1act`,
  desc:`This spell reverses gravity in a 50-ft-radius, 100-ft high cylinder centered on a point within range. All creatures and objects that aren't somehow anchored to the ground in the area fall upward and reach the top of the area when you cast this spell. A creature can make a Dexterity saving throw to grab onto a fixed object it can reach, thus avoiding the fall. If some solid object (such as a ceiling) is encountered in this fall, falling objects and creature strike it just as they would during a normal downward fall. If an object or creature reaches the top of the area without striking anything, it remains there, oscillating slightly, for the duration. At the end of the duration, affected objects and creatures fall back down.`,
  dur:`Conc 1m`,
  lvl:7,
  name:`Reverse Gravity`,
  rng:`100 feet`,
  type:`7lvl transm`
},{
  cst:`1act`,
  desc:`By means of this spell, a willing creature or an object can be hidden away, safe from detection for the duration. When you cast the spell and touch the target, it becomes invisible and can't be targeted by divi spells or perceived through scrying sensors created by divi spells. If the target is a creature, it falls into a state of suspended animation. Time ceases to flow for it, and it doesn't grow older. You can set a condition for the spell to end early. The condition can be anything you choose, but it must occur or be visible within 1 mile of the target.  Examples include \`after 1,000 years\` or \`when the tarrasque awakens.\` This spell also ends if the target takes any damage.`,
  dur:`Until dispelled`,
  lvl:7,
  name:`Sequester`,
  rng:`T`,
  type:`7lvl transm`
},{
  cst:`12h`,
  desc:`You shape an illusory duplicate of one beast or humanoid that is within range for the entire casting time of the spell. The duplicate is a creature, partially real and formed from ice or snow, and it can take actions and otherwise be affected as a normal creature. It appears to be the same as the original, but it has half the creature's hit point maximum and is formed without any equipment. Otherwise, the illus uses all the statistics of the creature it duplicates. The simulacrum is friendly to you and creatures you designate. It obeys your spoken commands, moving and acting in accordance with your wishes and acting on your turn in combat. The simulacrum lacks the ability to learn or become more powerful, so it never increases its level or other abilities, nor can it regain expended spell slots. If the simulacrum is damaged, you can repair it in an alchemical laboratory, using rare herbs and minerals worth 100gp per hit point it regains. The simulacrum lasts until it drops to 0 hit points, at which point it reverts to snow and melts instantly. If you cast this spell again, any currently active duplicates you created with this spell are instantly destroyed.`,
  dur:`Until dispelled`,
  lvl:7,
  name:`Simulacrum`,
  rng:`T`,
  type:`7lvl illus`
},{
  cst:`1m`,
  desc:`When you cast this spell, you inscribe a harmful glyph either on a surface (such as a section of floor, a wall, or a table) or within an object that can be closed to conceal the glyph (such as a book, a scroll, or a treasure chest). If you choose a surface, the glyph can cover an area of the surface no larger than 10 feet in diameter. If you choose an object, that object must remain in its place; if the object is moved more than 10 feet from where you cast this spell, the glyph is broken, and the spell ends without being triggered. The glyph is nearly invisible, requiring an Intelligence (Investigation) check against your spell save DC to find it. You decide what triggers the glyph when you cast the spell. For glyphs inscribed on a surface, the most typical triggers include touching or stepping on the glyph, removing another object covering it, approaching within a certain distance of it, or manipulating the object that holds it. For glyphs inscribed within an object, the most common triggers are opening the object, approaching within a certain distance of it, or seeing or reading the glyph. You can further refine the trigger so the spell is activated only under certain circumstances or according to a creature's physical characteristics (such as height or weight), or physical kind (for example, the ward could be set to affect hags or shapechangers). You can also specify creatures that don't trigger the glyph, such as those who say a certain password. When you inscribe the glyph, choose one of the options below for its effect. Once triggered, the glyph glows, filling a 60-ft-radius sphere with dim light for 10 minutes, after which time the spell ends. Each creature in the sphere when the glyph activate is targeted by its effect, as is a creature that enters the sphere for the first time on a turn or ends its turn there.`,
  dur:`Until dispelled or triggered`,
  lvl:7,
  name:`Symbol`,
  rng:`T`,
  type:`7lvl abju`
},{
  cst:`1act`,
  desc:`This spell instantly transports you and up to eight willing creatures of your choice that you can see within range, or a single object, that you can see within range, to a destination you select. If you target an object, it must be able to fit entirely inside a 10-ft cube, and it can't be held or carried by an unwilling creature. The destination you choose must be known to you, and it must be on the same plane of existence as you. Your familiarity with the destination determines whether you arrive there successfully. The DM rolls d100 and consults the table.`,
  dur:`Inst.`,
  lvl:7,
  name:`Teleport`,
  rng:10,
  type:`7lvl conj`
},{
  cst:`1act`,
  desc:`You suggest a course of activity (limited to a sentence or two) and magically influence a creature you can see within range that can hear and understand you. Creatures that can't be charmed are immune to this effect. The suggestion must be worded in such a manner as to make the course of action sound reasonable. Asking the creature to stab itself, throw itself onto a spear, immolate itself, or do some other obviously harmful act ends the spell. The target must make a Wisdom saving throw. On a failed save, it pursues the course of action you described to the best of its ability. The suggested course of action can continue for the entire duration. If the suggested activity can be completed in a shorter time, the spell ends when the subject finishes what it was asked to do. You can also specify conditions that will trigger a special activity during the duration. For example, you might suggest that a knight give her warhorse to the first beggar she meets. If the condition isn't met before the spell expires, the activity isn't performed. If you or any of your companions damage the target, the spell ends.`,
  dur:`Conc 8h`,
  lvl:2,
  name:`Suggestion`,
  rng:30,
  type:`2dlvl enchmt`
},{
  cst:`1act`,
  desc:`A creature you touch becomes invisible until the spell ends. Anything the target is wearing or carrying is invisible as long as it is on the target's person. The spell ends for a target that attacks or casts a spell.`,
  dur:`Conc 1h`,
  hlvl:`When you cast this spell using a spell slot of 3rd level or higher, you can target one additional creature for each slot level above 2nd.`,
  lvl:2,
  name:`Invisibility`,
  rng:`T`,
  type:`2dlvl illus`
},{
  cst:`1act`,
  desc:`Objects come to life at your command. Choose up to ten nonmagical objects within range that are not being worn or carried. Medium targets count as two objects, Large targets count as four objects, Huge targets count as eight objects. You can't animate any object larger than Huge. Each target animates and becomes a creature under your control until the spell ends or until reduced to 0 hit points. As a bonus action, you can mentally command any creature you made with this spell if the creature is within 500 feet of you (if you control multiple creatures, you can command any or all of them at the same time, issuing the same command to each one). You decide what action the creature will take and where it will move during its next turn, or you can issue a general command, such as to guard a particular chamber or corridor. If you issue no commands, the creature only defends itself against hostile creatures. Once given an order, the creature continues to follow it until its task is complete. | Size   | HP | AC | Attack                   | Str | Dex |\n|---|---|---|---|---|---|\n| Tiny   | 20 | 18 | +8 to hit, 1d4+4 damage  |   4 |  18 |\n| Small  | 25 | 16 | +6 to hit, 1d8+2 damage  |   6 |  14 |\n| Medium | 40 | 13 | +5 to hit, 2d6+1 damage  |  10 |  12 |\n| Large  | 50 | 10 | +6 to hit, 2d10+2 damage |  14 |  10 |\n| Huge   | 80 | 10 | +8 to hit, 2d12+2 damage |  18 |   6 | An animated object is a construct with AC, hit points, attacks, Strength, and Dexterity determined by its size. Its Constitution is 10 and its Intelligence and Wisdom are 3, and its Charisma is 1. Its speed is 30 feet; if the object lacks legs or other appendages it can use for locomotion, it instead has a flying speed of 30 feet and can hover. If the object is securely attached to a surface or a larger object, such as a chain bolted to a wall, its speed is 0. It has blindsight with a radius of 30 feet and is blind beyond that distance. When the animated object drops to 0 hit points, it reverts to its original object form, and any remaining damage carries over to its original object form. If you command an object to attack, it can make a single melee attack against a creature within 5 feet of it. It makes a slam attack with an attack bonus and bludgeoning damage determined by its size. The DM might rule that a specific object inflicts slashing or piercing damage based on its form.`,
  dur:`Conc 1m`,
  hlvl:`If you cast this spell using a spell slot of 6th level or higher, you can animate two additional objects for each slot level above 5th.`,
  lvl:5,
  name:`Animate Objects`,
  rng:120,
  type:`transm`
},{
  cst:`1act`,
  desc:`A shimmering barrier extends out from you in a 10-ft radius and moves with you, remaining centered on you and hedging out creatures other than undead and constructs. The barrier lasts for the duration. The barrier prevents an affected creature from passing or reaching through. An affected creature can cast spells or make attacks with ranged or reach weapons through the barrier. If you move so an affected creature is forced to pass through the barrier, the spell ends.`,
  dur:`Conc 1h`,
  lvl:5,
  name:`Antilife Shell`,
  rng:`S (10-ft radius)`,
  type:`5lvl abju`
},{
  cst:`1act`,
  desc:`You create linked teleportation portals that remain open for the duration. Choose two points on the ground that you can see, one point within 10 feet of you and one point within 500 feet of you. A circular portal, 10 feet in diameter, opens over each point. If the portal would open in the space occupied by a creature, the spell fails, and the casting is lost. The portals are two-dimensional glowing rings filled with mist, hovering inches from the ground and perpendicular to it at the points you choose. A ring is visible only from one side (your choice), which is the side that functions as a portal. Any creature or object entering the portal exits from the other portal as if the two were adjacent to each other; passing through a portal from the nonportal side has no effect. The mist that fills each portal is opaque and blocks vision through it. On your turn, you can rotate the rings as a bonus action so that the active side faces in a different direction.`,
  dur:`Conc 10m`,
  lvl:6,
  name:`Arcane Gate`,
  rng:`500 feet`,
  type:`6lvl conj`
},{
  cst:`8h`,
  desc:`After spending the casting time tracing magical pathways within a precious gemstone, you touch a Huge or smaller beast or plant. The target must have either no Intelligence score or an Intelligence of 3 or less. The target gains an Intelligence of 10. The target also gains the ability to speak one language you know. If the target is a plant, it gains the ability to move its limbs, roots, vines, creepers, and so forth, and it gains senses similar to a human's. Your DM chooses statistics appropriate for the awakened plant, such as the statistics for the awakened shrub or the awakened tree. The awakened beast or plant is charmed by you for 30 days or until you or your companions do anything harmful to it. When the charmed condition ends, the awakened creature chooses whether to remain friendly to you, based on how you treated it while it was charmed.`,
  dur:`Inst.`,
  lvl:5,
  name:`Awaken`,
  rng:`T`,
  type:`5lvl transm`
},{
  cst:`1 bns act`,
  desc:`The next time you hit a creature with a weapon attack before this spell ends, your weapon crackles with force, and the attack deals an extra 5d10 force damage to the target. Additionally, if this attack reduces the target to 50 hit points or fewer, you banish it. If the target is native to a different plane of existence than the one you're on, the target disappears, returning to its home plane. If the target is native to the plane you're on, the creature vanishes into a harmless demiplane. While there, the target is incapacitated. It remains there until the spell ends, at which point the target reappears in the space it left or in the nearest unoccupied space if that space is occupied.`,
  dur:`Conc 1m`,
  lvl:5,
  name:`Banishing Smite`,
  rng:`S`,
  type:`5lvl abju`
},{
  cst:`1act`,
  desc:`You create a bolt of lightning that arcs toward a target of your choice that you can see within range. Three bolts then leap from that target to as many as three other targets, each of which must be within 30 feet of the first target. A target can be a creature or an object and can be targeted by only one of the bolts. A target must make a Dexterity saving throw. The target takes 10d8 lightning damage on a failed save, or half as much damage on a successful one.`,
  dur:`Inst.`,
  hlvl:`When you cast this spell using a spell slot of 7th level or higher, one additional bolt leaps from the first target to another target for each slot level above 6th.`,
  lvl:6,
  name:`Chain Lightning`,
  rng:150,
  type:`6lvl evo`
},{
  cst:`1act`,
  desc:`You create a vertical wall of whirling, razor-sharp blades made of magical energy. The wall appears within range and lasts for the duration. You can make a straight wall up to 100 feet long, 20 feet high, and 5 feet thick, or a ringed wall up to 60 feet in diameter, 20 feet high, and 5 feet thick. The wall provides three-quarters cover to creatures behind it, and its space is difficult terrain. When a creature enters the wall's area for the first time on a turn or starts its turn there, the creature must make a Dexterity saving throw. On a failed save, the creature takes 6d10 slashing damage. On a successful save, the creature takes half as much damage.`,
  dur:`Conc 10m`,
  lvl:6,
  name:`Blade Barrier`,
  rng:90,
  type:`6lvl evo`
},{
  cst:`1act`,
  desc:`A sphere of negative energy ripples out in a 60-ft- radius sphere from a point within range. Each creature in that area must make a Constitution saving throw. A target takes 8d6 necrotic damage on a failed save, or half as much damage on a successful one.`,
  dur:`Inst.`,
  hlvl:`When you cast this spell using a spell slot of 7th level or higher, the damage increases by 2d6 for each slot level above 6th.`,
  lvl:6,
  name:`Circle of Death`,
  rng:150,
  type:`6lvl necro`
},{
  cst:`1act`,
  desc:`Divine energy radiates from you, distorting and diffusing magical energy within 30 feet of you. Until the spell ends, the sphere moves with you, centered on you. For the duration, each friendly creature in the area (including you) has advantage on saving throws against spells and other magical effects. Additionally, when an affected creature succeeds on a saving throw made against a spell or magical effect that allows it to make a saving throw to take only half damage, it instead takes no damage if it succeeds on the saving throw.`,
  dur:`Conc 10m`,
  lvl:5,
  name:`Circle of Power`,
  rng:`S (30-ft radius)`,
  type:`5lvl abju`
},{
  cst:`1act`,
  desc:`You create a 20-ft-radius sphere of poisonous, yellow-green fog centered on a point you choose within range. The fog spreads around corners. It lasts for the duration or until strong wind disperses the fog, ending the spell. Its area is heavily obscured. When a creature enters the spell's area for the first time on a turn or starts its turn there, that creature must make a Constitution saving throw. The creature takes 5d8 poison damage on a failed save, or half as much damage on a successful one. Creatures are affected even if they hold their breath or don't need to breathe. The fog moves 10 feet away from you at the start of each of your turns, rolling along the surface of the ground. The vapors, being heavier than air, sink to the lowest level of the land, even pouring down openings.`,
  dur:`Conc 10m`,
  hlvl:`When you cast this spell using a spell slot of 6th level or higher, the damage increases by 1d8 for each slot level above 5th.`,
  lvl:5,
  name:`Cloudkill`,
  rng:120,
  type:`5lvl conj`
},{
  cst:`1m`,
  desc:`You briefly become one with nature and gain knowledge of the surrounding territory. In the outdoors, the spell gives you knowledge of the land within 3 miles of you. In caves and other natural underground settings, the radius is limited to 300 feet. The spell doesn't function where nature has been replaced by construction, such as in dungeons and towns. * terrain and bodies of water * prevalent plants, minerals, animals, or peoples * powerful celestials, fey, fiends, elementals, or undead * influence from other planes of existence * buildings For example, you could determine the location of powerful undead in the area, the location of major sources of safe drinking water, and the location of any nearby towns.`,
  dur:`Inst.`,
  lvl:5,
  name:`Commune with Nature`,
  rng:`S`,
  type:`5lvl divi rit`
},{
  cst:`1m`,
  desc:`You contact your deity or a divine proxy and ask up to three questions that can be answered with a yes or no. You must ask your questions before the spell ends. You receive a correct answer for each question. Divine beings aren't necessarily omniscient, so you might receive \`unclear\` as an answer if a question pertains to information that lies beyond the deity's knowledge. In a case where a one-word answer could be misleading or contrary to the deity's interests, the DM might offer a short phrase as an answer instead. If you cast the spell two or more times before finishing your next long rest, there is a cumulative 25 percent chance for each casting after the first that you get no answer. The DM makes this roll in secret.`,
  dur:`1m`,
  lvl:5,
  name:`Commune`,
  rng:`S`,
  type:`5lvl divi rit`
},{
  cst:`1act`,
  desc:`A blast of cold air erupts from your hands. Each creature in a 60-ft cone must make a Constitution saving throw. A creature takes 8d8 cold damage on a failed save, or half as much damage on a successful one. A creature killed by this spell becomes a frozen statue until it thaws.`,
  dur:`Inst.`,
  hlvl:`When you cast this spell using a spell slot of 6th level or higher, the damage increases by 1d8 for each slot level above 5th.`,
  lvl:5,
  name:`Cone of Cold`,
  rng:`S (60-ft cone)`,
  type:`5lvl evo`
},{
  cst:`1m`,
  desc:`You call forth an elemental servant. Choose an area of air, earth, fire, or water that fills a 10-ft cube within range. An elemental of challenge rating 5 or lower appropriate to the area you chose appears in an unoccupied space within 10 feet of it. For example, a fire elemental emerges from a bonfire, and an earth elemental rises up from the ground. The elemental disappears when it drops to 0 hit points or when the spell ends. The elemental is friendly to you and your companions for the duration. Roll initiative for the elemental, which has its own turns. It obeys any verbal commands that you issue to it (no action required by you). If you don't issue any commands to the elemental, it defends itself from hostile creatures but otherwise takes no actions. If your concentration is broken, the elemental doesn't disappear. Instead, you lose control of the elemental, it becomes hostile toward you and your companions, and it might attack. An uncontrolled elemental can't be dismissed by you, and it disappears 1 hour after you summoned it. The DM has the elemental's statistics.`,
  dur:`Conc 1h`,
  hlvl:`When you cast this spell using a spell slot of 6th level or higher, the challenge rating increases by 1 for each slot level above 5th.`,
  lvl:5,
  name:`Conjure Elemental`,
  rng:90,
  type:`5lvl conj`
},{
  cst:`1m`,
  desc:`You summon a fey creature of challenge rating 6 or lower, or a fey spirit that takes the form of a beast of challenge rating 6 or lower. It appears in an unoccupied space that you can see within range. The fey creature disappears when it drops to 0 hit points or when the spell ends. The fey creature is friendly to you and your companions for the duration. Roll initiative for the creature, which has its own turns. It obeys any verbal commands that you issue to it (no action required by you), as long as they don't violate its alignment. If you don't issue any commands to the fey creature, it defends itself from hostile creatures but otherwise takes no actions. If your concentration is broken, the fey creature doesn't disappear. Instead, you lose control of the fey creature, it becom es hostile toward you and your companions, and it might attack. An uncontrolled fey creature can't be dismissed by you, and it disappears 1 hour after you summoned it. The DM has the fey creature's statistics.`,
  dur:`Conc 1h`,
  hlvl:`When you cast this spell using a spell slot of 7th level or higher, the challenge rating increases by 1 for each slot level above 6th.`,
  lvl:6,
  name:`Conjure Fey`,
  rng:90,
  type:`6lvl conj`
},{
  cst:`1act`,
  desc:`You fire a piece of nonmagical ammunition from a ranged weapon or throw a nonmagical weapon into the air and choose a point within range. Hundreds of duplicates of the ammunition or weapon fall in a volley from above and then disappear. Each creature in a 40-ft-radius, 20-ft-high cylinder centered on that point must make a Dexterity saving throw. A creature takes 8d8 damage on a failed save, or half as much damage on a successful one. The damage type is the same as that of the ammunition or weapon.`,
  dur:`Inst.`,
  lvl:5,
  name:`Conjure Volley`,
  rng:150,
  type:`5lvl conj`
},{
  cst:`1m`,
  desc:`You mentally contact a demigod, the spirit of a long-dead sage, or some other mysterious entity from another plane. Contacting this extraplanar intelligence can strain or even break your mind. When you cast this spell, make a DC 15 Intelligence saving throw. On a failure, you take 6d6 psychic damage and are insane until you finish a long rest. While insane, you can't take actions, can't understand what other creatures say, can't read, and speak only in gibberish. A greater restoration (lvl 5) spell cast on you ends this effect. On a successful save, you can ask the entity up to five questions. You must ask your questions before the spell ends. The DM answers each question with one word, such as \`yes,\` \`no,\` \`maybe,\` \`never,\` \`irrelevant,\` or \`unclear\` (if the entity doesn't know the answer to the question). If a one-word answer would be misleading, the DM might instead offer a short phrase as an answer.`,
  dur:`1m`,
  lvl:5,
  name:`Contact Other Plane`,
  rng:`S`,
  type:`5lvl divi rit`
},{
  cst:`1act`,
  desc:`Your touch inflicts disease. Make a melee spell attack against a creature within your reach. On a hit, you afflict the creature with a disease of your choice from any of the ones described below. At the end of each of the target's turns, it must make a Constitution saving throw. After failing three of these saving throws, the disease's effects last for the duration, and the creature stops making these saves. After succeeding on three of these saving throws, the creature recovers from the disease, and the spell ends. Since this spell induces a natural disease in its target, any effect that removes a disease or otherwise ameliorates a disease's effects apply to it.`,
  dur:`7 days`,
  lvl:5,
  name:`Contagion`,
  rng:`T`,
  type:`5lvl necro`
},{
  cst:`10m`,
  desc:`Choose a spell of 5th level or lower that you can cast, that has a casting time of 1 action, and that can target you. You cast that spell--called the contingent spell--as part of casting *contingency*, expending spell slots for both, but the contingent spell doesn't come into effect. Instead, it takes effect when a certain circumstance occurs. You describe that circumstance when you cast the two spells. For example, a *contingency* cast with water breathing (lvl 3) might stipulate that *water breathing* comes into effect when you are engulfed in water or a similar liquid. The contingent spell takes effect immediately after the circumstance is met for the first time, whether or not you want it to. and then contingency ends. The contingent spell takes effect only on you, even if it can normally target others. You can use only one *contingency* spell at a time. If you cast this spell again, the effect of another *contingency* spell on you ends. Also, *contingency* ends on you if its material component is ever not on your person.`,
  dur:`10 days`,
  lvl:6,
  name:`Contingency`,
  rng:`S`,
  type:`6lvl evo`
},{
  cst:`1m`,
  desc:`You can cast this spell only at night. Choose up to three corpses of Medium or Small humanoids within range. Each corpse becomes a ghoul under your control. (The DM has game statistics for these creatures.) As a bonus action on each of your turns, you can mentally command any creature you animated with this spell if the creature is within 120 feet of you (if you control multiple creatures, you can command any or all of them at the same time, issuing the same command to each one). You decide what action the creature will take and where it will move during its next turn, or you can issue a general command, such as to guard a particular chamber or corridor. If you issue no commands, the creature only defends itself against hostile creatures. Once given an order, the creature continues to follow it until its task is complete. The creature is under your control for 24 hours, after which it stops obeying any command you have given it. To maintain control of the creature for another 24 hours, you must cast this spell on the creature before the current 24-hour period ends. This use of the spell reasserts your control over up to three creatures you have animated with this spell, rather than animating new ones.`,
  dur:`Inst.`,
  hlvl:`When you cast this spell using a 7lvl spell slot, you can animate or reassert control over four ghouls. When you cast this spell using an 8lvl spell slot, you can animate or reassert control over five ghouls or two ghasts or wights. When you cast this spell using a 9lvl spell slot, you can animate or reassert control over six ghouls, three ghasts or wights, or two mummies.`,
  lvl:6,
  name:`Create Undead`,
  rng:10,
  type:`6lvl necro`
},{
  cst:`1act`,
  desc:`A flame, equivalent in brightness to a torch, springs forth from an object that you touch. The effect looks like a regular flame, but it creates no heat and doesn't use oxygen. A *continual flame* can be covered or hidden but not smothered or quenched.`,
  dur:`Until dispelled`,
  lvl:2,
  name:`Continual Flame`,
  rng:`S`,
  type:`2dlvl evo`
},{
  cst:`1m`,
  desc:`The duration depends on the object's material. If the object is composed of multiple materials, use the shortest duration. | Material              | Duration   |\n|---|---|\n| Vegetable matter      | 1 day      |\n| Stone or crystal      | 12 hours   |\n| Precious metals       | 1 hour     |\n| Gems                  | 10 minutes |\n| Adamantine or mithral | 1 minute   | Using any material created by this spell as another spell's material component causes that spell to fail.`,
  dur:`Special`,
  hlvl:`When you cast this spell using a spell slot of 6th level or higher, the cube increases by 5 feet for each slot level above 5th.`,
  lvl:5,
  name:`Creation`,
  rng:30,
  type:`5lvl illus`
},{
  cst:`1act`,
  desc:`You strike the ground, creating a burst of divine energy that ripples outward from you. Each creature you choose within 30 feet of you must succeed on a Constitution saving throw or take 5d6 thunder damage, as well as 5d6 radiant or necrotic damage (your choice), and be knocked prone. A creature that succeeds on its saving throw takes half as much damage and isn't knocked prone.`,
  dur:`Inst.`,
  lvl:5,
  name:`Destructive Wave`,
  rng:`S (30-ft radius)`,
  type:`5lvl evo`
},{
  cst:`1act`,
  desc:`A thin green ray springs from your pointing finger to a target that you can see within range. The target can be a creature, an object, or a creation of magical force, such as the wall created by *[wall of force](../wall-of-force/ \`wall of force (lvl 5)\`)*. A creature targeted by this spell must make a Dexterity saving throw. On a failed save, the target takes 10d6 + 40 force damage. If this damage reduces the target to 0 hit points, it is disintegrated. A disintegrated creature and everything it is wearing and carrying, except magic items, are reduced to a pile of fine gray dust. The creature can be restored to life only by means of a *[true resurrection](../true-resurrection/ \`true resurrection (lvl 9)\`)* or a *[wish](../wish/ \`wish (lvl 9)\`)* spell. This spell automatically disintegrates a Large or smaller nonmagical object or a creation of magical force. If the target is a Huge or larger object or creation of force, this spell disintegrates a 10-ft-cube portion of it. A magic item is unaffected by this spell.`,
  dur:`Inst.`,
  hlvl:`When you cast this spell using a spell slot of 7th level or higher, the damage increases by 3d6 for each slot level above 6th.`,
  lvl:6,
  name:`Disintegrate`,
  rng:60,
  type:`6lvl transm`
},{
  cst:`1act`,
  desc:`Your magic and an offering put you in contact with a god or a god's servants. You ask a single question concerning a specific goal, event, or activity to occur within 7 days. The DM offers a truthful reply. The reply might be a short phrase, a cryptic rhyme, or an omen. The spell doesn't take into account any possible circumstances that might change the outcome, such as the casting of additional spells or the loss or gain of a companion. If you cast this spell two or more times before finishing your next long rest, there is a cumulative 25 percent chance for each casting after the first that you get a random reading. The DM makes this roll in secret.`,
  dur:`Inst.`,
  lvl:4,
  name:`Divi`,
  rng:`S`,
  type:`4lvl divi rit`
},{
  cst:`1act`,
  desc:`Shimmering energy surrounds and protects you from fey, undead, and creatures originating from beyond the Material Plane. For the duration, celestials, elementals, fey, fiends, and undead have disadvantage on attack rolls against you. You can end the spell early by using either of the following special functions.`,
  dur:`Conc 1m`,
  lvl:5,
  name:`Dispel Evil and Good`,
  rng:`S`,
  type:`5lvl abju`
},{
  cst:`1act`,
  desc:`You attempt to beguile a beast that you can see within range. It must succeed on a Wisdom saving throw or be charmed by you for the duration. If you or creatures that are friendly to you are fighting it, it has advantage on the saving throw. While the beast is charmed, you have a telepathic link with it as long as the two of you are on the same plane of existence. You can use this telepathic link to issue commands to the creature while you are conscious (no action required), which it does its best to obey. You can specify a simple and general course of action, such as \`Attack that creature\`, \`Run over there\`, or \`Fetch that object\`. If the creature completes the order and doesn't receive further direction from you, it defends and preserves itself to the best of its ability. You can use your action to take total and precise control of the target. Until the end of your next turn, the creature takes only the actions you choose, and doesn't do anything that you don't allow it to do. During this time, you can also cause the creature to use a reaction, but this requires you to use your own reaction as well. Each time the target takes damage, it makes a new Wisdom saving throw against the spell. If the saving throw succeeds, the spell ends.`,
  dur:`Conc 1m`,
  hlvl:`When you cast this spell with a 5lvl spell slot, the duration is concentration, up to 10 minutes. When you use a 6lvl spell slot, the duration is concentration, up to 1 hour. When you use a spell slot of 7th level or higher, the duration is concentration, up to 8 hours.`,
  lvl:4,
  name:`Dominate Beast`,
  rng:60,
  ritual:false,
  type:`4lvl enchmt`
},{
  cst:`1act`,
  desc:`You attempt to beguile a humanoid that you can see within range. It must succeed on a Wisdom saving throw or be charmed by you for the duration. If you or creatures that are friendly to you are fighting it, it has advantage on the saving throw. While the target is charmed, you have a telepathic link with it as long as the two of you are on the same plane of existence. You can use this telepathic link to issue commands to the creature while you are conscious (no action required), which it does its best to obey. You can specify a simple and general course of action, such as \`Attack that creature\`, \`Run over there\`, or \`Fetch that object\`. If the creature completes the order and doesn't receive further direction from you, it defends and preserves itself to the best of its ability. You can use your action to take total and precise control of the target. Until the end of your next turn, the creature takes only the actions you choose, and doesn't do anything that you don't allow it to do. During this time you can also cause the creature to use a reaction, but this requires you to use your own reaction as well. Each time the target takes damage, it makes a new Wisdom saving throw against the spell. If the saving throw succeeds, the spell ends.`,
  dur:`Conc 1m`,
  hlvl:`When you cast this spell using a 6lvl spell slot, the duration is concentration, up to 10 minutes. When you use a 7lvl spell slot, the duration is concentration, up to 1 hour. When you use a spell slot of 8th level or higher, the duration is concentration, up to 8 hours.`,
  lvl:5,
  name:`Dominate Person`,
  rng:60,
  ritual:false,
  type:`5lvl enchmt`
},{
  cst:`1m`,
  desc:`This spell shapes a creature's dreams. Choose a creature known to you as the target of this spell. The target must be on the same plane of existence as you. Creatures that don't sleep, such as elves, can't be contacted by this spell. You, or a willing creature you touch, enters a trance state, acting as a messenger. While in the trance, the messenger is aware of his or her surroundings, but can't take actions or move. If the target is asleep, the messenger appears in the target's dreams and can converse with the target as long as it remains asleep, through the duration of the spell. The messenger can also shape the environment of the dream, creating landscapes, objects, and other images. The messenger can emerge from the trance at any time, ending the effect of the spell early. The target recalls the dream perfectly upon waking. If the target is awake when you cast the spell, the messenger knows it, and can either end the trance (and the spell) or wait for the target to fall asleep, at which point the messenger appears in the target's dreams. You can make the messenger appear monstrous and terrifying to the target. If you do, the messenger can deliver a message of no more than ten words and then the target must make a Wisdom saving throw. On a failed save, echoes of the phantasmal monstrosity spawn a nightmare that lasts the duration of the target's sleep and prevents the target from gaining any benefit from that rest. In addition, when the target wakes up, it takes 3d6 psychic damage. If you have a body part, lock of hair, clipping from a nail, or similar portion of the target's body, the target makes its saving throw with disadvantage.`,
  dur:`8h`,
  lvl:5,
  name:`Dream`,
  rng:`Special`,
  ritual:false,
  type:`5lvl illus`
},{
  cst:`1act`,
  desc:`You touch a creature and bestow upon it a magical enhancement. Choose one of the following effects; the target gains that effect until the spell ends.`,
  dur:`Conc 1h`,
  hlvl:`When you cast this spell using a spell slot of 3rd level or higher, you can target one additional creature for each slot level above 2nd.`,
  lvl:2,
  name:`Enhance Ability`,
  rng:`T`,
  ritual:false,
  type:`2dlvl transm`
},{
  cst:`1act`,
  desc:`You cause a creature or an object you can see within range to grow larger or smaller for the duration. Choose either a creature or an object that is neither worn nor carried. If the target is unwilling, it can make a Constitution saving throw. On a success, the spell has no effect. If the target is a creature, everything it is wearing and carrying changes size with it. Any item dropped by an affected creature returns to normal size at once.`,
  dur:`Conc 1m`,
  lvl:2,
  name:`Enlarge/Reduce`,
  rng:30,
  ritual:false,
  type:`2dlvl transm`
},{
  cst:`1act`,
  desc:`You weave a distracting string of words, causing creatures of your choice that you can see within range and that can hear you to make a Wisdom saving throw. Any creature that can't be charmed succeeds on this saving throw automatically, and if you or your companions are fighting a creature, it has advantage on the save. On a failed save, the target has disadvantage on Wisdom (Perception) checks made to perceive any creature other than you until the spell ends or until the target can no longer hear you. The spell ends if you are incapacitated or can no longer speak.`,
  dur:`1m`,
  lvl:2,
  name:`Enthrall`,
  rng:60,
  ritual:false,
  type:`2dlvl enchmt`
},{
  cst:`10m`,
  desc:`You convert raw materials into products of the same material. For example, you can fabricate a wooden bridge from a clump of trees, a rope from a patch of hemp, and clothes from flax or wool. Choose raw materials that you can see within range. You can fabricate a Large or smaller object (contained within a 10-ft cube, or eight connected 5-ft cubes), given a sufficient quantity of raw material. If you are working with metal, stone, or another mineral substance, however, the fabricated object can be no larger than Medium (contained within a single 5-ft cube). The quality of objects made by the spell is commensurate with the quality of the raw materials. Creatures or magic items can't be created or transmuted by this spell. You also can't use it to create items that ordinarily require a high degree of craftsmanship, such as jewelry, weapons, glass, or armor, unless you have proficiency with the type of artisan's tools used to craft such objects.`,
  dur:`Inst.`,
  lvl:4,
  name:`Fabricate`,
  rng:120,
  ritual:false,
  type:`4lvl transm`
},{
  cst:`1act`,
  desc:`For the spell's duration, your eyes become an inky void imbued with dread power. One creature of your choice within 60 feet of you that you can see must succeed on a Wisdom saving throw or be affected by one of the following effects of your choice for the duration. On each of your turns until the spell ends, you can use your action to target another creature but can't target a creature again if it has succeeded on a saving throw against this casting of *eyebite*.`,
  dur:`Conc 1m`,
  lvl:6,
  name:`Eyebite`,
  rng:`S`,
  type:`6lvl necro`
},{
  cst:`10m`,
  desc:`You summon a spirit that assumes the form of an unusually intelligent, strong, and loyal steed, creating a long-lasting bond with it. Appearing in an unoccupied space within range, the steed takes on a form that you choose, such as a warhorse, a pony, a camel, an elk, or a mastiff. (Your DM mught allow other animals to be summoned as steeds.) The steed has the statistics of the chosen form, though it is a celestial, fey, or fiend (your choice) instead of its normal type. Additionally, if your steed has an Intelligence of 5 or less, its Intelligence becomes 6, and it gains the ability to understand one language of your choice that you speak. Your steed serves you as a mount, both in combat and out, and you have an instinctive bond with it that allows you to fight as a seamless unit. While mounted on your steed, you can make any spell you cast that targets only you also target your steed. When the steed drops to 0 hit points, it disappears, leaving behind no physical form. You can also dismiss your steed at any time as an action, causing it to disappear. In either case, casting this spell again summons the same steed, restored to its hit point maximum. While your steed is within 1 mile of you, you can communicate with it telepathically. You can't have more than one steed bonded by this spell at a time. As an action, you can release the steed from its bond at any time, causing it to disappear.`,
  dur:`Inst.`,
  lvl:2,
  name:`Find Steed`,
  rng:30,
  type:`2dlvl conj`
},{
  cst:`1m`,
  desc:`This spell allows you to find the shortest, most direct physical route to a specific fixed location that you are familiar with on the same plane of existence. If you name a destination on another plan of existence, a destination that moves (such as a mobile fortress), or a destination that isn't specific (such as \`a green dragon's lair\`), the spell fails. For the duration, as long as you are on the same plane of existence as the destination, you know how far it is and in what direction it lies. While you are traveling there, whenever you are presented with a choice of paths along the way, you atomatically determine which path is the shortest and most direct route (but not necessarily the safest route) to the destination.`,
  dur:`Conc 1d`,
  lvl:6,
  name:`Find the Path`,
  rng:`S`,
  type:`6lvl divi`
},{
  cst:`1act`,
  desc:`You sense the presence of any trap within range that is within line of sight. A trap, for the purpose of this spell, includes anything that would inflict a sudden or unexpected effect you consider harmful or undesirable, which was specifically intended as such by its creator. Thus, the spell would sense an area affected by the *[alarm](../alarm/ \`alarm (lvl 1)\`)* spell, a *[glyph of warding](../glyph-of-warding/ \`glyph of warding (lvl 3)\`)*, or a mechanical pit trap, but it would not reveal a natural weakness in the floor, an unstable ceiling, or a hidden sinkhole. This spell merely reveals that a trap is present. You don't learn the location of each trap, but you do learn the general nature of the danger posed by a trap you sense.`,
  dur:`Inst.`,
  lvl:2,
  name:`Find Traps`,
  rng:120,
  type:`2dlvl divi`
},{
  cst:`1act`,
  desc:`Thin and wispy flames wreathe your body for the duration, shedding bright light in a 10-ft radius and dim light for an additional 10 feet, You can end the spell early by using an action to dismiss it. The flames provide you with a warm shield or a chill shield, as you choose. The warm shield grants you resistance to cold damage, and the chill shield grants you resistance to fire damage. In addition, whenever a creature within 5 feet of you hits you with a melee attack, the shield erupts with flame. The attacker takes 2d8 fire damage from a warm shield, or 2d8 cold damage from a cold shield.`,
  dur:`10m`,
  lvl:4,
  name:`Fire Shield`,
  rng:`S`,
  type:`4lvl evo`
},{
  cst:`1 bns act`,
  desc:`You evoke a fiery blade in your free hand. The blade is similar in size and shape to a scimitar, and it lasts for the duration. If you let go of the blade, it disappears, but you can evoke the blade again as a bonus action. You can use your action to make a melee spell attack with the fiery blade. On a hit, the target takes 3d6 fire damage. The flaming blade sheds bright light in a 10-ft radius and dim light for an additional 10 feet.`,
  dur:`Conc 10m`,
  hlvl:`When you cast this spell using a spell slot of 4th level or higher, the damage increases by 1d6 for every two slot levels above 2nd.`,
  lvl:2,
  name:`Flame Blade`,
  rng:`S`,
  type:`2dlvl evo`
},{
  cst:`1act`,
  desc:`A vertical column of divine fire roars down from the heavens in a location you specify. Each creature in a 10-ft radius, 40-ft-high cylinder centered on a point within range must make a Dexterity saving throw. A creature takes 4d6 fire damage and 4d6 radiant damage on a failed save, or half as much damage on a successful one.`,
  dur:`Inst.`,
  hlvl:`When you cast this spell using a spell slot of 6th level or higher, the fire damage or the radiant damage (your choice) inceases by 1d6 for each slot level above 5th.`,
  lvl:5,
  name:`Flame Strike`,
  rng:60,
  type:`5lvl evo`
},{
  cst:`1act`,
  desc:`A 5-ft-diameter sphere of fire appears in an unoccupied space of your choice within range and lasts for the duration. Any creature that ends its turn within 5 feet of the sphere must make a Dexterity saving throw. The creature takes 2d6 fire damage on a failed save, or half as much damage on a successful one. As a bonus action, you can move the sphere up to 30 feet. If you ram the sphere into a creature, that creature must make the saving throw against the sphere's damage, and the sphere stops moving this turn. When you move the sphere, you can direct it over barriers up to 5 feet tall and jump it across pits up to 10 feet wide. The sphere ignites flammable objects not being worn or carried, and it sheds bright light in a 20-ft radius and dim light for an additional 20 feet.`,
  dur:`Conc 1m`,
  hlvl:`When you cast this spell using a spell slot of 3rd level or higher, the damage increases by 1d6 for each slot level above 2nd.`,
  lvl:2,
  name:`Flaming Sphere`,
  rng:60,
  type:`2dlvl conj`
},{
  cst:`1act`,
  desc:`You attempt to turn one creature that you can see within range into stone. If the target's body is made of flesh, the creature must make a Constitution saving throw. On a failed save, it is restrained as its flesh begins to harden. On a successful save, the creature isn't affected. A creature restrained by this spell must make another Consititution saving throw at the end of each of its turns. If it successfully saves against this spell three times, the spell ends. If it fails saves three times, it is turned to stone and subjected to the petrified condition for the duration. The successes and failures don't need to be consecutive; keep track of both until the target collects three of a kind. If the creature is physically broken while petrified, it suffers from similar deformities if it reverts to its original state. If you maintain your concentration on this spell for the entire possible duration, the creature is turned to stone until the effect is removed.`,
  dur:`Conc 1m`,
  lvl:6,
  name:`Flesh to Stone`,
  rng:60,
  type:`6lvl transm`
},{
  cst:`10m`,
  desc:`You create a ward against magical travel that protects up to 40,000 square feet of floor space to a height of 30 feet above the floor. For the duration, creatures can't teleport into the area or use portals, such as those created by the *[gate](../gate/ \`gate (lvl 9)\`)* spell, to enter the area. The spell proofs the area against planar travel, and therefore prevents creatures from accessing the area by way of the Astral Plane, Ethereal Plane, Feywild, Shadowfell, or the *[plane shift](../plane-shift/ \`plane shift (lvl 7)\`)* spell. When you cast this spell, you can designate a password. A creature that speaks the password as it enters the area takes no damage from the spell. The spell's area can't overlap with the area of another *forbiddance* spell. If you cast *forbiddance* every day for 30 days in the same location, the spell lasts until it is dispelled, and the material components are consumed on the last casting.`,
  dur:`1 day`,
  lvl:6,
  name:`Forbiddance`,
  rng:`T`,
  type:`6lvl abju rit`
},{
  cst:`1act`,
  desc:`You touch a willing creature. For the duration, the target's movement is unaffected by difficult terrain, and spells and other magical effects can neither reduce the target's speed nor cause the target to be paralyzed or restrained. The target can also spend 5 feet of movement to automatically escape from nonmagical restraints, such as manacles or a creature that has it grappled. Finally, being underwater imposes no penalties on the target's movement or attacks.`,
  dur:`1h`,
  lvl:4,
  name:`Freedom of Movement`,
  rng:`T`,
  type:`4lvl abju`
},{
  cst:`1m`,
  desc:`You place a magical command on a creature that you can see within range, forcing it to carry out some service or refrain from some action or course of activity as you decide. If the creature can understand you, it must succeed on a Wisdom saving throw or become charmed by you for the duration. While the creature is charmed by you, it takes 5d10 psychic damage each time it acts in a manner directly counter to your instructions, but no more than once each day. A creature that can't understand you is unaffected by the spell. You can issue any command you choose, short of an activity that would result in certain death. Should you issue a suicidal command, the spell ends. You can end the spell early by using an action to dismiss it. A *[remove curse](../remove-curse/ \`remove curse (lvl 3)\`)*, *[greater restoration](../greater-restoration/ \`greater restoration (lvl 5)\`)*, or *[wish](../wish/ \`wish (lvl 9)\`)* spell also ends it.`,
  dur:`30 days`,
  hlvl:`When you cast this spell using a spell slot of 7th or 8th level, the duration is 1 year. When you cast this spell using a spell slot of 9th level, the spell lasts until it is ended by one of the spells mentioned above.`,
  lvl:5,
  name:`Geas`,
  rng:60,
  type:`5lvl enchmt`
},{
  cst:`1act`,
  desc:`You touch a corpse or other remains. For the duration, the target is protected from decay and can't become undead. The spell also effectively extends the time limit on raising the target from the dead, since days spent under the influence of this spell don't count against the time limit of spells such as *[raise dead](../raise-dead/ \`raise dead (lvl 5)\`)*.`,
  dur:`10 days`,
  lvl:2,
  name:`Gentle Repose`,
  rng:`T`,
  type:`2dlvl necro rit`
},{
  cst:`1act`,
  desc:`You transform up to ten centipedes, three spiders, five wasps, or one scorpion within range into versions of their natural forms for the duration. A centipede becomes a giant centipede, a spider becomes a giant spider, a wasp becomes a giant wasp, a wasp becomes a giant wasp, and a scorpion becomes a giant scorpion. Each creature obeys your verbal commands, and in combat they act on your turn each round. The DM has the statistics for these creatures and resolves their actions and moment. A creature remains in its giant size for the duration until it drops to 0 hit points, or until you use an action to dismiss the effect on it. The DM might allow you to choose different targets. for example, if you transform a bee, its giant version might have the same stats as a giant wasp.`,
  dur:`Conc 10m`,
  lvl:4,
  name:`Giant Insect`,
  rng:30,
  type:`4lvl transm`
},{
  cst:`1act`,
  desc:`An immobile, faintly shimmering barrier springs into existence in a 10-ft radius around you and remains for the duration. Any spell of 5th level or lower cast from outside the barrier can't affect creatures or objects within it, even if the spell is cast using a higher level spell slot. Such a spell can target creatures and objects within the barrier, but the spell has no effect on them. Similarly, the area within the barrier is excluded from the areas affected by such spells.`,
  dur:`Conc 1m`,
  hlvl:`When you cast this spell using a spell slot of 7th level or higher, the barrier blocks spells of one level higher for each slot level above 6th.`,
  lvl:6,
  name:`Globe of Invulnerability`,
  rng:`S`,
  type:`6lvl abju`
},{
  cst:`1hr`,
  desc:`When you cast this spell, you inscribe a glyph that harms other creatures, either upon a surface (such as a table or a section of floor or wall) or within an object that can be closed (such as a book, a scroll, or a treasure chest) to conceal the glyph. If you choose a surface, the glyph can cover an area of the surface no larger than 10 feet in diameter. If you choose an object, that object must remain in its place; if the object is moved more than 10 feet from where you cast this spell, the glyph is broken, and the spell ends without being triggered. The glyph is nearly invisible and requires a successful Intelligence (Investigation) check against your spell save DC to be found. You decide what triggers the glyph when you cast the spell. For glyphs inscribed on a surface, the most typical triggers include touching or standing on the glyph, removing another object covering the glyph, approaching within a certain distance of the glyph, or manipulating the object on which the glyph is inscribed. For glyphs inscribed within an object, the most common triggers include opening that object, approaching within a certain distance of the object, or seeing or reading the glyph. Once a glyph is triggered, this spell ends. You can further refine the trigger so the spell activates only under certain circumstances or according to physical characteristics (such as height or weight), creature kind (for example, the ward could be set to affect aberrations or drow), or alignment. You can also set conditions for creatures that don't trigger the glyph, such as those who say a certain password. When you inscribe the glyph, choose *explosive runes* or a *spell glyph*.`,
  dur:`Until dispelled or triggered`,
  hlvl:`When you cast this spell using a spell slot of 4th level or higher, the damage of an *explosive runes* glyph increases by 1d8 for each slot level above 3rd. If you create a *spell glyph*, you can store any spell of up to the same level as the slot you use for the *glyph of warding*.`,
  lvl:3,
  name:`Glyph of Warding`,
  rng:`T`,
  type:`3lvl abju`
},{
  cst:`1 bns act`,
  desc:`You conjure a vine that sprouts from the ground in an unoccupied space of your choice that you can see within range. When you cast this spell, you can direct the vine to lash out at a creature within 30 feet of it that you can see. That creature must succeed on a Dexterity saving throw or be pulled 20 feet directly toward the vine. Until the spell ends, you can direct the vine to lash out at the same creature or another one as a bonus action on each of your turns.`,
  dur:`Conc 1m`,
  lvl:4,
  name:`Grasping Vine`,
  rng:30,
  type:`4lvl conj`
},{
  cst:`1act`,
  desc:`You or a creature you touch becomes invisible until the spell ends. Anything the target is wearing or carrying is invisible as long as it is on the target's person.`,
  dur:`Conc 1m`,
  lvl:4,
  name:`Greater Invisibility`,
  rng:`T`,
  type:`4lvl illus`
},{
  cst:`1act`,
  desc:`* One effect that charmed or petrified the target * One curse, including the target's attunement to a cursed magic item * Any reduction to one of the target's ability scores * One effect reducing the target's hit point maximum`,
  dur:`Inst.`,
  lvl:5,
  name:`Greater Restoration`,
  rng:`T`,
  type:`5lvl abju`
},{
  cst:`1act`,
  desc:`A Large spectral guardian appears and hovers for the duration in an unoccupied space of your choice that you can see within range. The guardian occupies that space and is indistinct except for a gleaming sword and shield emblazoned with the symbol of your deity. Any creature hostile to you that moves to a space within 10 feet of the guardian for the first time on a turn must succeed on a Dexterity saving throw. The creature takes 20 radiant damage on a failed save, or half as much damage on a successful one. The guardian vanishes when it has dealt a total of 60 damage.`,
  dur:`8h`,
  lvl:4,
  name:`Guardian of Faith`,
  rng:30,
  type:`4lvl conj`
},{
  cst:`10m`,
  desc:`You create a ward that protects up to 2,500 square feet of floor space (an area 50 feet square, or one hundred 5-ft squares or twenty-five 10-ft squares). The warded area can be up to 20 feet tall, and shaped as you desire. You can ward several stories of a stronghold by dividing the area among them, as long as you can walk into each contiguous area while you are casting the spell. When you cast this spell, you can specify individuals that are unaffected by any or all of the effects that you choose. You can also specify a password that, when spoken aloud, makes the speaker immune to these effects. *Guards and wards* creates the following effects within the warded area. * Place *[dancing lights](../dancing-lights/ \`dancing lights (cantrip)\`)* in four corridors. You can designate a simple program that the lights repeat as long as guards and wards lasts. * Place *[magic mouth](../magic-mouth/ \`magic mouth (lvl 2)\`)* in two locations. * Place *[stinking cloud](../stinking-cloud/ \`stinking cloud (lvl 3)\`)* in two locations. The vapors appear in the places you designate; They return within 10 minutes if dispersed by wind while *guards and wards* lasts. * Place a constant *[gust of wind](../gust-of-wind/ \`gust of wind (lvl 2)\`)* in one corridor or room. * Place a *[suggestion](../suggestion/ \`suggestion (lvl 2)\`)* in one location. You select an area of up to 5 feet square, and any creature that enters or passes through the area recieves the suggestion mentally. The whole warded area radiates magic. A *[dispel magic](../dispel-magic/ \`dispel magic (lvl 3)\`)* cast on a specific effect, if successful, removes only that effect. You can create a permanently guarded and warded structure by casting this spell there every day for one year.`,
  dur:`24h`,
  lvl:6,
  name:`Guards and Wards`,
  rng:`T`,
  type:`6lvl abju`
},{
  cst:`1act`,
  desc:`A line of strong wind 60 feet long and 10 feet wide blasts from you in a direction you choose for the spell's duration. Each creature that starts its turn in the line must succeed on a Strength saving throw or be pushed 15 feet away from you in a direction following the line. Any creature in the line must spend 2 feet of movement for every 1 ft it moves when moving closer to you. The gust disperses gas or vapor, and it extinguishes candles, torches, and similar unprotected flames in the area. It causes protected fiames, such as those of lanterns, to dance wildly and has a 50 percent chance to extinguish them. As a bonus action on each of your turns before the spell ends, you can change the direction in which the line blasts from you.`,
  dur:`Conc 1m`,
  lvl:2,
  name:`Gust of Wind`,
  rng:`S (60-ft line)`,
  type:`2dlvl evo`
},{
  cst:`10m`,
  desc:`You make natural terrain in a 150-ft cube in range look, sound, and smell like some other sort of natural terrain. Thus, open fields or a road can be made to resemble a swamp, hill, crevasse, or some other difficult or impassable terrain. A pond can be made to seem like a grassy meadow, a precipice like a gentle slope, or a rock-strewn gully like a wide and smooth road. Manufactured structures, equipment, and creatures within the area aren't changed in appearance. The tactile characteristics of the terrain are unchanged, so creatures entering the area are likely to see through the illus. If the difference isn't obvious by touch, a creature carefully examining the illus can attempt an Intelligence (Investigation) check against your spell save DC to disbelieve it. A creature who discerns the illus for what it is, sees it as a vague image superimposed on the terrain.`,
  dur:`24h`,
  lvl:4,
  name:`Hallucinatory Terrain`,
  rng:300,
  type:`4lvl illus`
},{
  cst:`24h`,
  desc:`You touch a point and infuse an area around it with holy (or unholy) power. The area can have a radius up to 60 feet, and the spell fails if the radius includes an area already under the effect a *hallow* spell. The affected area is subject to the following effects. First, celestials, elementals, fey, fiends, and undead can't enter the area, nor can such creatures charm, frighten, or possess creatures within it. Any creature charmed, frightened, or possessed by such a creature is no longer charmed, frightened, or possessed upon entering the area. You can exclude one or more of those types of creatures from this effect. Second, you can bind an extra effect to the area. Choose the effect from the following list, or choose an effect offered by the DM. Some of these effects apply to creatures in the area; you can designate whether the effect applies to all creatures, creatures that follow a specific deity or leader, or creatures of a specific sort, such as orcs or trolls. When a creature that would be affected enters the spell's area for the first time on a turn or starts its turn there, it can make a Charisma saving throw. On a success, the creature ignores the extra effect until it leaves the area.`,
  dur:`Until dispelled`,
  lvl:5,
  name:`Hallow`,
  rng:`T`,
  type:`5lvl evo`
},{
  cst:`1act`,
  desc:`You unleash a virulent disease on a creature that you can see within range. The target must make a Constitution saving throw. On a failed save, it takes 14d6 necrotic damage, or half as much damage on a successful save. The damage can't reduce the target's hit points below 1. If the target fails the saving throw, its hit point maximum is reduced for 1 hour by an amount equal to the necrotic damage it took. Any effect that removes a disease allows a creature's hit point maximum to return to normal before that time passes.`,
  dur:`Inst.`,
  lvl:6,
  name:`Harm`,
  rng:60,
  type:`6lvl necro`
},{
  cst:`1act`,
  desc:`Choose a manufactured metal object, such as a metal weapon or a suit of heavy or medium metal armor, that you can see within range. You cause the object to glow red-hot. Any creature in physical contact with the object takes 2d8 fire damage when you cast the spell. Until the spell ends, you can use a bonus action on each of your subsequent turns to cause this damage again. If a creature is holding or wearing the object and takes the damage from it, the creature must succeed on a Constitution saving throw or drop the object if it can. If it doesn't drop the object, it has disadvantage on attack rolls and ability checks until the start of your next turn.`,
  dur:`Conc 1m`,
  hlvl:`When you cast this spell using a spell slot of 3rd level or higher, the damage increases by 1d8 for each slot level above 2nd.`,
  lvl:2,
  name:`Heat Metal`,
  rng:60,
  type:`2dlvl transm`
},{
  cst:`1act`,
  desc:`Choose a creature that you can see within range. A surge of positive energy washes through the creature, causing it to regain 70 hit points. This spell also ends blindness, deafness, and any diseases affecting the target. This spell has no effect on constructs or undead.`,
  dur:`Inst.`,
  hlvl:`When you cast this spell using a spell slot of 7th level or higher, the amount of healing increases by 10 for each slot level above 6th.`,
  lvl:6,
  name:`Heal`,
  rng:60,
  type:`6lvl evo`
},{
  cst:`10m`,
  desc:`You bring forth a great feast, including magnificent food and drink. The feast takes 1 hour to consume and disappears at the end of that time, and the beneficial effects don't set in until this hour is over. Up to twelve other creatures can partake of the feast. A creature that partakes of the feast gains several benefits. The creature is cured of all diseases and poison, becomes immune to poison and being frightened, and makes all Wisdom saving throws with advantage. Its hit point maximum also increases by 2d10, and it gains the same number of hit points. These benefits last for 24h`,
  dur:`Inst.`,
  lvl:6,
  name:`Heroes' Feast`,
  rng:30,
  type:`6lvl conj`
},{
  cst:`1act`,
  desc:`Choose a creature that you can see within range. The target must succeed on a Wisdom saving throw or be paralyzed for the duration. This spell has no effect on undead. At the end of each of its turns, the target can make another Wisdom saving throw. On a success, the spell ends on the target.`,
  dur:`Conc 1m`,
  hlvl:`When you cast this spell using a spell slot of 6th level or higher, you can target one additional creature for each slot level above 5th. The creatures must be within 30 feet of each other when you target them.`,
  lvl:5,
  name:`Hold Monster`,
  rng:90,
  type:`5lvl enchmt`
},{
  cst:`1act`,
  desc:`A hail of rock-hard ice pounds to the ground in a 20-ft-radius, 40-ft-high cylinder centered on a point within range. Each creature in the cylinder must make a Dexterity saving throw. A creature takes 2d8 bludgeoning damage and 4d6 cold damage on a failed save, or half as much damage on a successful one. Hailstones turn the storm's area of effect into difficult terrain until the end of your next turn.`,
  dur:`Inst.`,
  hlvl:`When you cast this spell using a spell slot of 5th level or higher, the bludgeoning damage increases by 1d8 for each slot level above 4th.`,
  lvl:4,
  name:`Ice Storm`,
  rng:300,
  type:`4lvl evo`
},{
  cst:`1act`,
  desc:`Swarming, biting locusts fill a 20-ft-radius sphere centered on a point you choose within range, The sphere spreads around corners. The sphere remains for the duration, and its area is lightly obscured. The sphere's area is difficult terrain. When the area appears, each creature in it must make a Constitution saving throw. A creature takes 4d10 piercing damage on a failed save, or half as much damage on a successful one. A creature must also make this saving throw when it enters the spell's area for the first time on a turn or ends its turn there.`,
  dur:`Conc 10m`,
  hlvl:`When you cast this spell using a spell slot of 6th levei or higher, the damage increases by 1d10 for each slot level above 5th.`,
  lvl:5,
  name:`Insect Plague`,
  rng:300,
  type:`5lvl conj`
},{
  cst:`1act`,
  desc:`Choose an object that you can see within range. The object can be a door, a box, a chest, a set of manacles, a padlock, or another object that contains a mundane or magical means that prevents access. A target that is held shut by a mundane lock ar that is stuck or barred becomes unlocked, unstuck, or unbarred. If the object has multiple locks, only one of them is unlocked. If you choose a target that is held shut with arcane lock (lvl 2), that spell is suppressed for 10 minutes, during which time the target can be opened and shut normally. When you cast the spell, a loud knock, audible from as far away as 300 feet, emanates from the target object.`,
  dur:`Inst.`,
  lvl:2,
  name:`Knock`,
  rng:60,
  type:`2dlvl transm`
},{
  cst:`10m`,
  desc:`Name or describe a person, place, or object. The spell brings to your mind a brief summary of the significant lore about the thing you named. The lore might consist of current tales, forgotten stories, or even secret lore that has never been widely known. If the thing you named isn't of legendary importance, you gain no information. The more information you already have about the thing, the more precise and detailed the information you receive is.`,
  dur:`Inst.`,
  lvl:5,
  name:`Legend Lore`,
  rng:`S`,
  type:`5lvl divi`
},{
  cst:`1act`,
  desc:`One creature or object of your choice that you can see within range rises vertically, up to 20 feet, and remains suspended there for the duration. The spell can levitate a target that weighs up to 500 pounds. An unwilling creature that succeeds on a Constitution saving throw is unaffected. The target can move only by pushing or pulling against a fixed object or surface within reach (such as a wall or a ceiling), which allows it to move as if it were climbing. You can change the target's altitude by up to 20 feet in either direction on your turn. If you are the target, you can move up or down as part of your move. Otherwise, you can use your action to move the target, which must remain within the spell's range. When the spell ends, the target floats gently to the ground if it is still aloft.`,
  dur:`Conc 10m`,
  lvl:2,
  name:`Levitate`,
  rng:60,
  type:`2dlvl transm`
},{
  cst:`1act`,
  desc:`Describe or name a specific kind of beast or plant. Concentrating on the voice of nature in your surroundings, you learn the direction and distance to the closest creature or plant of that kind within 5 miles, if any are present.`,
  dur:`Inst.`,
  lvl:2,
  name:`Locate Animals or Plants`,
  rng:`S`,
  type:`2dlvl divi rit`
},{
  cst:`1act`,
  desc:`A stroke of lightning forming a line 100 feet long and 5 feet wide blasts out from you in a direction you choose. Each creature in the line must make a Dexterity saving throw. A creature takes 8d6 lightning damage on a failed save, or half as much damage on a successful one. The lightning ignites flammable objects in the area that aren't being worn or carried.`,
  dur:`Inst.`,
  hlvl:`When you cast this spell using a spell slot of 4th level or higher, the damage increases by 1d6 for each slot level above 3rd.`,
  lvl:3,
  name:`Lightning Bolt`,
  rng:`S (100-ft line)`,
  type:`3lvl evo`
},{
  cst:`1act`,
  desc:`Describe or name a creature that is familiar to you. You sense the direction to the creature's location, as long as that creature is within 1,000 feet of you. If the creature is moving, you know the direction of its movement. The spell can locate a specific creature known to you, or the nearest creature of a specific kind (such as a human or a unicorn), so long as you have seen such a creature up close--within 30 feet--at least once. If the creature you described or named is in a different form, such as being under the effects of a *[polymorph](../polymorph/ \`polymorph (lvl 4)\`)* spell, this spell doesn't locate the creature. This spell can't locate a creature if running water at least 10 feet wide blocks a direct path between you and the creature.`,
  dur:`Conc 1h`,
  lvl:4,
  name:`Locate Creature`,
  rng:`S`,
  type:`4lvl divi`
},{
  cst:`1act`,
  desc:`Describe or name an object that is familiar to you. You sense the direction to the object's location, as long as that object is within 1,000 feet of you. If the object is in motion, you know the direction of its movement. The spell can locate a specific object known to you, as long as you have seen it up close--within 30 feet--at least once. Alternatively, the spell can locate the nearest object of a particular kind, such as a certain kind of apparel, jewelry, furniture, tool, or weapon. This spell can't locate an object if any thickness of lead, even a thin sheet, blocks a direct path between you and the object.`,
  dur:`Conc 10m`,
  lvl:2,
  name:`Locate Object`,
  rng:`S`,
  type:`2dlvl divi`
},{
  cst:`1m`,
  desc:`Your body falls into a catatonic state as your soul leaves it and enters the container you used for the spell's material component. While your soul inhabits the container, you are aware of your surroundings as if you were in the container's space. You can't move or use reactions. The only action you can take is to project your soul up to 100 feet out of the container, either returning to your living body (and ending the spell) or attempting to possess a humanoid's body. You can attempt to possess any humanoid within 100 feet of you that you can see (creatures warded by a *[protection from evil and good](../protection-from-evil-and-good \`protection from evil and good (lvl 1)\`)* or *[magic circle](../magic-circle \`magic circle (lvl 3)\`)* spell can't be possessed). The target must make a Charisma saving throw. On a failure, your soul moves into the target's body, and the target's soul becomes trapped in the container. On a success, the target resists your efforts to possess it, and you can't attempt to possess it again for 24 hours. Once you possess a creature's body, you control it. Your game statistics are replaced by the statistics of the creature, though you retain your alignment and your Intelligence, Wisdom, and Charisma scores. You retain the benefit of your own class features. If the target has any class levels, you can't use any of its class features. Meanwhile, the possessed creature's soul can perceive from the container using its own senses, but it can't move or take actions at all. While possessing a body, you can use your action to return from the host body to the container if it is within 100 feet of you, returning the host creature's soul to its body. If the host body dies while you're in it, the creature dies, and you must make a Charisma saving throw against your own spellcasting DC. On a success, you return to the container if it is within 100 feet of you. Otherwise, you die. If the container is destroyed or the spell ends, your soul immediately returns to your body. If your body is more than 100 feet away from you or if your body is dead when you attempt to return to it, you die. If another creature's soul is in the container when it is destroyed, the creature's soul returns to its body if the body is alive and within 100 feet. Otherwise, that creature dies. When the spell ends, the container is destroyed.`,
  dur:`Until dispelled`,
  lvl:6,
  name:`Magic Jar`,
  rng:`S`,
  type:`6lvl necro`
},{
  cst:`1 bns act`,
  desc:`You touch a nonmagical weapon. Until the spell ends, that weapon becomes a magic weapon with a +1 bonus to attack rolls and damage rolls.`,
  dur:`Conc 1h`,
  hlvl:`When you cast this spell using a spell slot of 4th level or higher, the bonus increases to +2. When you use a spell slot of 6th level or higher, the bonus increases to +3.`,
  lvl:2,
  name:`Magic Weapon`,
  rng:`T`,
  type:`2dlvl transm`
},{
  cst:`1m`,
  desc:`You implant a message within an object in range, a message that is uttered when a trigger condition is met. Choose an object that you can see that isn't being worn or carried by another creature, then speak the message, which must be 25 words or less, though it can be delivered over as long as ten minutes. Finally, determine the circumstance that will trigger the spell to deliver your message. When that circumstance occurs, a magical mouth appears on the object and recites the message in your voice at the same volume you spoke. If the object you chose has a mouth or something that looks like a mouth (for example, the mouth of a statue) the magical mouth appears there so that the words appear to come from the object's mouth. When you cast this spell, you can have the spell end after it delivers its message or it can remain and repeat its message whenever the trigger occurs. The triggering circumstance can be as general or as detailed as you like, though it must be based on visual or audible conditions that occur within 30 feet of the object. For example, you could instruct the mouth to speak when any creature moves within 30 feet of the object or when a silver bell rings within 30 feet.`,
  dur:`Until dispelled`,
  lvl:2,
  name:`Magic Mouth`,
  rng:30,
  type:`2dlvl illus rit`
},{
  cst:`1act`,
  desc:`A wave of healing energy washes out from a point of your choice within range. Choose up to six creatures in a 30-ft-radius sphere centered on that point. Each target regains hit points equal to 3d8 + your spellcasting ability modifier. This spell has no effect on undead or constructs.`,
  dur:`Inst.`,
  hlvl:`When you cast this spell using a spell slot of 6th level or higher, the healing increases by 1d8 for each slot level above 5th.`,
  lvl:5,
  name:`Mass Cure Wounds`,
  rng:60,
  type:`5lvl conj`
},{
  cst:`1act`,
  desc:`You suggest a course of activity (limited to a sentence or two) and magically influence up to twelve creatures of your choice that you can see within range and that can hear and understand you. Creatures that can't be charmed are immune to this effect. The suggestion must be worded in such a manner as to make the course of action sound reasonable. Asking the creature to stab itself, throw itself onto a spear, immolate itself, or do some other obviously harmful act automatically negates the effect of the spell. Each target must make a Wisdom saving throw. On a failed save, it pursues the course of action you described to the best of its ability. The suggested course of action can continue for the entire duration. If the suggested activity can be completed in a shorter time, the spell ends when the subject finishes what it was asked to do. You can also specify conditions that will trigger a special activity during the duration. For example, you might suggest that a group of soldiers give all their money to the first beggar they meet. If the condition isn't met before the spell ends, the activity isn't performed. If you or any of your companions damage a creature affected by this spell, the spell ends for that creature.`,
  dur:`24h`,
  hlvl:`When you cast this spell using a 7lvl spell slot, the duration is 10 days. When you use an 8lvl spell slot, the duration is 30 days. When you use a 9lvl spell slot, the duration is a year and a day.`,
  lvl:6,
  name:`Mass Suggestion`,
  rng:60,
  type:`6lvl enchmt`
},{
  cst:`1act`,
  desc:`Three illusory duplicates of yourself appear in your space. Until the spell ends, the duplicates move with you and mimic your actions, shifting position so it's impossible to track which image is real. You can use your action to dismiss the illusory duplicates. Each time a creature targets you with an attack during the spell's duration, roll a d20 to determine whether the attack instead targets one of your duplicates. lf you have three duplicates, you must roll a 6 or higher to change the attack's target to a duplicate. With two duplicates, you must roll an 8 or higher. With one duplicate, you must roll an 11 or higher. A duplicate's AC equals 10 + your Dexterity modifier. If an attack hits a duplicate, the duplicate is destroyed. A duplicate can be destroyed only by an attack that hits it. It ignores all other damage and effects. The spell ends when all three duplicates are destroyed. A creature is unaffected by this spell if it can't see, if it relies on senses other than sight, such as blindsight, or if it can perceive illuss as false, as with truesight.`,
  dur:`1m`,
  lvl:2,
  name:`Mirror Image`,
  rng:`S`,
  type:`2dlvl illus`
},{
  cst:`1act`,
  desc:`You become invisible at the same time that an illusory double of you appears where you are standing. The double lasts for the duration, but the invisibility ends if you attack or cast a spell. You can use your action to move your illusory double up to twice your speed and make it gesture, speak, and behave in whatever way you choose. You can see through its eyes and hear through its ears as if you were located where it is. On each of your turns as a bonus action, you can switch from using its senses to using your own, or back again. While you are using its senses, you are blinded and deafened in regard to your own surrounding.`,
  dur:`Conc 1h`,
  lvl:5,
  name:`Mislead`,
  rng:`S`,
  type:`5lvl illus`
},{
  cst:`1 bns act`,
  desc:`Briefly surrounded by silvery mist, you teleport up to 30 feet to an unoccupied space that you can see.`,
  dur:`Inst.`,
  lvl:2,
  name:`Misty Step`,
  rng:`S`,
  type:`2dlvl conj`
},{
  cst:`1act`,
  desc:`You attempt to reshape another creature's memories. One creature that you can see must make a Wisdom saving throw. If you are fighting the creature, it has advantage on the saving throw. On a failed save, the target becomes charmed by you for the duration. The charmed target is incapacitated and unaware of its surroundings, though it can still hear you. If it takes any damage or is targeted by another spell, this spell ends, and none of the target's memories are modified. While this charm lasts, you can affect the target's memory of an event that it experienced within the last 24 hours and that lasted no more than 10 minutes. You can permanently eliminate all memory of the event, allow the target to recall the event with perfect clarity and exacting detail, change its memory of the details of the event, or create a memory of some other event. You must speak to the target to describe how its memories are affected, and it must be able to understand your language for the modified memories to take root. Its mind fills in any gaps in the details of your description. If the spell ends before you have finished describing the modified memories, the creature's memory isn't altered. Otherwise, the modified memories take hold when the spell ends. A modified memory doesn't necessarily affect how a creature behaves, particularly if the memory contradicts the creature's natural inclinations, alignment, or beliefs. An illogical modified memory, such as implanting a memory of how much the creature enjoyed dousing itself in acid, is dismissed, perhaps as a bad dream. The DM might deem a modified memory too nonsensical to affect a creature in a significant manner. A *[remove curse](../remove-curse/ \`remove curse (lvl 3)\`)* or *[greater restoration](../greater-restoration/ \`greater restoration (lvl 5)\`)* spell cast on the target restores the creature's true memory.`,
  dur:`Conc 1m`,
  hlvl:`If you cast this spell using a spell slot of 6th level or higher, you can alter the target's memories of an event that took place up to 7 days ago (6th level), 30 days ago (7th level), 1 year ago (8th level), or any time in the creature's past (9th level).`,
  lvl:5,
  name:`Modify Memory`,
  rng:30,
  type:`5lvl enchmt`
},{
  cst:`1act`,
  desc:`A silvery beam of pale light shines down in a 5-ft-radius, 40-ft-high cylinder centered on a point within range. Until the spell ends, dim light fills the cylinder. When a creature enters the spell's area for the first time on a turn or starts its turn there, it is engulfed in ghostly flames that cause searing pain, and it must make a Constitution saving throw. It takes 2d10 radiant damage on a failed save, or half as much on a successful one. A shapechanger makes its saving throw with disadvantage. If it fails, it also instantly reverts to its original form and can't assume a different form until it leaves the spells light. On each of your turns after you cast this spell use can use an action to move the beam 60 feet in any direction.`,
  dur:`Conc 1m`,
  hlvl:`When you cast this spell using a spell slot of 3rd level or higher, the damage increases by 1d10 for each slot level above 2nd.`,
  lvl:2,
  name:`Moonbeam`,
  rng:120,
  type:`2dlvl evo`
},{
  cst:`1act`,
  desc:`Choose an area of terrain no larger than 40 feet on a side within range. You can reshape dirt, sand, or clay in the area in any manner you choose for the duration. You can raise or lower the area's elevation, create or fill in a trench, erect or flatten a wall, or form a pillar. The extent of any such changes can't exceed half the area's largest dimension. So, if you affect a 40-ft square, you can create a pillar up to 20 feet high, raise or lower the square's elevation by up to 20 feet, dig a trench up to 20 feet deep, and so on. It takes 10 minutes for these changes to complete. At the end of every 10 minutes you spend concentrating on the spell, you can choose a new area of terrain to affect. Because the terrain's transformation occurs slowly, creatures in the area can't usually be trapped or injured by the ground's movement. This spell can't manipulate natural stone or stone construction. Rocks and structures shift to accommodate the new terrain. If the way you shape the terrain would make a structure unstable, it might collapse. Similarly, this spell doesn't directly affect plant growth. The moved earth carries any plants along with it.`,
  dur:`Conc 2h`,
  lvl:6,
  name:`Move Earth`,
  rng:120,
  type:`6lvl transm`
},{
  cst:`1act`,
  desc:`A veil of shadows and silence radiates from you, masking you and your companions from detection. For the duration, each creature you choose within 30 feet of you (including you) has a +10 bonus to Dexterity (Stealth) checks and can't be tracked except by magical means. A creature that receives this bonus leaves behind no tracks or other traces of its passage.`,
  dur:`Conc 1h`,
  lvl:2,
  name:`Pass Without Trace`,
  rng:`S`,
  type:`2dlvl abju`
},{
  cst:`1act`,
  desc:`When the opening disappears, any creatures or objects still in the passage created by the spell are safely ejected to an unoccupied space nearest to the surface on which you cast the spell.`,
  dur:`1h`,
  lvl:5,
  name:`Passwall`,
  rng:30,
  type:`5lvl transm`
},{
  cst:`1act`,
  desc:`You tap into the nightmares of a creature you can see within range and create an illusory manifestation of its deepest fears, visible only to that creature. The target must make a Wisdom saving throw. On a failed save, the target becomes frightened for the duration. At the start of each of the target's turns before the spell ends, the target must succeed on a Wisdom saving throw or take 4d10 psychic damage. On a successful save, the spell ends.`,
  dur:`Conc 1m`,
  hlvl:`When you cast this spell using a spell slot of 5th level or higher, the damage increases by 1d10 for each slot level above 4th.`,
  lvl:4,
  name:`Phantasmal Killer`,
  rng:120,
  type:`4lvl illus`
},{
  cst:`1act`,
  desc:`You craft an illus that takes root in the mind of a creature that you can see within range. The target must make an Intelligence saving throw. On a failed save, you create a phantasmal object, creature, or other visible phenomenon of your choice that is no larger than a 1O-ft cube and that is perceivable only to the target for the duration. This spell has no effect on undead or constructs. The phantasm includes sound, temperature, and other stimuli, also evident only to the creature. The target can use its action to examine the phantasm with an Intelligence (Investigation) check against your spell save DC. If the check succeeds, the target realizes that the phantasm is an illus, and the spell ends. While a target is affected by the spell, the target treats the phantasm as if it were real. The target rationalizes any illogical outcomes from interacting with the phantasm. For example, a target attempting to walk across a phantasmal bridge that spans a chasm falls once it steps onto the bridge. If the target survives the fall, it still believes that the bridge exists and comes up with some other explanation for its fall--it was pushed, it slipped, or a strong wind might have knocked it off. An affected target is so convinced of the phantasm's reality that it can even take damage from the illus. A phantasm created to appear as a creature can attack the target. Similarly. a phantasm created to appear as fire, a pool of acid, or lava can burn the target. Each round on your turn, the phantasm can deal 1d6 psychic damage to the target if it is in the phantasm's area or within 5 feet of the phantasm, provided that the illus is of a creature ar hazard that could logically deal damage, such as by attacking. The target perceives the damage as a type appropriate to the illus.`,
  dur:`Conc 1m`,
  lvl:2,
  name:`Phantasmal Force`,
  rng:60,
  type:`2dlvl illus`
},{
  cst:`10m`,
  desc:`When the creature appears, it is under no compulsion to behave in any particular way. You can ask the creature to perform a service in exchange for payment, but it isn't obliged to do so. The requested task could range from simple (fly us across the chasm, or help us fight a battle) to complex (spy on our enemies, or protect us during our foray into the dungeon). You must be able to communicate with the creature to bargain for its services. Payment can take a variety of forms. A celestial might require a sizable donation of gold or magic items to an allied temple, while a fiend might demand a living sacrifice or a gift of treasure. Some creatures might exchange their service for a quest undertaken by you. As a rule of thumb, a task that can be measured in minutes requires a payment worth 100 gp per minute. A task measured in hours requires 1,000 gp per hour. And a task measured in days (up to 10 days) requires 10,000 gp per day. The DM can adjust these payments based on the circumstances under which you cast the spell. If the task is aligned with the creature's ethos, the payment might be halved or even waived. Nonhazardous tasks typically require only half the suggested payment, while especially dangerous tasks might require a greater gift. Creatures rarely accept tasks that seem suicidal. After the creature completes the task, or when the agreed-upon duration of service expires, the creature returns to its home plane after reporting back to you, if appropriate to the task and if possible. If you are unable to agree on a price for the creature's service, the creature immediately returns to its home plane. A creature enlisted to join your group counts as a member of it, receiving a full share of experience points awarded.`,
  dur:`Inst.`,
  lvl:6,
  name:`Planar Ally`,
  rng:60,
  type:`6lvl conj`
},{
  cst:`1hr`,
  desc:`With this spell, you attempt to bind a celestial, an elemental, a fey, or a fiend to your service. The creature must be within range for the entire casting of the spell. (Typically, the creature is first summoned into the center of an inverted magic circle in order to keep it trapped while this spell is cast.) At the completion of the casting, the target must make a Charisma saving throw. On a failed save, it is bound to serve you for the duration. If the creature was summoned or created by another spell, that spell's duration is extended to match the duration of this spell. A bound creature must follow your instructions to the best of its ability. You might command the creature to accompany you on an adventure, to guard a location, or to deliver a message. The creature obeys the letter of your instructions, but if the creature is hostile to you, it strives to twist your words to achieve its own objectives. If the creature carries out your instructions completely before the spell ends, it travels to you to report this fact if you are on the same plane of existence. If you are on a different plane of existence, it returns to the place where you bound it and remains there until the spell ends.`,
  dur:`24h`,
  hlvl:`When you cast this spell using a spell slot of a higher level, the duration increases to 10 days with a 6lvl slot, to 30 days with a 7lvl slot, to 180 days with an 8lvl slot, and to a year and a day with a 9lvl spell slot.`,
  lvl:5,
  name:`Planar Binding`,
  rng:60,
  type:`5lvl abju`
},{
  cst:`1act`,
  desc:`This spell transforms a creature that you can see within range into a new form. An unwilling creature must make a Wisdom saving throw to avoid the effect. A shapechanger automatically succeeds on this saving throw. The transformation lasts for the duration, or until the target drops to 0 hit points or dies. The new form can be any beast whose challenge rating is equal to or less than the target's (or the target's level, if it doesn't have a challenge rating). The target's game statistics, including mental ability scores, are replaced by the statistics of the chosen beast. It retains its alignment and personality. The target assumes the hit points of its new form. When it reverts to its normal form, the creature returns to the number of hit points it had before it transformed. If it reverts as a result of dropping to 0 hit points, any excess damage carries over to its normal form. As long as the excess damage doesn't reduce the creature's normal form to 0 hit points, it isn't knocked unconscious. The creature is limited in the actions it can perform by the nature of its new form, and it can't speak, cast spells, or take any other action that requires hands or speech. The target's gear melds into the new form. The creature can't activate, use, wield, or otherwise benefit from any of its equipment.`,
  dur:`Conc 1h`,
  lvl:4,
  name:`Polymorph`,
  rng:60,
  type:`4lvl transm`
},{
  cst:`1act`,
  desc:`You create an illus of an object, a creature, or some other visible phenomenon within range that activates when a specific condition occurs. The illus is imperceptible until then. It must be no larger than a 30-ft cube, and you decide when you cast the spell how the illus behaves and what sounds it makes. This scripted performance can last up to 5 minutes. When the condition you specify occurs, the illus springs into existence and performs in the manner you described. Once the illus finishes performing, it disappears and remains dormant for 10 minutes. After this time, the illus can be activated again. The triggering condition can be as general or as detailed as you like, though it must be based on visual or audible conditions that occur within 30 feet of the area. For example, you could create an illus of yourself to appear and warn off others who attempt to open a trapped door, or you could set the illus to trigger only when a creature says the correct word or phrase. Physical interaction with the image reveals it to be an illus, because things can pass through it. A creature that uses its action to examine the image can determine that it is an illus with a successful Intelligence (Investigation) check against your spell save DC. If a creature discerns the illus for what it is, the creature can see through the image, and any noise it makes sounds hollow to the creature.`,
  dur:`Until dispelled`,
  lvl:6,
  name:`Programmed illus`,
  rng:120,
  type:`6lvl illus`
},{
  cst:`1hr`,
  desc:`You return a dead creature you touch to life, provided that it has been dead no longer than 10 days. If the creature's soul is both willing and at liberty to rejoin the body, the creature returns to life with 1 hit point. This spell also neutralizes any poisons and cures nonmagical diseases that affected the creature at the time it died. This spell doesn't, however, remove magical diseases, curses, or similar effects; if these aren't first removed prior to casting the spell, they take effect when the creature returns to life. The spell can't return an undead creature to life. This spell closes all mortal wounds, but it doesn't restore missing body parts. If the creature is lacking body parts or organs integral for its survival-its head, for instance-the spell automatically fails. Coming back from the dead is an ordeal. The target takes a \u22124 penalty to all attack rolls, saving throws, and ability checks. Every time the target finishes a long rest, the penalty is reduced by 1 until it disappears.`,
  dur:`Inst.`,
  lvl:5,
  name:`Raise Dead`,
  rng:`T`,
  type:`5lvl necro`
},{
  cst:`1act`,
  desc:`You touch a creature. If it is poisoned, you neutralize the poison. If more than one poison afflicts the target, you neutralize one poison that you know is present, or you neutralize one at random. For the duration, the target has advantage on saving throws against being poisoned, and it has resistance to poison damage.`,
  dur:`1h`,
  lvl:2,
  name:`Protection from Poison`,
  rng:`T`,
  type:`2dlvl abju`
},{
  cst:`1act`,
  desc:`A black beam of enervating energy springs from your finger toward a creature within range. Make a ranged spell attack against the target. On a hit, the target deals only half damage with weapon attacks that use Strength until the spell ends. At the end of each of the target's turns, it can make a Constitution saving throw against the spell. On a success, the spell ends.`,
  dur:`Conc 1m`,
  lvl:2,
  name:`Ray of Enfeeblement`,
  rng:60,
  type:`2dlvl necro`
},{
  cst:`1hr`,
  desc:`You touch a dead humanoid or a piece of a dead humanoid. Provided that the creature has been dead no longer than 10 days, the spell forms a new adult body for it and then calls the soul to enter that body. If the target's soul isn't free or willing to do so, the spell fails. The magic fashions a new body for the creature to inhabit, which likely causes the creature's race to change. The DM rolls a d100 and consults the following table to determine what form the creature takes when restored to life, or the DM chooses a form. |d100|Race|\n|--------|---------|\n|01-04|Dragonborn|\n|05-13|Dwarf, hill|\n|14-21|Dwarf, mountain|\n|22-25|Elf, dark|\n|26-34|Elf, high|\n|35-42|Elf, wood|\n|43-46|Gnome, forest|\n|47-52|Gnome, rock|\n|53-56|Half-elf|\n|57-60|Half-orc|\n|61-68|Halfling, lightft|\n|69-76|Halfling, stout|\n|77-96|Human|\n|97-00|Tiefling| The reincarnated creature recalls its former life and experiences. It retains the capabilities it had in its original form, except it exchanges its original race for the new one and changes its racial traits accordingly.`,
  dur:`Inst.`,
  lvl:5,
  name:`Reincarnate`,
  rng:`T`,
  type:`5lvl transm`
},{
  cst:`1act`,
  desc:`You touch a length of rope that is up to 60 feet long. One end of the rope then rises into the air until the whole rope hangs perpendicular to the ground. At the upper end of the rope, an invisible entrance opens to an extradimensional space that lasts until the spell ends. The extradimensional space can be reached by climbing to the top of the rope. The space can hold as many as eight Medium or smaller creatures. The rope can be pulled into the space, making the rope disappear from view outside the space. Attacks and spells can't cross through the entrance into or out of the extradimensional space, but those inside can see out of it as if through a 3-ft-by-5-ft window centered on the rope. Anything inside the extradimensional space drops out when the spell ends.`,
  dur:`1h`,
  lvl:2,
  name:`Rope Trick`,
  rng:`T`,
  type:`2dlvl transm`
},{
  cst:`1act`,
  desc:`You create three rays of fire and hurl them at targets within range. You can hurl them at one target or several. Make a ranged spell attack for each ray. On a hit, the target takes 2d6 fire damage.`,
  dur:`Inst.`,
  hlvl:`When you cast this spell using a spell slot of 3rd level or higher, you create one additional ray for each slot level above 2nd.`,
  lvl:2,
  name:`Scorching Ray`,
  rng:120,
  type:`2dlvl evo`
},{
  cst:`10m`,
  desc:`You can see and hear a particular creature you choose that is on the same plane of existence as you. The target must make a Wisdom saving throw, which is modified by how well you know the target and the sort of physical connection you have to it. If a target knows you're casting this spell, it can fail the saving throw voluntarily if it wants to be observed. |Knowledge|Save Modifier|\n|---|---|\n|Secondhand (you have heard of the target)| +5|\n|Firsthand (you have met the target)| 0|\n|Familiar (you know the target well)| -5|\n|Connection|Save Modifier|\n|Likeness or picture| -2|\n|Possession or garment| -4|\n|Body part, lock of hair, bit of nail, or the like| -10| On a successful save, the target isn't affected, and you can't use this spell against it again for 24 hours. On a failed save, the spell creates an invisible sensor within 10 feet of the target. You can see and hear through the sensor as if you were there. The sensor moves with the target, remaining within 10 feet of it for the duration. A creature that can see invisible objects sees the sensor as a luminous orb about the size of your fist. Instead of targeting a creature, you can choose a location you have seen before as the target of this spell. When you do, the sensor appears at that location and doesn't move.`,
  dur:`Conc 10m`,
  lvl:5,
  name:`Scrying`,
  rng:`S`,
  type:`5lvl divi`
},{
  cst:`1act`,
  desc:`This spell allows you to change the appearance of any number of creatures that you can see within range. You give each target you choose a new, illusory appearance. An unwilling target can make a Charisma saving throw, and if it succeeds, it is unaffected by this spell. The spell disguises physical appearance as well as clothing, armor, weapons, and equipment. You can make each creature seem 1 ft shorter or taller and appear thin, fat, or in between. You can't change a target's body type, so you must choose a form that has the same basic arrangement of limbs. Otherwise, the extent of the illus is up to you. The spell lasts for the duration, unless you use your action to dismiss it sooner. The changes wrought by this spell fail to hold up to physical inspection. For example, if you use this spell to add a hat to a creature's outfit, objects pass through the hat, and anyone who touches it would feel nothing or would feel the creature's head and hair. If you use this spell to appear thinner than you are, the hand of someone who reaches out to touch you would bump into you while it was seemingly still in midair. A creature can use its action to inspect a target and make an Intelligence (Investigation) check against your spell save DC. If it succeeds, it becomes aware that the target is disguised.`,
  dur:`8h`,
  lvl:5,
  name:`Seeming`,
  rng:30,
  type:`5lvl illus`
},{
  cst:`1act`,
  desc:`For the duration, you see invisible creatures and objects as if they were visible, and you can see into the Ethereal Plane. Ethereal creatures and objects appear ghostly and translucent.`,
  dur:`1h`,
  lvl:2,
  name:`See Invisibility`,
  rng:`S`,
  type:`2dlvl divi`
},{
  cst:`1act`,
  desc:`A sudden loud ringing noise, painfully intense, erupts from a point of your choice within range. Each creature in a lO-ft-radius sphere centered on that point must make a Constitution saving throw. A creature takes 3d8 thunder damage on a failed save, or half as much damage on a successful one. A creature made of inorganic material such as stone, crystal, or metal has disadvantage on this saving throw. A nonmagical object that isn't being worn or carried also takes the damage if it's in the spell's area.`,
  dur:`Inst.`,
  hlvl:`When you cast this spell using a spell slot of 3rd levei or higher, the damage increases by ld8 for each slot level above 2nd.`,
  lvl:2,
  name:`Shatter`,
  rng:60,
  type:`2dlvl evo`
},{
  cst:`1act`,
  desc:`Until the spell ends, one willing creature you touch gains the ability to move up, down, and across vertical surfaces and upside down along ceilings, while leaving its hands free. The target also gains a c1imbing speed equal to its walking speed.`,
  dur:`Conc 1h`,
  lvl:2,
  name:`Spider Climb`,
  rng:`T`,
  type:`2dlvl transm`
},{
  cst:`1act`,
  desc:`The ground in a 20-ft radius centered on a point within range twists and sprouts hard spikes and thorns. The area becomes difficult terrain for the duration. When a creature moves into or within the area, it takes 2d4 piercing damage for every 5 feet it travels. The transformation of the ground is camouflaged to look natural. Any creature that can't see the area at the time the spell is cast must make a Wisdom (Perception) check against your spell save DC to recognize the terrain as hazardous before entering it.`,
  dur:`Conc 10m`,
  lvl:2,
  name:`Spike Growth`,
  rng:150,
  type:`2dlvl transm`
},{
  cst:`1 bns act`,
  desc:`The next time you hit a creature with a melee weapon attack during this spell's duration, your weapon pierces both body and mind, and the attack deals an extra 4d6 psychic damage to the target. The target must make a Wisdom saving throw. On a failed save, it has disadvantage on attack rolls and ability checks, and can't take reactions, until the end of its next turn.`,
  dur:`Conc 1m`,
  lvl:4,
  name:`Staggering Smite`,
  rng:`S`,
  type:`4lvl evo`
},{
  cst:`1act`,
  desc:`You touch a stone object of Medium size or smaller or a section of stone no more than 5 feet in any dimension and form it into any shape that suits your purpose. So, for example, you could shape a large rock into a weapon, idol, or coffer, or make a small passage through a wall, as long as the wall is less than 5 feet thick. You could also shape a stone door or its frame to seal the door shut. The object you create can have up to two hinges and a latch, but finer mechanical detail isn't possible.`,
  dur:`Inst.`,
  lvl:4,
  name:`Stone Shape`,
  rng:`T`,
  type:`4lvl transm`
},{
  cst:`1act`,
  desc:`A beam of brilliant light flashes out from your hand in a 5-ft-wide, 60-ft-long line. Each creature in the line must make a Constitution saving throw. On a failed save, a creature takes 6d8 radiant damage and is blinded until your next turn. On a successful save, it takes half as much damage and isn't blinded by this spell. Undead and oozes have disadvantage on this saving throw. You can create a new line of radiance as your action on any turn until the spell ends. For the duration, a mote of brilliant radiance shines in your hand. It sheds bright light in a 30-ft radius and dim light for an additional 30 feet. This light is sunlight.`,
  dur:`Conc 1m`,
  lvl:6,
  name:`Sunbeam`,
  rng:`S (60-ft line)`,
  type:`6lvl evo`
},{
  cst:`1act`,
  desc:`This spell turns the flesh of a willing creature you touch as hard as stone. Until the spell ends, the target has resistance to nonmagical bludgeoning, piercing, and slashing damage.`,
  dur:`Conc 1h`,
  lvl:4,
  name:`Stoneskin`,
  rng:`T`,
  type:`4lvl abju`
},{
  cst:`1 bns act`,
  desc:`You transmute your quiver so it produces an endless supply of nonmagical ammunition, which seems to leap into your hand when you reach for it. On each of your turns until the spell ends, you can use a bonus action to make two attacks with a weapon that uses ammunition from the quiver. Each time you make such a ranged attack, your quiver magically replaces the piece of ammunition you used with a similar piece of nonmagical ammunition. Any pieces of ammunition created by this spell disintegrate when the spell ends. If the quiver leaves your possession, the spell ends.`,
  dur:`Conc 1m`,
  lvl:5,
  name:`Swift Quiver`,
  rng:`T`,
  type:`5lvl transm`
},{
  cst:`1act`,
  desc:`You gain the ability to move or manipulate creatures or objects by thought. When you cast the spell, and as your action each round for the duration, you can exert your will on one creature or object that you can see within range, causing the appropriate effect below. You can affect the same target round after round, or choose a new one at any time. If you switch targets, the prior target is no longer affected by the spell. On subsequent rounds, you can use your action to attempt to maintain your telekinetic grip on the creature by repeating the contest. If the object is worn or carried by a creature, you must make an ability check with your spellcasting ability contested by that creature's Strength check. If you succeed, you pull the object away from that creature and can move it up to 30 feet in any direction but not beyond the range of this spell. You can exert fine control on objects with your telekinetic grip, such as manipulating a simple tool, opening a door or a container, stowing or retrieving an item from an open container, or pouring the contents from a vial.`,
  dur:`Conc 10m`,
  lvl:5,
  name:`Telekinesis`,
  rng:60,
  type:`5lvl transm`
},{
  cst:`1m`,
  desc:`As you cast the spell, you draw a 10-ft-diameter circle on the ground inscribed with sigils that link your location to a permanent teleportation circle of your choice, whose sigil sequence you know and that is on the same plane of existence as you. A shimmering portal opens within the circle you drew and remains open until the end of your next turn. Any creature that enters the portal instantly appears within 5 feet of the destination circle or in the nearest unoccupied space if that space is occupied. Many major temples, guilds, and other important places have permanent teleportation circles inscribed somewhere within their confines. Each such circle includes a unique sigil sequence--a string of magical runes arranged in a particular pattern. When you first gain the ability to cast this spell, you learn the sigil sequences for two destinations on the Material Plane, determined by the DM. You can learn additional sigil sequences during your adventures. You can commit a new sigil sequence to memory after studying it for 1 minute. You can create a permanent teleportation circle by casting this spell in the same location every day for one year. You need not use the circle to teleport when you cast the spell in this way.`,
  dur:`1r`,
  lvl:5,
  name:`Teleportation Circle`,
  rng:10,
  type:`5lvl conj`
},{
  cst:`1act`,
  desc:`This spell creates a magical link between a Large or larger inanimate plant within range and another plant, at any distance, on the same plane of existence. You must have seen or touched the destination plant at least once before. For the duration, any creature can step into the target plant and exit from the destination plant by using 5 feet of movement.`,
  dur:`1r`,
  lvl:6,
  name:`Transport via Plants`,
  rng:10,
  type:`6lvl conj`
},{
  cst:`1act`,
  desc:`You gain the ability to enter a tree and move from inside it to inside another tree of the same kind within 500 feet. Both trees must be living and at least the same size as you. You must use 5 feet of movement to enter a tree. You instantly know the location of all other trees of the same kind within 500 feet and, as part of the move used to enter the tree, can either pass into one of those trees or step out of the tree you're in. You appear in a spot of your choice within 5 feet of the destination tree, using another 5 feet of movement. If you have no movement left, you appear within 5 feet of the tree you entered. You can use this transportation ability once per round for the duration. You must end each turn outside a tree.`,
  dur:`Conc 1m`,
  lvl:5,
  name:`Tree Stride`,
  rng:`S`,
  type:`5lvl conj`
},{
  cst:`1act`,
  desc:`This spell gives the willing creature you touch the ability to see things as they actually are. For the duration, the creature has truesight, notices secret doors hidden by magic, and can see into the Ethereal Plane, all out to a range of 120 feet.`,
  dur:`1h`,
  lvl:6,
  name:`True Seeing`,
  rng:`T`,
  type:`6lvl divi`
},{
  cst:`1act`,
  desc:`The touch of your shadow-wreathed hand can siphon life force from others to heal your wounds. Make a melee spell attack against a creature within your reach. On a hit, the target takes 3d6 necrotic damage, and you regain hit points equal to half the amount of necrotic damage dealt. Until the spell ends, you can make the attack again on each of your turns as an action.`,
  dur:`Conc 1m`,
  hlvl:`When you cast this spell using a spell slot of 4th level or higher, the damage increases by 1d6 for each slot level above 3rd.`,
  lvl:3,
  name:`Vampiric Touch`,
  rng:`S`,
  type:`3lvl necro`
},{
  cst:`1act`,
  desc:`You create a wall of fire on a solid surface within range. You can make the wall up to 60 feet long, 20 feet high, and 1 ft thick, or a ringed wall up to 20 feet in diameter, 20 feet high, and 1 ft thick. The wall is opaque and lasts for the duration. When the wall appears, each creature within its area must make a Dexterity saving throw. On a failed save, a creature takes 5d8 fire damage, or half as much damage on a successful save. One side of the wall, selected by you when you cast this spell, deals 5d8 fire damage to each creature that ends its turn within 10 feet of that side or inside the wall. A creature takes the same damage when it enters the wall for the first time on a turn or ends its turn there. The other side of the wall deals no damage.`,
  dur:`Conc 1m`,
  hlvl:`When you cast this spell using a spell slot of 5th level or higher, the damage increases by 1d8 for each slot level above 4th.`,
  lvl:4,
  name:`Wall of Fire`,
  rng:120,
  type:`4lvl evo`
},{
  cst:`1act`,
  desc:`You create a wall of ice on a solid surface within range. You can form it into a hemispherical dome or a sphere with a radius of up to 10 feet, or you can shape a flat surface made up of ten 10-ft-square panels. Each panel must be contiguous with another panel. In any form, the wall is 1 ft thick and lasts for the duration. If the wall cuts through a creature's space when it appears, the creature within its area is pushed to one side of the wall and must make a Dexterity saving throw. On a failed save, the creature takes 10d6 cold damage, or half as much damage on a successful save. The wall is an object that can be damaged and thus breached. It has AC 12 and 30 hit points per 10-ft section, and it is vulnerable to fire damage. Reducing a 10-ft section of wall to 0 hit points destroys it and leaves behind a sheet of frigid air in the space the wall occupied. A creature moving through the sheet of frigid air for the first time on a turn must make a Constitution saving throw. That creature takes 5d6 cold damage on a failed save, or half as much damage on a successful one.`,
  dur:`Conc 10m`,
  lvl:6,
  name:`Wall of Ice`,
  rng:120,
  type:`6lvl evo`
},{
  cst:`1act`,
  desc:`An invisible wall of force springs into existence at a point you choose within range. The wall appears in any orientation you choose, as a horizontal or vertical barrier or at an angle. It can be free floating or resting on a solid surface. You can form it into a hemispherical dome or a sphere with a radius of up to 10 feet, or you can shape a flat surface made up of ten 10-ft-by-10-ft panels. Each panel must be contiguous with another panel. In any form, the wall is 1/4 inch thick. It lasts for the duration. If the wall cuts through a creature's space when it appears, the creature is pushed to one side of the wall (your choice which side). Nothing can physically pass through the wall. It is immune to all damage and can't be dispelled by *[dispel magic](../dispel-magic/ \`dispel magic (lvl 3)\`)*. A *[disintegrate](../disintegrate/ \`disintegrate (lvl 6)\`)* spell destroys the wall instantly, however. The wall also extends into the Ethereal Plane, blocking ethereal travel through the wall.`,
  dur:`Conc 10m`,
  lvl:5,
  name:`Wall of Force`,
  rng:120,
  type:`5lvl evo`
},{
  cst:`1act`,
  desc:`A nonmagical wall of solid stone springs into existence at a point you choose within range. The wall is 6 inches thick and is composed of ten 10-ft-by-10-ft panels. Each panel must be contiguous with at least one other panel. Alternatively, you can create 10-ft-by-20-ft panels that are only 3 inches thick. If the wall cuts through a creature's space when it appears, the creature is pushed to one side of the wall (your choice). If a creature would be surrounded on all sides by the wall (or the wall and another solid surface), that creature can make a Dexterity saving throw. On a success, it can use its reaction to move up to its speed so that it is no longer enclosed by the wall. The wall can have any shape you desire, though it can't occupy the same space as a creature or object. The wall doesn't need to be vertical or rest on any firm foundation. It must, however, merge with and be solidly supported by existing stone. Thus, you can use this spell to bridge a chasm or create a ramp. If you create a span greater than 20 feet in length, you must halve the size of each panel to create supports. You can crudely shape the wall to create crenellations, battlements, and so on. The wall is an object made of stone that can be damaged and thus breached. Each panel has AC 15 and 30 hit points per inch of thickness. Reducing a panel to 0 hit points destroys it and might cause connected panels to collapse at the DM's discretion. If you maintain your concentration on this spell for its whole duration, the wall becomes permanent and can't be dispelled. Otherwise, the wall disappears when the spell ends.`,
  dur:`Conc 10m`,
  lvl:5,
  name:`Wall of Stone`,
  rng:120,
  type:`5lvl evo`
},{
  cst:`1act`,
  desc:`You create a wall of tough, pliable, tangled brush bristling with needle-sharp thorns. The wall appears within range on a solid surface and lasts for the duration. You choose to make the wall up to 60 feet long, 10 feet high, and 5 feet thick or a circle that has a 20-ft diameter and is up to 20 feet high and 5 feet thick. The wall blocks line of sight. When the wall appears, each creature within its area must make a Dexterity saving throw. On a failed save, a creature takes 7d8 piercing damage, or half as much damage on a successful save. A creature can move through the wall, albeit slowly and painfully. For every 1 ft a creature moves through the wall, it must spend 4 feet of movement. Furthermore, the first time a creature enters the wall on a turn or ends its turn there, the creature must make a Dexterity saving throw. It takes 7d8 slashing damage on a failed save, or half as much damage on a successful one.`,
  dur:`Conc 10m`,
  hlvl:`When you cast this spell using a spell slot o f 7th level or higher, both types of damage increase by 1d8 for each slot level above 6th.`,
  lvl:6,
  name:`Wall of Thorns`,
  rng:120,
  type:`6lvl conj`
},{
  cst:`1act`,
  desc:`This spell grants up to ten willing creatures you can see within range the abilily to breathe underwater until the spell ends. Affected creatures also retain their normal mode of respiration.`,
  dur:`24h`,
  lvl:3,
  name:`Water Breathing`,
  rng:30,
  type:`3lvl transm rit`
},{
  cst:`1act`,
  desc:`This spell grants the ability to move across any liquid surface--such as water, acid, mud, snow, quicksand, or lava--as if it were harmless solid ground (creatures crossing molten lava can still take damage from the heal). Up to ten willing creatures you can see within range gain this abilily for the duration. lf you target a creature submerged in a liquid, the spell carries the target to the surface of the liquid at a rate of 60 feet per round.`,
  dur:`1h`,
  lvl:3,
  name:`Water Walk`,
  rng:30,
  type:`3lvl transm rit`
},{
  cst:`1act`,
  desc:`You conjure a mass of thick, sticky webbing at a point of your choice within range. The webs fill a 20-ft cube from that point for the duration. The webs are difficult terrain and lightly obscure their area. If the webs aren't anchored between two solid masses (such as walls or trees) or layered across a floor, wall, or ceiling, the conjured web collapses on itself, and the spell ends at the start of your next turn. Webs layered over a flat surface have a depth of 5 feet. Each creature that starts its turn in the webs or that enters them during its turn must make a Dexterity saving throw. On a failed save, the creature is restrained as long as it remains in the webs or until it breaks free. A creature restrained by the webs can use its action to make a Strength cheek against your spell save DC. If it suceeeds, it is no longer restrained. The webs are flammable. Any 5-ft cube of webs exposed to fire burns away in 1 round, dealing 2d4 fire damage to any creature that starts its turn in the fire.`,
  dur:`Conc 1h`,
  lvl:2,
  name:`Web`,
  rng:60,
  type:`2dlvl conj`
},{
  cst:`1m`,
  desc:`You and up to ten willing creatures you can see within range assume a gaseous form for the duration, appearing as wisps of cloud. While in this cloud form, a creature has a flying speed of 300 feet and has resistance to damage from nonmagical weapons. The only actions a creature can take in this form are the Dash action or to revert to its normal form. Reverting takes 1 minute, during which time a creature is incapacitated and can't move. Until the spell ends, a creature can revert to cloud form, which also requires the 1-minute transformation. If a creature is in cloud form and flying when the effect ends, the creature descends 60 feet per round for 1 minute until it lands, which it does safely. If it can't land after 1 minute, the creature falls the remaining distance.`,
  dur:`8h`,
  lvl:6,
  name:`Wind Walk`,
  rng:30,
  type:`6lvl transm`
},{
  cst:`1act`,
  desc:`A wall of strong wind rises from the ground at a point you choose within range. You can make the wall up to 50 feet long, 15 feet high, and 1 ft thick. You can shape the wall in any way you choose so long as it makes one continuous path along the ground. The wall lasts for the duration. When the wall appears, each creature within its area must make a Strength saving throw. A creature takes 3d8 bludgeoning damage on a failed save, or half as much damage on a successful one. The strong wind keeps fog, smoke, and other gases at bay. Small or smaller flying creatures or objects can't pass through the wall. Loose, lightweight materials brought into the wall fly upward. Arrows, bolts, and other ordinary projectiles launched at targets behind the wall are deflected upward and automatically miss. (Boulders hurled by giants or siege engines, and similar projectiles, are unaffected.) Creatures in gaseous form can't pass through it.`,
  dur:`Conc 1m`,
  lvl:3,
  name:`Wind Wall`,
  rng:120,
  type:`3lvl evo`
},{
  cst:`1act`,
  desc:`You and up to five willing creatures within 5 feet of you instantly teleport to a previously designated sanctuary. You and any creatures that teleport with you appear in the nearest unoccupied space to the spot you designated when you prepared your sanctuary (see below). If you cast this spell without first preparing a sanctuary, the spell has no effect. You must designate a sanctuary by casting this spell within a location, such as a temple, dedicated to or strongly linked to your deity. If you attempt to cast the spell in this manner in an area that isn't dedicated to your deity, the spell has no effect.`,
  dur:`Inst.`,
  lvl:6,
  name:`Word of Recall`,
  rng:5,
  type:`6lvl conj`
},{
  cst:`1act`,
  desc:`You create a magical zone that guards against deception in a 15-ft-radius sphere centered on a point of your choice within range. Until the spell ends, a creature that enters the spell's area for the first time on turn or starts its turn there must make a Charisma saving throw. On a failed save, a creature can't speak a deliberate lie while in the radius. you know whether each creature succeeds or fails on its saving throw. An affected creature is aware of the spell and can thus avoid answering questions to which it would normally respond with a lie. Such a creature can be evasive in its answers as long as it remains within the boundaries of the truth.`,
  dur:`10m`,
  lvl:2,
  name:`Zone of Truth`,
  rng:60,
  type:`2dlvl enchmt`
},{
  cst:`1act`,
  desc:`You cause a tremor in the ground in a 10-ft radius. Each creature other than you in that area must make a Dexterity saving throw. On a failed save, a creature takes 1d6 bludgeoning damage and is knocked prone. If the ground in that area is loose earth or stone, it becomes difficult terrain until cleared.`,
  dur:`Inst.`,
  hlvl:`When you cast this spell using a spell slot of 2lvl or higher, the damage increases by 1d6 for each slot level above 1st.`,
  lvl:1,
  name:`Earth Tremor`,
  rng:`S (10-ft radius)`,
  type:`1lvl evo`
},{
  cst:`1act`,
  desc:`Choose an area of flame that you can see and that can fit within a 5-ft cube within range. You can extinguish the fire in that area, and you create either fireworks or smoke.`,
  dur:`Inst.`,
  lvl:2,
  name:`Pyrotechnics`,
  rng:60,
  type:`2dlvl transm`
},{
  cst:`1act`,
  desc:`You cause up to ten words to form in a part of the sky you can see. The words appear to be made of cloud and remain in place for the spell's duration. The words dissipate when the spell ends. A strong wind can disperse the clouds and end the spell early`,
  dur:`Conc 1h`,
  lvl:2,
  name:`Skywrite`,
  rng:`Sight`,
  type:`2dlvl transm rit`
},{
  cst:`1act`,
  desc:`You create a burst of thunderous sound, which can be heard 100 feet away. Each creature other than you within 5 feet of you must make a Constitution saving throw. On a failed save, the creature takes 1d6 thunder damage. The spell's damage increases by 1d6 when you reach 5th level (2d6), 11th level (3d6), and 17th level (4d6).`,
  dur:`Inst.`,
  lvl:`cantrip`,
  name:`Thunderclap`,
  rng:`S (5-ft radius)`,
  type:`evo cantrip`
},{
  cst:`1act`,
  desc:`A strong wind (20 miles per hour) blows around you in a 10-ft radius and moves with you, remaining centered on you. The wind lasts for the spell's duration. * It deafens you and other creatures in its area. * It extinguishes unprotected flames in its area that are torch-sized or smaller. * The area is difficult terrain for creatures other than you. * The attack rolls of ranged weapon attacks have disadvantage if they pass in or out of the wind. * It hedges out vapor, gas, and fog that can be dispersed by strong wind.`,
  dur:`Conc 10m`,
  lvl:2,
  name:`Warding Wind`,
  rng:`S`,
  type:`2lvl evo`
},{
  cst:`1act`,
  desc:`* You instantaneously expand the flame 5 feet in one direction, provided that wood or other fuel is present in the new location. * You instantaneously extinguish the flames within the cube. * You double or halve the area of bright light and dim light cast by the flame, change its color, or both. The change lasts for 1 hour. * You cause simple shapes-such as the vague form of a creature, an inanimate object, or a location-to appear within the flames and animate as you like. The shapes last for 1 hour. If you cast this spell multiple times, you can have up to three of its non-instantaneous effects active at a time, and you can dismiss such an effect as an action.`,
  dur:`Instantaneous or 1 hour (see below)`,
  lvl:`cantrip`,
  name:`Control Flames`,
  rng:60,
  type:`Transmutation cantrip`
},{
  cst:`1act`,
  desc:`You create a bonfire on ground that you can see within range. Until the spell ends, the bonfire fills a 5-ft cube. Any creature in the bonfire's space when you cast the spell must succeed on a Dexterity saving throw or take 1d8 fire damage. A creature must also make the saving throw when it enters the bonfire's space for the first time on a turn or ends its turn there. The spell's damage increases by 1d8 when you reach 5th level (2d8), 11th level (3d8), and 17th level (4d8).`,
  dur:`Conc 1m`,
  lvl:`cantrip`,
  name:`Create Bonfire`,
  rng:60,
  type:`conj cantrip`
},{
  cst:`1act`,
  desc:`You cause numbing frost to form on one creature that you can see within range. The target must make a Constitution saving throw. On a failed save, the target takes 1d6 cold damage, and it has disadvantage on the next weapon attack roll it makes before the end of its next turn. The spell's damage increases by 1d6 when you reach 5th level (2d6), 11th level (3d6), and 17th level (4d6).`,
  dur:`Inst.`,
  lvl:`cantrip`,
  name:`Frostbite`,
  rng:60,
  type:`evo cantrip`
},{
  cst:`1act`,
  desc:`* One Medium or smaller creature that you choose must succeed on a Strength saving throw or be pushed up to 5 feet away from you. * You create a small blast of air capable of moving one object that is neither held nor carried and that weighs no more than 5 pounds. The object is pushed up to 10 feet away from you. It isn't pushed with enough force to cause damage. * You create a harmless sensory affect using air, such as causing leaves to rustle, wind to slam shutters shut, or your clothing to ripple in a breeze.`,
  dur:`Inst.`,
  lvl:`cantrip`,
  name:`Gust`,
  rng:30,
  type:`Transmutation cantrip`
},{
  cst:`1 bns act`,
  desc:`You touch one to three pebbles and imbue them with magic. You or someone else can make a ranged spell attack with one of the pebbles by throwing it or hurling it with a sling. If thrown, it has a range of 60 feet. If someone else attacks with the pebble, that attacker adds your spellcasting ability modifier, not the attacker's, to the attack roll. On a hit, the target takes bludgeoning damage equal to 1d6 + your spellcasting ability modifier. Hit or miss, the spell then ends on the stone. If you cast this spell again, the spell ends early on any pebbles still affected by it.`,
  dur:`1m`,
  lvl:`cantrip`,
  name:`Magic Stone`,
  rng:`T`,
  type:`Transmutation cantrip`
},{
  cst:`1act`,
  desc:`* If you target an area of loose earth, you can instantaneously excavate it, move it along the ground, and deposit it up to 5 feet away. This movement doesn't have enough force to cause damage. * You cause shapes, colors, or both to appear on the dirt or stone, spelling out words, creating images, or shaping patterns. The changes last for 1 hour. * If the dirt or stone you target is on the ground, you cause it to become difficult terrain. Alternatively, you can cause the ground to become normal terrain if it is already difficult terrain. This change lasts for 1 hour. If you cast this spell multiple times, you can have no more than two of its non-instantaneous effects active at a time, and you can dismiss such an effect as an action.`,
  dur:`Instantaneous or 1 hour (see below)`,
  lvl:`cantrip`,
  name:`Mold Earth`,
  rng:30,
  type:`Transmutation cantrip`
},{
  cst:`1act`,
  desc:`* You instantaneously move or otherwise change the flow of the water as you direct, up to 5 feet in any direction. This movement doesn't have enough force to cause damage. * You cause the water to form into simple shapes and animate at your direction. This change lasts for 1 hour. * You change the water's color or opacity. The water must be changed in the same way throughout. This change lasts for 1 hour. * You freeze the water, provided that there are no creatures in it. The water unfreezes in 1 hour. If you cast this spell multiple times, you can have no more than two of its non-instantaneous effects active at a time, and you can dismiss such an effect as an action.`,
  dur:`Instantaneous or 1 hour (see below)`,
  lvl:`cantrip`,
  name:`Shape Water`,
  rng:30,
  type:`Transmutation cantrip`
},{
  cst:`1 reaction, which you take when you take acid, cold, fire, lightning, or thunder damage`,
  desc:`The spell captures some of the incoming energy, lessening its effect on you and storing it for your next melee attack. You have resistance to the triggering damage type until the start of your next turn. Also, the first time you hit with a melee attack on your next turn, the target takes an extra 1d6 damage of the triggering type, and the spell ends.`,
  dur:`1r`,
  hlvl:`When you cast this spell using a spell slot of 2lvl or higher, the extra damage increases by 1d6 for each slot level above 1st.`,
  lvl:1,
  name:`Absorb Elements`,
  rng:`S`,
  type:`1lvl abju`
},{
  cst:`1act`,
  desc:`You establish a telepathic link with one beast you touch that is friendly to you or charmed by you. The spell fails if the beast's Intelligence is 4 or higher. Until the spell ends, the link is active while you and the beast are within line of sight of each other. Through the link, the beast can understand your telepathic messages to it, and it can telepathically communicate simple emotions and concepts back to you. While the link is active, the beast gains advantage on attack rolls against any creature within 5 feet of you that you can see.`,
  dur:`Conc 10m`,
  lvl:1,
  name:`Beast Bond`,
  rng:`T`,
  type:`1lvl divi`
},{
  cst:`1act`,
  desc:`You create a shard of ice and fling it at one creature within range. Make a ranged spell attack against the target. On a hit, the target takes 1d10 piercing damage. Hit or miss, the shard then explodes. The target and each creature within 5 feet of the point where the ice exploded must succeed on a Dexterity saving throw or take 2d6 cold damage.`,
  dur:`Inst.`,
  hlvl:`When you cast this spell using a spell slot of 2lvl or higher, the cold damage increases by 1d6 for each slot level above 1st.`,
  lvl:1,
  name:`Ice Knife`,
  rng:60,
  type:`1lvl conj`
},{
  cst:`1act`,
  desc:`Choose one creature you can see within range. Yellow strips of magical energy loop around the creature. The target must succeed on a Strength saving throw or its flying speed (if any) is reduced to 0 feet for the spell's duration. An airborne creature affected by this spell descends at 60 feet per round until it reaches the ground or the spell ends.`,
  dur:`Conc 1m`,
  lvl:2,
  name:`Earthbind`,
  rng:300,
  type:`2dlvl transm`
},{
  cst:`1act`,
  desc:`Choose an unoccupied 5-ft cube of air that you can see within range. An elemental force that resembles a dust devil appears in the cube and lasts for the spell's duration. Any creature that ends its turn within 5 feet of the dust devil must make a Strength saving throw. On a failed save, the creature takes 1d8 bludgeoning damage and is pushed 10 feet away. On a successful save, the creature takes half as much damage and isn't pushed. As a bonus action, you can move the dust devil up to 30 feet in any direction. If the dust devil moves over sand, dust, loose dirt, or small gravel, it sucks up the material and forms a 10-ft-radius cloud of debris around itself that lasts until the start of your next turn. The cloud heavily obscures its area.`,
  dur:`Conc 1m`,
  hlvl:`When you cast this spell using a spell slot of 3rd level or higher, the damage increases by 1d8 for each slot level above 2nd.`,
  lvl:2,
  name:`Dust Devil`,
  rng:60,
  type:`2dlvl conj`
},{
  cst:`1act`,
  desc:`Choose one object weighing 1 to 5 pounds within range that isn't being worn or carried. The object flies in a straight line up to 90 feet in a direction you choose before falling to the ground, stopping early if it impacts against a solid surface. If the object would strike a creature, that creature must make a Dexterity saving throw. On a failed save, the object strikes the target and stops moving. In either case, both the object and the creature or solid surface take 3d8 bludgeoning damage.`,
  dur:`Inst.`,
  hlvl:`When you cast this spell using a spell slot of 2lvl or higher, the maximum weight of objects that you can target with this spell increases by 5 pounds, and the damage increases by 1d8, for each slot level above 1st.`,
  lvl:1,
  name:`Catapult`,
  rng:150,
  type:`1lvl transm`
},{
  cst:`1act`,
  desc:`You take control of the air in a 100-ft cube that you can see within range. Choose one of the following effects when you cast the spell. The effect lasts for the spell's duration, unless you use your action on a later turn to switch to a different effect. You can also use your action to temporarily halt the effect or to restart one you've halted.`,
  dur:`Conc 1h`,
  lvl:5,
  name:`Control Winds`,
  rng:300,
  type:`5lvl transm`
},{
  cst:`1act`,
  desc:`You cause up to six pillars of stone to burst from places on the ground that you can see within range. Each pillar is a cylinder that has a diameter of 5 feet and a height of up to 30 feet. The ground where a pillar appears must be wide enough for its diameter, and you can target ground under a creature if that creature is Medium or smaller. Each pillar has AC 5 and 30 hit points. When reduced to 0 hit points, a pillar crumbles into rubble, which creates an area of difficult terrain with a 10-ft radius. The rubble lasts until cleared. If a pillar is created under a creature, that creature must succeed on a Dexterity saving throw or be lifted by the pillar. A creature can choose to fail the save. If a pillar is prevented from reaching its full height because of a ceiling or other obstacle, a creature on the pillar takes 6d6 bludgeoning damage and is restrained, pinched between the pillar and the obstacle. The restrained creature can use an action to make a Strength or Dexterity check (the creature's choice) against the spell's saving throw DC. On a success, the creature is no longer restrained and must either move off the pillar or fall off it.`,
  dur:`Inst.`,
  hlvl:`When you cast this spell using a spell slot of 7th level or higher, you can create two additional pillars for each slot level above 6th.`,
  lvl:6,
  name:`Bones of the Earth`,
  rng:120,
  type:`6lvl transm`
},{
  cst:`1act`,
  desc:`Choose a point you can see on the ground within range. A fountain of churned earth and stone erupts in a 20-ft cube centered on that point. Each creature in that area must make a Dexterity saving throw. A creature takes 3d12 bludgeoning damage on a failed save, or half as much damage on a successful one. Additionally, the ground in that area becomes difficult terrain until cleared away. Each 5-ft-square portion of the area requires at least 1 minute to clear by hand.`,
  dur:`Inst.`,
  hlvl:`When you cast this spell using a spell slot of 3rd level or higher, the damage increases by 1d12 for each slot level above 2nd.`,
  lvl:3,
  name:`Erupting Earth`,
  rng:120,
  type:`3lvl transm`
},{
  cst:`1act`,
  desc:`Choose one creature you can see within range, and choose one of the following damage types:acid, cold, fire, lightning, or thunder. The target must succeed on a Constitution saving throw or be affected by the spell for its duration. The first time each turn the affected target takes damage of the chosen type, the target takes an extra 2d6 damage of that type. Moreover, the target loses any resistance to that damage type until the spell ends.`,
  dur:`Conc 1m`,
  hlvl:`When you cast this spell using a spell slot of 5th level or higher, you can target one additional creature for each slot level above 4th. The creatures must be within 30 feet of each other when you target them.`,
  lvl:4,
  name:`Elemental Bane`,
  rng:90,
  type:`4lvl transm`
},{
  cst:`1act`,
  desc:`You touch a quiver containing arrows or bolts. When a target is hit by a ranged weapon attack using a piece of ammunition drawn from the quiver, the target takes an extra 1d6 fire damage. The spell's magic ends on the piece of ammunition when it hits or misses, and the spell ends when twelve pieces of ammunition have been drawn from the quiver.`,
  dur:`Conc 1h`,
  hlvl:`When you cast this spell using a spell slot of 4th level or higher, the number of pieces of ammunition you can affect with this spell increases by two for each slot level above 3rd.`,
  lvl:3,
  name:`Flame Arrows`,
  rng:`T`,
  type:`3lvl transm`
},{
  cst:`1act`,
  desc:`* You are immune to fire damage and have resistance to cold damage. * Any creature that moves within 5 feet of you for the first time on a turn or ends its turn there takes 1d10 fire damage. * You can use your action to create a line of fire 15 feet long and 5 feet wide extending from you in a direction you choose. Each creature in the line must make a Dexterity saving throw. A creature takes 4d8 fire damage on a failed save, or half as much damage on a successful one.`,
  dur:`Conc 10m`,
  lvl:6,
  name:`Investiture of Flame`,
  rng:`S`,
  type:`6lvl transm`
},{
  cst:`1act`,
  desc:`* You are immune to cold damage and have resistance to fire damage. * You can move across difficult terrain created by ice or snow without spending extra movement. * The ground in a 10-ft radius around you is icy and is difficult terrain for creatures other than you. The radius moves with you. * You can use your action to create a 15-ft cone of freezing wind extending from your outstretched hand in a direction you choose. Each creature in the cone must make a Constitution saving throw. A creature takes 4d6 cold damage on a failed save, or half as much damage on a successful one. A creature that fails its save against this effect has its speed halved until the start of your next turn.`,
  dur:`Conc 10m`,
  lvl:6,
  name:`Investiture of Ice`,
  rng:`S`,
  type:`6lvl transm`
},{
  cst:`1act`,
  desc:`* You have resistance to bludgeoning, piercing, and slashing damage from nonmagical weapons. * You can use your action to create a small earthquake on the ground in a 15-ft radius centered on you. Other creatures on that ground must succeed on a Dexterity saving throw or be knocked prone. * You can move across difficult terrain made of earth or stone without spending extra movement. You can move through solid earth or stone as if it was air and without destabilizing it, but you can't end your movement there. If you do so, you are ejected to the nearest unoccupied space, this spell ends, and you are stunned until the end of your next turn`,
  dur:`Conc 10m`,
  lvl:6,
  name:`Investiture of Stone`,
  rng:`S`,
  type:`6lvl transm`
},{
  cst:`1act`,
  desc:`* Ranged weapon attacks made against you have disadvantage on the attack roll. * You gain a flying speed of 60 feet. If you are still flying when the spell ends, you fall, unless you can somehow prevent it. * You can use your action to create a 15-ft cube of swirling wind centered on a point you can see within 60 feet of you. Each creature in that area must make a Constitution saving throw. A creature takes 2d10 bludgeoning damage on a failed save, or half as much damage on a successful one. If a Large or smaller creature fails the save, that creature is also pushed up to 10 feet away from the center of the cube.`,
  dur:`Conc 10m`,
  lvl:6,
  name:`Investiture of Wind`,
  rng:`S`,
  type:`6lvl transm`
},{
  cst:`1act`,
  desc:`A mass of 5-ft-deep water appears and swirls in a 30-ft radius centered on a point you can see within range. The point must be on ground or in a body of water. Until the spell ends, that area is difficult terrain, and any creature that starts its turn there must succeed on a Strength saving throw or take 6d6 bludgeoning damage and be pulled 10 feet toward the center.`,
  dur:`Conc 1m`,
  lvl:5,
  name:`Maelstrom`,
  rng:120,
  type:`5lvl evo`
},{
  cst:`1act`,
  desc:`You have resistance to acid, cold, fire, lightning, and thunder damage for the spell's duration. When you take damage of one of those types, you can use your reaction to gain immunity to that type of damage, including against the triggering damage. If you do so, the resistances end, and you have the immunity until the end of your next turn, at which time the spell ends.`,
  dur:`Conc 1m`,
  lvl:6,
  name:`Primordial Ward`,
  rng:`S`,
  type:`6lvl abju`
},{
  cst:`1act`,
  desc:`You conjure up a wave of water that crashes down on an area within range. The area can be up to 30 feet long, up to 10 feet wide, and up to 10 feet tall. Each creature in that area must make a Dexterity saving throw. On a failure, a creature takes 4d8 bludgeoning damage and is knocked prone. On a success, a creature takes half as much damage and isn't knocked prone. The water then spreads out across the ground in all directions, extinguishing unprotected flames in its area and within 30 feet of it.`,
  dur:`Inst.`,
  lvl:3,
  name:`Tidal Wave`,
  rng:120,
  type:`3lvl conj`
},{
  cst:`1act`,
  desc:`You choose an area of stone or mud that you can see that fits within a 40-ft cube and that is within range, and choose one of the following effects. If you cast the spell on an area of ground, it becomes muddy enough that creatures can sink into it. Each ft that a creature moves through the mud costs 4 feet of movement, and any creature on the ground when you cast the spell must make a Strength saving throw. A creature must also make this save the first time it enters the area on a turn or ends its turn there. On a failed save, a creature sinks into the mud and is restrained, though it can use an action to end the restrained condition on itself by pulling itself free of the mud. If you cast the spell on a ceiling, the mud falls. Any creature under the mud when it falls must make a Dexterity saving throw. A creature takes 4d8 bludgeoning damage on a failed save, or half as much damage on a successful one.`,
  dur:`Inst.`,
  lvl:5,
  name:`Transmute Rock`,
  rng:120,
  type:`5lvl transm`
},{
  cst:`1act`,
  desc:`You conjure up a wall of water on the ground at a point you can see within range. You can make the wall up to 30 feet long, 10 feet high, and 1 ft thick, or you can make a ringed wall up to 20 feet in diameter  20 feet high, and 1 ft thick. The wall vanishes when the spell ends. The wall's space is difficult terrain. Any ranged weapon attack that enters the wall's space has disadvantage on the attack roll, and fire damage is halved if the fire effect passes through the wall to reach its target. Spells that deal cold damage that pass through the wall cause the area of the wall they pass through to freeze solid (at least a 5-ft square section is frozen). Each 5-ft-square frozen section has AC 5 and 15 hit points. Reducing a frozen section to 0 hit points destroys it. When a section is destroyed, the wall's water doesn't fill it.`,
  dur:`Conc 10m`,
  lvl:3,
  name:`Wall of Water`,
  rng:60,
  type:`3lvl evo`
},{
  cst:`1act`,
  desc:`You conjure up a sphere of water with a 10-ft radius on a point you can see within range. The sphere can hover in the air, but no more than 10 feet off the ground. The sphere remains for the spell's duration. Any creature in the sphere's space must make a Strength saving throw. On a successful save, a creature is ejected from that space to the nearest unoccupied space outside it. A Huge or larger creature succeeds on the saving throw automatically. On a failed save, a creature is restrained by the sphere and is engulfed by the water. At the end of each of its turns, a restrained target can repeat the saving throw. The sphere can restrain a maximum of four Medium or smaller creatures or one Large creature. If the sphere restrains a creature in excess of these numbers, a random creature that was already restrained by the sphere falls out of it and lands prone in a space within 5 feet of it. As an action, you can move the sphere up to 30 feet in a straight line. If it moves over a pit, cliff, or other drop, it safely descends until it is hovering 10 feet over ground. Any creature restrained by the sphere moves with it. You can ram the sphere into creatures, forcing them to make the saving throw, but no more than once per turn. When the spell ends, the sphere falls to the ground and extinguishes all normal flames within 30 feet of it. Any creature restrained by the sphere is knocked prone in the space where it falls.`,
  dur:`Conc 1m`,
  lvl:4,
  name:`Watery Sphere`,
  rng:90,
  type:`4lvl conj`
},{
  cst:`1act`,
  desc:`A whirlwind howls down to a point on the ground you specify. The whirlwind is a 10-ft-radius, 30-ft-high cylinder centered on that point. Until the spell ends, you can use your action to move the whirlwind up to 30 feet in any direction along the ground. The whirlwind sucks up any Medium or smaller objects that aren't secured to anything and that aren't worn or carried by anyone. A creature must make a Dexterity saving throw the first time on a turn that it enters the whirlwind or that the whirlwind enters its space, including when the whirlwind first appears. A creature takes 10d6 bludgeoning damage on a failed save, or half as much damage on a successful one. In addition, a Large or smaller creature that fails the save must succeed on a Strength saving throw or become restrained in the whirlwind until the spell ends. When a creature starts its turn restrained by the whirlwind, the creature is pulled 5 feet higher inside it, unless the creature is at the top. A restrained creature moves with the whirlwind and falls when the spell ends, unless the creature has some means to stay aloft. A restrained creature can use an action to make a Strength or Dexterity check against your spell save DC. If successful, the creature is no longer restrained by the whirlwind and is hurled 3d6 \u00d7 10 feet away from it in a random direction.`,
  dur:`Conc 1m`,
  lvl:7,
  name:`Whirlwind`,
  rng:300,
  type:`7lvl evo`
},{
  cst:`1act`,
  desc:`Flames wreathe one creature you can see within range. The target must make a Dexterity saving throw. It takes 7d6 fire damage on a failed save, or half as much damage on a successful one. On a failed save, the target also burns for the spell's duration. The burning target sheds bright light in a 30-ft radius and dim light for an additional 30 feet. At the end of each of its turns, the target repeats the saving throw. It takes 3d6 fire damage on a failed save, and the spell ends on a successful one. These magical flames can't be extinguished through nonmagical means. If damage from this spell reduces a target to 0 hit points, the target is turned to ash.`,
  dur:`Conc 1m`,
  lvl:5,
  name:`Immolation`,
  rng:90,
  type:`5lvl evo`
},{
  cst:`1act`,
  desc:`A 20-ft-radius sphere of whirling air springs into existence centered on a point you choose within range. The sphere remains for the spell's duration. Each creature in the sphere when it appears or that ends its turn there must succeed on a Strength saving throw or take 2d6 bludgeoning damage. The sphere's space is difficult terrain. Until the spell ends, you can use a bonus action on each of your turns to cause a bolt of lightning to leap from the center of the sphere toward one creature you choose within 60 feet of the center. Make a ranged spell attack. You have advantage on the attack roll if the target is in the sphere. On a hit, the target takes 4d6 lightning damage. Creatures within 30 feet of the sphere have disadvantage on Wisdom (Perception) checks made to listen.`,
  dur:`Conc 1m`,
  hlvl:`When you cast this spell using a spell slot of 5th level or higher, the damage increases for each of its effects by 1d6 for each slot level above 4th.`,
  lvl:4,
  name:`Storm Sphere`,
  rng:150,
  type:`4lvl evo`
},{
  cst:`1act`,
  desc:`You point at a place within range, and a glowing 1-ft ball of emerald acid streaks there and explodes in a 20-ft radius. Each creature in that area must make a Dexterity saving throw. On a failed save, a creature takes 10d4 acid damage and 5d4 acid damage at the end of its next turn. On a successful save, a creature takes half the initial damage and no damage at the end of its next turn.`,
  dur:`Inst.`,
  hlvl:`When you cast this spell using a spell slot of 5th level or higher, the initial damage increases by 2d4 for each slot level above 4th.`,
  lvl:4,
  name:`Vitriolic Sphere`,
  rng:150,
  type:`4lvl evo`
},{
  cst:`1act`,
  desc:`You conjure up a wall of swirling sand on the ground at a point you can see within range. You can make the wall up to 30 feet long, 10 feet high, and 10 feet thick, and it vanishes when the spell ends. It blocks line of sight but not movement. A creature is blinded while in the wall's space and must spend 3 feet of movement for every 1 ft it moves there.`,
  dur:`Conc 10m`,
  lvl:3,
  name:`Wall of Sand`,
  rng:90,
  type:`3lvl evo`
  }
]
