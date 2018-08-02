function transform(htmlStr){
    let reg = /(<red>|<\/red>)/g
    let testStack = new Stack
    let tmp = {}
    while(tmp){
        tmp = reg.exec(htmlStr)
       if(tmp && !testStack.test(tmp[0])) {
            return testStack.iscorrect
       }
    }
    return !testStack.stack.length
}
//用来验证格式是否正确的栈
function Stack(){
    this.stack = []
    this.iscorrect = true
    this.test = function(str){
        if(str == '<red>'){this.stack.push(1)
            return true} else if(str == '</red>' && !this.stack.length){
            this.iscorrect = false
            return false
        } else{
            this.stack.pop()
            return true
        }
    }
}
function BulidArray(str){
    this.result = []
    this.str = str
    this.build = function(index){

    }
}
transform('<red></red>')