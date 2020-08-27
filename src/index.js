// "use strict";

// const packageName = require("../package.json").name;
// const cosmiconfig = require("cosmiconfig");
// const log = require("loglevel");

// log.setLevel(process.env.LOG_LEVEL || "info");

// module.exports = async function init(bundler) {
//   const explorer = cosmiconfig(packageName);
//   let config;

//   try {
//     const result = await explorer.search();
//     config = result.config;
//   } catch (e) {
//     log.trace(e);
//   }

//   const extensions = (config && config.extension) || ["graphql"];

//   for (const ext of extensions) {
//     bundler.addAssetType(ext, require.resolve("./transformer"));
//   }
// };


import {Transformer} from "@parcel/plugin";
import gql from "graphql";

export default new Transformer({
	async transform({asset}) {
		let code = await asset.getCode();
		let result = gql(code);
		asset.setCode(`module.exports = ${JSON.stringify(result)};`);
		return asset;
	}
}
