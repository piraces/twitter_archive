let data = {
	username: "piraces_", // No leading @ here
	homeLabel: "piraces.dev",
	homeUrl: "https://piraces.dev/",
};

data.avatar = `https://v1.indieweb-avatar.11ty.dev/${encodeURIComponent(data.homeUrl)}/`;

module.exports = data;