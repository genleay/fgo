class Servant{
    constructor(servant_json){
        //const
        this.ATK_FIX_ARCHER = 0.95;
        this.ATK_FIX_LANCER = 1.05;
        this.ATK_FIX_CASTER = 0.9;
        this.ATK_FIX_ASSASSIN = 0.9;
        this.ATK_FIX_BERSERKER = 1.1;
        this.ATK_FIX_RULER = 1.1;
        this.ATK_FIX_AVENGER = 1.1;
        
        //atk相關
        
        //np相關
        
        //GETER- basic data
        this.getId = function(){ return servant_json['servant']['property']['id']; };
        this.getName = function(lang = 'jp'){ return servant_json['servant']['property']['name'][lang]; };
        this.getKurasu = function(lang = 'type'){ return servant_json['servant']['property']['class'][lang]; };
        this.gerRare = function(){ return servant_json['servant']['property']['rare']; };
        this.getCost = function(){ return servant_json['servant']['property']['cost']; };
        this.getHp = function(lv = 'lv-1'){ return servant_json['servant']['property']['hp'][lv]; };
        this.getAtk = function(lv = 'lv-1'){ return servant_json['servant']['property']['atk'][lv]; };
        this.getAlignment = function(lang = 'type'){ return servant_json['servant']['property']['alignment'][lang]; };
        this.getGender = function(lang = 'type'){ return servant_json['servant']['property']['gender'][lang]; };
        this.getTraits = function(lang = 'type'){ return servant_json['servant']['property']['traits'][lang]; };
        this.getStarabs = function(){ return servant_json['servant']['property']['star-abs']; };
        this.getStargen = function(){ return servant_json['servant']['property']['star-gen']; };
        this.getNpChargeAtk = function(){ return servant_json['servant']['property']['np-charge-atk']; };
        this.getNpChargeDef = function(){ return servant_json['servant']['property']['np-charge-def']; };
        this.getDeathRate = function(){ return servant_json['servant']['property']['death-rate']; };
        this.getBuster = function(){
            return {
                getHold: function() { return servant_json['servant']['property']['buster']['hold']; },
                getHits: function() { return servant_json['servant']['property']['buster']['hits']; },
                getNpRate: function() { return servant_json['servant']['property']['buster']['np-rate']; }
            };
        };
        this.getArts = function(){
            return {
                getHold: function() { return servant_json['servant']['property']['arts']['hold']; },
                getHits: function() { return servant_json['servant']['property']['arts']['hits']; },
                getNpRate: function() { return servant_json['servant']['property']['arts']['np-rate']; }
            };
        };
        this.getQuick = function(){
            return {
                getHold: function() { return servant_json['servant']['property']['quick']['hold']; },
                getHits: function() { return servant_json['servant']['property']['quick']['hits']; },
                getNpRate: function() { return servant_json['servant']['property']['quick']['np-rate']; }
            };
        };
        this.getEx = function(){
            return {
                getHits: function() { return servant_json['servant']['property']['ex']['hits']; },
                getNpRate: function() { return servant_json['servant']['property']['ex']['np-rate']; }
            };
        };
        this.getNp = function(){
            return{
                getHits: function() { return servant_json['servant']['property']['np']['hits']; },
                getNpRate: function() { return servant_json['servant']['property']['np']['np-rate']; }
            };
        };
        
        //GETER- passive skill
        this.getPassiveSkill = function(){
            return {
                getSkillCount: function(){ return servant_json['servant']['p-skill']['skill'].length; },
                getSkill: function(num){
                    return {
                        getName: function(lang = 'jp'){ return servant_json['servant']['p-skill']['skill'][num]['name'][lang]; },
                        getIco: function(){ return servant_json['servant']['p-skill']['skill'][num]['ico']; },
                        getDescription: function(lang = 'jp'){ servant_json['servant']['p-skill']['skill'][num]['description'][lang]; },
                        getEffect: function(){ return servant_json['servant']['p-skill']['skill'][num]['effect']; }
                    };
                }
            };
        };
        
        this.getActiveSkill = function(){
            return {
                getSkillCount: function(){ return servant_json['servant']['a-skill']['skill'].length; },
                getSkill: function(num,version = 'original'){
                    return {
                        hasUpgrade: function(ver = 'upgrade'){ return (ver in servant_json['servant']['a-skill']['skill'][num]); },
                        getName: function(lang = 'jp'){ return servant_json['servant']['a-skill']['skill'][num][version]['name'][lang]; },
                        getIco: function(){ return servant_json['servant']['a-skill']['skill'][num][version]['ico']; },
                        getDescription: function(lang = 'jp'){ return servant_json['servant']['a-skill']['skill'][num][version]['description'][lang]; },
                        getCostdown: function(){ return servant_json['servant']['a-skill']['skill'][num][version]['costdown']; },
                        getEffect: function(lv = 1){
                            let skill_lv = "lv-" +lv;
                            return servant_json['servant']['a-skill']['skill'][num][version]['effect'][skill_lv];
                        }
                    };
                }
            };
        };
        
        this.getNoblePhantasm = function(version = 'original'){
            return {
                hasUpgrade: function(ver = 'upgrade'){ return (ver in servant_json['servant']['noble-phantasm']); },
                getName: function(lang = 'jp'){ return servant_json['servant']['noble-phantasm'][version]['name'][lang]; },
                getCard: function(){ return servant_json['servant']['noble-phantasm'][version]['card']; },
                getDescription: function(lang = 'jp'){ return servant_json['servant']['noble-phantasm'][version]['description'][lang]; },
                getCostdown: function(){ return servant_json['servant']['noble-phantasm'][version]['costdown']; },
                getEffect: function(lv = 1){
                    let skill_lv = "lv-" +lv;
                    return servant_json['servant']['noble-phantasm'][version]['effect'][skill_lv];
                }
            };
        };
        
        this.getSetting = function(){
            return {
                getBattleServantSprite: function(){
                    return {
                        getHeight: function(){ return servant_json['servant']['setting']['image']['battle']['servant-sprite']['height']; },
                        getGroundPoint: function(){ return servant_json['servant']['setting']['image']['battle']['servant-sprite']['ground-point']; }
                    };
                },
            };
        };
    }
}