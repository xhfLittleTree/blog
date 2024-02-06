const tinify = require("tinify");
const fs = require("fs")
const path = require('path')
const fsPromise = fs.promises
const SOURCE = "./docs/.vuepress/public/photo/"
const TARGET = "./docs/.vuepress/public/compress/"

async function start(){
	let dirArr = await fsPromise.readdir(SOURCE)
	let dirCompressArr = await fsPromise.readdir(TARGET)
	dirArr.forEach((item)=>{
		let targetFile = `compress-${item}`
		if(!dirCompressArr.includes(targetFile)){
			fsPromise.writeFile(path.resolve(TARGET,targetFile),'')
			compressImg(path.resolve(SOURCE,item),path.resolve(TARGET,targetFile))
		}
	})
}


function compressImg(source,target){
	tinify.key = "vDvl975wyy9wVmMvHbQVHYgWSBVxyGfZ";
	const res = tinify.fromFile(source);
	res.toFile(target)
}

(async ()=>{
	await start()
})()


