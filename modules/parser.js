// https://rosettacode.org/wiki/S-Expressions
function parseString(str) {
    var t = str.match(/\s*("[^"]*"|\(|\)|"|[^\s()"]+)/g)
	for (var o, c=0, i=t.length-1; i>=0; i--) {
		var n, ti = t[i].trim()
		if (ti == '"') return
		else if (ti == '(') t[i]='[', c+=1
		else if (ti == ')') t[i]=']', c-=1
		else if ((n=+ti) == ti) t[i]=n
		else t[i] = '\'' + ti.replace('\'', '\\\'') + '\''
		if (i>0 && ti!=']' && t[i-1].trim()!='(' ) t.splice(i,0, ',')
		if (!c) if (!o) o=true; else return
	}
	return c ? undefined : eval(t.join(''))
}

module.exports = parseString