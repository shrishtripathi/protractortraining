//protected can access the current class and subclasses (and sometimes also same-package classes)

class Human{
     private names: string[];
     constructor() {
       this.names = [];
    }
    protected setData(index: number, item: string) {
        this.names[index] = item;
    }
}
class Records extends Human{
       currentIndex: number;
       constructor() {
         super();
         this.currentIndex = 0;
    }
     public push(item: string) {
        this.setData(this.currentIndex, item);
        this.currentIndex++;
    }
}

var data = new Records();
data.setData(0, "name");

