//从135、秀米编辑器把文章保存为本地
/**
 * 
 * @param {*} str 需要重新解析的字符串 
 */
const conversionString = (str) => {
    //把 section 标签转为 div 标签，因为微信富文本不支持 section 标签
    str = str.replace(/<section/g, "<div").replace(/<\/section/g, "</div");

    //获得所有文章中的链接路径
    let arr = str.match(/(http:\/\/|https:\/\/)((\w|=|\?|\.|\/|&|-)+)/g);

    //根据实际公司情况排除已保存在本地的文件
    for (let index = 0; index < arr.length; index++) {
        arr[index] = arr[index]
            .replace(/(^&quot*)|(&quot*$)/g, "")
            .filter((item) => item.indexOf("//img.hmeshop.cn") == -1);
    }
    // 发起请求
    return new Promise((resolve, reject) => {
        this.$get(
            "http://192.168.3.159:8085/api/PublicHandler.ashx?action=SaveNetImagesToOss", {
                jsonData: JSON.stringify(arr),
            }
        ).then((res) => {
            if (res.Status !== "Success") reject(res.Message);
            let data = res.Data;
            for (let i = 0; i < data.length; i++) {
                //把地址替换过来
                str = str.replace(arr[i], data[i]);
            }
            resolve(str);
        });
    });
}

module.exports = {
    conversionString
}