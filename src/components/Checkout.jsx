import React, { useState, useContext } from 'react'
import {
  addDoc,
  getFirestore,
  collection,
  updateDoc,
  doc,
} from 'firebase/firestore'
import { MyContext } from '../context/ContextData'
import moment from 'moment'
import Swal from 'sweetalert2'
import '../styles/Checkout.css'

const Checkout = () => {
  //Context data and states
  const { cart, total, clear } = useContext(MyContext)
  const [name, setName] = useState('')
  const [lastName, setLastName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [confirmEmail, setConfirmEmail] = useState('')
  const [orderDocId, setOrderDocId] = useState('')
  const [checked, setChecked] = useState(false)

  //Checkout function
  const checkout = () => {
    //REGEX to use in form restrictions
    const regexEmail = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    const regexPhone = /^[0-9]+$/

    //Form validation

    //Doesn't admit empty entries
    if (email === '' || phone === '' || name === '' || lastName === '') {
      Swal.fire({
        title: 'Error!',
        text: 'Complete todos los campos',
        icon: 'error',
        confirmButtonText: 'Continuar',
      })
      return
    }

    //Phone number validation
    if (phone !== '' && !regexPhone.test(phone)) {
      Swal.fire({
        title: 'Error!',
        text: 'Por favor ingresar un número de telefono valido',
        icon: 'error',
        confirmButtonText: 'Continuar',
      })
      return
    }

    //Wrong email adress validation
    if (email !== '' && !regexEmail.test(email)) {
      Swal.fire({
        title: 'Error!',
        text: 'Por favor ingresar un email valido',
        icon: 'error',
        confirmButtonText: 'Continuar',
      })
      return
    }

    //Same email adress validation
    if (email !== confirmEmail) {
      Swal.fire({
        title: 'Error!',
        text: 'Los email no son iguales',
        icon: 'error',
        confirmButtonText: 'Continuar',
      })
      return
    }

    //If the cart is empty, they can't checkout
    if (cart.length === 0) {
      Swal.fire({
        title: 'Error!',
        text: 'Necesita por lo menos un articulo en el carrito para continuar',
        icon: 'error',
        confirmButtonText: 'Continuar',
      })
      return
    }

    //Success alert
    Swal.fire({
      title: 'Exito!',
      text: 'Su compra hasido realizada exitosamente',
      icon: 'success',
      confirmButtonText: 'Continuar',
    })

    //Document to upload to firestore
    const order = {
      buyer: {
        name,
        phone,
        email,
      },
      items: cart,
      date: moment().format('DD-MM-YYYY hh:mm:ss'),
      status: 'generated',
      total: total,
    }

    //Firestore commands to get the database and upload a firestore document(order) and update the cart documents stock
    const db = getFirestore()

    const refCollection = collection(db, 'orders')

    addDoc(refCollection, order).then((res) => {
      setOrderDocId(res.id)
      setChecked(true)
      cart.forEach((product) =>
        updateDoc(doc(db, 'productos', product.id), {
          stock: product.stock - product.quantity,
        }),
      )
      clear()
    })
  }

  return (
    <div className="styleCheckout">
      {checked ? (
        <h1>Gracias por su compra!</h1>
      ) : (
        <div className="styleCheckout">
          <input
            className="styleInput"
            type="text"
            name="firstName"
            placeholder="Nombre"
            id=""
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
          <input
            className="styleInput"
            type="text"
            name="lastName"
            placeholder="Apellido"
            id=""
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
          />
          <input
            className="styleInput"
            type="tel"
            name="phone"
            placeholder="Telefono"
            id=""
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
          />
          <input
            className="styleInput"
            type="email"
            name="email"
            placeholder="Email"
            id=""
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <input
            className="styleInput"
            type="email"
            name="confirmEmail"
            placeholder="Confirmar Email"
            id=""
            value={confirmEmail}
            onChange={(event) => setConfirmEmail(event.target.value)}
          />
          <button className="btn btn-primary" onClick={checkout}>
            Comprar!
          </button>
        </div>
      )}
      <h2>
        {orderDocId != '' ? 'Order Id:' : ''} {orderDocId}
      </h2>
    </div>
  )
}

export default Checkout
