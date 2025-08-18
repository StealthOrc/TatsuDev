<script lang="ts">
	import { Mail, Phone, MapPin, Github, Calendar, Globe, Award, Briefcase, GraduationCap, Code, Database, Terminal, Languages, Gamepad2 } from 'lucide-svelte';
	
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
			updatingMfc: 'Updating and maintaining multiple existing MFC software applications for major logistic facilities',
			developingMfcFeatures: 'Developing new features for an existing MFC for a major logistic customer in Austria',
			introducingVcs: 'Introduction of version control systems and code review systems in the department',
			updatingAspNet: 'Updating an old ASP.NET based web application to feature responsive JavaScript frontend and C# backend using WebMethods',
			mfcProjectDesc: 'Development, update and maintenance of an MFC for a major logistics customer in Austria',
			supervisorTerminalDesc: 'Development of a Supervisor Terminal with a fast and responsive data table with dynamic fetching, sorting, filtering, drag & drop and in-place editing',
      awards: 'Awards',
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
			creatingDeployment: 'Erstellung sowie Wartung von automatisiertem Linux/Debian Package Deployment',
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
			updatingMfc: 'Aktualisierung und Wartung mehrerer bestehender MFR-Softwareanwendungen für große Logistikanlagen',
			developingMfcFeatures: 'Entwicklung neuer Features für einen bestehenden MFR für einen großen Logistikkunden in Österreich',
			introducingVcs: 'Einführung von Versionskontrollsystemen und Code-Review-Systemen in der Abteilung',
			updatingAspNet: 'Aktualisierung einer alten ASP.NET-basierten Webanwendung mit responsivem JavaScript-Frontend und C#-Backend mit WebMethods',
			mfcProjectDesc: 'Entwicklung, Aktualisierung und Wartung eines MFR für einen großen Logistikkunden in Österreich',
			supervisorTerminalDesc: 'Entwicklung eines Web Leitstandes mit einer schnellen responsiven Datentabelle mit dynamischem Abrufen, Sortieren, Filtern, Drag & Drop und In-Place-Bearbeitung',
      awards: 'Auszeichnungen',
		}
	};
	
	$: t = translations[currentLang];
</script>

<svelte:head>
	<title>Martin Garas - Full Stack Developer</title>
	<meta name="description" content="Resume of Martin Garas - Full Stack Developer specializing in Delphi, Free Pascal, C#, and web technologies." />
</svelte:head>

<div class="min-h-screen bg-gradient-to-br from-slate-900 via-[#0a4a8a] to-slate-900">
	<div class="container mx-auto px-4 py-8 max-w-5xl">
		<!-- Navigation -->
		<div class="flex justify-between items-center mb-4">
			<a href="/" class="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-lg border border-white/20 hover:bg-white/20 transition-colors text-white">
				<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
				</svg>
				{currentLang === 'en' ? 'Back to Home' : 'Zurück zur Startseite'}
			</a>
			
			<button 
				on:click={() => currentLang = currentLang === 'en' ? 'de' : 'en'}
				class="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-lg border border-white/20 hover:bg-white/20 transition-colors text-white"
			>
				<Languages class="w-4 h-4" />
				{currentLang === 'en' ? 'Deutsch' : 'English'}
			</button>
		</div>
		
		<!-- Header Section -->
		<header class="bg-white/10 backdrop-blur-md rounded-2xl p-8 mb-8 border border-white/20 shadow-2xl">
			<div class="flex flex-col md:flex-row items-center md:items-start gap-6">
				<!-- Logo -->
				<div class="w-24 h-24 md:w-32 md:h-32 flex-shrink-0">
					<img src="/TatsuDev.svg" alt="TatsuDev Logo" class="w-full h-full object-contain drop-shadow-2xl" />
				</div>
				
				<div class="flex-1 text-center md:text-left">
					<h1 class="text-4xl md:text-5xl font-bold text-white mb-2 bg-gradient-to-r from-[#459cff] to-[#5dfffc] bg-clip-text text-transparent">
						Martin Garas
					</h1>
					<p class="text-xl text-[#459cff] mb-4">{t.title}</p>
					
					<div class="flex flex-wrap gap-4 text-sm text-gray-300">
						<a href="mailto:tatsu@tatsudev.net" class="flex items-center gap-2 hover:text-white transition-colors">
							<Mail class="w-4 h-4" />
							tatsu@tatsudev.net
						</a>
						<div class="flex items-center gap-2">
							<MapPin class="w-4 h-4" />
							Düsseldorf, Germany
						</div>
						<a href="https://github.com/StealthOrc" target="_blank" rel="noopener noreferrer" class="flex items-center gap-2 hover:text-white transition-colors">
							<Github class="w-4 h-4" />
							StealthOrc
						</a>
					</div>
				</div>
			</div>
		</header>

		<div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
			<!-- Main Content -->
			<div class="lg:col-span-2 space-y-8">
				<!-- Experience Section -->
				<section class="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
					<h2 class="text-2xl font-bold text-white mb-6 flex items-center gap-3">
						<Briefcase class="w-6 h-6 text-[#1170dc]" />
						{t.experience}
					</h2>
					
					<div class="space-y-6">
						<div class="border-l-2 border-[#1170dc] pl-4 ml-2">
							<div class="flex justify-between items-start mb-2">
								<div>
									<h3 class="text-lg font-semibold text-white">{currentLang === 'en' ? 'Software Developer' : 'Software Entwickler'}</h3>
									<p class="text-[#459cff]">Vanderlande Industries GmbH & Co. KG, Mönchengladbach</p>
								</div>
								<span class="text-sm text-gray-400 flex items-center gap-1 text-nowrap">
									<Calendar class="w-3 h-3" />
									{currentLang === 'en' ? 'Jan 2023 - Present' : 'Jan 2023 - Heute'}
								</span>
							</div>
							<ul class="text-gray-300 text-sm space-y-1 list-disc list-inside">
								<li>{t.updatingMfc}</li>
								<li>{t.developingMfcFeatures}</li>
								<li>{t.introducingVcs}</li>
								<li>{t.updatingAspNet}</li>
							</ul>
						</div>

						<div class="border-l-2 border-[#1170dc] pl-4 ml-2">
							<div class="flex justify-between items-start mb-2">
								<div>
									<h3 class="text-lg font-semibold text-white">{currentLang === 'en' ? 'Full Stack Developer' : 'Full Stack Entwickler'}</h3>
									<p class="text-[#459cff]">MMC GmbH, Düsseldorf</p>
								</div>
								<span class="text-sm text-gray-400 flex items-center gap-1">
									<Calendar class="w-3 h-3" />
									{currentLang === 'en' ? 'Jul 2021 - Dec 2022' : 'Jul 2021 - Dez 2022'}
								</span>
							</div>
							<ul class="text-gray-300 text-sm space-y-1 list-disc list-inside">
								<li>{t.developingRestApi}</li>
								<li>{t.buildingBackend}</li>
								<li>{t.configuringBuild}</li>
								<li>{t.creatingDeployment}</li>
							</ul>
						</div>

						<div class="border-l-2 border-[#1170dc] pl-4 ml-2">
							<div class="flex justify-between items-start mb-2">
								<div>
									<h3 class="text-lg font-semibold text-white">{currentLang === 'en' ? 'Software Developer (Apprenticeship)' : 'Ausbildung zum Fachinformatiker für Anwendungsentwicklung'}</h3>
									<p class="text-[#459cff]">MMC GmbH, Düsseldorf</p>
								</div>
								<span class="text-sm text-gray-400 flex items-center gap-1">
									<Calendar class="w-3 h-3" />
									Jun 2018 - Jun 2021
								</span>
							</div>
							<ul class="text-gray-300 text-sm space-y-1 list-disc list-inside">
								<li>{t.fullStackDev}</li>
								<li>{t.buildingTire}</li>
								<li>{t.creatingReports}</li>
								<li>{t.testDriven}</li>
							</ul>
						</div>

						<div class="border-l-2 border-[#1170dc] pl-4 ml-2">
							<div class="flex justify-between items-start mb-2">
								<div>
									<h3 class="text-lg font-semibold text-white">{currentLang === 'en' ? 'Software Testing Assistant' : 'Aushilfskraft im Bereich Software Testing'}</h3>
									<p class="text-[#459cff]">MMC GmbH, Düsseldorf</p>
								</div>
								<span class="text-sm text-gray-400 flex items-center gap-1">
									<Calendar class="w-3 h-3" />
									{currentLang === 'en' ? 'Oct 2016 - Jun 2018' : 'Okt 2016 - Jun 2018'}
								</span>
							</div>
							<ul class="text-gray-300 text-sm space-y-1 list-disc list-inside">
								<li>{t.softwareTesting}</li>
								<li>{t.testDocumentation}</li>
							</ul>
						</div>
					</div>
				</section>

				<!-- Projects Section -->
				<section class="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
					<h2 class="text-2xl font-bold text-white mb-6 flex items-center gap-3">
						<Code class="w-6 h-6 text-[#1170dc]" />
						{t.projects}
					</h2>
					
					<div class="space-y-4">
						<div class="bg-white/5 rounded-lg p-4 border border-white/10">
							<div class="flex justify-between items-start mb-2">
								<h3 class="text-lg font-semibold text-white">{currentLang === 'en' ? 'Web Supervisor Terminal' : 'Web Leitstand'}</h3>
								<span class="text-xs text-gray-400">{currentLang === 'en' ? 'May 2025 - Present' : 'Mai 2025 - Heute'}</span>
							</div>
							<p class="text-gray-300 text-sm mb-2">{t.supervisorTerminalDesc}</p>
							<div class="flex flex-wrap gap-2">
								<span class="px-2 py-1 bg-[#1170dc]/20 text-white rounded text-xs">JavaScript</span>
								<span class="px-2 py-1 bg-[#1170dc]/20 text-white rounded text-xs">ASP.NET</span>
								<span class="px-2 py-1 bg-[#1170dc]/20 text-white rounded text-xs">C#</span>
								<span class="px-2 py-1 bg-[#1170dc]/20 text-white rounded text-xs">MSSQL</span>
							</div>
						</div>

						<div class="bg-white/5 rounded-lg p-4 border border-white/10">
							<div class="flex justify-between items-start mb-2">
								<h3 class="text-lg font-semibold text-white">{currentLang === 'en' ? 'Material Flow Controller' : 'Material Fluss Rechner'}</h3>
								<span class="text-xs text-gray-400">{currentLang === 'en' ? 'Jan 2023 - Present' : 'Jan 2023 - Heute'}</span>
							</div>
							<p class="text-gray-300 text-sm mb-2">{t.mfcProjectDesc}</p>
							<div class="flex flex-wrap gap-2">
								<span class="px-2 py-1 bg-[#1170dc]/20 text-white rounded text-xs">Delphi</span>
								<span class="px-2 py-1 bg-[#1170dc]/20 text-white rounded text-xs">VCL</span>
								<span class="px-2 py-1 bg-[#1170dc]/20 text-white rounded text-xs">UDP</span>
								<span class="px-2 py-1 bg-[#1170dc]/20 text-white rounded text-xs">TCP</span>
							</div>
						</div>

						<div class="bg-white/5 rounded-lg p-4 border border-white/10">
							<div class="flex justify-between items-start mb-2">
								<h3 class="text-lg font-semibold text-white">{currentLang === 'en' ? 'REST API Integration System' : 'REST API Integrationssystem'}</h3>
								<span class="text-xs text-gray-400">{currentLang === 'en' ? 'Dec 2021 - Dec 2022' : 'Dez 2021 - Dez 2022'}</span>
							</div>
							<p class="text-gray-300 text-sm mb-2">{t.restApiDesc}</p>
							<div class="flex flex-wrap gap-2">
								<span class="px-2 py-1 bg-[#1170dc]/20 text-white rounded text-xs">Lazarus</span>
								<span class="px-2 py-1 bg-[#1170dc]/20 text-white rounded text-xs">Free Pascal</span>
								<span class="px-2 py-1 bg-[#1170dc]/20 text-white rounded text-xs">Apache/FastCGI</span>
								<span class="px-2 py-1 bg-[#1170dc]/20 text-white rounded text-xs">Firebird</span>
							</div>
						</div>

						<div class="bg-white/5 rounded-lg p-4 border border-white/10">
							<div class="flex justify-between items-start mb-2">
								<h3 class="text-lg font-semibold text-white">PowerBI Export Tool</h3>
								<span class="text-xs text-gray-400">{currentLang === 'en' ? 'Jun 2021 - Dec 2021' : 'Jun 2021 - Dez 2021'}</span>
							</div>
							<p class="text-gray-300 text-sm mb-2">{t.powerbiDesc}</p>
							<div class="flex flex-wrap gap-2">
								<span class="px-2 py-1 bg-[#1170dc]/20 text-white rounded text-xs">Delphi</span>
								<span class="px-2 py-1 bg-[#1170dc]/20 text-white rounded text-xs">VCL</span>
								<span class="px-2 py-1 bg-[#1170dc]/20 text-white rounded text-xs">MSSQL</span>
								<span class="px-2 py-1 bg-[#1170dc]/20 text-white rounded text-xs">PostgreSQL</span>
							</div>
						</div>
					</div>
				</section>

				<!-- Education Section -->
				<section class="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
					<h2 class="text-2xl font-bold text-white mb-6 flex items-center gap-3">
						<GraduationCap class="w-6 h-6 text-[#1170dc]" />
						Education
					</h2>
					
					<div class="space-y-4">
						<div class="border-l-2 border-[#1170dc] pl-4 ml-2">
							<div class="flex justify-between items-start mb-2">
								<div class="flex-1 pr-4">
									<h3 class="text-lg font-semibold text-white">{currentLang === 'en' ? 'IT Specialist for Application Development' : 'Fachinformatiker für Anwendungsentwicklung'}</h3>
									<p class="text-[#459cff]">Berufskolleg Hilden</p>
								</div>
								<span class="text-sm text-gray-400 whitespace-nowrap">2018 - 2021</span>
							</div>
							<p class="text-gray-300 text-sm">{t.grade}: 1.7</p>
						</div>

						<div class="border-l-2 border-[#1170dc] pl-4 ml-2">
							<div class="flex justify-between items-start mb-2">
								<div class="flex-1 pr-4">
									<h3 class="text-lg font-semibold text-white">{currentLang === 'en' ? 'Abitur (General Higher Education Entrance Qualification)' : 'Allgemeine Hochschulreife'}</h3>
									<p class="text-[#459cff]">Lessing-Berufskolleg, Düsseldorf</p>
								</div>
								<span class="text-sm text-gray-400 whitespace-nowrap">2015 - 2018</span>
							</div>
							<p class="text-gray-300 text-sm">{t.grade}: 2.0</p>
						</div>
					</div>
				</section>
			</div>

			<!-- Sidebar -->
			<div class="space-y-8">
				<!-- Skills Section -->
				<section class="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
					<h2 class="text-2xl font-bold text-white mb-6 flex items-center gap-3 text-nowrap">
						<Terminal class="w-6 h-6 text-[#1170dc]" />
						Technical Skills
					</h2>
					
					<div class="space-y-4">
						<div>
							<h3 class="text-sm font-semibold text-[#459cff] mb-3">{t.programmingLanguages}</h3>
							<div class="space-y-2">
								<div>
									<div class="flex justify-between text-sm mb-1">
										<span class="text-gray-300">Delphi/Free Pascal</span>
										<span class="text-white">{t.expert}</span>
									</div>
									<div class="w-full bg-white/10 rounded-full h-2">
										<div class="bg-gradient-to-r from-[#1170dc] to-[#459cff] h-2 rounded-full" style="width: 95%"></div>
									</div>
								</div>
								<div>
									<div class="flex justify-between text-sm mb-1">
										<span class="text-gray-300">C#</span>
										<span class="text-white">{t.intermediate}</span>
									</div>
									<div class="w-full bg-white/10 rounded-full h-2">
										<div class="bg-gradient-to-r from-[#1170dc] to-[#459cff] h-2 rounded-full" style="width: 60%"></div>
									</div>
								</div>
								<div>
									<div class="flex justify-between text-sm mb-1">
										<span class="text-gray-300">TypeScript</span>
										<span class="text-white">{t.intermediate}</span>
									</div>
									<div class="w-full bg-white/10 rounded-full h-2">
										<div class="bg-gradient-to-r from-[#1170dc] to-[#459cff] h-2 rounded-full" style="width: 60%"></div>
									</div>
								</div>
								<div>
									<div class="flex justify-between text-sm mb-1">
										<span class="text-gray-300">Svelte</span>
										<span class="text-white">{t.intermediate}</span>
									</div>
									<div class="w-full bg-white/10 rounded-full h-2">
										<div class="bg-gradient-to-r from-[#1170dc] to-[#459cff] h-2 rounded-full" style="width: 60%"></div>
									</div>
								</div>
							</div>
						</div>

						<div>
							<h3 class="text-sm font-semibold text-[#459cff] mb-3">{t.databases}</h3>
							<div class="flex flex-wrap gap-2">
								<span class="px-3 py-1 bg-[#1170dc]/20 text-white rounded-lg text-xs">Firebird</span>
								<span class="px-3 py-1 bg-[#1170dc]/20 text-white rounded-lg text-xs">MSSQL</span>
								<span class="px-3 py-1 bg-[#1170dc]/20 text-white rounded-lg text-xs">PostgreSQL</span>
								<span class="px-3 py-1 bg-[#1170dc]/20 text-white rounded-lg text-xs">MySQL</span>
								<span class="px-3 py-1 bg-[#1170dc]/20 text-white rounded-lg text-xs">MariaDB</span>
							</div>
						</div>

						<div>
							<h3 class="text-sm font-semibold text-[#459cff] mb-3">{t.toolsTech}</h3>
							<div class="flex flex-wrap gap-2">
								<span class="px-3 py-1 bg-[#1170dc]/20 text-white rounded-lg text-xs">Neovim</span>
								<span class="px-3 py-1 bg-[#1170dc]/20 text-white rounded-lg text-xs">VS Code</span>
								<span class="px-3 py-1 bg-[#1170dc]/20 text-white rounded-lg text-xs">Git</span>
								<span class="px-3 py-1 bg-[#1170dc]/20 text-white rounded-lg text-xs">Visual Studio</span>
								<span class="px-3 py-1 bg-[#1170dc]/20 text-white rounded-lg text-xs">Jenkins</span>
								<span class="px-3 py-1 bg-[#1170dc]/20 text-white rounded-lg text-xs">Vite</span>
								<span class="px-3 py-1 bg-[#1170dc]/20 text-white rounded-lg text-xs">Claude Code</span>
							</div>
						</div>
					</div>
				</section>

				<!-- Languages Section -->
				<section class="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
					<h2 class="text-2xl font-bold text-white mb-6 flex items-center gap-3">
						<Globe class="w-6 h-6 text-[#1170dc]" />
						{t.languages}
					</h2>
					
					<div class="space-y-3">
						<div class="flex justify-between items-center">
							<span class="text-gray-300">{currentLang === 'en' ? 'German' : 'Deutsch'}</span>
							<span class="text-sm text-white">{t.native}</span>
						</div>
						<div class="flex justify-between items-center">
							<span class="text-gray-300">{currentLang === 'en' ? 'English' : 'Englisch'}</span>
							<span class="text-sm text-white">{t.advanced}</span>
						</div>
						<div class="flex justify-between items-center">
							<span class="text-gray-300">{currentLang === 'en' ? 'Japanese' : 'Japanisch'}</span>
							<span class="text-sm text-white">{t.intermediate}</span>
						</div>
						<div class="flex justify-between items-center">
							<span class="text-gray-300">{currentLang === 'en' ? 'French' : 'Französisch'}</span>
							<span class="text-sm text-white">{t.basic}</span>
						</div>
					</div>
				</section>

				<!-- Awards Section -->
				<section class="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
					<h2 class="text-2xl font-bold text-white mb-6 flex items-center gap-3">
						<Award class="w-6 h-6 text-[#1170dc]" />
            {t.awards}
					</h2>
					
					<div class="space-y-3">
						<div class="bg-white/5 rounded-lg p-3 border border-white/10">
							<h3 class="text-sm font-semibold text-white mb-1">1st Place - Rockin' Robots 2011</h3>
							<p class="text-xs text-gray-400">Programming Competition, Düsseldorf</p>
						</div>
						<div class="bg-white/5 rounded-lg p-3 border border-white/10">
							<h3 class="text-sm font-semibold text-white mb-1">Innovative Technologies Competition</h3>
							<p class="text-xs text-gray-400">Science on Stage Deutschland e.V., 2012</p>
						</div>
					</div>
				</section>

				<!-- Personal Projects -->
				<section class="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
					<h2 class="text-2xl font-bold text-white mb-6 flex items-center gap-3">
						<Gamepad2 class="w-6 h-6 text-[#1170dc]" />
						{t.personalProjects}
					</h2>
					
					<div class="space-y-3 text-sm">
						<a href="https://github.com/StealthOrc/cult-pardy" target="_blank" rel="noopener noreferrer" 
						   class="block bg-white/5 rounded-lg p-3 border border-white/10 hover:bg-white/10 transition-colors">
							<h3 class="font-semibold text-[#459cff] mb-1">Cult-Pardy</h3>
							<p class="text-xs text-gray-400">{t.jeopardyDesc}</p>
						</a>
						<a href="https://stealthorc.itch.io/pachiiingko" target="_blank" rel="noopener noreferrer" 
						   class="block bg-white/5 rounded-lg p-3 border border-white/10 hover:bg-white/10 transition-colors">
							<h3 class="font-semibold text-[#459cff] mb-1">Pachingko Idle</h3>
							<p class="text-xs text-gray-400">{t.pachingkoDesc}</p>
						</a>
					</div>
				</section>
			</div>
		</div>
	</div>
</div>
