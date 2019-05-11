import React, { useState, useEffect } from "react"
import "./index"
import ContactTable from "./tables/ContactTable"
import AddContactForm from "./forms/AddContactForm"
import EditContactForm from "./forms/EditContactForm"

const App = () => {
	const contactData = [{ id: 1, name: "Peter", surname: "Spiderman" }]
	const [contacts, setContacts] = useState(contactData)

	const initialFormState = { id: null, name: "", surname: "" }
	const [currentContact, setCurrentContact] = useState(
		initialFormState
	)
	const [editing, setEditing] = useState(false)

	const addContact = contact => {
		contacts.length >= 1
			? (contact.id = contacts.length + 1)
			: (contact.id = 1)
		setContacts([...contacts, contact])
	}

	const deleteContact = id => {
		setEditing(false)
		const newContacts = contacts.filter(contact => {
			return contact.id !== id
		})

		setContacts(newContacts)
	}

	const editRow = contact => {
		setEditing(true)
		setCurrentContact({
			id: contact.id,
			name: contact.name,
			surname: contact.surname
		})
	}

	const updateContact = (id, updateContact) => {
		setEditing(false)
		setContacts(
			contacts.map(contact =>
				contact.id === id ? updateContact : contact
			)
		)
	}

	return (
		<div className="container">
			<h2 className="text-center">Contact List with Hooks</h2>
			<hr />
			<div className="flex-row">
				<div className="flex-small">
					{editing ? (
						<>
							<h3>Edit contact</h3>
							<EditContactForm
								editing={editing}
								setEditing={setEditing}
								currentContact={currentContact}
								updateContact={updateContact}
							/>
						</>
					) : (
						<>
							<h3>Add contact</h3>
							<AddContactForm
								contacts={contacts}
								addContact={addContact}
							/>
						</>
					)}
				</div>
				<div className="flex-small">
					<h3> View contact</h3>
					<ContactTable
						contacts={contacts}
						deleteContact={deleteContact}
						editRow={editRow}
					/>
				</div>
			</div>
		</div>
	)
}

export default App
