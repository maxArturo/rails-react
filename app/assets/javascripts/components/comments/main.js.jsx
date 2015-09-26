// var data = [
//   {
//     "author": "Eino Jacobi",
//     "text": "mustache dreamcatcher McSweeney's +1 Pitchfork Wayfarers iPhone tattooed cardigan gentrify VHS sartorial gluten-free American Apparel seitan bicycle rights Brooklyn mlkshk ethical Portland"
//   },
//   {
//     "author": "Eliseo Gaylord",
//     "text": "craft beer trust fund sartorial viral echo park lomo tattooed aesthetic fanny pack butcher chambray keffiyeh synth single-origin coffee Brooklyn mustache readymade art Four Loko thundercats"
//   },
//   {
//     "author": "Adrienne Waelchi",
//     "text": "next level 8-bit single-origin coffee banh mi thundercats tattooed dreamcatcher mustache American Apparel skateboard cardigan farm-to-table food truck Carles readymade keytar chambray beard tumblr blog"
//   },
//   {
//     "author": "Cesar Nienow",
//     "text": "artisan high life fanny pack Marfa farm-to-table gluten-free lo-fi VHS helvetica +1 Williamsburg Wayfarers sartorial irony tofu Austin mixtape viral quinoa tattooed"
//   },
//   {
//     "author": "Eliza Frami",
//     "text": "before they sold out mustache lomo beard Banksy quinoa skateboard locavore you probably haven't heard of them butcher aesthetic photo booth fanny pack etsy tofu viral craft beer organic Carles Austin"
//   },
//   {
//     "author": "Helena Mraz",
//     "text": "scenester ethical sartorial vegan Four Loko artisan Cosby Sweater Portland photo booth sustainable banh mi vice keffiyeh cred yr party gluten-free stumptown bicycle rights DIY"
//   },
//   {
//     "author": "Natasha Lind",
//     "text": "freegan high life keytar iPhone before they sold out yr stumptown trust fund DIY retro cardigan 8-bit cliche McSweeney's moon messenger bag scenester irony quinoa mlkshk"
//   },
//   {
//     "author": "Sally Greenholt",
//     "text": "organic Wayfarers fap vice freegan you probably haven't heard of them 8-bit keffiyeh vegan vinyl farm-to-table cardigan keytar stumptown quinoa beard photo booth leggings mustache tattooed"
//   },
//   {
//     "author": "Luna Yost",
//     "text": "artisan Pitchfork quinoa hoodie chambray jean shorts before they sold out McSweeney's party freegan etsy beard scenester salvia readymade gentrify ethical organic cred fixie"
//   },
//   {
//     "author": "Gerry Lang",
//     "text": "tattooed American Apparel viral wolf farm-to-table brunch sustainable Carles lomo squid Brooklyn vinyl next level keffiyeh Williamsburg sartorial Shoreditch twee jean shorts irony"
//   }
// ];

// var getData = function(){
//   var data = [];
//   $.ajax({
//       url: 'http://localhost:3000/comments/all.json',
//       dataType: 'json',
//       cache: false,
//       success: function(json){
//         data = json;
//       }.bind(this),
//       error: function(xhr, status, err){
//         console.error(status, err.toString());
//       }.bind(this)
//     });
//   return data;
// }

var CommentBox = React.createClass({
  getInitialState: function(){
    return {data: []};
  },
  render: function(){
    return(
      <div className="commentBox">
        <h1> Comments! </h1>
        <CommentList data={this.props.data} />
        <CommentForm />
      </div>
    );
  }
});

var ready = function(){
  React.render(
    <CommentBox data={data}/>,
    document.getElementById('content')
  );
};

$(document).ready(ready);