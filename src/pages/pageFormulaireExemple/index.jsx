import { useState } from "react"
import './style.scss'

export default function Contact() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(firstName)
    console.log(lastName)

  }

  // 3 façons de declarer une fonction anonyme

  // function(event) {
  //   setLastName(event.target.value)
  // }

  // (event) => {
  //   setLastName(event.target.value)
  // }

  // (event) => setLastName(event.target.value)

  return (
    <main className="optimal-width final">
      <h1>Contactez-nous</h1>
      <div className="main-grid" id="paiement">
        <form style={{ "display": "flex", "flexDirection": "column" }} onSubmit={handleSubmit}>
          <label htmlFor="lastName">Nom</label>
          <input required type="text" name="lastName" id="lastName" onChange={(event) => setLastName(event.target.value)} />
          <br />
          <label htmlFor="firstName">Prénom</label>
          <input required type="text" name="firstName" id="firstName" onChange={(event) => setFirstName(event.target.value)} />
          <br />
          <label htmlFor="phone">Téléphone</label>
          <input required type="tel" name="phone" id="phone" onChange={(event) => setPhone(event.target.value)} />
          <br />
          <label htmlFor="email">Email</label>
          <input required type="email" name="email" id="email" onChange={(event) => setEmail(event.target.value)} />
          <br />
          <label htmlFor="message">Message</label>
          <textarea name="message" id="message" cols="30" rows="10" onChange={(event) => setMessage(event.target.value)}></textarea>

          <button>Envoyer</button>
        </form>
      </div>
    </main>
  )
}