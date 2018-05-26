export const Features = [{
  key:`Alert`,
  description:[
    `You gain a +5 bonus to initiative.`,
    `You can't be surprised while you are conscious.`,
    `Other creatures don't gain advantage on attack rolls against you as a result of being hidden.`,
  ]
},{
  key:`Athlete`,
  description:[
    `Increase your Strength or Dexterity by 1, to a maximum of 20.`,
    `When you are prone, standing up only requires 5 feet of movement.`,
    `Climbing doesn't cost you any extra movement.`,
    `You can make a running jump after only 5 feet on foot.`,
  ]
},{
  key:`Actor`,
  description:[
    `Increase your Charisma by 1, to a maximum of 20.`,
    `You have advantage of Charisma (Deception) and Charisma (Performance) checks to pass yourself off as someone else.`,
    `You can mimic the speech of another person or the sounds made by other creatures. You must have heard the speech or sound for at least 1 minute. A successful Wisdom (Insight) check contested by your Charisma (Deception) check allows a listener to determine the effect is faked.`,
  ]
},{
  key:`Blade Master`,
  description:[
    `You master the shortsword, longsword, scimitar, rapier, and greatsword. You gain the following benefits when using any of them:`,
    `You gain a +1 bonus to attack rolls you make with the weapon.`,
    `On your turn, you can use your reaction to assume a parrying stance, provided you have the weapon in hand. Doing so grants you a +1 bonus to your AC until the start of your next turn or until you’re not holding the weapon.`,
    `When you make an opportunity attack with the weapon, you have advantage on the attack roll.`,
  ]
},{
  key:`Charger`,
  description:[
    `When you use your action to Dash, you can use your bonus action to take the Attack action with melee weapons, or to shove a creature.`,
    `If you move at least 10 feet in a straight line immediately before taking this bonus action, you either gain a +5 bonus to the damage roll (if you chose to make a melee attack; only applies to the first attack if you have the Extra Attack feature) or push the target up to 10 feet away from you (if you chose to shove and you succeeded).`,
  ]
},{
  key:`Crossbow Expert`,
  description:[
    `You ignore the loading quality of of crossbows with which you are proficient.`,
    `Being within 5 feet of a hostile creature doesn't impose disadvantage on your ranged attack rolls.`,
    `When you use the Attack action and attack with a one-handed weapon, you may use your bonus action to attack with a loaded hand crossbow you are holding.`,
  ]
},{
  key:`Defensive Duelist`,
  prerequisite:`Dexterity 13`,
  description:[
    `When you are wielding a finesse weapon you are proficient with, and another creature hits you with a melee attack, you can use your reaction to add your proficiency bonus to your AC against that attack, potentially causing it to miss.`,
  ]
},{
  key:`Dual Wielder`,
  description:[
    `When wielding a weapon in both hands, you gain a +1 bonus to AC`,
    `Once on your turn, when you take the attack action and are two-weapon fighting, you may make one attack as a bonus action.`,
    `While two-weapon fighting, you may make a two-weapon attack in place of a reaction weapon attack, such as an opportunity attack.`,
  ]
},{
  key:`Dungeon Delver`,
  description:[
    `You have advantage on Wisdom (Perception) checks and Intelligence (Investigation) checks made to detect the presence of secret doors.`,
    `You have advantage on saving throws made to avoid or resist traps.`,
    `You have resistance to damage dealt by traps.`,
    `You can search for traps while traveling at a normal pace.`,
  ]
},{
  key:`Durable`,
  description:[
    `Increase your Constitution by 1, to a maximum of 20.`,
    `When you roll a Hit Die to regain hit points, the amount of hit points regained is equal to the die roll plus twice your Constitution modifier (min. 2)`,
  ]
},{
  key:`Elemental Adept`,
  description:[
    `Prerequisites: Able to cast at least one spell`,
    `When you gain this feat, choose on of the following damage types: acid, cold, fire, lightning, or thunder. Spells you cast ignore resistance to the chosen type, and whenever you roll damage for a spell that deals damage of the chosen type, treat any rolled 1's as being a 2.`,
    `You may take this feat multiple times; each time, you must select a different damage type.`,
  ]
},{
  key:`Fell Handed (UE)`,
  description:[
    `You master the handaxe, battleaxe, greataxe, warhammer, and maul. You gain the following benefits when using any of them:`,
    `You gain a +1 bonus to attack rolls you make with the weapon.`,
    `Whenever you have advantage on a melee attack roll you make with the weapon and hit, you can knock the target prone if the lower of the two d20 rolls would also hit the target.`,
    `Whenever you have disadvantage on a melee attack roll you make with the weapon, the target takes bludgeoning damage equal to your Strength modifier (minimum of 0) if the attack misses but the higher of the two d20 rolls would have hit.`,
    `If you use the Help action to aid an ally’s melee attack while you’re wielding the weapon, you knock the target’s shield aside momentarily. In addition to the ally gaining advantage on the attack roll, the ally gains a +2 bonus to the roll`,
    `if the target is using a shield.`,
  ]
},{
  key:`Flail Mastery`,
  description:[
    `The flail is a tricky weapon to use, but you have spent countless hours mastering it. You gain the following benefits.`,
    `You gain a +1 bonus to attack rolls you make with a flail.`,
    `As a bonus action on your turn, you can prepare yourself to extend your flail to sweep over targets’ shields. Until the end of this turn, your attack rolls with a flail gain a +2 bonus against any target using a shield.`,
    `When you hit with an opportunity attack using a flail, the target must succeed on a Strength saving throw (DC 8 + your proficiency bonus + your Strength modifier) or be knocked prone`,
  ]
},{
  key:`Grappler`,
  prerequisite: `Strength 13`,
  description:[
    `You have advantage on attack rolls against creatures you are grappling.`,
    `You can use your action to try to pin a creature grappled by you. To do so, make another grapple check. If you succeed, you and the creature are both restrained until the grapple ends.`,
  ]
},{
  key:`Great Weapon Master`,
  description:[
    `On your turn, when you score a critical hit with a melee weapon or reduce a creature to 0 hit points with one, you can make one melee weapon attack as a bonus action.`,
    `Before you make a melee attack with a heavy weapon with which you are proficient, you can choose to take a -5 penalty to the attack roll. If you do so and the attack hits, it deals +10 damage.`,
  ]
},{
  key:`Gunslinger`,
  description:[
    `You ignore the loading quality of of firearms with which you are proficient.`,
    `Being within 5 feet of a hostile creature doesn't impose disadvantage on your ranged attack rolls.`,
    `When you use the Attack action and attack with a one-handed weapon, you may use your bonus action to attack with a loaded pistol you are holding.`,
  ]
},{
  key:`Healer`,
  description:[
    `When you use a healer's kit to stabilize a creature, they also regain 1 hit point`,
    `As an action, you can spend one use of a healer's kit to tend to a creature and heal 1d6+4 hit points to it, plus a nuber of hit points equal to the creature's maximum number of Hit Dice. That creature can't regain hit points in this way again until they finish a short or long rest.`,
  ]
},{
  key:`Heavily Armored`,
  prerequisite:`Proficient with medium armor`,
  description:[
    `Increase your Strength by 1, to a maximum of 20.`,
    `You become proficient with heavy armor.`,
  ]
},{
  key:`Heavy Armor Master`,
  prerequisite:`Proficient with heavy armor`,
  description:[
    `Increase your Strength by 1, to a maximum of 20.`,
    `When wearing heavy armor, bludgeoning, slashing and piercing damage you take from non-magical weapons is reduced by 3`,
  ]
},{
  key:`Inspiring Leader`,
  prerequisite:`Charisma 13`,
  description:[
    `You can spend 10 minutes inspiring your companions, shoring up their will to fight. When you do so, choose up to six friendly creatures (which can include yourself) within 30 feet of you can can see or hear you and can understand you. Each creature gains temporary hit point equal to your level + your Charisma modifier. A creature can't gain temporary hit points in this way again until they finish a short or long rest.`,
  ]
},{
  key:`Keen Mind`,
  description:[
    `Increase your Intelligence by 1, to a maximum of 20.`,
    `You always know which way is north.`,
    `You always know how the number of hours left before the next sunrise or sunset.`,
    `You can accurately recall anything you have seen or heard within the past month.`,
  ]
},{
  key:`Lightly Armored`,
  description:[
    `Increase your Strength or Dexterity by 1, to a maximum of 20.`,
    `You become proficient with light armor.`,
  ]
},{
  key:`Linguist`,
  description:[
    `Increase your Intelligence by 1, to a maximum of 20.`,
    `You learn three languages of your choice.`,
    `You can ably create written ciphers. Others cannot decipher a code you create unless you teach it to them, they succeed on an Intelligence check (DC = your Intelligence score + your proficiency bonus), or they use magic to decipher it.`,
  ]
},{
  key:`Lucky`,
  description:[
    `You have 3 luck points. Whenever you make an attack roll, ability check, or saving throw, you may spend 1 luck point to roll an additional d20. You can use this ability after the original roll, but before the outcome is revealed. You choose which of the d20s is used for the attack roll, ability check, or saving throw.`,
    `You can also spend one luck point when an attack roll is made against you. Roll a d20, and choose whether the attacker's roll uses their d20 roll or yours.`,
    `If multiple creatures use a luck point on the same roll, they cancel out, resulting in no additional dice.`,
    `You regain expended luck points when you finish a long rest.`,
  ]
},{
  key:`Mage Slayer`,
  description:[
    `When a creature within reach you can take opportunity attacks casts a spell, you can use your reaction to make a melee weapon attack against that creature.`,
    `When you damage a creature that is concentrating on a spell, they have disadvantage on the saving throw it makes to maintain concentration.`,
    `You have advantage on saving against spells cast by creatures with your reach.`,
  ]
},{
  key:`Magic Initiate`,
  description:[
    `Choose a class: bard, cleric, sorcerer, warlock, or wizard. You learn two cantrips of your choice from that class's list. In addition, you learn one 1st level spell from the same list. You can cast it at its lowest level; once cast, you cannot do so again until you finish a long rest. Your spellcasting modifier for these spells is the same as the class you chose (Charisma for bard, sorcerer, or warlock; Wisdom for cleric or druid; Intelligence for wizard)`,
  ]
},{
  key:`Martial Adept`,
  description:[
    `You learn two maneuvers of your choice from the Battle Master archetype. If the maneuver requires a saving throw, the DC is equal to 8 + your proficiency bonus + your Strength or Dexterity modifier (your choice).`,
    `You gain 1 superiority die (if you don't already have superiority dice, it is a d6). This die is used to fuel your maneuvers. It is expended when you use it, and is regained when you finish a short or long rest.`,
  ]
},{
  key:`Medium Armor Master`,
  prerequisite:`Proficient with medium armor`,
  description:[
    `Wearing medium armor doesn't impose disadvantage on Dexterity (Stealth) checks.`,
    `When wearing medium armor, the maximum Dexterity modifier to AC you can apply increases to 3, instead of 2.`,
  ]
},{
  key:`Mobile`,
  description:[
    `Your speed increases by 10 feet.`,
    `When you use the Dash action, difficult terrain doesn't cost extra movement on that turn.`,
    `When you make a melee attack against a creature, you don't provoke opportunity attacks from that creature for the rest of the turn, whether you hit or not.`,
  ]
},{
  key:`Moderately Armored`,
  prerequisite:`Proficient with light armor`,
  description:[
    `Increase your Strength or Dexterity by 1, to a maximum of 20.`,
    `You become proficient with medium armor and shields.`,
  ]
},{
  key:`Mounted Combatant`,
  description:[
    `While you are mounted and not incapacitated, you gain the benefits:`,
    `You have advantage on melee attack rolls against unmounted creatures that are smaller than your mount.`,
    `You can force an attack targeted at your mount to target you instead.`,
    `If your mount is subjected to an effect that allows it to make a Dexterity save to take only half damage, it takes no damage if it succeeds and half damage if it fails.`,
  ]
},{
  key:`Observant`,
  description:[
    `Increases your Intelligence or Wisdom by 1, to a maximum of 20.`,
    `If you can see a creature's mouth while it is speaking a language you understand, you can interpret their words by reading their lips.`,
    `You have a +5 bonus to your passive Wisdom (Perception) and Intelligence (Investigation) scores.`
  ]
},{
  key:`Polearm Master`,
  description:[
    `When you take the attack action with a glaive, halberd, or quarterstaff, you can use a bonus action to make a melee attack with the other end of the weapon. The damage die is a d4 (add attribute modifiers as normal) and deals bludgeoning damage. Otherwise, this attack functions just as if you attacked with the weapon in question.`,
    `While wielding a glaive, halberd, pike, or quarterstaff, other creatures provoke an opportunity attack from you when they enter your reach.`,
  ]
},{
  key:`Resilient`,
  description:[
    `Choose on ability score:`,
    `Increase the chosen ability by 1, to a maximum of 20.`,
    `You gain proficiency in saving throws using the chosen ability.`,
  ]
},{
  key:`Ritual Caster`,
  prerequisite:`Intelligence, Wisdom, or Charisma 13`,
  description:[
    `You have learned a number of spells you can cast as rituals. These spells are written in a ritual book, which you must have on hand when casting one of them.`,
    `When you gain this feat, choose one of the following classes: bard, cleric, druid, sorcerer, warlock, or wizard. You acquire a ritual book holding two 1st level spells with the ritual tag, which must be on the list of the chosen class. Your casting ability for these rituals are the same as the chosen class (Charisma for bard, sorcerer, or warlock; Wisdom for cleric or druid; Intelligence for wizard).`,
    `If you come across a spell in written from, such as a magical scroll or a wizard's spellbook, you might be able to add it to your ritual book. The spell must be on the spell list for the class you chose, the spell's level must not be higher than half your level (rounded up), and it must have the ritual tag. The proccess of copying the spell into your ritual books takes 2 hours per level of the spells, and costs 50 gp per level of the spell. This cost represents material components spent on practicing the spell, as well as the fine inks you must use to record it.`,
  ]
},{
  key:`Savage Attacker`,
  description:[
    `Once per turn when you roll damage for a melee weapon attack, you can reroll the weapon's damage dice and use either total.`,
  ]
},{
  key:`Sentinel`,
  description:[
    `Whenever you hit a creature with an opportunity attack, its speed drops to 0 for the rest of the turn. This stops any movement they may have been taking.`,
    `Creatures within your reach provoke opportunity attacks even if they took the Disengage action.`,
    `When a creature within your reach makes an attack against a target other than you (and that target doesn't have this feat), you can use your reaction to make a melee weapon attack against the attacking creature.`,
  ]
},{
  key:`Sharpshooter`,
  description:[
    `Attacking at long range doesn't impose disadvantage on your ranged weapon attack rolls.`,
    `Your ranged weapons ignore half cover and three-quarters cover.`,
    `Before you make a ranged attack with a ranged weapon with which you are proficient, you can choose to take a -5 penalty to the attack roll. If you do so and the attack hits, it deals +10 damage.`,
  ]
},{
  key:`Shield Master`,
  description:[
    `You gain the following benefits while wielding a shield:`,
    `If you take the Attack action on your turn, you can use a bonus action to try to shove a creature within 5 feet of you using your shield.`,
    `If you aren't incapacitated, you can add your shield's AC bonus to any Dexterity save made against a spell or other effect that affects only you.`,
    `If you are subjected to an effect which allows you to make a Dexterity save for half damage, you can use your reaction to take no damage, interposing you shield between you and the effect.`,
  ]
},{
  key:  `Skilled`,
  description:[
    `You gain proficiency with any combination of three skills or tools.`,
    `Experimental rule, subject to change: Alternatively, gain Expertise (as Bard ability) in one skill or tool with which you are already proficient.`,
  ]
},{
  key:`Skulker`,
  prerequisite:`Dexterity 13`,
  description:[
    `You can try to hide when you are only lightly obscured from the creature from which you are hiding.`,
    `When you are hidden from a creature and miss it with a ranged weapon attack, making the attack doesn't reveal your position.`,
    `Dim light doesn't impose disadvantage on Wisdom (Perception) bonuses made with sight.`,
  ]
},{
  key:`Spear Mastery (UE)`,
  description:[
    `Though the spear is a simple weapon to learn, it rewards you for the time you have taken to master it. You gain the following benefits.`,
    `You gain a +1 bonus to attack rolls you make with a spear.`,
    `When you use a spear, its damage die changes from a d6 to a d8, and from a d8 to a d10 when wielded with two hands. (This benefit has no effect if another feature has already improved the weapon’s die.)`,
    `You can set your spear to receive a charge. As a bonus action, choose a creature you can see that is at least 20 feet away from you.`,
    `If that creatures moves within your spear’s reach on its next turn, you can make a melee attack against it with your spear as a reaction. If the attack hits, the target takes an extra 1d8 piercing damage, or an extra 1d10 piercing damage if you wield the spear with two hands.You can’t use this ability if the creature used the Disengage action before moving.`,
    `As a bonus action on your turn, you can increase your reach with a spear by 5 feet for the rest of your turn`,
  ]
},{
  key:`Spell Sniper`,
  prerequisite:`Able to cast at least one spell`,
  description:[
    `When you cast a spell that requires a ranged attack roll, the spell's range is doubled.`,
    `Your ranged spell attacks ignore half cover and three-quarters cover.`,
    `You learn a single cantrip that requires an attack roll from a class of your choice: bard, cleric, sorcerer, warlock, or wizard. Your spellcasting modifier for these spells is the same as the class you chose (Charisma for bard, sorcerer, or warlock; Wisdom for cleric or druid; Intelligence for wizard)`,
  ]
},{
  key:`Tavern Brawler`,
  description:[
    `Increase your Strength or Constitution by 1, to a maximum of 20.`,
    `You are proficient with all improvised weapons.`,
    `Your unarmed strike uses a d4 for damage.`,
    `When you hit a creature with an unarmed strike or improvised weapon on your turn, you can use a bonus action to attempt to grapple the target.`,
  ]
},{
  key:`Tough`,
  description:[
    `Your hit point maximum increases by +2 per level. This applies retroactively, as well as to every level you take hereafter.`,
  ]
},{
  key:`War Caster`,
  prerequisite:`Able to cast at least one spell`,
  description:[
    `You have advantage one Constitution saves that you make to maintain concentration on a spell when you take damage.`,
    `You can perform the somatic components of spells even when you have weapons or a shield in one or both hands.`,
    `When a hostile creature's movement provokes an opportunity attack from you, you can use your reaction to cast a spell at the creature, instead of making an opportunity attack. The spell must have a casting time of only 1 action and must target only that creature.`,
  ]
},{
  key:`Warhammer Master`,
  description:[
    `When you hit a creature with a warhammer, the creature must succeed on a Strength saving throw (DC 8 + your proficiency bonus + your Strength modifier) or be knocked prone.`,
    `You can use your warhammer to knock away a foe’s shield. If you hit a creature that’s using a shield, you can have the attack deal no damage and force the creature to drop its shield`,
  ]
},{
  key:`Weapon Master`,
  description:[
    `Increase your Strength or Dexterity by 1, to a maximum of 20.`,
    `You gain proficiency with any four weapons of your choice; OR you gain a fighting style of your choice from the Fighter's list.`,
  ]
}];
