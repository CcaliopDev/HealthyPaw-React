import React from 'react'
import '../styles/ItemListContainer.css'
import { useState, useEffect } from 'react'
import ItemList from './ItemList'
const ItemListContainer = ({ greeting }) => {
  const [productos, setProductos] = useState([])
  const datos = [
    {
      id: 3,
      tipo: 'gato',
      nombre: 'BALANCED ADULT EXCLUSIVE RECIPE CHICKEN AND RICE 9 KG',
      descripcion:
        'Fórmula de gran palatabilidad con 37% de proteína de alta calidad que refuerza la vitalidad del gato adulto.',
      precio: '1875',
      img:
        './img/gato_balanced-adult-exclusive-recipe-chicken-and-rice-9-kg.png',
    },
    {
      id: 4,
      tipo: 'gato',
      nombre: 'Equilibrio Gatos Adultos 1.5KG',
      descripcion: 'Alimento completo para gatos adultos',
      precio: '550',
      img: './img/gato_equilibrio-gatos-adultos-15kg.jpeg',
    },
    {
      id: 5,
      tipo: 'gato',
      nombre: 'MAX Cat Buffet 1kg',
      descripcion:
        ' Con MAX CAT BUFFET POLLO & VEGETALES, tu gato estará bien nutrido, feliz y lleno de energía.',
      precio: '350',
      img: './img/gato_max-cat-buffet-1kg.jpeg',
    },
    {
      id: 0,
      tipo: 'perro',
      nombre: 'Dog Chow cachorro 3kg',
      descripcion: 'Dog Chow cachorro Raza Pequeña 3kg',
      precio: '490',
      img: './img/perro_dog-chow-cachorro-raza-pequena-3kg_600.jpeg',
    },
    {
      id: 1,
      tipo: 'perro',
      nombre: 'Dogui Carne Con Cereales & Aarroz 3KG.',
      descripcion:
        'Alimento para perros adultos, formulado con carne , cereales y arroz.',
      precio: '400',
      img: './img/perro_dogui-carne-con-cereales-arroz-3kg.jpeg',
    },
    {
      id: 2,
      tipo: 'perro',
      nombre: 'Nutrique Medium Young Adult Dog 3 KG',
      descripcion: 'Alimento preium para perros de raza mediana',
      precio: '1315',
      img: './img/perro_nutrique-medium-young-adult-dog-3-kg_600.png',
    },
  ]
  const myPromise = new Promise((resolve, reject) => {
    resolve(datos)
  })
  useEffect(() => {
    myPromise.then((response) => setProductos(response))
  }, [])

  function onAdd(count, stock) {
    if (stock > 0) {
      console.log(`Has agregado ${count} productos`)
    }
  }

  return (
    <>
      <div className="contenedor">{greeting}</div>
      <ItemList items={productos} />
    </>
  )
}

export default ItemListContainer
