import $ from 'jquery';

$(document).ready(function()
{
  $("#app").html = "<h1>Hi Webpack & jquery2!</h1>";
})

if (module.hot) 
{
		module.hot.accept();
}