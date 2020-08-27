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
