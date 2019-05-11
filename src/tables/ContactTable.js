import React from "react"

const ContactTable = ({ contacts, deleteContact, editRow }) => {
	let renderContacts = () => {
		return contacts.map(contact => {
			return (
				<tr key={contact.id}>
					<td>{contact.name}</td>
					<td>{contact.surname}</td>
					<td>
						<button
							className="button muted-button"
							onClick={() => editRow(contact)}
						>
							edit
						</button>{" "}
						<button
							className="button muted-button"
							onClick={() => deleteContact(contact.id)}
						>
							delete
						</button>
					</td>
				</tr>
			)
		})
	}

	return (
		<table className="striped-table">
			<thead>
				<tr>
					<th>Name</th>
					<th>Surname</th>
					<th>Actions</th>
				</tr>
			</thead>
			<tbody>
				{contacts.length > 0 ? (
					renderContacts()
				) : (
					<tr>
						<td className="text-center" colSpan={3}>
							No contacts
						</td>
					</tr>
				)}
			</tbody>
		</table>
	)
}

export default ContactTable
