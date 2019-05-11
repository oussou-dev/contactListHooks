import React, { useState } from "react"

const AddContactForm = ({ contacts, addContact }) => {
	const initialFormState = { id: null, name: "", surname: "" }
	const [contact, setContact] = useState(initialFormState)

	const handleInputChange = e => {
		const { name, value } = e.target
		setContact({ ...contact, [name]: value })
	}

	const handleOnSubmit = e => {
		e.preventDefault()
		if (!contact.name || !contact.surname) return
		addContact(contact)
		setContact(initialFormState)
	}

	const validateData = () => {
		const test =
			contact.name.length <= 1 || contact.surname.length <= 1
				? true
				: false
		return test
	}

	return (
		<div>
			<form onSubmit={handleOnSubmit}>
				<label>Name</label>
				<input
					type="text"
					name="name"
					value={contact.name}
					onChange={handleInputChange}
				/>
				<label>Surname</label>
				<input
					type="text"
					name="surname"
					value={contact.surname}
					onChange={handleInputChange}
				/>
				<button className="full-button" disabled={validateData()}>
					Add new contact
				</button>
			</form>
		</div>
	)
}

export default AddContactForm
