import React, { useState, useEffect } from "react"

const EditContactFromForm = ({
	editing,
	setEditing,
	currentContact,
	updateContact
}) => {
	const [contact, setContact] = useState(currentContact)

	const handleInputChange = e => {
		const { name, value } = e.target
		setContact({ ...contact, [name]: value })
	}

	useEffect(() => {
		setContact(currentContact)
	}, [currentContact])

	return (
		<div>
			<form
				onSubmit={e => {
					e.preventDefault()
					updateContact(contact.id, contact)
				}}
			>
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
				<button className="accent-button full-button">
					Update contact
				</button>{" "}
				<button
					class=" full-button"
					onClick={() => setEditing(false)}
				>
					Cancel
				</button>
			</form>
		</div>
	)
}

export default EditContactFromForm
