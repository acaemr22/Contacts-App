import { redirect } from "react-router-dom";
import { deleteContact } from "../contacts";

export async function action({params}) {
    await deleteContact(params.contactId);
    return redirect("/React-Router-Contacts-App/")
}
