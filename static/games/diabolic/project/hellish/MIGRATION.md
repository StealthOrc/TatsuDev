# Migration coverage

Hellish executes these systems independently of Godot. The source project is preserved as the behavioral reference. A complete manual playthrough and pixel-for-pixel parity have not been established.

| Area | Implemented in Hellish | Limits / remaining validation |
| --- | --- | --- |
| World | Cemetery, well/passage/tavern/lodgings/coffin room, full transforms, collision layers/masks, moving fixtures | Native scene shaders are translated to common materials |
| Lighting | Dynamic point/spot/sun lights, source sRGB/linear and Burley math, source Filmic/fog/grit, torch/muzzle/status lighting and shadow atlas | Bounded nearby light/shadow selection; equivalent visual tuning needed |
| Animation | Source clips, interpolated positions/normals, full socket matrices, actor scales, shared procedural poses | Simplified ten-part procedural solver, not original per-bone IK |
| Player/equipment | Movement/steps/sprint/jump/crouch/slide, discovered boot/delayed kick/slide jump, both hands, physical suitcase, gun/heart/tools, persistent per-item ammunition/heat | Source heart shader and physical cartridge count; full-rig hand/reload choreography still differs |
| Enemies | Source spawn/bell progression, runner fuse/head growth, Goliath orbs, Elk roots/ward, Devil leap/fire patterns, component definitions | Navigation sampling/local avoidance limits narrow spaces and changing doors |
| Hits/deaths | Posed triangle contact, weak regions, anatomy/severing, transferable fused heads, articulated corpses and death camera | Physical anatomy/posing is an approximation of the source implementation |
| Chests/rewards | Carrier sockets/drop/fall, ray-only proxies, one-time mimic decision, same-chest return, fragments, source perks/pools/status effects | Physical source stone tablets and Avara descriptions; take/dissolve and chest hand choreography still differ |
| Inventory/save | Source case/pocket grids, item ownership/stacks, move/rotate/drop, both hands, death rules, async native saves, browser persistence | Separate save format; no Godot-save conversion |
| Interactions | Digging/boot, keys/password note, rope installation/well travel, animated doors, lights/hearths, breakable crates, physical props | Editor supports brushes/prefabs, not general CSG/heightfield sculpting |
| NPCs/story | Shop transactions/offenses/theft/reclaim, keeper service/rage/spear/rope navigation, intro/coffin/heart/gun handoff, rescue/drag/bunk/drinks/rest | Automated source-scene sequences pass; full user playthrough still needed |
| Audio | Source clips/music, positional playback, crossfades, room reverb zones, timed story cues | Browser audio starts after user interaction; audio quality not certified on Windows |
| UI/settings | Original fonts/palette, minimal HUD, physical inventory picking, source tabs, remapping, display/aspect/font/audio settings and confirmed progress reset | Controller navigation/remapping and some presentation transitions remain unported |
| Export | Validated Windows/Linux runtime directories, Web runtime/assets/hosting, macOS bundle packager, editor snapshot export | Windows execution and native macOS build still require those platforms |

Effects use bounded particle/body/light budgets. Arbitrary Godot shaders and exact source presentation are not reproduced automatically by asset import. No complete-parity, faster-than-Godot, or 240 FPS guarantee is made.
