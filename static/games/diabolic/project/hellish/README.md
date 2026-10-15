# Hellish Engine

Standalone Diabolic runtime and in-engine brush/scene editor, written in Rust with **Box3D 0.1.0**, OpenGL/WebGL2 rendering and positional miniaudio audio. This branch builds only Hellish Engine. Blender imports source models directly; Python/Pillow and ffmpeg cook textures/audio. Godot is not required. See [native imports and pack format](content/README.md).

## Run and develop

Windows requires stable Rust and Visual Studio C++ Build Tools with the Windows SDK:

```powershell
.\Hellish.ps1 Play
.\Hellish.ps1 Editor
.\Hellish.ps1 Test
.\Hellish.ps1 Check
.\Hellish.ps1 Play -DebugBuild
```

Linux requires stable Rust, a C17 compiler and OpenGL/X11 libraries:

```sh
./hellish/run.sh play
./hellish/run.sh editor
./hellish/run.sh test
./hellish/run.sh check
./hellish/run.sh dev
```

Release builds are the default. Development builds shorten incremental code changes; arbitrary Rust code hot reload is not implemented. Balance and actor definitions reload after validation without resetting living actors. Invalid edits retain the previous configuration. Cooking produces one indexed binary `game.pack` from native authoring content and direct source imports: `./hellish/run.sh cook` or `Hellish.ps1 Cook`.

F1 switches editor/play, Tab opens inventory, Escape opens settings, F2 toggles statistics. WASD moves, Shift sprints, Ctrl/C crouches and slides, Space jumps, left/right mouse use the equipped hands, R reloads, E interacts, Q drops an item, C uses the heart, H hides hands/UI, and F kicks after discovering the boot. Controls can be rebound in Settings. Intro/story scenes temporarily control movement and camera.

## Export

Use the editor's Export panel to select Windows, Linux, macOS or Web. It exports a snapshot of the current world in the background. CLI equivalents:

```powershell
.\Hellish.ps1 ExportWindows -Output .\build\Diabolic
.\Hellish.ps1 ExportWeb -Output .\build\Diabolic-web
```

```sh
./hellish/run.sh export linux --output=/absolute/path/Diabolic
./hellish/target/release/hellish-engine --export=windows --output=/absolute/path/Diabolic-windows
python3 hellish/tools/export_game.py windows --zip
```

Use `--export-world=/absolute/path/world.json` to choose another saved scene. Python is only needed for the optional ZIP wrapper. The core Rust exporter validates target executable formats, stages packages safely, and includes one `game.pack` with binary models/documents, textures, lossless FLAC audio, fonts and notices. Source runs keep readable loose files for debugging; `--packed` tests the shipping path. Run Cook after source-asset changes before using the editor Export panel. Personal saves/settings are excluded.

Rebuild runtime templates for the pack format; older loose-file runtimes cannot load these exports. Cross-platform export requires a compatible runtime template under `hellish/templates/<target>` or `HELLISH_EXPORT_RUNTIME` pointing to that target's executable. `tools/cross_windows.sh` and `tools/cross_web.py` build Windows and Emscripten/Web templates. Native macOS requires an Apple SDK/native build or prebuilt Mach-O template; the exporter creates an `.app` bundle. An unavailable target produces an error rather than a mislabeled binary. Web exports require an HTTP server and WebGL2; see the generated hosting instructions. Browser saves use IDBFS.

Generated Windows, Linux and Web distributions are under `hellish/dist/`; build outputs/templates are ignored by Git. Packaged native launchers run without Rust or the original checkout. Windows binaries have been cross-compiled, but still need execution on Windows. macOS has no validated runtime in this workspace.

## Content and architecture

The tavern shop sells these carried items for 25 coins each. Effects stay active while held or stored.

| Item | Size | Effect |
| --- | --- | --- |
| Garlic | 2×2 | Applies poison within 5m every 0.5s, including to the carrier. Player poison stays at one stack and cannot reduce health below 1 HP. |
| Venom Seeker | 1×2 | Every third bullet launches a toxic homing bullet from above the weapon toward the last enemy hit. |
| Hellfire Magazines | 1×1 | Existing explosive magazines deal fire damage and ignite every enemy in their blast. Requires explosive magazines. |
| Bottled Hell | 1×2 | Every fourth bullet throws a ballistic Molotov at the aim point. Burning droplets ignite the ground for the same two seconds as burning corpses. |

Bullet counts include Split Barrel rounds and both hands. Item projectiles do not count as weapon bullets. Molotov ground fire can ignite the player, like corpse fire.

The current content catalog includes 391 models, with sampled animation clips, 246 placed props, reusable scene prefabs, model textures and catalogued audio clips. The cemetery, well, passage, tavern, lodgings and coffin room are included. See [content/README.md](content/README.md) for schemas and import limits.

- `game.rs`, `actors.rs`, `perks.rs`: fixed-step player/combat simulation, composable actors, enemy states and source reward pools.
- `combat.rs`, `chests.rs`: posed triangle hits, anatomy, rigid-body corpses/heads, boss abilities, carrier/mimic chests and fragments.
- `interactions.rs`, `npc.rs`, `story.rs`: physical inventory/equipment, shops/theft, authored interactions, service NPCs, intro/rescue/rest sequences and persistent progression.
- `world.rs`, `prefabs.rs`, `editor.rs`: world documents, reusable scene instances, brush editing, textures, light controls, undo/redo and export.
- `physics.rs`, `native/bridge.c`, `navigation.rs`: Box3D geometry, sensors, sweeps, moving fixtures, articulated bodies, planar/stacked-ground and flying navigation.
- `render.rs`, `render/shadows.rs`, `shaders/`: resident GPU buffers, interpolated animation positions/normals, materials, dynamic point/spot/sun lighting, shadow atlas, fog and post effects.
- `audio.rs`, `native/audio_bridge.c`: bounded positional voices, streamed/crossfaded music and room reverb.
- `input.rs`, `ui.rs`, `rewards.rs`: source action bindings, Avara typography, original settings tabs and physical reward tablets.
- `export.rs`, `settings.rs`, `records.rs`, `hotreload.rs`: platform packaging, user state, records and validated live configuration.

Rust dependency roots are macroquad, serde, serde_json, rmp-serde and flate2, plus cc/image for native builds and branding. Box3D and miniaudio are vendored C. No SDL2/CMake runtime requirement was added.

GPU geometry and animation atlases load once. Navigation searches reuse scratch memory and are staggered; graphs bake on startup/editor exit. Corpses and chest debris use prewarmed bounded native pools. Save writing and configuration watching run off the desktop game thread. Settings, records and inventory live in the OS user-data directory; `HELLISH_USER_DATA` overrides it.

## Editor

Create textured walls/ground and drag end handles to extend them with the opposite end anchored. World-scaled UVs keep the texture continuous. Place whole reusable scenes with interactive children, lights, zones and markers; group movement/rotation/deletion preserves those parts. G moves selection, R rotates, PageUp/PageDown changes elevation, Delete removes, Ctrl+Z/Y undoes/redoes and Ctrl+S saves. The light inspector supports point/spot/sun controls, color, range, intensity, flicker and shadows.

This is a brush/scene editor. It does not include arbitrary CSG or a sculptable heightfield tool.

## Current Godot visual matching

The heart uses the current authored two-surface mesh and the original procedural blood-stamp shader: pale upper chambers, a health-dependent blood level, source beating, emission and glow. Health/ammunition text screens have been removed. The drum displays actual source cartridge meshes and removes rounds as ammunition is spent.

Lighting follows Godot's compatibility renderer color conversions, Burley diffuse response, range/spot attenuation, source Filmic tone mapping, fog and grit/vignette. The scene requires at least 24 effective depth bits to resolve the thin source foreground depth bands. Source flame/mist data, radial mist transparency, suitcase meshes and pocket grids are included. Inventory clicks use the visible case geometry.

UI uses the original Avara fonts and palette, minimal aim dot/contextual prompts, physical stone reward tablets, and Game/Graphics/Audio/Controls settings tabs. Keyboard/mouse rebinding swaps conflicts; display/aspect/font/audio changes and confirmed save deletion are connected to the runtime.

See [paired visual captures](validation/visual-parity/report.json). They still show rig/hand, lighting, particle and animation differences; this implementation is not pixel-identical to Godot.

## Performance and verification

For comparison with `captures/final-native-combat.json` and `PERFORMANCE_PLAN.md`, run:

```powershell
cargo +nightly-x86_64-pc-windows-msvc run --locked --release --manifest-path hellish/Cargo.toml -- --godot-kite --duration=25 --run-seconds=397
```

This mode uses 95 starting enemies (every 24th is a Devil), 200 blood pickups,
nearest-enemy aiming, alternating strafe every four seconds, distance-based forward/back
movement, and one replenishment attempt every 250 ms. Fire starts after one second;
measurement starts after two seconds. It uses three projectiles, 0.34 damage,
three times attack speed, and 30% ignite/poison chances. Audio stays enabled.
It fixes the window at 1280x720, the world at 480x270, and pacing at 240 FPS.
`--uncapped` removes pacing. Saved inventory and display settings are excluded.
Initial enemy and pickup counts and output dimensions are checked at runtime.
The report includes duration, kill count, distance and minimum/maximum enemy count.
The initial conditions and input rules match the Godot profiler. Each engine retains
its own RNG, physics, AI, effects and render pipeline; this is not an identical frame
replay or proof of visual parity. Compare repeated runs and workload counters.

Use `--godot-static --duration=25 --run-seconds=397` for the existing Godot `static`
profile: 95 enemies remain at their initial positions, with AI and animation stopped,
and no player movement or firing. This controls actor count when combat outcomes differ.
The Godot release command is:

```powershell
DIABOLIC.exe --windowed --resolution 1280x720 --disable-vsync -- --profile=static --comparison --count=95 --blood=200 --run-seconds=397 --duration=25 --fps-cap=240 --profile-result=godot-static.json
```

Replace `static` with `kite` for combat. `--comparison` excludes personal inventory,
disables progress writes, and fixes the Godot world view at 480x270. A comparison build
must load `DiabolicCrowdSolver` and report `crowd_backend: rust` to match the optimized
Godot baseline. If the export lacks its extension descriptor, pass
`--crowd-extension=/absolute/path/to/diabolic_crowd.gdextension`.

```sh
./hellish/run.sh benchmark --frames=1800 --screenshot=benchmark.png
./hellish/target/release/hellish-engine --simulation-benchmark --frames=1800
```

Rendered benchmarks report frame percentiles and worst frame. Simulation benchmarks exclude GPU/audio/presentation and are not FPS. The default rendered workload uses 95 enemies; `--benchmark-enemies=192` increases it. `--no-audio`, `--uncapped`, `--warmup=N` and `--skip-story` support diagnostics.

**240 FPS without spikes has not been demonstrated.** Cloud graphics use software rendering. Equivalent workloads on a Windows gaming GPU are required before claiming a performance gain. Source shader translation, procedural posing and some effects/presentation differ from Godot. See [MIGRATION.md](MIGRATION.md) and [VALIDATION.md](VALIDATION.md) for coverage and evidence.


## CPU profiler

Use the optional profiler to measure frame work and count model uploads:

```powershell
hellish/target/release/hellish-engine.exe --play --profile-stages --profile-output=build/profile.json
```

F2 shows CPU scopes. F10 saves the report. The report also saves when the game exits.
For a fixed scene, use `--godot-static --duration=25 --run-seconds=397` with the same
profile flags. Read the report with `python hellish/tools/profile_report.py build/profile.json`.
Times are CPU wall time. Parent scopes include child scopes; do not add them together.
The report gives mean, P50, P95, P99, maximum, mesh allocations, draws, and upload bytes.
The history keeps at most 4096 frames. Total counters include startup. GPU time and
sound device thread time are not measured. Run FPS comparisons with profiling off.
