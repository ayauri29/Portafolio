const container = document.getElementById("projects-container")
const btnJs = document.getElementById("javascript")
const btnReact = document.getElementById("react")
const btnVue = document.getElementById("vue")

// const cloneProjects = PROJECTS;
// let projects_filtered = cloneProjects.filter(obj => {
// 	obj.tools = obj.tools.filter(el => el === "JAVASCRIPT");

// 	return obj.tools.length > 0;

// });

// const projects_copy = PROJECTS.slice()

const filterProjects = (tool) => {


	projects_filtered = PROJECTS.filter(e => e.tools.includes(tool));

	console.log(projects_filtered, 'new')

	let list = ''
	projects_filtered.forEach((project) => {
		list +=
			`
		<div class="col-lg-4 col-md-6 ">
			<div class="feature_item">
				<a href=${project.demo} target="_blank">
					<div class="projects_item">
						<img class="img-fluid" src=${project.image} alt="">
					</div>
				</a>
				<div class="portfolio-text">
					<a href=${project.demo} target="_blank">
						<h4>${project.title}</h4>
					</a>
					<h6 class="less">
					${project.tools.join(' | ')}
					</h6>
					<p>${project.description}</p>
					<a class="banner_btn_t mt-3" href=${project.code}
						target="_blank">Código</a>
					<a class="banner_btn_t mt-3" href=${project.demo}
						target="_blank">Demo</a>
				</div>
			</div>
	</div>
        
    `
	})
	container.innerHTML = list;
}

var btn_group = document.getElementById('btn-group')
var btns = btn_group.getElementsByClassName('btnLg')
// console.log(btns)
for (var i = 0; i < btns.length; i++) {
	btns[i].addEventListener('click', function () {
		var current = document.getElementsByClassName('active')
		current[0].className = current[0].className.replace(' active', '')
		this.className += ' active'
	})
}

filterProjects('JAVASCRIPT')
btnJs.addEventListener('click', (e) => {
	const id = event.target.id
	const id_str = String(id).toUpperCase()
	filterProjects(id_str)
})

btnReact.addEventListener('click', (e) => {
	const id = event.target.id
	const id_str = String(id).toUpperCase()
	filterProjects(id_str)
})

btnVue.addEventListener('click', (e) => {
	const id = event.target.id
	const id_str = String(id).toUpperCase()
	filterProjects(id_str)
})


