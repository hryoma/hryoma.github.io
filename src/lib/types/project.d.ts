export type Project = {
	image: string;
	title: string;
	type: string;
	startDate: string;
	endDate: string;
	desc: string;
	links: {
		github: Array<string>;
		website: Array<string>;
		misc: Array<string>;
	};
	tags: {
		field: Array<string>;
		framework: Array<string>;
		language: Array<string>;
		tech: Array<string>;
	};
};
