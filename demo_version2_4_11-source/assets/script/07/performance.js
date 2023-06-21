

cc.Class({
    extends: cc.Component,

    properties: {
       canvasNode:{
            type:cc.Node,
            default:null,
       },
       lowBtn:{
            type:cc.Button,
            default:null,
       },
       highBtn:{
            type:cc.Button,
            default:null,
        },
        clearBtn:{
            type:cc.Button,
            default:null,
       },
       fontBtn:{
        type:cc.Button,
            default:null,
       },
       drawNode:{
        type:cc.Node,
        default:null,
       }
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        
    },

    start () {
        this.lowBtn.node.on("click", this.onLoadAll, this);
        this.highBtn.node.on("click", this.onloadSpriteFrame, this);
        this.clearBtn.node.on("click", this.onClear, this);
        this.fontBtn.node.on("click", this.onloadFont, this);
    },
    onLoadAll() {
        this.onClear();
        var imgArray=["img2","img"];
        cc.resources.loadDir(imgArray, (err, assets) => {
            this._assets = assets;
            for (var i = 0; i < assets.length; ++i) {
                var asset = assets[i];
                var node = new cc.Node("New " + i);
                node.setPosition(i*2, 0);
                component = node.addComponent(cc.Sprite);
                component.spriteFrame = new cc.SpriteFrame(asset);
                this.drawNode.addChild(node);
            }
            //21
        });
    },
    onloadSpriteFrame(){
        var assets=["Anima","Charged"];
        var assetsName=["Effect_Anima_1_0","Effect_Charged_1_0"];
        this.onClear();
        for(var j = 0; j < assets.length; ++j){
            cc.resources.load(assets[j], cc.SpriteAtlas, (err, atlas) => {
                // assets.push(atlas.addRef());
                
                var spriteFrames = atlas.getSpriteFrames();
                // console.log(spriteFrames)
                for(var i = 0; i < spriteFrames.length; ++i){
                    // console.log(spriteFrames[i]._name)
                    var node = new cc.Node();
                    node.position = cc.v2(i*2, 0);
                    var sprite = node.addComponent(cc.Sprite);
                    var num=(i<10)?"0"+i:i;
                    // sprite.spriteFrame = atlas.getSpriteFrame(assetsName[j]+num);
                    sprite.spriteFrame = atlas.getSpriteFrame(spriteFrames[i]._name);
                    // console.log(assetsName[j]+num);
                    this.drawNode.addChild(node);
                }
            //    console.log(this.drawNode.getChildren());
            });
        }
        
    },
    onloadFont(){
        this.onClear();
        
        cc.resources.load("font", cc.Font, (err, res)=>{
            
            var node = new cc.Node("label");
            node.setPosition(100, 100);
            var component = node.addComponent(cc.Label);
            component.font = res;
            component.lineHeight = 40;
            component.string = "This is BitmapFont!";
            this.drawNode.addChild(node);

            console.log(this.drawNode.getChildren());
        });

    },
    onClear(){
        this.drawNode.removeAllChildren(true);
    }

    // update (dt) {},
});
