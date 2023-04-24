module.exports = {
	name: "CTeamSheet",
	description: "Team Sheet for the Celebrities",
	category: "Football",
	icon: "user",
	hasEntries: true,
	multipleVisibleEntries: false,
	default: {
		style: {
			horizontal_position: "center",
			vertical_position: "center",
			width: "100",
			height: '100'
		}
	},
	entry_props: [
		{
			name: "Cgk",
			description: "GoalKeeper Number",
			type: "String"
		},
		{
			name: "Cgkname",
			description: "GoalKeeper Name",
			type: "String"
		},
		{
			name: "Crb",
			description: "Right Back",
			type: "String"
		},
		{
			name: "Ccb1",
			description: "Centre Back 1",
			type: "String"
		},
		{
			name: "Ccb2",
			description: "Centre Back 2",
			type: "String"
		},
		{
			name: "Ccb3",
			description: "Centre Back 3",
			type: "String"
		},
		{
			name: "Clb",
			description: "Left Back",
			type: "String"
		},
		{
			name: "Crm",
			description: "Right Midfielder",
			type: "String"
		},
		{
			name: "Ccdm",
			description: "Centre Defensive Midfielder",
			type: "String"
		},
		{
			name: "Ccm1",
			description: "Centre Midfielder 1",
			type: "String"
		},
		{
			name: "Ccm2",
			description: "Centre Midfielder 2",
			type: "String"
		},
		{
			name: "Ccm3",
			description: "Centre Midfielder 3",
			type: "String"
		},
		{
			name: "Ccam",
			description: "Centre Attacking Midfielder",
			type: "String"
		},
		{
			name: "Clm",
			description: "Left Midfielder",
			type: "String"
		},
		{
			name: "Crw",
			description: "Right Winger",
			type: "String"
		},
		{
			name: "Cst1",
			description: "Striker 1",
			type: "String"
		},
		{
			name: "Cst2",
			description: "Striker 2",
			type: "String"
		},
		{
			name: "Cst3",
			description: "Striker 3",
			type: "String"
		},
		{
			name: "Clw",
			description: "Left Winger",
			type: "String"
		},
	],
	vue_template: getFile("imgtest.html").toString(),
	//vue_component: getFile("component.js").toString(),
	css: getFile("style.css").toString()
}
