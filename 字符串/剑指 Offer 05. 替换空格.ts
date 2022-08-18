function replaceSpace(s: string): string {
    let result = '';
    for(let c of s){
        result += c === ' '? '%20' : c;
    }
    return result;
};