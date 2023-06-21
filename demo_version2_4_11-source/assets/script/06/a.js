import bInstance from './b'

cc.Class({
    extends: cc.Component,

    properties: {
        ansLabel:{
            type:cc.Label,
            default:null
        }
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {
        this.instance1 = bInstance;
        this.instance2 = bInstance;
    },
    getBFunctionData(){
        this.ansLabel.string=bInstance.publicFunction();
        console.log(this.instance1 === this.instance1); // true
        console.log(bInstance.publicFunction());
        console.log(bInstance.param);
    }

    // update (dt) {},
});
