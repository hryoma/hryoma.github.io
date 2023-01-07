import type { Project } from '$lib/types/project';

const imageDir = "project-images/";

export const projects: Project[] = [
	{
		image: `${imageDir}analog-potter.png`,
		title: "Analog Plotter",
		type: "ESE 215 Class Project",
		startDate: "2021-11",
		endDate: "2021-12",
		desc: "Analog plotter made using op-amps, controlled by potentiometers.",
		links: {
			github: [],
			website: [],
			misc: []
		},
		tags: {
			field: ["electronics"],
			framework: [],
			language: ["C++"],
			tech: ["Arduino"],
		}
	},
	{
		image: `${imageDir}arduino-pong-and-snake-game.png`,
		title: "Arduino Pong and Snake Game",
		type: "ESE 350 Class Project",
		startDate: "2022-03",
		endDate: "2022-03",
		desc: "Pong and Snake programmed in C, controlled by a joystick of wirelessly via Bluetooth.",
		links: {
			github: [],
			website: [],
			misc: []
		},
		tags: {
			field: ["embedded systems", "game dev"],
			framework: ["AVR"],
			language: ["C"],
			tech: ["ATMega328", "Node MCU"],
		}
	},
	{
		image: `${imageDir}cynfolia.png`,
		title: "Cynfolia",
		type: "Team Project",
		startDate: "2021-04",
		endDate: "2022-04",
		desc: "Food waste startup, co-founded with a group of friends. Awarded 2nd place in the 2021 PCV Prize pitch competition.",
		links: {
			github: [],
			website: ["http://cynfolia.com"],
			misc: []
		},
		tags: {
			field: ["startup", "full-stack"],
			framework: ["Django", "React"],
			language: ["Python", "JS"],
			tech: ["Heroku"],
		}
	},
	{
		image: `${imageDir}differential-privacy-and-fairness-in-ml.png`,
		title: "Differential Privacy and Fairness in Machine Learning",
		type: "CIS 523 Class Project",
		startDate: "2022-04",
		endDate: "2022-05",
		desc: "Exploration of ML implementation of differential privacy using TensorFlow's DP-SGD and fairness using the Fairlearn package.",
		links: {
			github: [],
			website: [],
			misc: []
		},
		tags: {
			field: ["ML", "differential privacy", "fairness"],
			framework: [],
			language: ["Python"],
			tech: ["TensorFlow", "Fairlearn"],
		}
	},
	{
		image: `${imageDir}equipotential-grapher.png`,
		title: "Equipotential Grapher",
		type: "Independent Project",
		startDate: "2020-06",
		endDate: "2020-06",
		desc: "Equipotential grapher built for my high school physics teacher and class.",
		links: {
			github: [],
			website: [],
			misc: []
		},
		tags: {
			field: ["web dev"],
			framework: [],
			language: ["JS", "jQuery"],
			tech: [],
		}
	},
	{
		image: `${imageDir}evolving-race-cars.png`,
		title: "Evolving Race Cars",
		type: "Independent Project",
		startDate: "2019-06",
		endDate: "2019-06",
		desc: "Race cars that 'evolve' to make its way around a track.",
		links: {
			github: [],
			website: [],
			misc: []
		},
		tags: {
			field: ["game dev"],
			framework: [],
			language: ["Python"],
			tech: ["Pygame"],
		}
	},
	{
		image: `${imageDir}eyeronic.png`,
		title: "Eyeronic",
		type: "Hackathon Project",
		startDate: "2021-09",
		endDate: "2021-09",
		desc: "PennApps XXII project, where we used OpenCV to select only the 'bad' photos where a person's eyes are closed.",
		links: {
			github: [],
			website: [],
			misc: []
		},
		tags: {
			field: ["ML", "back-end"],
			framework: ["Flask"],
			language: ["Python", "JS"],
			tech: ["OpenCV"],
		}
	},
	{
		image: `${imageDir}j-compiler.png`,
		title: "J Compiler",
		type: "CIS 240 Class Project",
		startDate: "2021-12",
		endDate: "2021-12",
		desc: "Project written in C that compiles J, a stack-based language, into LC4 Assembly",
		links: {
			github: [],
			website: [],
			misc: []
		},
		tags: {
			field: ["computer systems"],
			framework: [],
			language: ["C", "J", "LC4 Assembly"],
			tech: [],
		}
	},
	{
		image: `${imageDir}minesweeper.png`,
		title: "Minesweeper",
		type: "CIS 120 Class Project",
		startDate: "2020-11",
		endDate: "2020-12",
		desc: "Built a game of minesweeper with the added functionality of saving game state.",
		links: {
			github: [],
			website: [],
			misc: []
		},
		tags: {
			field: ["game dev"],
			framework: [],
			language: ["Java"],
			tech: ["JSwing"],
		}
	},
	{
		image: `${imageDir}mini-facebook-clone.png`,
		title: "Mini-Facebook Clone",
		type: "NETS 212 Class Project",
		startDate: "2021-11",
		endDate: "2021-12",
		desc: "Mini-Facebook clone, featuring user accounts, posts, messenger using socket.io, and news feed with a PageRank-like recommendation system.",
		links: {
			github: [],
			website: [],
			misc: []
		},
		tags: {
			field: ["web dev"],
			framework: ["Node"],
			language: ["Java", "JS", "jQuery"],
			tech: ["AWS", "socket.io", "Apache Livy"],
		}
	},
	{
		image: `${imageDir}mysongsql.png`,
		title: "MySongsQL",
		type: "CIS 550 Class Project",
		startDate: "2022-03",
		endDate: "2022-05",
		desc: "Advanced song-querying site with complex, optimized database queries.",
		links: {
			github: [],
			website: [],
			misc: []
		},
		tags: {
			field: ["web dev", "databases"],
			framework: ["Node", "React"],
			language: ["MySQL", "JS"],
			tech: ["Amazon RDS", "Heroku", "Netlify"],
		}
	},
	{
		image: `${imageDir}no-more-temp-cards.png`,
		title: "No More Temp Cards!",
		type: "ESE 350 Class Project",
		startDate: "2022-03",
		endDate: "2022-04",
		desc: "Device that allows unlocking of dorm door wirelessly over Wi-Fi. Explored that CAN communication protocol and Nucleo boards.",
		links: {
			github: [],
			website: [],
			misc: []
		},
		tags: {
			field: ["embedded systems", "electronics"],
			framework: [],
			language: ["C++"],
			tech: ["Nucleo MCU", "Node MCU"],
		}
	},
	{
		image: `${imageDir}rocket-payload-separation.png`,
		title: "Rocket Payload Separation",
		type: "Team Project",
		startDate: "2018-11",
		endDate: "2019-03",
		desc: "Mechanical separation of a model rocket payload using altitude sensing.",
		links: {
			github: [],
			website: [],
			misc: []
		},
		tags: {
			field: ["electronics", "rocketry"],
			framework: [],
			language: ["C", "C++"],
			tech: ["Arduino", "3D printing", "RockSim"],
		}
	},
].sort((a, b) => {
	let currA = "Current" === a.endDate;
	let currB = "Current" === b.endDate;
	let startA: Date = new Date(a.startDate);
	let startB: Date = new Date(b.startDate);
	let endA: Date = new Date(a.endDate);
	let endB: Date = new Date(b.endDate);

	if (currA && currB) {
		if (startA - startB === 0) {
			return a.title.localeCompare(b.title);
		} else {
			return startB - startA;
		}
	} else if (currA || currB) {
		return -1;
	} else {
		if (endA - endB === 0) {
			if (startA - startB === 0) {
				return a.title.localeCompare(b.title);
			} else {
				return startB - startA;
			}
		} else {
			return endB - endA;
		}
	}
}).map((project) => {
	project.startDate = new Date(project.startDate)
		.toLocaleString('en-us', { month:'short', year:'numeric' });
	project.endDate = new Date(project.endDate)
		.toLocaleString('en-us', { month:'short', year:'numeric' });
	return project;
});

