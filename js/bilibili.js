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
var obj = JSON.parse($response.body);
delete obj.data.vip_section
delete obj.data.vip_section_right
delete obj.data.vip_section_v2
delete obj.data.live_tip
let sections = obj.data.sections_v2
if (Array.isArray(sections)) {
    const disabledTitles = ["推荐服务", "创作中心", "推荐服务"]
    const disabledIds = [408, 409]
    sections = sections.filter(val => {
        return disabledTitles.indexOf(val.title) == -1
    })
    sections.forEach(val => {
        val.items = val.items.filter(item => {
            return disabledIds.indexOf(item.id) == -1
        })
    })
}
obj.data.sections_v2 = sections
$done({ body: JSON.stringify(obj) }); 