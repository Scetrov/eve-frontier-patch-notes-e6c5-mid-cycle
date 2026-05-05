## Patch Notes for 2026-05-05

Features & Changes:
Active Scanning - Initial Release
■

Overview:
This release introduces the first release of Active Scanning, expanding upon the new Signature Resolution System by giving Riders a deliberate and immediate way to scan their surroundings.

While Passive Observation allows you to gradually resolve the unknown signatures over time, Active Scanning lets you focus your attention on demand - accelerating information gathering within a targeted area at the cost of intent and exposure.

You are no longer limited to what your ship happens to pick up. You can now choose where to look - and when at the cost of blooming your own signature. This results in riders needing to balance the risk vs. reward of scanning down a site at the cost of increasing their own signature.

Active Scanning State:
Riders can now press Z to activate a targeting scanning reticule, allowing them to scan a specific area in space.

Within this area, your ship performs an active scan pulse, increasing your ability to detect and resolve nearby signatures.

Active Scanning introduces a more directed form of perception:

You choose where to scan
You control when to gather information
You trade subtlety for speed and clarity
How it works:
Pressing Z brings up a targeting reticule centered on your view
Pressing left cursors of your mouse spools up the scanner, after a short delay it fires a targeted scanning pule
Scanning an area increases signature resolution strength for entities within the scan zone
Hitting an Active Scan on a nearby signature does not guarantee full resolution - it pushes the resolution forward
Using Active Scanning will blooms your own signature, making it easier for Riders to get a resolution of your own signature.
Relationship to Passive Observation:
Active Scanning builds directly on top of the existing Passive Observation system:

Passive systems continue to continuously gather ambient information
Active Scanning allows you to prioritize and accelerate specific areas of interest at the cost of blooming your own signature signal
Together, they create a layered detection model:
Passive = awareness over time
Active = intent and focus at a cost
Introduction of Thermal and Electromagnetic Signatures
Cycle 5 introduced the Gravity (GV) signature type, with our mid-cycle update we are introducing two new signature types:

Thermal Signatures introduced to represent the heat emitted from ships and structures and stars.
Electromagnetic Signatures (EM) represent the electrical power used by ships and structures.
Fully resolving any signature channel gives you the same information as resolving GV previously.

Design Intent

Active Scanning is the first new tool we are giving our founders to play with. The pattern of activating a tool, going into a specific mode for it being able to skillfully maneuver the tool module and execute a skillshot will be a reusable pattern. Some of the next things the team will look into supporting are lasers and rockets using this pattern.

As we continue to iterate and improve this featureset, our design goal will that resolving one of the GV, Thermal and EM Signature types will come with unique information associated with that specific channel and that can enable specific gameplay. A high level (currently theoretical) example to illustrate this is if you resolve the heat signature of another player, will enable you achieve target lock and be able to fire heat-seeking missiles at him that otherwise you would need to manually aim.

Camera & Control:
Ship Camera Improvements
Dramatic changes in velocity, such as with colliding with objects now shakes the camera appropriately.
The camera controller now supports smoother blending between camera modes.
NPCs:
Feral Drones
Scanning capable drones are now more likely to generate units of feral data per scan.
Feral drones are interested in more items.
Feral drones are drawn to more kinds of objects when choosing where to move to next within a star system.
The Hellier feral drone may now appear along with other Conservator Drones.
Feral drones are able to deposit their loot in locations around star systems. This is extremely preliminary work and is a step towards giving the drones the ability to create their own structures and industry.
Loot
There are ongoing changes to the loot and salvage distributions where we work towards creating a good experience when exploring the Frontier. In conjunction with the recent loot and salvage changes, npc’s will now have a chance of dropping some goodies when killed. Good hunting.
Universe Updates:
Microrift Adjustments
Microrifts have been rebalanced, making them a more reliable, quick, and accessible source of crude. Microrifts will also despawn more frequently, allowing for refreshed versions to spawn.

Microrifts will be able to spawn more variants of crude rifts.
Total quantity per rift has been reduced.
Respawn time has been increased.
Rifts that have been engaged with now despawn after some time.
In summary, microrifts are now on average more valuable in terms of fuel quantity, but will contain less fuel and will deplete faster in populated areas. Players who cannot find microrifts around their location should consider ranging further afield to seek out crude.

Art & Audio Updates:
Deployable models:
Turret
Mini Turret
Mini Berth
Field Refinery
Field Storage
Field Printer
VFX:
The following deployables will now show a visual effect while processing:

Mini Berth
Field Refinery
Audio Updates:
Feature Work:

Sound design support for the new active scanning feature.
Added new sounds for deployables entering a processing state.
Incoming Fire overhaul:
Distant gunfire is now more audible with a larger distance it can be heard from.
Shots that miss your ship now produce an audible flyby effect.
Fixes:

Fixed an issue where Jump Drive spooling and exit sounds failed to play.
Fixed passive scan blips sometimes stacking up for an indefinite amount of time.
Reduced low end on passive scan unresolved looping sound and only made it audible when using the telescope.
Known Issues:

The new passing shot (near-miss) sounds are not yet triggered by deployable turrets or the Watcher.
The "passing shot" volume slider in audio settings is incorrectly labeled as "Weapons Outburst." The slider still works; only the name is wrong.
Balance Updates:
Feral Drones:
The Grave Wright now plays a long-range sniper role, engaging well beyond coilgun range. The Grave Shambler has been retuned as a mid-range bruiser. Loot-guard spawns of these hostiles now react at long range to match.
Grave Wright (Sniper)
Optimal range: 10 000 m → 61 538 m
Targeting range: 41 000 m → 80 000 m
Chase distance: 20 000 m → 80 000 m
Grave Shambler (Mid-Range Bruiser)
Optimal range: 61 538 m → 25 000 m
Targeting range: 80 000 m → 45 000 m
Chase distance: 80 000 m → 25 000 m
Loot-guard aggression range: 10 000 m → 80 000 m
Weapons & Modules:
Ship Weapons:

Small coilgun T1, T2 and T3 optimal and falloff brought down so that the strongest small variant tops out at 80 km falloff. Medium coilguns are unchanged. Kiting NPCs in corvettes became much riskier.
Small Coilgun T1 (Reflex-class small)
Optimal: 86 958 m → 53 513 m
Falloff: 113 042 m → 69 565 m
Small Coilgun T2
Optimal 93 750 m → 57 692 m
Falloff 121 875 m → 75 000 m
Small Coilgun T3
Optimal 100 000 m → 61 538 m
Falloff 130 000 m → 80 000 m
Base Defense Weapons:

Mini base-defence turret falloff substantially increased so it can actually engage targets entering its zone.
Mini base-defense turret
Falloff 20 000 m → 80 000 m
Modules:

Ship modules have had their fitting requirements rebalanced to align with their practical usefulness. This primarily focuses on the power grid requirements for fitting modules to a ship. This should effectively give players a lot more choice in fitting and upgrading their ships.
Afterburner:
II: 6 → 2
III: 210 → 34
IV: 295 → 203
Attuned Shield Generator
II: Unchanged
III: 290 → 48
IV: 295 → 129
Reinforced Shield Generator
II: 10 → 8
III: 290 → 25
IV: 295 → 80
Shield Restorer
II: 4 → 8
III: 290 → 38
IV: 195 → 90
Bulwark Shield Generator
II: 10 → 8
III: 290 → 44
IV: 295 → 118
Bulky Armor Plates
II: 10 → 16
III: 290 → 49
IV: 295 → 94
Systematic Armor Restorer
II: 10 → 15
III: 290 → 56
IV: 295 → 83
Coated Armor Plates
II: 10 → 15
III: 290 → 45
IV: 295 → 83
Nimble Armor Plates
II: 10 → 8
III: 290 → 25
IV: 295 → 80
Reactive Armor Plates
II: 10 → 16
III: 290 → 45
IV: 295 → 80
Cargo Grid
II: 10 → 8
Cargo Grid II added to Field Printer to smooth out early utility progression.
III: 290 → 25
IV: 295 → 80
V: 1265 → 250
VI: 2540 → 408
Ammunition:

Plasma ammo input costs reduced across all tiers (small and medium) by roughly 10% so price ratios between tiers are preserved.
Rapid Plasma Ammo 1 (S)
PGV 400 → 360
TSG 400 → 360
Rapid Plasma Ammo 2 (S)
PGV 400 → 360
TSG 400 → 360
Rapid Plasma Ammo 1 (M)
TSG 1200 → 1080
NIV 1000 → 900
Palladium 700 → 630
Raw HSM (×100) replaced with Hydrocarbon Residue (×43)
Reinforced Alloys ×4 unchanged
Movement & Heat:
Per-jump thermal inefficiency increased. Total fuel cost per jump is unchanged, but heat builds up faster across sequential jumps, so chained-jump pacing now depends on cooldown.
Instant fuel-consumption-to-heat conversion rate:
300 → 350
Per-jump fuel cost unchanged
Heat per jump increase
Industry Pacing:
Ships:

Frigate-class hull production runtimes (LAI, MCF, HAF, TADES, MAUL) reduced so a single hull no longer dominates the production critical path. Material costs were re-derived alongside the runtime so that unit input cost stays roughly stable.
LAI
78 000 s → 62 228 s
Batched Reinforced Alloys 80 → 101
Batched Carbon Weave 70 → 89
Batched Thermal Composites 70 → 88
Still Kernel 4 → 5
MCF
79 200 s → 59 126 s
Batched Reinforced Alloys 88 → 123
Batched Carbon Weave 48 → 67
Batched Thermal Composites 48 → 67
Still Kernel 3 → 4
HAF
82 800 s → 72 472 s
Batched Reinforced Alloys 160 → 181
Batched Carbon Weave 74 → 84
Batched Thermal Composites 74 → 83
TADES
151 200 s → 99 136 s
Batched Reinforced Alloys 124 → 211
Batched Carbon Weave 72 → 123
Batched Thermal Composites 72 → 123
Still Kernel 4 → 7
MAUL
244 800 s → 230 063 s
Packaged Reinforced Alloys 46 → 49
Packaged Carbon Weave 30 → 32
Packaged Thermal Composites 30 → 31
Ammo, Fuel & Coolant:

Ammo, fuel and coolant blueprint runtimes bumped from the 3–5 second range up to a meaningful pacing gate.
C Gyrojet Ammo 1 (S)
3 → 6
AC Gyrojet Ammo 2 (S)
5 → 10
AC Gyrojet Ammo 3 (S)
5 → 10
Coilgun Ammo 1 (S)
5 → 10
EM Disintegrator Charge (S)
3 → 8
EM Disintegrator Charge (M), Printer recipe
3 → 10
EM Disintegrator Charge (M), Heavy Printer recipe
3 → 10
Howitzer Ammo 1 (M)
13 → 25
D1 Fuel
3 → 8
EU-40 Fuel
18 → 25
SOF-40 Fuel
18 → 25
EU-90 Fuel
35 → 55
SOF-80 Fuel
35 → 55
Compressed Coolant
3 → 10
Rapid Plasma Ammo 1 (S)
5 → 15
Rapid Plasma Ammo 2 (S)
5 → 15
Industry Efficiency:
Several refining recipes that previously got less efficient when scaled to the Heavy Refinery now scale up correctly. Heavy Refinery jobs produce strictly more per input than Refinery jobs.
Two recipes that pulled raw materials where the supply chain expects processed materials have been switched to the processed equivalent.
Iron-Rich Nodules refining
Heavy Refinery
Platinum-Group Veins 60 → 120
Nickel-Iron Veins 594 → 1 188
Hydrated Sulfide Matrix refining
Refinery
Water Ice 200 → 300
Hydrated Sulfide Matrix refining
Heavy Refinery
Water Ice 600 → 900
Platinum-Palladium Matrix refining
Refinery
Silica Grains 10 → 16
Platinum-Palladium Matrix refining
Heavy Refinery
Silica Grains 30 → 48
Industry — Raw-material bypass
Still Kernel input changed from Tholin Nodules ×5 to Aromatic Carbon Weave ×1
Brine ×50 unchanged
Output ×1
Runtime 11 s unchanged.
Rapid Plasma Ammo 1 (M) input HSM ×100 replaced with Hydrocarbon Residue ×43
Runtime 13 s → 25 s
Other inputs reduced as listed under Ammo prices above.
Resources:
Fine Young Crude and Fine Old Crude refining yields of Eupraxite and Sophrogon doubled (from 3 to 6 per run).
Fine Young Crude refining:
Eupraxite output 3 → 6
Brine ×26 unchanged
Fine Young Crude ×30 input unchanged
Fine Old Crude refining:
Sophrogon output 3 → 6
Brine ×26 unchanged
Fine Old Crude ×30 input unchanged
Mass and volume retuned on 19 items to reflect their actual logistical footprint.
Quality of life

Fine-crude refining recipes now correctly appear under their own Mini Printer cards (Fine Young Crude Matter / Fine Old Crude Matter) instead of being grouped with the EU-40 / SOF-40 fuel recipes.

Defect Fixes:
Fixed an issue that causes the feral drones to be unable to poll the grid for changes in state under certain circumstances.
Adjusted the height of the Notification Feed animations.
Removed the Corp wallet checkbox from several windows.
Removed "Estimated Price" from the Compare Item window.
Removed several EVE Online related settings from the shortcuts list.
Corrected a unintended reload of the UI when selecting CAM view while in CAM view.
Added the character name to the frame of the Character Show Info window.
Corrected system designation display in the respawn map.
Fixed Keeper Menu functionality when pinning and unpinning entries.
Adjusted Memory Card pathway value display on 4K monitors.
Completely replaced all text in the Report Bug Window (F12).
Improved ordering of Shell and Crown Memories in Incarnation memory lists.
Corrected the Action Bar updating method.
Corrected an error in the Region Information window.
Adjusted Show Info windows opened from the Action Bar to display skill affected values.
Known Issues:
Mini Turret and Turret models may display visual errors.
