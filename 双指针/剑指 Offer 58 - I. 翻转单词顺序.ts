// 不用api
function reverseWords(s: string): string {
    const resultArr: string[] = [];
    let word_end = s.length - 1, word_start = s.length - 1;
    while (s[word_end] === ' ') {
        word_end--;
        word_start--;
    }
    while (word_start >= 0 && word_end >= 0) {
        while (word_start >= 0 && s[word_start] !== ' ') word_start--;
        // 处理一个单词
        let str = '';
        for (let i = word_start + 1; i <= word_end; i++) {
            str += s[i];
        }
        str && resultArr.push(str);
        word_start--;
        word_end = word_start;
    }

    let resultStr = '';
    resultArr.forEach((str, index) => {
        resultStr += `${index ? ' ' : ''}${str}`;
    })
    return resultStr;
};