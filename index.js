
function superbowlWin(records) {
    let ans = null
    records.find(record => ans = findRecord(record) )
    return ans != undefined ? ans.year : ans 
}

function findRecord(record) {
  
       return record.result === 'W' ? record : undefined
}