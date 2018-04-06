# Discord DB
Discord Bot Database Manager

## How To Use
1. Require package
```js
var DiscordDB=require("discord-db");
```
2. Create database manager
```js
var GuildConfig=new DiscordDB.GuildConfig(guild_id,{"prefix":"!!"});

var UserConfig=new DiscordDB.UserConfig(user_id,{"prefix":"USER>"});

var GenericDatabase=new DiscordDB.Database("generic","./data/",{"some":"data"});
//                                                   ^       Optional        ^
```
3. Set data
```js
GuildConfig.set("prefix","??");
```
4. Get data
```js
console.log(GuildConfig.get("prefix"));
```
5. Save data
```js
GuildConfig.save();
```
