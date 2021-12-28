function removeWhenMatch(arr, met) {
    if (!arr) {
        return
    }
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

if (obj.data) {
    delete obj.data.vip_section
    delete obj.data.vip_section_right
    delete obj.data.vip_section_v2
    delete obj.data.live_tip
    removeWhenMatch(obj.data.sections_v2, (item) => {
        return item.title == "推荐服务"
    })
    removeWhenMatch(obj.data.sections_v2, (item) => {
        return item.title == "创作中心"
    })
    removeWhenMatch(obj.data.sections_v2, (item) => {
        return item.title == "推荐服务"
    })
}
$done({ body: JSON.stringify(obj) }); 