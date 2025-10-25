import React, {useState, useEffect} from "react";
import { StyleSheet, Text, View, FlatList, Button } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Home() {
  const [productos, setproductos] = useState([]);

  const nombresRandoms = ["Manzana", "Banana", "Naranja", "Pera", "Uva", "Mango", "Piña", "Cereza", "Durazno", "Kiwi"];
  useEffect(() => {
    const loadproductos = async () => {
      const productosasync = await AsyncStorage.getItem("productos");
      if (productosasync) {
        setproductos(JSON.parse(productosasync));
      }
    };
    loadproductos();
  }, []);

  const addProduct = () => {
    const nuevoProducto = {
      id: Date.now().toString(),
      nombre: nombresRandoms[Math.floor(Math.random() * nombresRandoms.length)],
      precio: (Math.random() * 100).toFixed(2),
    };
    const updatedproductos = [...productos, nuevoProducto];
    setproductos(updatedproductos);
    AsyncStorage.setItem("productos", JSON.stringify(updatedproductos));
  };

  const removerProducto = (id) => {
    const updatedproductos = productos.filter((product) => product.id !== id);
    setproductos(updatedproductos);
    AsyncStorage.setItem("productos", JSON.stringify(updatedproductos));
  };

  return (
    <View style={styles.container}>
        <Text style={styles.title}>Lista de Productos</Text>

    <FlatList style={styles.list}
      data={productos}
      renderItem={({ item }) => (
        <View>
          <Text>{item.nombre}</Text>
          <Text>${item.precio}</Text>
          <Button title="Eliminar" onPress={() => removerProducto(item.id)} />
        </View>
      )}
      keyExtractor={(item) => item.id}
    />
    <Button title="Agregar Producto" onPress={addProduct} style={styles.button} />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
paddingTop: 50,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  button: {
    marginTop: 20,
    padding: 10,
  },
  list: {
    width: "70%",
    height: "80%",
  },
});
