module.exports ={
   development:{
     DB:'mongodb://localhost:27017/fe-todo'    //fe-todo - назвабази даних(якщо такої бази даних  не має, вона створиться)
   },
   test:{
     DB:'mongodb://localhost:27017/fe-todo-test'
   },
   production:{}
}