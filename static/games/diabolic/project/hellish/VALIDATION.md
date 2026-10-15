# Validation record

## Asset packs and standalone imports — 2026-10-15

The Godot application/import scripts have been removed from this branch. Native authoring content and original source assets remain. New geometry imports use Blender directly; images/audio use Pillow and ffmpeg. Releases ship one indexed `game.pack` with binary model/documents, PNG textures, fonts and FLAC audio.

Validation performed on Linux:

- All 3 pack tests and 5 exporter tests pass, including corrupt/truncated input, selected worlds, omission of source/unused files, Web manifests and re-export without loose content.
- All 3 direct import integration tests pass: a newly generated textured animated GLB with collision, direct image conversion and bit-exact PCM16-to-FLAC audio.
- The device-free native audio test passes both shared PCM effects and streaming FLAC memory voices.
- Loose and packed content/Box3D checks load the same 389 assets, 718 surfaces, 225,210 vertices, 242 placed scenes and 58 collision brushes.
- The standalone-release regression test also verifies that missing/corrupt packs fail, including when launched from the original checkout.
- A standalone Linux export runs its content check and renders the title scene from outside the checkout. Its fonts/textures come from the pack. A pack-only re-export also passes the content check.
- The full suite reports 119 passed and 10 failed. The original branch, after correcting its reward-test compile error, reports the identical 10 failures (116 passed). These failures concern existing combat, inventory/story assertions and two headless macroquad context accesses; they are not claimed fixed here.

The verified pack is 41,604,012 bytes (39.7 MiB), versus 223,075,423 bytes (212.7 MiB) of previous loose cooked content: an 81.3% reduction. Cooked audio fell from approximately 85 MiB PCM WAV to 16 MiB lossless FLAC. The pack retains all catalogued editor models, not only the current level's reachable models. Windows/macOS execution and browser execution of the new pack path have not been validated in this environment; rebuild those runtime templates for pack v1.

Checked in the managed Linux workspace on 2026-10-13. These checks establish implementation and startup evidence, not a complete manual playthrough or a 240 FPS certification.

- `cargo test --locked --offline`: **126 tests passed**, zero failures. Coverage includes real Box3D movement/mesh transforms/sensors/joints, source inventory/shops/rope/boot rules, per-item dual-gun state, posed hits and scaled actors, physical heads/corpses, NPC attacks/status/theft, chest carriers/mimics/fragments, source intro-to-equipped-gun firing, story rest/death sequences, navigation, prefab editing and platform export validation.
- Cooked content validates: **387 models**, 715 surfaces, 225,060 vertices, **74 animation clips**, 242 placed world props, **71 reusable prefabs**, 51 cooked model textures and **45 audio clips**. Includes original underground rooms as well as the cemetery.
- Real X11 editor input was exercised in release: a 4 m wall extended to 8 m with its opposite end anchored; undo/redo and serialized saving matched. Editor-to-play and inventory opening were exercised.
- Actual native GPU screenshots were inspected for textured world geometry, source actors/animation, story rooms and shadows. A render-target depth-buffer omission, animation sampler precision and sun-direction convention were corrected from these checks. The shadow comparison contained 4,282 materially darker pixels in the expected shadow region while an unrelated region stayed unchanged.
- Linux release builds and standalone content checks pass. Windows GNU builds produce a PE32+ x86-64 executable importing only system DLLs, including WINMM. **Windows execution and MSVC builds are unverified here.**
- A real Emscripten build runs Rust, Box3D and miniaudio in Chromium: WebGL2 world/HUD rendering, keyboard/click input, running WebAudio contexts and IDBFS user-data mount pass, with no JavaScript exceptions or invalid GL operations. Browser automation is optional QA, not a runtime dependency.
- Export tests verify executable formats, selected-world replacement, portable assets, atomic staging, refusal to overwrite unrelated directories and browser manifests. Exported user state is excluded. Windows/Linux/Web directories and ZIPs are generated under `dist/`; macOS bundling requires an Apple SDK build or supplied Mach-O template and was not executed.

A pre-parity Linux release diagnostic ran 3,600 ticks after 300 warmup ticks with 95 enemies, posed anatomy and ragdolls: 425 kills, 1.171 ms mean, 4.485 ms P99, 13.595 ms P99.9 and 23.289 ms worst combat-simulation tick. This was on a shared host while cross-builds ran; it excludes rendering/audio/NPC/story presentation and does not establish a 240 FPS floor.

A pre-parity 60-frame rendered diagnostic at 1280x720 output / 480x270 world resolution reported 3.61 average FPS and 962.77 ms P99 under Mesa software rendering while cross-builds ran. This confirms the rendered pipeline executes, but demonstrates no 240 FPS result.

Native inspection artifacts: [animated actors](validation/actors.png), [dynamic shadows](validation/shadows.png), [browser scene](validation/web.png), [editor wall extension](validation/editor.png), [final combat render](validation/combat.png).

The final visual pass adds real Godot/Hellish captures at the same camera, health levels and cartridge counts. [Comparison report](validation/visual-parity/report.json) records the source camera/shaders and remaining differences. Native captures exit successfully; the source foreground pipeline requests Depth32 and the Mesa driver reports effective **24-bit depth**, with a complete framebuffer. This corrected overlapping heart/magazine triangles. Original radial mist transparency and negative gun roll were verified against the current source. Remapping, preference migration, safe save reset and native dropped-item impulse regressions are included in the 126 tests.

All four source-style settings panes were captured in the actual running game with complete Avara titles, tabs, controls and Back labels. [Settings proof](validation/settings/README.md) records real XTest remapping to keyboard K and middle mouse, persisted preferences across restart, rejection of reserved keys, Escape cancellation, and Enter/mouse delete-cancel paths preserving seeded progress byte-for-byte. The font filtering setter is cached and runs before rendering to preserve queued text draws.

Final Web verification additionally passes a synchronous 387-asset/Box3D check with the 8 MB WASM stack and an IndexedDB write/sync/reload/read round trip. Actual WebGL2 gameplay renders the source heart at 25% health and 12 physical drum rounds with a complete **32-bit** foreground depth attachment, running WebAudio and exercised input, with no reported JavaScript or GL errors. The loader enables miniquad's existing GLSL 100-to-300 ES path for core derivatives; native shader code is unchanged. [Browser gameplay proof](validation/web-final.png).

## Limits

Native graphical checks use Mesa/llvmpipe; browser checks use SwiftShader. Both are software renderers. Their frame rates do not predict gaming GPU performance. Simulation timings exclude GPU, audio, NPC/story presentation and must not be described as game FPS. Host contention can affect all wall-clock results.

No controlled equivalent-work comparison with Godot has been established. A 240 FPS frame budget is 4.17 ms; sustained gameplay, worst-frame behavior, shader startup, audio, loading and export-generated Windows builds still need measurement on the intended hardware. Source shader translation, procedural posing and effect/presentation differences are listed in [MIGRATION.md](MIGRATION.md).


## Windows follow-up, 2026-10-13

The earlier Windows and hardware limits above describe the cloud checks. Local MSVC
release builds now run on the Ryzen 7 2700X / RTX 2070 SUPER with real audio and a
complete 24-bit depth target. Controlled fixed-count and combat runs, CPU profiles,
chest fixes, and enemy sound changes are recorded in
[the Windows report](validation/performance-2026-10-13/README.md).
Combat outcomes and some presentation still differ from Godot. No full visual or
sound parity, identical combat replay, or sustained 240 FPS result is claimed.
