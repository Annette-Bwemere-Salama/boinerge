import { User } from "../models/UserModel";

export const login = async (req, res) => {
    const { email, passwd } = req.body;
    try {
        const user = await User.findOne({
            email

        });
        if (user && user.passwd === passwd) {
            res.send("Connexion Réussie Avec Succes")
        } else {
            res.status(400).send("mail d'Utilisateur ou mot de pass incorrect");
        }
    } catch (error) {
        res.status(400).send(`Error lors de la connexion    ${error} `)
    }
}