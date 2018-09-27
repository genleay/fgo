class Enemy{
    constructor(enemy_json){
        this.name = enemy_json['enemy']['property']['name'];
        this.kurasu = "";
        
        this.getName = function(lang = 'jp'){
            return this.name[lang];
        };
        this.setName = function(name_array){
            this.name = name_array;
        };
        
        this.setKurasu = function(class_name){
            this.kurasu = class_name;
        };
        
        this.getSetting = function(){
            return {
                getBattleEnemySprite: function(){
                    return {
                        getFilename: function(){ return enemy_json['enemy']['setting']['image']['battle']['servant-sprite']['filename']; },
                        getHeight: function(){ return enemy_json['enemy']['setting']['image']['battle']['servant-sprite']['height']; },
                        getGroundPoint: function(){ return enemy_json['enemy']['setting']['image']['battle']['servant-sprite']['ground-point']; }
                    };
                },
            };
        };
    }
}