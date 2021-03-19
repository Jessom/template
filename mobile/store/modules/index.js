const files = require.context('.', false, /\.js$/)
let fileNames = {}
const modules = {}

files.keys().forEach(key => {
	if (key === './index.js') return
	
	const item = files(key).default
	let name = key.replace(/\.\//, '').replace(/\.js/, '')
	modules[name] = item
	fileNames[name] = name
})

export default {
	modules,
	fileNames
}