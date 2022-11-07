import { Router } from "express" // Router er en del af express bibliotek
import { sendMail } from "../util/emailSender.js" // importere sendMail så vi kan bruge den her i contactRouter

const router = Router()

router.post("/api/contact", (req, res) => {
    console.log(req.body)
    let name = req.body.name
    let email = req.body.email
    let textBody = req.body.message
    sendMail(name, email, textBody)
    .then(result => res.send(`<a href="${result}" target="_blank">Generated email</a><br><a href="/">Home</a>`))
    .catch(console.error) 
})

export default router
    