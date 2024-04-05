// Rest API By ZeeOfc
// Dilarang Reupload, Share, Apalagi Dijual!
// Berani Jual? Neraka Menunggumu.

const fs = require("fs");

// Setting Owner dan Apikey
global.creator = "ZeeOfc";
global.apikey = ["ZeeKey"];

// Bagian Sini Biarin Aja
let file = require.resolve(__filename);
fs.watchFile(file, () => {
	fs.unwatchFile(file);
	console.log(`Update'${__filename}'`);
	delete require.cache[file];
	require(file);
});
