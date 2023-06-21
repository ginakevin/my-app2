

cc.Class({
    extends: cc.Component,

    properties: {
       startBtn:{
            type:cc.Button,
            default:null,
       }
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {},

    start () {
        this.startBtn.node.on("click", this.startScene, this);
    },
    startScene(){
        cc.director.preloadScene("7_performance", function (error) {
            if (error) {
                console.error("Failed to preload GameScene: " + error);
                return;
            }
            //當前場景的opacity在0.5秒內先設為0
            cc.tween(cc.director.getScene())
                .to(0.5, { opacity: 0 })
                .call(() => {
                    cc.director.loadScene("7_performance", () => {
                    const newSceneNode = cc.director.getScene();
                    newSceneNode.opacity = 0;
                         //新場景的opacity在0.5秒內設為255
                        cc.tween(newSceneNode)
                            .to(0.5, { opacity: 255 })
                            .start();
                    });
                })
                .start();
        });
    
    },

    // update (dt) {},
});
