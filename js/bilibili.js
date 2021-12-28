function removeWhenMatch(arr, met) {
    if (Array.isArray(arr)) {
        let i = 0
        let found = false
        for (; i < arr.length; i++) {
            let item = arr[i]
            if (met(item)) {
                found = true
                break
            }
        }
        arr.splice(i, 1)
    }
}

var obj = JSON.parse($response.body);
if (obj.data) {
    delete obj.data.vip_section
    delete obj.data.vip_section_right
    delete obj.data.vip_section_v2
    var sections = obj.data.sections_v2
    removeWhenMatch(sections, (item) => {
        return item.title == "推荐服务"
    })

}
$done({ body: JSON.stringify(obj) }); 