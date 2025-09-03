<script lang="ts">
	import {
		Mail,
		Phone,
		MapPin,
		Github,
		Calendar,
		Globe,
		Award,
		Briefcase,
		GraduationCap,
		Code,
		Database,
		Terminal,
		Languages,
		Gamepad2
	} from 'lucide-svelte';

	let currentLang: 'en' | 'de' = 'en';

	const translations = {
		en: {
			title: 'Full Stack Developer',
			experience: 'Professional Experience',
			projects: 'Key Projects',
			education: 'Education',
			skills: 'Technical Skills',
			languages: 'Languages',
			awards: 'Awards',
			personalProjects: 'Personal Projects',
			programmingLanguages: 'Programming Languages',
			databases: 'Databases',
			toolsTech: 'Tools & Technologies',
			native: 'Native',
			advanced: 'Advanced',
			intermediate: 'Intermediate',
			expert: 'Expert',
			beginner: 'Beginner',
			basic: 'Basic',
			grade: 'Grade',
			present: 'Present',
			developingRestApi: 'Developing REST APIs using Free Pascal and Apache/CGI Modules',
			buildingBackend: 'Building backend console applications',
			configuringBuild: 'Configuring automated build processes',
			creatingDeployment: 'Creating and maintaining automated Linux/Debian package deployment',
			fullStackDev: 'Full-stack development of warehouse management solutions',
			buildingTire: 'Building tire storage systems and energy management solutions',
			creatingReports: 'Creating and customizing reports using RaveReport and FastReport',
			testDriven: 'Test-driven development using DUnit and FPCUnit frameworks',
			softwareTesting: 'Software testing and quality assurance',
			testDocumentation: 'Test documentation and bug reporting',
			restApiDesc: 'Development of REST API between two tire storage systems',
			powerbiDesc: 'Automated export system for batch analysis software to Microsoft PowerBI',
			jeopardyDesc: 'Multiplayer Jeopardy game variant to play with friends',
			pachingkoDesc: 'Incremental/Idle game with pachinko mechanics',
			updatingMfc:
				'Updating and maintaining multiple existing MFC software applications for major logistic facilities',
			developingMfcFeatures:
				'Developing new features for an existing MFC for a major logistic customer in Austria',
			introducingVcs:
				'Introduction of version control systems and code review systems in the department',
			updatingAspNet:
				'Updating an old ASP.NET based web application to feature responsive JavaScript frontend and C# backend using WebMethods',
			mfcProjectDesc:
				'Development, update and maintenance of an MFC for a major logistics customer in Austria',
			supervisorTerminalDesc:
				'Development of a Supervisor Terminal with a fast and responsive data table with dynamic fetching, sorting, filtering, drag & drop and in-place editing'
		},
		de: {
			title: 'Full Stack Entwickler',
			experience: 'Berufserfahrung',
			projects: 'Schlüsselprojekte',
			education: 'Schulbildung',
			skills: 'Technische Fähigkeiten',
			languages: 'Sprachen',
			awards: 'Auszeichnungen',
			personalProjects: 'Private Projekte',
			programmingLanguages: 'Programmiersprachen',
			databases: 'Datenbanken',
			toolsTech: 'Tools & Technologien',
			native: 'Muttersprache',
			advanced: 'Fortgeschritten',
			intermediate: 'Mittelstufe',
			expert: 'Experte',
			beginner: 'Anfänger',
			basic: 'Grundkenntnisse',
			grade: 'Note',
			present: 'Heute',
			developingRestApi: 'Entwicklung einer REST API mittels Free Pascal, Apache/CGI Module',
			buildingBackend: 'Entwicklung von Backend Konsolenanwendungen',
			configuringBuild: 'Konfigurieren von automatisierten Build-Prozessen',
			creatingDeployment:
				'Erstellung sowie Wartung von automatisiertem Linux/Debian Package Deployment',
			fullStackDev: 'Entwicklung (Full Stack) an Warenwirtschaftslösungen',
			buildingTire: 'Reifeneinlagerungsystemen sowie Energiewirtschaftslösungen',
			creatingReports: 'Erstellung sowie Anpassung von Reports mittels RaveReport und FastReport',
			testDriven: 'Anwendung von Test Driven Development mittels DUnit und FPCUnit',
			softwareTesting: 'Software Testing und Qualitätssicherung',
			testDocumentation: 'Test-Dokumentation und Fehlermeldung',
			restApiDesc: 'Entwicklung einer REST API zwischen zwei Reifeneinlagerungssystemen',
			powerbiDesc: 'Automatisches Export-System für Chargenanalyse-Software nach Microsoft PowerBI',
			jeopardyDesc: 'Multiplayer Jeopardy-Game zum gemeinsamen Spielen mit Freunden',
			pachingkoDesc: 'Incremental/Idle-Game mit Pachinko-Mechaniken',
			updatingMfc:
				'Aktualisierung und Wartung mehrerer bestehender MFR-Softwareanwendungen für große Logistikanlagen',
			developingMfcFeatures:
				'Entwicklung neuer Features für einen bestehenden MFR für einen großen Logistikkunden in Österreich',
			introducingVcs:
				'Einführung von Versionskontrollsystemen und Code-Review-Systemen in der Abteilung',
			updatingAspNet:
				'Aktualisierung einer alten ASP.NET-basierten Webanwendung mit responsivem JavaScript-Frontend und C#-Backend mit WebMethods',
			mfcProjectDesc:
				'Entwicklung, Aktualisierung und Wartung eines MFR für einen großen Logistikkunden in Österreich',
			supervisorTerminalDesc:
				'Entwicklung eines Web Leitstandes mit einer schnellen responsiven Datentabelle mit dynamischem Abrufen, Sortieren, Filtern, Drag & Drop und In-Place-Bearbeitung'
		}
	};

	$: t = translations[currentLang];
</script>

<svelte:head>
	<title>Martin Garas - Full Stack Developer</title>
	<meta
		name="description"
		content="Resume of Martin Garas - Full Stack Developer specializing in Delphi, Free Pascal, C#, and web technologies."
	/>
</svelte:head>

<div class="w-full bg-gradient-to-br from-slate-900 via-[#0a4a8a] to-slate-900">
	<div class="mx-auto h-full w-full max-w-5xl px-4 py-8">
		<!-- Navigation -->
		<div class="mb-4 flex items-center justify-between">
			<a
				href="/"
				class="flex items-center gap-2 rounded-lg border border-white/20 bg-white/10 px-4 py-2 text-white backdrop-blur-md transition-colors hover:bg-white/20"
			>
				<svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M10 19l-7-7m0 0l7-7m-7 7h18"
					></path>
				</svg>
				{currentLang === 'en' ? 'Back to Home' : 'Zurück zur Startseite'}
			</a>

			<button
				on:click={() => (currentLang = currentLang === 'en' ? 'de' : 'en')}
				class="flex items-center gap-2 rounded-lg border border-white/20 bg-white/10 px-4 py-2 text-white backdrop-blur-md transition-colors hover:bg-white/20"
			>
				<Languages class="h-4 w-4" />
				{currentLang === 'en' ? 'Deutsch' : 'English'}
			</button>
		</div>

		<!-- Header Section -->
		<header
			class="mb-8 rounded-2xl border border-white/20 bg-white/10 p-8 shadow-2xl backdrop-blur-md"
		>
			<div class="flex flex-col items-center gap-6 md:flex-row md:items-start">
				<!-- Logo -->
				<div class="h-24 w-24 flex-shrink-0 md:h-32 md:w-32">
					<img
						src="/TatsuDev.svg"
						alt="TatsuDev Logo"
						class="h-full w-full object-contain drop-shadow-2xl"
					/>
				</div>

				<div class="flex-1 text-center md:text-left">
					<h1
						class="mb-2 bg-gradient-to-r from-[#459cff] to-[#5dfffc] bg-clip-text text-4xl font-bold text-transparent text-white md:text-5xl"
					>
						Martin Garas
					</h1>
					<p class="mb-4 text-xl text-[#459cff]">{t.title}</p>

					<div class="flex flex-wrap gap-4 text-sm text-gray-300">
						<a
							href="mailto:tatsu@tatsudev.net"
							class="flex items-center gap-2 transition-colors hover:text-white"
						>
							<Mail class="h-4 w-4" />
							tatsu@tatsudev.net
						</a>
						<div class="flex items-center gap-2">
							<MapPin class="h-4 w-4" />
							Düsseldorf, Germany
						</div>
						<a
							href="https://github.com/StealthOrc"
							target="_blank"
							rel="noopener noreferrer"
							class="flex items-center gap-2 transition-colors hover:text-white"
						>
							<Github class="h-4 w-4" />
							StealthOrc
						</a>
					</div>
				</div>
			</div>
		</header>

		<div class="grid grid-cols-1 gap-8 lg:grid-cols-3">
			<!-- Main Content -->
			<div class="space-y-8 lg:col-span-2">
				<!-- Experience Section -->
				<section class="rounded-xl border border-white/20 bg-white/10 p-6 backdrop-blur-md">
					<h2 class="mb-6 flex items-center gap-3 text-2xl font-bold text-white">
						<Briefcase class="h-6 w-6 text-[#1170dc]" />
						{t.experience}
					</h2>

					<div class="space-y-6">
						<div class="ml-2 border-l-2 border-[#1170dc] pl-4">
							<div class="mb-2 flex items-start justify-between">
								<div>
									<h3 class="text-lg font-semibold text-white">
										{currentLang === 'en' ? 'Software Developer' : 'Software Entwickler'}
									</h3>
									<p class="text-[#459cff]">
										Vanderlande Industries GmbH & Co. KG, Mönchengladbach
									</p>
								</div>
								<span class="flex items-center gap-1 text-nowrap text-sm text-gray-400">
									<Calendar class="h-3 w-3" />
									{currentLang === 'en' ? 'Jan 2023 - Present' : 'Jan 2023 - Heute'}
								</span>
							</div>
							<ul class="list-inside list-disc space-y-1 text-sm text-gray-300">
								<li>{t.updatingMfc}</li>
								<li>{t.developingMfcFeatures}</li>
								<li>{t.introducingVcs}</li>
								<li>{t.updatingAspNet}</li>
							</ul>
						</div>

						<div class="ml-2 border-l-2 border-[#1170dc] pl-4">
							<div class="mb-2 flex items-start justify-between">
								<div>
									<h3 class="text-lg font-semibold text-white">
										{currentLang === 'en' ? 'Full Stack Developer' : 'Full Stack Entwickler'}
									</h3>
									<p class="text-[#459cff]">MMC GmbH, Düsseldorf</p>
								</div>
								<span class="flex items-center gap-1 text-sm text-gray-400">
									<Calendar class="h-3 w-3" />
									{currentLang === 'en' ? 'Jul 2021 - Dec 2022' : 'Jul 2021 - Dez 2022'}
								</span>
							</div>
							<ul class="list-inside list-disc space-y-1 text-sm text-gray-300">
								<li>{t.developingRestApi}</li>
								<li>{t.buildingBackend}</li>
								<li>{t.configuringBuild}</li>
								<li>{t.creatingDeployment}</li>
							</ul>
						</div>

						<div class="ml-2 border-l-2 border-[#1170dc] pl-4">
							<div class="mb-2 flex items-start justify-between">
								<div>
									<h3 class="text-lg font-semibold text-white">
										{currentLang === 'en'
											? 'Software Developer (Apprenticeship)'
											: 'Ausbildung zum Fachinformatiker für Anwendungsentwicklung'}
									</h3>
									<p class="text-[#459cff]">MMC GmbH, Düsseldorf</p>
								</div>
								<span class="flex items-center gap-1 text-sm text-gray-400">
									<Calendar class="h-3 w-3" />
									Jun 2018 - Jun 2021
								</span>
							</div>
							<ul class="list-inside list-disc space-y-1 text-sm text-gray-300">
								<li>{t.fullStackDev}</li>
								<li>{t.buildingTire}</li>
								<li>{t.creatingReports}</li>
								<li>{t.testDriven}</li>
							</ul>
						</div>

						<div class="ml-2 border-l-2 border-[#1170dc] pl-4">
							<div class="mb-2 flex items-start justify-between">
								<div>
									<h3 class="text-lg font-semibold text-white">
										{currentLang === 'en'
											? 'Software Testing Assistant'
											: 'Aushilfskraft im Bereich Software Testing'}
									</h3>
									<p class="text-[#459cff]">MMC GmbH, Düsseldorf</p>
								</div>
								<span class="flex items-center gap-1 text-sm text-gray-400">
									<Calendar class="h-3 w-3" />
									{currentLang === 'en' ? 'Oct 2016 - Jun 2018' : 'Okt 2016 - Jun 2018'}
								</span>
							</div>
							<ul class="list-inside list-disc space-y-1 text-sm text-gray-300">
								<li>{t.softwareTesting}</li>
								<li>{t.testDocumentation}</li>
							</ul>
						</div>
					</div>
				</section>

				<!-- Projects Section -->
				<section class="rounded-xl border border-white/20 bg-white/10 p-6 backdrop-blur-md">
					<h2 class="mb-6 flex items-center gap-3 text-2xl font-bold text-white">
						<Code class="h-6 w-6 text-[#1170dc]" />
						{t.projects}
					</h2>

					<div class="space-y-4">
						<div class="rounded-lg border border-white/10 bg-white/5 p-4">
							<div class="mb-2 flex items-start justify-between">
								<h3 class="text-lg font-semibold text-white">
									{currentLang === 'en' ? 'Web Supervisor Terminal' : 'Web Leitstand'}
								</h3>
								<span class="text-xs text-gray-400"
									>{currentLang === 'en' ? 'May 2025 - Present' : 'Mai 2025 - Heute'}</span
								>
							</div>
							<p class="mb-2 text-sm text-gray-300">{t.supervisorTerminalDesc}</p>
							<div class="flex flex-wrap gap-2">
								<span class="rounded bg-[#1170dc]/20 px-2 py-1 text-xs text-white">JavaScript</span>
								<span class="rounded bg-[#1170dc]/20 px-2 py-1 text-xs text-white">ASP.NET</span>
								<span class="rounded bg-[#1170dc]/20 px-2 py-1 text-xs text-white">C#</span>
								<span class="rounded bg-[#1170dc]/20 px-2 py-1 text-xs text-white">MSSQL</span>
							</div>
						</div>

						<div class="rounded-lg border border-white/10 bg-white/5 p-4">
							<div class="mb-2 flex items-start justify-between">
								<h3 class="text-lg font-semibold text-white">
									{currentLang === 'en' ? 'Material Flow Controller' : 'Material Fluss Rechner'}
								</h3>
								<span class="text-xs text-gray-400"
									>{currentLang === 'en' ? 'Jan 2023 - Present' : 'Jan 2023 - Heute'}</span
								>
							</div>
							<p class="mb-2 text-sm text-gray-300">{t.mfcProjectDesc}</p>
							<div class="flex flex-wrap gap-2">
								<span class="rounded bg-[#1170dc]/20 px-2 py-1 text-xs text-white">Delphi</span>
								<span class="rounded bg-[#1170dc]/20 px-2 py-1 text-xs text-white">VCL</span>
								<span class="rounded bg-[#1170dc]/20 px-2 py-1 text-xs text-white">UDP</span>
								<span class="rounded bg-[#1170dc]/20 px-2 py-1 text-xs text-white">TCP</span>
							</div>
						</div>

						<div class="rounded-lg border border-white/10 bg-white/5 p-4">
							<div class="mb-2 flex items-start justify-between">
								<h3 class="text-lg font-semibold text-white">
									{currentLang === 'en'
										? 'REST API Integration System'
										: 'REST API Integrationssystem'}
								</h3>
								<span class="text-xs text-gray-400"
									>{currentLang === 'en' ? 'Dec 2021 - Dec 2022' : 'Dez 2021 - Dez 2022'}</span
								>
							</div>
							<p class="mb-2 text-sm text-gray-300">{t.restApiDesc}</p>
							<div class="flex flex-wrap gap-2">
								<span class="rounded bg-[#1170dc]/20 px-2 py-1 text-xs text-white">Lazarus</span>
								<span class="rounded bg-[#1170dc]/20 px-2 py-1 text-xs text-white">Free Pascal</span
								>
								<span class="rounded bg-[#1170dc]/20 px-2 py-1 text-xs text-white"
									>Apache/FastCGI</span
								>
								<span class="rounded bg-[#1170dc]/20 px-2 py-1 text-xs text-white">Firebird</span>
							</div>
						</div>

						<div class="rounded-lg border border-white/10 bg-white/5 p-4">
							<div class="mb-2 flex items-start justify-between">
								<h3 class="text-lg font-semibold text-white">PowerBI Export Tool</h3>
								<span class="text-xs text-gray-400"
									>{currentLang === 'en' ? 'Jun 2021 - Dec 2021' : 'Jun 2021 - Dez 2021'}</span
								>
							</div>
							<p class="mb-2 text-sm text-gray-300">{t.powerbiDesc}</p>
							<div class="flex flex-wrap gap-2">
								<span class="rounded bg-[#1170dc]/20 px-2 py-1 text-xs text-white">Delphi</span>
								<span class="rounded bg-[#1170dc]/20 px-2 py-1 text-xs text-white">VCL</span>
								<span class="rounded bg-[#1170dc]/20 px-2 py-1 text-xs text-white">MSSQL</span>
								<span class="rounded bg-[#1170dc]/20 px-2 py-1 text-xs text-white">PostgreSQL</span>
							</div>
						</div>
					</div>
				</section>

				<!-- Education Section -->
				<section class="rounded-xl border border-white/20 bg-white/10 p-6 backdrop-blur-md">
					<h2 class="mb-6 flex items-center gap-3 text-2xl font-bold text-white">
						<GraduationCap class="h-6 w-6 text-[#1170dc]" />
						Education
					</h2>

					<div class="space-y-4">
						<div class="ml-2 border-l-2 border-[#1170dc] pl-4">
							<div class="mb-2 flex items-start justify-between">
								<div class="flex-1 pr-4">
									<h3 class="text-lg font-semibold text-white">
										{currentLang === 'en'
											? 'IT Specialist for Application Development'
											: 'Fachinformatiker für Anwendungsentwicklung'}
									</h3>
									<p class="text-[#459cff]">Berufskolleg Hilden</p>
								</div>
								<span class="whitespace-nowrap text-sm text-gray-400">2018 - 2021</span>
							</div>
							<p class="text-sm text-gray-300">{t.grade}: 1.7</p>
						</div>

						<div class="ml-2 border-l-2 border-[#1170dc] pl-4">
							<div class="mb-2 flex items-start justify-between">
								<div class="flex-1 pr-4">
									<h3 class="text-lg font-semibold text-white">
										{currentLang === 'en'
											? 'Abitur (General Higher Education Entrance Qualification)'
											: 'Allgemeine Hochschulreife'}
									</h3>
									<p class="text-[#459cff]">Lessing-Berufskolleg, Düsseldorf</p>
								</div>
								<span class="whitespace-nowrap text-sm text-gray-400">2015 - 2018</span>
							</div>
							<p class="text-sm text-gray-300">{t.grade}: 2.0</p>
						</div>
					</div>
				</section>
			</div>

			<!-- Sidebar -->
			<div class="space-y-8">
				<!-- Skills Section -->
				<section class="rounded-xl border border-white/20 bg-white/10 p-6 backdrop-blur-md">
					<h2 class="mb-6 flex items-center gap-3 text-nowrap text-2xl font-bold text-white">
						<Terminal class="h-6 w-6 text-[#1170dc]" />
						Technical Skills
					</h2>

					<div class="space-y-4">
						<div>
							<h3 class="mb-3 text-sm font-semibold text-[#459cff]">{t.programmingLanguages}</h3>
							<div class="space-y-2">
								<div>
									<div class="mb-1 flex justify-between text-sm">
										<span class="text-gray-300">Delphi/Free Pascal</span>
										<span class="text-white">{t.expert}</span>
									</div>
									<div class="h-2 w-full rounded-full bg-white/10">
										<div
											class="h-2 rounded-full bg-gradient-to-r from-[#1170dc] to-[#459cff]"
											style="width: 95%"
										></div>
									</div>
								</div>
								<div>
									<div class="mb-1 flex justify-between text-sm">
										<span class="text-gray-300">C#</span>
										<span class="text-white">{t.intermediate}</span>
									</div>
									<div class="h-2 w-full rounded-full bg-white/10">
										<div
											class="h-2 rounded-full bg-gradient-to-r from-[#1170dc] to-[#459cff]"
											style="width: 60%"
										></div>
									</div>
								</div>
								<div>
									<div class="mb-1 flex justify-between text-sm">
										<span class="text-gray-300">TypeScript</span>
										<span class="text-white">{t.intermediate}</span>
									</div>
									<div class="h-2 w-full rounded-full bg-white/10">
										<div
											class="h-2 rounded-full bg-gradient-to-r from-[#1170dc] to-[#459cff]"
											style="width: 60%"
										></div>
									</div>
								</div>
								<div>
									<div class="mb-1 flex justify-between text-sm">
										<span class="text-gray-300">Svelte</span>
										<span class="text-white">{t.intermediate}</span>
									</div>
									<div class="h-2 w-full rounded-full bg-white/10">
										<div
											class="h-2 rounded-full bg-gradient-to-r from-[#1170dc] to-[#459cff]"
											style="width: 60%"
										></div>
									</div>
								</div>
							</div>
						</div>

						<div>
							<h3 class="mb-3 text-sm font-semibold text-[#459cff]">{t.databases}</h3>
							<div class="flex flex-wrap gap-2">
								<span class="rounded-lg bg-[#1170dc]/20 px-3 py-1 text-xs text-white">Firebird</span
								>
								<span class="rounded-lg bg-[#1170dc]/20 px-3 py-1 text-xs text-white">MSSQL</span>
								<span class="rounded-lg bg-[#1170dc]/20 px-3 py-1 text-xs text-white"
									>PostgreSQL</span
								>
								<span class="rounded-lg bg-[#1170dc]/20 px-3 py-1 text-xs text-white">MySQL</span>
								<span class="rounded-lg bg-[#1170dc]/20 px-3 py-1 text-xs text-white">MariaDB</span>
							</div>
						</div>

						<div>
							<h3 class="mb-3 text-sm font-semibold text-[#459cff]">{t.toolsTech}</h3>
							<div class="flex flex-wrap gap-2">
								<span class="rounded-lg bg-[#1170dc]/20 px-3 py-1 text-xs text-white">Neovim</span>
								<span class="rounded-lg bg-[#1170dc]/20 px-3 py-1 text-xs text-white">VS Code</span>
								<span class="rounded-lg bg-[#1170dc]/20 px-3 py-1 text-xs text-white">Git</span>
								<span class="rounded-lg bg-[#1170dc]/20 px-3 py-1 text-xs text-white"
									>Visual Studio</span
								>
								<span class="rounded-lg bg-[#1170dc]/20 px-3 py-1 text-xs text-white">Jenkins</span>
								<span class="rounded-lg bg-[#1170dc]/20 px-3 py-1 text-xs text-white">Vite</span>
							</div>
						</div>
					</div>
				</section>

				<!-- Languages Section -->
				<section class="rounded-xl border border-white/20 bg-white/10 p-6 backdrop-blur-md">
					<h2 class="mb-6 flex items-center gap-3 text-2xl font-bold text-white">
						<Globe class="h-6 w-6 text-[#1170dc]" />
						{t.languages}
					</h2>

					<div class="space-y-3">
						<div class="flex items-center justify-between">
							<span class="text-gray-300">{currentLang === 'en' ? 'German' : 'Deutsch'}</span>
							<span class="text-sm text-white">{t.native}</span>
						</div>
						<div class="flex items-center justify-between">
							<span class="text-gray-300">{currentLang === 'en' ? 'English' : 'Englisch'}</span>
							<span class="text-sm text-white">{t.advanced}</span>
						</div>
						<div class="flex items-center justify-between">
							<span class="text-gray-300">{currentLang === 'en' ? 'Japanese' : 'Japanisch'}</span>
							<span class="text-sm text-white">{t.intermediate}</span>
						</div>
						<div class="flex items-center justify-between">
							<span class="text-gray-300">{currentLang === 'en' ? 'French' : 'Französisch'}</span>
							<span class="text-sm text-white">{t.basic}</span>
						</div>
					</div>
				</section>

				<!-- Awards Section -->
				<section class="rounded-xl border border-white/20 bg-white/10 p-6 backdrop-blur-md">
					<h2 class="mb-6 flex items-center gap-3 text-2xl font-bold text-white">
						<Award class="h-6 w-6 text-[#1170dc]" />
						{t.awards}
					</h2>

					<div class="space-y-3">
						<div class="rounded-lg border border-white/10 bg-white/5 p-3">
							<h3 class="mb-1 text-sm font-semibold text-white">1st Place - Rockin' Robots 2011</h3>
							<p class="text-xs text-gray-400">Programming Competition, Düsseldorf</p>
						</div>
						<div class="rounded-lg border border-white/10 bg-white/5 p-3">
							<h3 class="mb-1 text-sm font-semibold text-white">
								Innovative Technologies Competition
							</h3>
							<p class="text-xs text-gray-400">Science on Stage Deutschland e.V., 2012</p>
						</div>
					</div>
				</section>

				<!-- Personal Projects -->
				<section class="rounded-xl border border-white/20 bg-white/10 p-6 backdrop-blur-md">
					<h2 class="mb-6 flex items-center gap-3 text-2xl font-bold text-white">
						<Gamepad2 class="h-6 w-6 text-[#1170dc]" />
						{t.personalProjects}
					</h2>

					<div class="space-y-3 text-sm">
						<a
							href="https://github.com/StealthOrc/cult-pardy"
							target="_blank"
							rel="noopener noreferrer"
							class="block rounded-lg border border-white/10 bg-white/5 p-3 transition-colors hover:bg-white/10"
						>
							<h3 class="mb-1 font-semibold text-[#459cff]">Cult-Pardy</h3>
							<p class="text-xs text-gray-400">{t.jeopardyDesc}</p>
						</a>
						<a
							href="https://stealthorc.itch.io/pachiiingko"
							target="_blank"
							rel="noopener noreferrer"
							class="block rounded-lg border border-white/10 bg-white/5 p-3 transition-colors hover:bg-white/10"
						>
							<h3 class="mb-1 font-semibold text-[#459cff]">Pachingko Idle</h3>
							<p class="text-xs text-gray-400">{t.pachingkoDesc}</p>
						</a>
					</div>
				</section>
			</div>
		</div>
	</div>
</div>
