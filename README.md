# The UCB Cookbook

## Deployment

GitHub: https://github.com/IvanTorresMia/cookbook-app

Deployment: https://theucbcookbook.herokuapp.com/

## Tech Used

* HTML
* BootStrap
* AOS
* JavaScript
* JQuery
* MySQL
* Sequelize
* Express
* AJAX
* Heroku
* GitLab
* GitHub

## Usage

Have you ever wanted a digital cookbook that plays your own music playlist while you cook? Come and enjoy your own recipes and rhythms. We have created the app that will allow you to enjoy both! 

The user is immediately presented with a login page that authenticates who is logging with with a standard email and password combination. When the user first logs in, they will be immediately directed to add their first recipes. When they opt to create their first recipe, they will be asked for their ingredients and instructions to create the recipe. After the recipe is completed, they will be given the option to add more recipes or review the ones already created by clicking on the recipe names.

The recipes and ingredients are passed through respective models and will be applied to the user's login ID.

```
module.exports = function(sequelize, DataTypes) {
var Ingredients = sequelize.define("Ingredients", {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: [1, 50]
    }
  },
  
  body: {
        type: DataTypes.TEXT,
        allowNull: false,
        len: [1, 255]
      }
});
Ingredients.associate = function(models) {
   
    Ingredients.belongsTo(models.Recipe, {
      foreignKey: {
        allowNull: false
      }
    });
  };
return Ingredients;
}

```

One API is intended to help design this page. Spotify is intended to give users a readily recognizable interface layout and use their already existing playlists, without having to go through the trouble of recreating new ones.
[Spotify](https://developer.spotify.com/)


[AOS](https://michalsnik.github.io/aos/) was used to animate the frames in the recipe list after you submit a recipe of your own. The frames dropping into the center is powered by AOS.


<hr>

## Future Development

In future developments of this webpage, the site will be tied to the Spotify API to let you choose the mood before you start cooking. The site will also allow you to search recipes from other uses, if they decide to make them public.

<hr>

## Sources

* [AOS](https://michalsnik.github.io/aos/)
* [Bootstrap](https://www.bootstrapcdn.com/)

<hr>

## MIT Lisence

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


<hr>
<hr>

## Authors

Ivan Torres
https://github.com/IvanTorresMia/

Daniel Caudra

https://github.com/DCuadra85