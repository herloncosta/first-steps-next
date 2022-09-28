// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const profile = {
	name: "Herlon Costa",
	level: "Junior",
	stack: "MERN - Mongo Express React Node",
	principalLanguage: "Javascript",
};

export default function handler(req, res) {
	res.status(200).json(profile);
}
