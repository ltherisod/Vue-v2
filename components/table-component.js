Vue.component("table-component",{
    props:{
        title:String,
        products:Array,
        styled:String,
    },
    template:/*html*/`
    <div class="p-2">
    <h4>{{title}}</h4>
    <table class="table table-bordered" :class="styled">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Name</th>
        <th scope="col">Ingredients</th>
        <th scope="col">Price</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">{{products[0].id}} </th>
        <td>{{products[0].name}}</td>
        <td>{{products[0].ingredients}}</td>
        <td>$ {{products[0].price}}</td>
      </tr>
      <tr>
        <th scope="row">{{products[1].id}} </th>
        <td>{{products[1].name}}</td>
        <td>{{products[1].ingredients}}</td>
        <td>$ {{products[1].price}}</td>
      </tr>
      <tr>
        <th scope="row">{{products[2].id}} </th>
        <td>{{products[2].name}}</td>
        <td>{{products[2].ingredients}}</td>
        <td>$ {{products[2].price}}</td>
      </tr>
      <tr>
        
        <th scope="row">{{products[3].id}} </th>
        <td>{{products[3].name}}</td>
        <td>{{products[3].ingredients}}</td>
        <td>$ {{products[3].price}}</td>
      </tr>
    </tbody>
  </table>
    </div>
    `
})