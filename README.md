# Proyecto Blockchain

La aplicación se encuentra deplegada, y puede visualizarla en [blockchain-jhonier-jimenez](https://blockchain-jhonier-jimnezs-projects.vercel.app/)
## **1. Introducción**
Este proyecto contiene la construcción de una Blockchain a partir de unas transacciones determinadas.

## **2. Entendiendo el proyecto**

### **2.1 Descripción**

Es un proyecto en React, con un componente para representar el Bloque. Este componente se replica 3  veces en el App.tsx, representando 3 nodos que participarán en la comunicación peer to peer.

Las transacciones son una interfaz definida, y se inicializan en el data.ts

### **2.2 Lógica del proyecto**

El proyecto tiene 3 funciones clave:

- transformTransactions: Esta función toma un arreglo de transacciones y agrega cada una en un arreglo de arreglos, donde cada elemento de este nuevo arreglo tiene en su primera posición el número del bloque y en su segunda posición un string que representa todo el objeto de la transacción

- mine: Esta función recibe dos strings: el número del bloque, y la transacción. Con estas dos últimas y el nonce en el medio; se mina el bloque

- buildMerkleTree: Es una función recursiva, en cada iteración, se recibe un arreglo de strings, y un nonce base con los que se construye el árbol de Merkle utilizando la función mine en cada una de las hojas

### **3 Instrucciones para ejecutar el proyecto localmente**

- Descárgalo o clonalo usando git clone
- ejecuta npm install
- ejector npm start
- Ve a [localhost:3000](http://localhost:3000/) para ver el proyecto.
- En la página principal podrás ver todos los nodos, el bloque que crearon, y el root hash que resulta de construir el arbol de Merkle, así como los hashes que se fueron generando para llegar a este root hash.
- En la consola también podrás ver los hashes que se fueron creando en cada iteración con la que se construye el Merkle tree
