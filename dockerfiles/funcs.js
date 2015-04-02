var m = module.exports = {}

m.replace = function replace(str,keys) {
  var regex = /\{\{.+?\}\}/g
  return str.replace(regex,function(match) {
    match = match.substr(2,match.length-4).toLowerCase()
    if(!keys[match]) return 'NULL'
    return keys[match]
  })
}

m.generatePkgStr = function generatePkgStr(pkgs) {
  return pkgs.reduce(function(str,v){return str+='      '+v+' \\\n'},'')
}
