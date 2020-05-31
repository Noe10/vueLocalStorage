const app = new Vue({
    el:'#app',
    data : {
        title : ' GYM Vue',
        tarea :[],
        nuevaTarea:''
    },
    methods:{
        modificarLocalStore : function(){
            localStorage.setItem('vue-gym',JSON.stringify(this.tarea))   
        },
        agregarTarea: function(){
            
              this.tarea.push({
                nombre : this.nuevaTarea,
                estado : false
             });
                this.nuevaTarea = ''; 
               this.modificarLocalStore(); 
        },
        editarTarea: function(index){

             this.tarea[index].estado = true;
             this.modificarLocalStore(); 
        },
        eliminarTarea: function(index){
            
            this.tarea.splice(index, 1);
            this.modificarLocalStore(); 
       }
       
    },
    created: function(){
        let bd = JSON.parse(localStorage.getItem('vue-gym'));
        console.log(bd);
        if (bd === null) {
            this.tarea = [];
        }else {
            this.tarea = bd;
        }    
    }

})