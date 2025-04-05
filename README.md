# My Vue+Node+Mysql starter, featuring 1 Sequelize mysql Models GENERATOR and only *1* GENERIC MYSQL Crud Rest file, allowing 5* fasters and more reliables devs . 

![ScreenShot](screenshot.png)

## Live testing :
https://vue-node-mysql-generated.herokuapp.com/

## Description .
This Full Stack starter aims is to demo how to generate models from an existing Mysql db, and to use generics generated REST routes, allowing 5* fasters and more reliables devs .

It uses the sequelize Auto module ,  and my Mysql generic REST back end file : <b>generic_crud_mysql.js</b>, took from the sequelize-router base code and re-factored.

No need to write back end code in a relational env any more, using theses technologies. The second good thing is that you might rebuild a more modern front end app, using an existing ol' mysql db, really fast .

 ## How to ?
  - 1. Find an old Mysql DB, with some gud ol' data ...
  - 2. Generate all Mysql Db models in the models directory in 2 seconds, using the <a href="https://github.com/sequelize/sequelize-auto/">Sequelize Auto module CLI</a>.
  
  - Trigger NPM START and Pops, that's all, you have all ur sequelize REST CRUD routes ready to get used, even with WHERE clauses params, jointures (U have to specify it in init-models.js before) , and more :<b> No need to write back end code no more, in a relational env , ah ah ah </b>! And you still can add a middleware with ease ( Demo comin soon), Life is cool, now  ! Ah ah ah ! <br><br>
 -> The key function is my server.js <b>generate_routes(models) </b> function , it generates REST routes from sequelize models in a LOOP, and it works well ( Tested many times on real apps)! .
  ## Latest depot news :
  - Qs params serializer is needed when doing axios GET queries !
  - GenericAxiosServices.js is not used no more, it is useless. Axios queries are now queriying generic_crud_mysql.js directly.
  - The depo is now demoing sequelize jointures . Look at the heroku app for more . next step is probably to get rid of GenericAxiosServices.js, it is not even needed.
  - Switched to SQLITE database + Using my own CrudGenericTable.vue to generate HTML tables from SQL tables.
  - I will soon publish Joints exemples using Sequelize, Code is already ready also I will maybe even remove the axios generic crud, it is probably finally useless in this case. When Sequelize automatically adds foreign keys, I experiment few problems when the table already exists with data. generic_crud_mysql.js will be changed just a tiny few, to acccept jointures (readMany web service).
 - I won't use sequelize-router, and replace it by my own file generic_crud_mysql.js , took from the sequelize-router base code and re-adapted
 - Remote Mysql is bad on the live demo, i have to choose another host cause it sleeps if I dont click a link, please wait
 
## Example :

   
```
   // ** COOL VUE.JS GET QUERY USING WHERE CLAUSE, 2 COLUMNS AND A JOINTURE ! ** Easyyy !
   // Please add  employees.belongsTo(offices, { foreignKey: 'officeCode' }); in init-models.js
        
axios.get("/api/employees", {
    "params": {
        attributes: ['lastName', 'firstName'],
        where: {
            id: 4
        },
        include: [{
            model: "offices"
        }]
    },
    paramsSerializer: params => {
        return qs.stringify(params)
    }
}).then((response) => {
    this.employees = response.data;
}).catch((error) => {
    console.log(error.response.data);
});


 ```
 
 ## Tested modules :       
<b>Sequelize:</b>
- <b>1. Generate Models from existing Mysql db : </b>
- Sequelize Automate : https://www.npmjs.com/package/sequelize-automate
- Sequelize Auto : https://github.com/sequelize/sequelize-auto/
- <b>2. Generate Routes from existing Models : </b>
- sequelize-router : https://github.com/ceckenrode/sequelize-router
- Restizr : https://www.npmjs.com/package/restizr ( Ko : app.configure() not supported any more )
- Sequelize-restful : https://github.com/sequelize/sequelize-restful


<b>Mysql:</b>
- <b>Generate Routes from static models :</b>
- dbCrud : https://github.com/johnroers/dbCRUD

- <b>Generate Models and Routes from an existing Mysql, as a Standalone server( Eventually no Middleware support) </b>: 
- xMysql : https://github.com/o1lab/xmysql ( Demo can't work on Heroku du to heroku ports limitation, it has to be installed on a second node.js server)

<b>Qs:</b>
- Axios Vue.js front end Get array serializer : https://www.npmjs.com/package/qs

<b> 2 Back end generics REST CRUDS files , based on the sequelize-router code and another Githuber code: </b>
Theses files are really usefull when you need to build a great middleware back end , you have to override them . The middleware is for example needed to check wherever the  user is auth or not.
 - generic_crud_mongodb.js
 - generic_crud_mysql.js


The app will use the following templates : 

<b>Vue.js Template:</b> 
- https://github.com/DesignRevision/shards-dashboard-vue

<b> Mysql Database template : </b>
- https://www.mysqltutorial.org/mysql-sample-database.aspx/ (Small for online demo)
- https://github.com/datacharmer/test_db (Big 168mo for localhost testings)

The challenge is to add some great Middlewares, and JWT auth to them !
Let's see if devs are really 10* fasters using theses tools ! 
Truth or legend ?
![ScreenShot](screenshot3.png)
![ScreenShot](screenshot2.png)



## Description (German) .


Dieser Starter führt die folgenden Sequelize REST-Generatoren und MySQL Rest Queries-Generatoren vor.
Fortsetzung:
- Restizr: https://www.npmjs.com/package/restizr
- Sequelize-restful: https://github.com/sequelize/sequelize-restful
- Sequelize Automate: https://www.npmjs.com/package/sequelize-automate
- Sequelize Auto : https://github.com/sequelize/sequelize-auto/

MySQL:
- dbCrud: https://github.com/johnroers/dbCRUD
- xMysql: https://github.com/o1lab/xmysql  ( Demo can't work on Heroku du to ports limitation)

<b> My own generic vue.js axios REST </b>
- GenericAxiosServices.js


Vue Template : 
- https://github.com/DesignRevision/shards-dashboard-vue

Mysql Database templates : 
- https://www.mysqltutorial.org/mysql-sample-database.aspx/ (Small for online demo)
- https://github.com/datacharmer/test_db (Big 168mo for localhost testings)

Die Herausforderung besteht darin, einige großartige Middlewares und JWT-Authentifizierung hinzuzufügen!
Mal sehen, ob Entwickler mit diesen Tools 10 * schneller sind!


## Description (Chinese) .
续集：
-Restizr：https：//www.npmjs.com/package/restizr
-Sequelize-restful：https://github.com/sequelize/sequelize-restful
-Sequelize自动化：https://www.npmjs.com/package/sequelize-automate
- Sequelize Auto : https://github.com/sequelize/sequelize-auto/

MySQL的：
-dbCrud：https://github.com/johnroers/dbCRUD
-xMysql：https://github.com/o1lab/xmysql  ( Demo can't work on Heroku du to ports limitation)


Template : 
- https://github.com/DesignRevision/shards-dashboard-vue

Mysql Database templates : 
- https://www.mysqltutorial.org/mysql-sample-database.aspx/ (Small for online demo)
- https://github.com/datacharmer/test_db (Big 168mo for localhost testings)

挑战在于添加一些出色的中间件，并向它们添加 JWT auth！
让我们看看使用这些工具，开发人员的速度快10倍！
