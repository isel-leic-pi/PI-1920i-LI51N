
const tableBundlesTemplate = Handlebars.compile(`
                <table class="table">
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                    </tr>
                    {{#each bundles}}
                        <tr>
                            <td><a href="{{id}}">{{name}}</a> </td>
                            <td>{{description}}</td>
                        </tr>
                    {{/each}}    
                </table>
`)

const main = `
            <a href="#home"> Home </a>
            <a href="#bundles"> Bundles </a>
            <div id="mainContent"> </div>
            <p>Chelas 2019</p>
    `
const home = `
        <h1>B4-Bundles</h1>
        <img src="img/books-1012088_640.jpg">
`
const bundles = `
        <div id="bundlesContainer"> </div>

        <form id = "createBundle" action="/api/bundles" method="POST">
            <label>Name</label>
            <input type="text" id="inputName" >
            <label>Description</label>
            <input type="text" id="inputDescription" >
            <input type="submit" >
        </form>
`