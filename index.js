var fs=require("fs");

var base={
  "dir":"./data"
};

class Database {
  constructor(name,loc,def){
    if(!loc){
      loc=base.dir+"/"+name+".json";
    }else{
      loc=loc+name;
    }
    if(!def){
      def=[];
    }
    this.def=def;
    this.loc=loc;
    if(fs.existsSync(loc)){
      this.data=JSON.parse(fs.readFileSync(loc,"utf8"));
    }else{
      this.data=this.def;
      this.save();
    }
  }
  set(key,val){
    this.data[key]=val;
  }
  get(key){
    return this.data[key];
  }
  update(){
    this.data=JSON.parse(fs.readFileSync(this.loc,"utf8"));
  }
  save(data){
    if(!data){
      data=this.data;
    }
    fs.writeFileSync(this.loc,JSON.stringify(data));
  }
}

class GuildConfig {
  constructor(id,defaultData){
    if(!defaultData){
      defaultData={};
    }
    this.defaultData=defaultData;
    this.db=new Database(id,base.dir+"/guilds/",defaultData);
  }
  get(key){
    return this.db.get(key);
  }
  set(key,val){
    this.db.set(key,val);
  }
  update(){
    this.db.update();
  }
  save(){
    this.db.save();
  }
}

class UserConfig {
  constructor(id,defaultData){
    if(!defaultData){
      defaultData={};
    }
    this.defaultData=defaultData;
    this.db=new Database(id,base.dir+"/users/",defaultData);
  }
  get(key){
    return this.db.get(key);
  }
  set(key,val){
    this.db.set(key,val);
  }
  update(){
    this.db.update();
  }
  save(){
    this.db.save();
  }
}

module.exports={
  "Database":Database,
  "GuildConfig":GuildConfig,
  "UserConfig":UserConfig
};
