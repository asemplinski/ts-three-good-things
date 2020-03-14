
const fs = require("fs");
const path = require("path");
const webpack = require("webpack");


// shim react-navigation missing types by edit code directly 
/*
Object.entries({
  DrawerRouter: ["DrawerActionType", "DrawerNavigationState", "DrawerRouterOptions"],
  StackRouter: ["StackActionType", "StackNavigationState", "StackRouterOptions"],
  TabRouter: ["TabActionType", "TabNavigationState", "TabRouterOptions"],
}).forEach(([file, types]) => {
  const filePath = path.resolve(__dirname, `node_modules/@react-navigation/routers/lib/module/${file}.js`);
  const code = fs.readFileSync(filePath).toString();*/
  //if (code.endsWith("/*shim-added*/")) return;
  //fs.writeFileSync(filePath, `${code}\n${types.map(type => `export const ${type} = null;`).join("\n")}/*shim-added*/`);
//});


// original webpack override config..
/*
module.exports = {
  webpack(config, env) }

*/ 