import { User } from "../models/UserModel";

export const register = async (req, res, next) => {
    const { username, email, passwd } = req.body;

    try {
        if (!null && !undefined) {
            
            const newUser = new User({
                username, email, passwd
            });
            await newUser.save();
            res.send("Inscription Réussie Avec succes")
        }
    } catch (error) {
        res.status(400).send(`Erreur lors de l'insciption m: ${error}`);
    }
}