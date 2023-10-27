export default {
	install(Vue){
		Vue.prototype.$downloadFile=(content, fileName = '')=>{
				let aLink = document.createElement('a')
				aLink.download = fileName;
				aLink.setAttribute('href', content)
				aLink.click()
		}
		Vue.prototype.$copyToClipboard=(value, cb)=>{
		        const textarea = document.createElement("textarea");
		        textarea.value = value;
		        document.body.appendChild(textarea);
		        textarea.select();
		        document.execCommand("copy");
		        document.body.removeChild(textarea);
		        cb && cb();
		}
	}
}