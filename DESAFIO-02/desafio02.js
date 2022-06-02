const fs = require ('fs');

class Contenedor {
    constructor (fileName){
        this.fileName = fileName;
        fs.promises.writeFile(`./${fileName}`, '')   
        }    
    
    async save(objeto) {
        let data = await fs.promises.readFile(`./${this.fileName}`, 'utf-8')
        if(!data) {
            console.log('No existian datos en este Archivo, se crea uno.');
            objeto.id = 1
            let array = []
            array[0] = objeto
            await fs.promises.writeFile(`./${this.fileName}`, JSON.stringify(array))
            return console.log(`Se crea archivo y se agrega objeto con indice ${objeto.id}`)
        } else {
            console.log('Ya hay datos en este archivo');
            data = JSON.parse(data);
            objeto.id = data.length + 1
            data.push(objeto)
            await fs.promises.writeFile(`./${this.fileName}`, JSON.stringify(data))
            return console.log(`Se actualiza array con el nuevo objeto con id #${objeto.id}`)
        }
    }   
    async getByID(id){     
        let data2 = await fs.promises.readFile(`./${this.fileName}`, 'utf-8')
        if(!data2) {            
            return console.log('Se ejecutó getByID pero no existe archivo, favor de crear uno primero con el método save')
        } else {
            console.log('Se ejecutó getByID, se encontraron datos en el array, revisaré tu búsqueda ...');
            data2 = JSON.parse(data2);
            const encontrado = data2.find(alias => alias.id == id);  
            if (encontrado){      
                return console.log(`El objeto con id #${id} es: ${JSON.stringify(encontrado)}`)}
            else{
                return console.log(`No se encontró objeto con id #${id}`)
            }
        } 
    }   
    async getAll() {
        let data3 = await fs.promises.readFile(`./${this.fileName}`, 'utf-8')
        if(!data3) {            
            return console.log('Se ejecutó getAll pero no existe archivo, favor de crear uno primero con el método save')
        } else {
            console.log('Se ejecutó getAll, se encontraron datos en el array, enseguida te muestro los datos ...');
            data3 = JSON.parse(data3);
            const encontrado = data3.forEach(element => console.log(element));    
            return encontrado 
        }
    }
    async deleteById(id){
        let data4 = await fs.promises.readFile(`./${this.fileName}`, 'utf-8')
        data4 = JSON.parse(data4)

        let encontrado = data4.findIndex(alias => alias.id == id);
        if(encontrado === -1){
            console.log(`No se ha podido eliminar ya que no se han encontrado datos en el id# ${id}`)
        }else{
            data4.splice(encontrado, 1);
            data4 = JSON.stringify(data4);
            await fs.promises.writeFile(`./${this.fileName}`, data4);
            console.log(`Se borró el objeto que estaba en el id# ${id}`)
            console.log('Asi queda el nuevo array: ')
            console.log(JSON.parse(data4));
        }       
    }
    async deleteAll(){               
        await fs.promises.writeFile(`./${this.fileName}`, [])
        console.log("Datos en el archivo han sido limpiados con éxito");    
    } 
}
async function Main(){

const productos = new Contenedor('productos.txt');   


await productos.save({title:"Tabla de Surf", price: 3500, thumbnail:"https://mlstaticquic-a.akamaihd.net/tabla-de-surf-65-D_NQ_NP_718715-MLU30067594313_042019-F.jpg"})
await productos.save({title:"Kayak", price: 6500, thumbnail:"https://http2.mlstatic.com/kayak-transparente-importado-winnerkayak-D_NQ_NP_695701-MLC20371941735_082015-O.jpg"})  
await productos.getByID(3) //Esto indica que se imprime en pantalla (si existe) producto con el id 3
await productos.getAll()
await productos.deleteById(7)  //Esto indica que se eliminaria (si existe) producto con el id 7
await productos.deleteAll() //borra el archivo de nuevo
}

Main();