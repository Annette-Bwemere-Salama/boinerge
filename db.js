import mongoose from "mongoose";

export const dbConnexion = async () => {
    try {
        await
            mongoose.connect(process.env.MONGODB_URI, {
                useNewUrlParser: true,
                useUnifiedTopology: true
            });
        console.log("La connexion à la base de donnée à réussie")
    } catch (error) {
        console.log("Echec", error);
    }
}